---
title: Keyboard shortcuts
sidebar_position: 9
---

# Keyboard shortcuts

Press `F1` in the app to bring up the in-app shortcut overlay. The reference below mirrors what's wired in the source.

## Global

| Shortcut | Action |
|---|---|
| `F1` | Toggle keyboard-shortcut overlay. |
| `Ctrl+K` | Open the [command palette](./command-palette). |
| `Ctrl+N` | New project. |
| `Ctrl+O` | Open project (`.oapp`). |
| `Ctrl+S` | Save project. |
| `Ctrl+Shift+S` | Save project as. |
| `Ctrl+Z` | Undo. |
| `Ctrl+Y`, `Ctrl+Shift+Z` | Redo. |
| `Ctrl+0` | Zoom to 100% (2D). |
| `Ctrl+1` | Reset / fit view. |
| `Esc` | Dismiss shortcut overlay (when visible). |

## 2D canvas — Layout mode

| Shortcut | Action |
|---|---|
| `R` | Create a room from the brush selection. |
| `D` | Toggle a door on the selected wall. |
| `W` | Toggle a window on the selected wall. |
| `O` | Mark the selected wall as **open**. |
| `C` | Mark the selected wall as **closed**. |
| `F` | Frame the current selection. |
| `Esc` | Clear selection. |
| `Delete` / `Backspace` | Delete the selected room. |

## 2D canvas — Objects mode

| Shortcut | Action |
|---|---|
| `1`–`9`, NumPad `1`–`9` | Place an instance of object type _N_ at the cursor. |
| `Ctrl+A` | Select all objects. |
| `Delete` / `Backspace` | Delete the selected object(s). |

## Mouse

| Input | 2D canvas | 3D canvas |
|---|---|---|
| Left drag | Brush selection / move object | Orbit camera |
| Click on tile | Select the room | — |
| Click on wall | Select wall | — |
| Double-click | Frame the room / object | — |
| Middle / right drag | Pan | Pan |
| Scroll wheel | Zoom | Zoom |
| Scroll + `Ctrl` | Fine zoom | Fine zoom |
| Scroll + `Shift` | Coarse zoom | Coarse zoom |

## Source

- Window-level bindings: `Views/MainWindow.axaml` (`<Window.KeyBindings>`).
- Canvas-level handlers: `Views/MainWindow.axaml.cs` (`OnGlobalKey`).
- Numeric expression `Enter`-evaluation: `Behaviors/NumericExpression.cs`.
