---
title: Command palette
sidebar_position: 10
---

# Command palette

Press `Ctrl+K` to open the command palette. It's a fuzzy-searchable list of every command exposed by the app — type to filter, arrow keys to move, `Enter` to run, `Esc` to dismiss. Hotkey badges appear next to commands that have a keyboard shortcut.

The palette is a power-user shortcut for everything in the menus and toolbars. If you can't remember whether something is a button, a menu item, or a hotkey, it's in here.

## Categories

### File

- New project
- Open project (`.oapp`)
- Save / Save as
- Export glTF
- Export spec (JSON)

### Edit

- Undo / Redo
- Clear selection
- Empty project (clear all rooms / objects)
- Auto-layout

### View

- Switch to 2D
- Switch to 3D
- Frame selection
- Fit to viewport
- Zoom to 100%
- Reset 3D camera

### Layout

- Create room from selection
- Toggle door on wall
- Toggle window on wall
- Open / close selected wall
- Random fill
- Snap objects to grid
- Mark selected room as start

### Mode

- Layout mode
- Objects mode

### Theme

- Toggle theme
- Light theme
- Dark theme

### Help

- Show shortcuts (`F1`)

## Keyboard navigation

| Key | Action |
|---|---|
| `↑` / `↓` | Move highlight. |
| `Enter` | Run highlighted command. |
| `Esc` | Close palette. |

## Source

`Views/CommandPalette.cs` builds the registry. Every entry maps to an `ICommand` on `MainWindowViewModel` — the same commands invoked by toolbar buttons and key bindings.
