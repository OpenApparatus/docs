---
title: Architecture
sidebar_position: 13
---

# Architecture

Studio is an [Avalonia 11](https://avaloniaui.net/) MVVM app on .NET 8. The actual floor-plan generation, mesh assembly, and topology data structures live in [`OpenApparatus.Core`](../core/overview); Studio is the editor that authors them.

## Project layout

```
src/OpenApparatus.Studio/
├── App.axaml(.cs)              ─ Avalonia application entry point
├── Program.cs                   ─ Main + AppBuilder
├── ViewLocator.cs               ─ View ↔ ViewModel resolver
│
├── ViewModels/
│   ├── MainWindowViewModel.cs   ─ ~3000 LOC: state + commands
│   ├── PlacementConstraints.cs  ─ POCO for placement rules
│   ├── RoomObject.cs            ─ Object types & instances
│   ├── Snapshot.cs              ─ Undo/redo snapshots
│   ├── RecentFileEntry.cs
│   └── ViewModelBase.cs         ─ INPC helpers
│
├── Views/
│   ├── MainWindow.axaml(.cs)    ─ Window layout, key bindings
│   ├── GridEditorView.cs        ─ 2D top-down canvas (custom control)
│   ├── Iso3DRenderer.cs         ─ 3D isometric software rasterizer
│   ├── RoomEditorPanel.axaml(.cs)
│   ├── ObjectTypesPanel.axaml(.cs)
│   ├── ObjectTypePickerDialog.axaml(.cs)
│   ├── ConstraintsPanel.axaml(.cs)
│   ├── WallColorDialog.axaml(.cs)
│   ├── Png2DExportDialog.axaml(.cs)
│   ├── ConfirmDialog.axaml(.cs)
│   ├── AboutDialog.axaml(.cs)
│   ├── CommandPalette.cs
│   ├── WelcomePanel.cs
│   ├── ToastsLayer.cs
│   ├── LegendBar.cs
│   └── Icon.cs
│
├── Services/
│   ├── ProjectIO.cs             ─ .oapp save/load
│   ├── GltfExporter.cs          ─ glTF / GLB
│   ├── ObjExporter.cs           ─ Wavefront OBJ
│   ├── JsonExporter.cs          ─ Downstream-consumer JSON (v3)
│   ├── AppSettings.cs           ─ Cross-session preferences
│   └── Toasts.cs                ─ Notification service
│
├── Behaviors/
│   ├── DragScrub.cs             ─ Drag-to-scrub label behaviour
│   ├── NumericExpression.cs     ─ Arithmetic in numeric inputs
│   └── ExpressionEvaluator.cs   ─ Tiny expression parser
│
├── Converters/                  ─ Avalonia value converters
│   ├── AnyTrueConverter.cs
│   ├── BoolToTextConverter.cs
│   ├── EnumToBoolConverter.cs
│   └── Vector3ToBrushConverter.cs
│
└── Themes/
    ├── Tokens.axaml             ─ DynamicResource tokens (light + dark)
    ├── Tokens.cs                ─ Token accessor
    ├── Controls.axaml           ─ Button / RadioButton / NumericUpDown styles
    └── Icons.axaml              ─ Geometry icons
```

## Layering

```
Views ────────▶ ViewModels ────────▶ Services ────────▶ OpenApparatus.Core
                     │
                     └──▶ Behaviors  ─ attached input behaviours
```

- **Views** never call services directly — they go through the view-model.
- **ViewModels** never do file I/O — they go through services.
- **Services** wrap Core and the file system; they don't know about Avalonia.
- **Behaviors** are stateless attached helpers (drag-scrub, numeric expressions). They live alongside views but bind to view-model properties.

## State model

`MainWindowViewModel` is the single source of truth for every authored field:

- Grid dimensions and tile ownership (`RoomGrid: int[,]`).
- Per-room palettes and names.
- Per-wall colour overrides.
- Object types and instances.
- Placement constraints.
- Camera state (2D zoom/pan, 3D pivot/yaw/pitch/distance).

Edits are imperative — there's no command queue; `INotifyPropertyChanged` and `ObservableCollection<T>` drive the UI directly. Undoability is achieved by capturing a `Snapshot` _before_ each authored mutation and pushing it onto an undo stack.

## Rendering

Two custom Avalonia controls do the heavy lifting:

- **`GridEditorView`** (`Views/GridEditorView.cs`) — 2D top-down editor. Owns the input handling for tile painting, room selection, wall selection, and object placement. Draws via `DrawingContext`.
- **`Iso3DRenderer`** (`Views/Iso3DRenderer.cs`) — software 3D rasterizer. Builds triangle lists from the topology + mesh data, projects them with a perspective camera, applies Lambert shading and back-face culling, and paints into a 2× supersampled `RenderTargetBitmap` that's scaled back for free anti-aliasing.

Both are `Control` subclasses (not `UserControl`) — pure draw + input, no XAML.

## Persistence

Two file shapes:

| File | Purpose | Source |
|---|---|---|
| **`.oapp`** | Editor-internal full-state round-trip. | `Services/ProjectIO.cs` |
| **JSON spec** | Downstream-consumer schema (v3). | `Services/JsonExporter.cs` |

Plus three pure exports (`GltfExporter`, `ObjExporter`, the PNG dialog) that don't round-trip.

Cross-session preferences (window geometry, theme, recent files, last export folder) are persisted separately by `Services/AppSettings.cs` to `%APPDATA%/OpenApparatus/Studio/settings.json` (or the equivalent on macOS / Linux).

## Why Avalonia

- **Cross-platform** — Windows, macOS, Linux from a single project.
- **Native .NET** — no Electron, no JavaScript runtime.
- **XAML-based** — familiar to anyone who's worked with WPF or UWP.
- **Custom controls + `DrawingContext`** — the 2D editor and 3D renderer don't need a heavy graph framework.

## Where to extend

- **New project parameter** → add a property to `MainWindowViewModel`, a control in `MainWindow.axaml`, a field on `ProjectFile` (in `ProjectIO.cs`), and (if relevant) a field on the JSON exporter's `ParametersSection`.
- **New export format** → add `Services/<Format>Exporter.cs`, register a command on the view-model, and add a palette entry.
- **New canvas overlay** → extend `GridEditorView.cs`'s draw pass; add a toggle to the toolbar.
- **New keyboard shortcut** → either a `<KeyBinding>` in `MainWindow.axaml` (window-scope) or a case in `OnGlobalKey` in `MainWindow.axaml.cs` (canvas-scope).

## Testing

The view-model is plain .NET and unit-testable without an Avalonia test host. View-level tests are not currently emphasised — the canvas controls are visual, and exports are regression-tested at the Core mesh-data level.
