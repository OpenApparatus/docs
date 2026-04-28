---
title: FloorPlanInstance
sidebar_position: 3
---

# `FloorPlanInstance`

`FloorPlanInstance` is the MonoBehaviour that drives generation. Add it to an empty GameObject and the inspector is your control surface.

> Source: `Runtime/FloorPlanInstance.cs` in [OpenApparatus/unity](https://github.com/OpenApparatus/unity).

## Inspector fields

### Generation parameters

| Field | What it does |
|---|---|
| **Width / Height** | Floor-plan dimensions, in tiles. |
| **Tile Size** | World-space size of a single grid tile. |
| **Rectangle Rooms** | Number of rectangular rooms to merge from grid tiles. |
| **Wall Thickness / Height** | World-space wall geometry. |
| **Door Width / Height** | World-space door opening dimensions. |
| **Seed** | The PRNG seed. Same seed + same parameters → identical floor plan. |
| **Outer Entrance** | Toggle whether the perimeter has a doorway to the outside. |

### Materials

Three Material slots, mapped 1:1 to submeshes on each spawned cell mesh:

- Slot 0 → **Floor**
- Slot 1 → **Walls**
- Slot 2 → **Ceiling**

If a slot is empty, Unity will use its default magenta error material — that's a useful smoke test that the slots are wiring through correctly.

### Editor behaviour

- **`autoRegenerateInEditor`** — when on, every parameter change debounces into one rebuild. Toggle off to use the Generate button only. See [Editor workflow](./editor-workflow).

## Children

`FloorPlanInstance` owns its child GameObjects. On every regeneration it:

1. Destroys all current children.
2. Spawns one child per cell (named `Cell_<x>_<y>`) with a `MeshFilter`, a `MeshRenderer`, and the cell's mesh.
3. Assigns the three Material slots to the renderer.

You shouldn't manually parent objects under a `FloorPlanInstance` — they'll be wiped on next regeneration. Parent them under a sibling GameObject instead.
