---
title: Architecture
sidebar_position: 6
---

# Architecture

Studio is a thin GUI wrapper over `OpenApparatus.Core`. The actual generation, mesh assembly, and topology data structures all live in Core; Studio just provides the editor and I/O.

| Layer | Files | Responsibility |
|---|---|---|
| **ViewModel** | `ViewModels/MainWindowViewModel.cs` | Parameters, commands, current plan. Reactive — parameter changes trigger regeneration. |
| **View** | `Views/MainWindow.axaml`, `Views/FloorPlanView.cs` | Window layout (XAML) and the custom 2D top-down renderer. |
| **Services** | `Services/FloorPlanSpec.cs`, `Services/FloorPlanJsonSerializer.cs`, `Services/ObjExporter.cs` | I/O — spec model, JSON round-trip, OBJ writer. |

## Dependency direction

```
View ───▶ ViewModel ───▶ Services ───▶ OpenApparatus.Core
```

The View doesn't talk to Core directly — it goes through the ViewModel. The ViewModel doesn't do file I/O — it goes through Services. This keeps Avalonia-specific code out of the parts that should be testable in a console.

## Why Avalonia

- **Cross-platform** out of the box — Windows, macOS, Linux from a single project.
- **Native .NET** — no Electron, no JavaScript runtime, no separate build chain.
- **XAML-based** — familiar to anyone who's worked with WPF or UWP.

## Where to extend

- **New parameter** → add a property to the ViewModel, bind a control in `MainWindow.axaml`, extend `FloorPlanSpec` so it round-trips through JSON.
- **New export format** → add a new `Services/<Format>Exporter.cs` and a command on the ViewModel. Reuse the existing `MeshData` from Core.
- **New render style** → modify `FloorPlanView.cs`. The 2D preview is a custom Avalonia control that draws directly to a `DrawingContext`.

## Testing

The ViewModel is plain .NET and testable without an Avalonia test host. View-level tests are not currently emphasised — the preview is a thin schematic, and OBJ output is regression-tested at the Core mesh-data level.
