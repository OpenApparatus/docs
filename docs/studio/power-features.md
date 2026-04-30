---
title: Power features
sidebar_position: 11
---

# Power features

Small details that change how the app feels once you know them.

## Drag-scrub labels

Most numeric labels in the side panels are **drag-scrubbable** — hover the label, the cursor turns into a horizontal-resize arrow, and dragging left/right tweaks the bound value live.

| Modifier | Effect |
|---|---|
| (none) | 1× — the field's default step. |
| `Shift` + drag | ×0.1 — fine adjustment. |
| `Ctrl` + drag | ×10 — coarse adjustment. |
| Double-click | Reset to the field's increment value (treated as the default). |

Implementation: `Behaviors/DragScrub.cs` is an attached behaviour applied to a `TextBlock`, with a `Target` reference to the bound `NumericUpDown`.

## Numeric expressions

Every numeric input that opts in accepts arithmetic expressions. Type:

```
1.2 + 0.05
(2 + 3) / 4
2.5 * 0.4
```

Press `Enter` (or tab away) and the expression evaluates and applies. Plain numbers pass through unchanged.

Supported operators: `+`, `-`, `*`, `/`, parentheses, floating-point literals. Unsupported syntax is silently ignored — the previous value is restored.

Implementation: `Behaviors/NumericExpression.cs` + `Behaviors/ExpressionEvaluator.cs`.

## Undo / Redo

Studio uses **snapshot-based** undo: each undoable action captures the full authored state into a stack. Restore is a wholesale swap, not a per-field replay.

- `Ctrl+Z` — undo.
- `Ctrl+Y` or `Ctrl+Shift+Z` — redo.
- The redo stack clears on any new action.

### What's captured

- Grid (`roomGrid`).
- Passages and per-wall colours.
- Per-room palettes and names.
- Object types and instances.
- Placement constraints.
- Numeric project parameters (wall / door / window dimensions, etc.).

### What's _not_ captured

- Selection state (room, opening, tile, object).
- Camera (zoom, pan, iso pivot/yaw/pitch).
- Path overlay state and animation playhead.
- Wall-border opacity and other overlay toggles.

This keeps undo from jumping the camera around or losing a useful in-progress selection.

Implementation: `ViewModels/Snapshot.cs` (capture/restore), `MainWindowViewModel.cs` (`PushUndo`, `UndoCommand`, `RedoCommand`).

## Toast notifications

Transient cards appear in the bottom-right of the window after notable actions:

- **Info / success** — auto-dismiss after ~5 s (8 s if undo is offered).
- **Errors** — auto-dismiss after ~12 s.
- **Sticky** — manual dismiss only (used rarely).

Toasts can carry an inline **Undo** button for destructive actions ("Room deleted" → click to revert without leaving the canvas).

Implementation: `Services/Toasts.cs`, `Views/ToastsLayer.cs`. The singleton is `Toasts.Default`.

## Theme toggle

Light and dark themes are first-class. The picker is in the command palette under **Theme**, with three commands:

- **Toggle theme** — flip light ↔ dark.
- **Light theme** — force light.
- **Dark theme** — force dark.

The choice persists across sessions in [settings](./settings).

## Path overlay (2D)

The toolbar's **PATHS** card adds a polyline overlay to the 2D canvas. Click to add waypoints, choose a colour, then **play** to animate a marker along the polyline at an adjustable speed. Useful for staging or sanity-checking a behavioural protocol before exporting.

The path is overlay-only — it isn't saved on the project (treated as transient UI state) and isn't included in undo snapshots.
