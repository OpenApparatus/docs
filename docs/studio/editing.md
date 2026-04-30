---
title: Editing rooms, walls & openings
sidebar_position: 5
---

# Editing: rooms, walls, doors, windows

This page covers how to author the layout itself in **Layout mode**. For object placement, see [Objects & constraints](./objects-and-constraints).

## Rooms

A **room** is one or more grid tiles with a single ID and a single colour palette. Rooms are not free-form polygons — every cell is either part of a room or empty.

### Creating a room

1. In the 2D canvas, click and drag over empty tiles to build a brush selection.
2. Press `R`, click **Create Room** in the left panel, or run **Edit ▸ Create room** from the command palette.

The new room is added to the next available ID and inherits the **New-room defaults** from the left panel (floor / ceiling / wall colours; optionally randomized per room).

### Selecting a room

- Click any tile that belongs to a room.
- Double-click to **frame** it (zoom + pan to fit).
- Press `F` with anything selected to frame the current selection.

### Editing room properties

The right panel's **Room appearance** card exposes:

- **Name** — display label, shown in overlays and exports.
- **Floor colour** — opens a colour picker.
- **Ceiling colour** — opens a colour picker.
- **Walls** — a single colour applied to every wall, or **per-wall** mode where each bounding wall has its own override.

### Deleting a room

Select the room and press `Delete` (or `Backspace`). Toasts give you an inline **Undo**. Internally, IDs are renumbered so the live `RoomGrid` stays compact.

### Resizing the grid

The **Project** card (left panel) holds **Grid width**, **Grid depth**, and **Tile size** (metres). Grid bounds can grow or shrink; rooms are clipped to the new extent. Tile size is applied on the next regeneration.

## Walls

A **wall** is the boundary between two rooms (or between a room and the exterior). The 2D editor draws walls as ribbons inside each tile. Click a ribbon to select the wall.

Each wall has a **passage type**:

| Type | Meaning |
|---|---|
| **Closed** | Solid wall — no opening. |
| **Open** | No structural separation; the rooms read as connected. |
| **Doorway** | Wall with one or more **openings** (doors and / or windows). |

### Toggling passage types

Select a wall, then:

| Shortcut | Command |
|---|---|
| `D` | Toggle door on selected wall. |
| `W` | Toggle window on selected wall. |
| `O` | Mark wall as open. |
| `C` | Mark wall as closed. |

The same actions appear in the right panel's **Walls** list and in the command palette.

### Per-wall colours

A room can use a single wall colour or per-wall colours. Toggle **Walls ▸ Single colour** off in the room appearance card to expose a colour swatch for each adjacency. Per-wall overrides are keyed by `(roomId, midpoint-mm)`, so the two sides of a shared wall can have different colours.

## Doors and windows

A **doorway** wall holds a list of **openings**. Each opening is either a door or a window, with its own geometry.

### Adding an opening

- Press `D` (door) or `W` (window) on the selected wall to add one with the project-level default size.
- The opening is selected automatically and its editor appears in the right panel.

### Opening properties

| Property | Notes |
|---|---|
| **Offset along edge** | Distance from the wall's start, in metres. |
| **Width** | Opening width. Capped at the wall length minus the offset. |
| **Height** | Opening height. Capped at the wall height. |
| **Sill height** | Windows only — height of the bottom of the opening from the floor. |
| **Hinge position** | Left / Right — which side of the opening the door is hinged on. |
| **Swing direction** | Negative / Positive — which way the door swings open. |

All numeric fields support [drag-scrub and arithmetic expressions](./power-features).

### Anchor markers

When a wall is selected for editing, small markers appear on the canvas at the midpoint of every existing opening. Clicking a marker selects that opening for editing.

### Project-level defaults

The **Project** card (left panel) defines the default door width / height, window width / height, and window sill height that newly-added openings inherit.

## Layout shortcuts (cheat sheet)

| Action | Keys |
|---|---|
| Create room from brush | `R` |
| Toggle door | `D` |
| Toggle window | `W` |
| Open wall | `O` |
| Close wall | `C` |
| Frame selection | `F` |
| Clear selection | `Esc` |
| Delete selected room | `Delete` / `Backspace` |
| Undo / Redo | `Ctrl+Z` / `Ctrl+Y` |
| Save | `Ctrl+S` |

A full reference lives in [Keyboard shortcuts](./keyboard-shortcuts). The in-app overlay is `F1`.
