---
title: UI tour
sidebar_position: 3
---

# UI tour

Studio uses a three-pane docked layout with a top toolbar and a status bar. Two top-level **edit modes** — **Layout** and **Objects** — change what the side panels and the canvas show; the rest of the window stays put.

![Annotated diagram of the Studio main window showing the top toolbar, left panel, canvas, right panel, and status bar.](/img/studio/window-overview.svg)

## Top toolbar

The toolbar is a single horizontal strip of context-aware "settings cards":

| Group | When visible | What it controls |
|---|---|---|
| **VIEW** | Always | Toggle between 2D top-down and 3D isometric. |
| **SURFACE** | 2D only | Floor / Ceiling tab — which surface the canvas tints. Saturation slider. |
| **OVERLAY** | 2D only | Toggles for **Walls** (interior wall ribbons), **Rooms** (ID + name labels), and an opacity slider. |
| **ROOM** | 2D, when a room is selected | Show room dimensions, area (m²), door / window sizes. |
| **OBJECT** | 2D, when objects exist | Show object distances, door angles, door-to-object distances. |
| **PATHS** | 2D, optional | Toggle a path polyline overlay; colour swatch; play/stop with speed slider for a moving marker. |
| **Export** | Always | Dropdown — glTF, JSON, PNG 2D. (OBJ is wired through a separate command.) |

See [Views](./views) for what 2D and 3D actually render.

## Left panel

The left panel holds the **selection inspector** and **project-level settings**.

### Layout mode

- **Selection card** — what's currently selected (a room, a wall, a tile brush). Includes the **Create Room** button (turns the brush selection into a room) and a clear-selection button.
- **New-room defaults** — default floor / ceiling / wall colours for newly-created rooms, with a "random per room" toggle.
- **Project** — grid width / depth (in tiles), tile size (m), wall thickness / height, door / window dimensions, sill height, and the [placement constraints](./objects-and-constraints#placement-constraints) panel.

### Objects mode

- **Object types library** — every object type defined in this project, with shape glyph and colour swatch. **Add** opens the picker dialog; **edit** and **delete** appear inline.

See [Editing](./editing) and [Objects & constraints](./objects-and-constraints).

## Centre canvas

The 2D top-down editor and the 3D isometric renderer are exclusive: toggle between them in the **VIEW** card.

- **2D top-down** — interactive grid editor: paint tiles, create rooms, click walls, place objects.
- **3D isometric** — read-only camera; orbit (left drag), pan (middle/right drag), zoom (scroll).

See [Views](./views) for full input details.

## Right panel

### Layout mode

- **Room appearance** (when a room is selected) — name, floor / ceiling colour, single-colour or per-wall wall colours, list of bounding walls with their passage type, list of doors / windows.
- **Opening editor** (when a door or window is selected) — offset along edge, width, height, sill height (windows), hinge position, swing direction.

### Objects mode

- **Object inspector** (single object) — type swatch, name, room ID, X/Y/Z position with axis-coloured inputs, rotation, size.
- **Multi-select editor** (many objects) — count and type summary, bulk delete.
- **Stacked objects** (room with several) — list of every object in the room, click to focus one.

## Status bar

Three columns, left → right:

- **Cursor world position** — `x, y` in metres (2D only; hidden in 3D).
- **Live status / hint** — accent dot + a transient message after an action ("Saved", "Wall opened", "Constraint violated"); when idle, a contextual hint about what the current selection can do.
- **Scene summary** — `<n> rooms · <m> objects · <mode>`.

## Welcome panel

On first launch (or when the scene is empty), the canvas is replaced by a welcome panel:

- A time-of-day greeting and the project tagline.
- Three large buttons — **New**, **Open**, **Shortcuts** (`F1`).
- A **Recent** list of up to 8 previous projects.
- Footer hint: `F1 shortcuts · Ctrl+K palette`.

Pressing **Enter** triggers the focused **New** button, so a fresh launch + Enter starts a blank project.

## Modes

Two top-level edit modes:

| Mode | Left panel | Right panel | Canvas behaviour |
|---|---|---|---|
| **Layout** | Selection · defaults · project | Room / opening editor | Tile painting, wall selection, room creation. |
| **Objects** | Object types library | Object inspector | Click-and-drag to place / move objects. |

Switching mode clears all selections so the next click is unambiguous. The mode is shown on the right of the status bar.

## Where to next

- [Views](./views) — 2D and 3D canvas details.
- [Editing](./editing) — rooms, walls, doors, windows.
- [Objects & constraints](./objects-and-constraints).
- [Keyboard shortcuts](./keyboard-shortcuts).
