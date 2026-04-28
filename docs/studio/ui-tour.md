---
title: UI tour
sidebar_position: 3
---

# UI tour

The Studio window has two regions: a **parameter panel** (left) and a **2D preview** (right).

## Parameter panel

| Parameter | What it controls |
|---|---|
| **Width / Height** | Floor-plan dimensions, in tiles. |
| **Tile size** | World-space size of a single grid tile. |
| **Rectangle rooms** | Number of rectangular rooms to merge from grid tiles. |
| **Wall thickness / height** | World-space wall geometry. |
| **Door width / height** | World-space door opening dimensions. |
| **Seed** | The PRNG seed. Same seed + same parameters → identical floor plan. |
| **Outer entrance** | Toggle whether the perimeter has a doorway to the outside. |

Editing any field redraws the preview immediately — no "Generate" button.

## 2D preview

A live top-down view of the current floor plan. Walls are drawn as solid lines; doorways as gaps. The view rebuilds on every parameter change.

> Note: the preview is a 2D schematic. The 3D geometry exported via OBJ is assembled from the same `FloorPlan` but rendered through the geometry layer. See [OBJ export](./obj-export).

## Save / load

- **Save** writes a `.floorplan.json` containing the parameter spec only. See [File format](./file-format).
- **Load** reads a `.floorplan.json`, populates the parameter panel, and regenerates the floor plan deterministically from the saved seed.

## Export OBJ

Writes the assembled 3D mesh to disk. See [OBJ export](./obj-export) for the file structure.
