---
title: Views (2D & 3D)
sidebar_position: 4
---

# Views: 2D top-down and 3D isometric

Studio renders the same scene through two views. Toggle between them in the **VIEW** card on the toolbar, or via the command palette (`Ctrl+K`).

| | 2D top-down | 3D isometric |
|---|---|---|
| Editing | ✅ Full editing | ❌ Camera only |
| Zoom | Scroll wheel | Scroll wheel |
| Pan | Middle / right drag | Middle / right drag |
| Orbit | — | Left drag |
| Reset | `Ctrl+1` (fit) · `Ctrl+0` (100%) | "Reset iso camera" command |

## 2D top-down editor

The 2D editor is the primary authoring surface — a grid of tiles where every cell either belongs to a room (coloured) or is empty (gray).

### What it draws

- **Floor or ceiling tint** for each room tile (chosen in the **SURFACE** toolbar card), with adjustable saturation.
- **Interior wall ribbons** — 14-pixel-wide bands inside each wall boundary, opacity adjustable.
- **Doorways and windows** as gaps / framed openings in the wall ribbon.
- **Optional labels** — room ID, room name, dimensions, floor area, door / window sizes, object distances, door angles, door-to-object distances.
- **Optional path polyline** — click-place a sequence of waypoints to lay out a route; play/stop animates a marker travelling it.

### Inputs in Layout mode

| Input | Action |
|---|---|
| Click + drag (empty tile) | Toggle tiles in / out of a brush selection. |
| Click on a room tile | Select that room (opens the room appearance editor). |
| Double-click a room | Frame and zoom to fit it. |
| Click a wall outline | Select that wall for door / window editing. |
| Middle / right drag | Pan. |
| Scroll wheel | Zoom (modifier-aware: Ctrl = fine, Shift = coarse). |
| `R` | Create a room from the brush selection. |
| `D` | Toggle a door on the selected wall. |
| `W` | Toggle a window on the selected wall. |
| `O` | Open the selected wall (no separation). |
| `C` | Close the selected wall (solid). |
| `F` | Frame selection. |
| `Esc` | Clear selection. |
| `Delete` / `Backspace` | Delete the selected room. |

### Inputs in Objects mode

| Input | Action |
|---|---|
| `1`–`9` (or NumPad) | Place an object of type `N` at the cursor. |
| Click + drag an object | Move it. |
| Click empty space | Place an object of the currently-armed type. |
| `Ctrl+A` | Select all objects. |
| `Delete` / `Backspace` | Delete the selected object(s). |

The cursor world position appears in the bottom-left of the status bar.

## 3D isometric renderer

A software rasterizer (no GPU) draws the scene with perspective projection, Lambert shading, and back-face culling. It's read-only — use it as a preview, not an editor.

### What it draws

- Floors, walls, and ceilings as triangulated meshes per room.
- Doors and windows as cut-outs in walls, with jambs / lintels / sills / thresholds.
- Object instances as solid geometry matching their declared shape (cube, sphere, cylinder, cone, capsule, pyramid, squat cylinder).
- A sky-to-ground gradient background.
- Painter's-algorithm depth sort: floors first, walls second, objects last.

### Camera

| Input | Action |
|---|---|
| Left drag | Orbit (yaw + pitch around the pivot). |
| Middle / right drag | Pan the pivot in world XZ; vertical pan adjusts the look-at Y. |
| Scroll wheel | Zoom (distance from the pivot). |

State is saved on the project (`isoYaw`, `isoPitch`, `isoDistance`, `isoPivot{X,Y,Z}`) so a project reopens with the camera you left it on.

### Performance

The renderer paints into a 2× supersampled `RenderTargetBitmap` and scales it back down for free anti-aliasing. The bitmap is only re-allocated if the viewport size changes — small parameter tweaks redraw without churning.

## When to use which

- **Author in 2D.** Tile painting, wall selection, and object placement are all faster top-down.
- **Sanity-check in 3D.** Door heights, sill heights, object scales, and the overall "feel" of the room are easier to judge with depth.
- **Both views share the same project.** Switching is instant — there's no separate model.
