---
title: Objects & constraints
sidebar_position: 6
---

# Objects & placement constraints

In **Objects mode**, Studio lets you define a small library of **object types** and place **instances** of them inside rooms. Optional placement **constraints** validate where instances can go — useful for behavioural-research apparatuses where reward locations, distractors, and walls have minimum-distance rules.

## Object types

An **object type** is a reusable shape definition.

| Property | Notes |
|---|---|
| **Name** | Display label. |
| **Shape** | One of `Cube`, `Sphere`, `Cylinder`, `Cone`, `Capsule`, `Pyramid`, `SquatCylinder`. |
| **Colour** | RGB; pickable from a palette or by hex. |
| **Size** | Metres — applied uniformly to the bounding shape. |

Types are listed in the left panel under **Object types**. Click **+** to open the **picker dialog**, which prefills a name, shape, and colour and lets you tweak size before adding. Existing types have inline edit / delete buttons; deleting a type that has placed instances triggers a confirmation.

### Placing instances

In Objects mode:

- **Number-key shortcut**: `1`–`9` (or NumPad `1`–`9`) places an instance of type _N_ at the cursor in the 2D canvas.
- **Drag**: click and drag to move an existing instance.
- **Empty click**: places an instance of the currently-armed type.

Each instance carries:

- **Slot** — 1-based index into the project's object-types list.
- **Owning room ID** — the room whose tile contains the instance (auto-reassigned on grid changes via point-in-polygon).
- **Position** — world `(x, y, z)` in metres. The default `y` comes from the project's `defaultObjectY`.
- **Rotation** — radians around Y.

### Inspecting instances

The right panel adapts to your selection:

- **One object** — type swatch, name, room ID, X / Y / Z (axis-coloured inputs), rotation, size.
- **Several objects** — count and a per-type tally; bulk **Delete** button.
- **A room with several objects** — stacked list; click a row to focus a single instance.

### Snap to grid

The command **Snap objects to grid** (in the command palette) rounds every instance's `(x, z)` to the nearest sub-tile defined by the project's `gridSubdivision`. Useful after free-form dragging.

## Placement constraints

Constraints are optional rules that validate where objects can go. They live on the project (round-trip with the `.oapp` file) and surface in the **Project ▸ Constraints** panel.

### Available rules

| Rule | What it enforces |
|---|---|
| **Object-to-object** | A min and / or max distance between any two instances. Toggle to also apply across connected rooms. |
| **Door-to-object** | A min / max distance from any door opening to any instance. Optionally restricted to "marked" doors only. |
| **Object-to-wall** | A minimum clearance from each instance to every wall in its room. |
| **Per-room counts** | Min / max number of instances per room. |
| **Door-angle band** | Door rotation must lie within `[minDeg, maxDeg]` (degrees, 0–360). |

Each rule is independently enabled with a toggle; numeric parameters use [drag-scrub](./power-features) and accept expressions.

### Visualization

Two settings control how violations and active constraints are drawn on the 2D canvas:

- **Highlight mode** — `Off`, `Violations`, or `All`.
- **Show all constraints** — render every constraint (lines, arcs, rings) regardless of violation state.
- **Highlight violations** — tint violating instances red.

### How violations behave

Violations are advisory: they don't block placement, but they're rendered prominently and surfaced in the status bar. Toasts may warn on bulk operations that introduce many at once.

### Round-tripping constraints

Constraints are saved on the `.oapp` file and on the JSON spec export (v3) — see [File format](./file-format) and [Exports](./exports). Downstream consumers can re-evaluate them against generated layouts.
