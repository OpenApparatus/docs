---
title: Architecture
sidebar_position: 3
---

# Architecture

`OpenApparatus.Core` is organised in three layers with strict one-way dependencies. Higher layers depend on lower layers; never the reverse.

```
┌──────────────────────────────────┐
│ Geometry                         │  Topology → engine-agnostic MeshData POCOs
├──────────────────────────────────┤
│ Topology                         │  Pure data: FloorPlan, Cell, Adjacency, Passage
├──────────────────────────────────┤
│ Math / utilities                 │  SeededRandom, vector helpers
└──────────────────────────────────┘
```

## Topology — `src/OpenApparatus.Core/Topology/`

Pure data. No engine assumptions, no rendering, no math beyond integer coordinates.

Key types:

- `FloorPlan` — the root aggregate; a collection of `Cell`s and the relationships between them.
- `Cell` — a single rectangular room or maze tile.
- `Adjacency` — which cells share a wall.
- `Passage` — a connection between two adjacent cells (a doorway).
- `IFloorPlanGenerator` — the strategy interface; implementations include a grid+domino generator with a spanning-tree passage assigner.

See [Topology](./topology) for the full model.

## Geometry — `src/OpenApparatus.Core/Geometry/`

Turns a `FloorPlan` into engine-agnostic `MeshData` POCOs (vertex arrays, index arrays, submesh slices). Studio and the Unity package each convert these to their respective renderable types.

See [Geometry](./geometry) for the mesh model and submesh conventions.

## Math / utilities

- `SeededRandom` — the deterministic PRNG every generator and assigner takes as input. See [Determinism](./determinism).
- Vector helpers and small integer-math utilities.

## Why this split

- **Topology is testable without rendering.** You can unit-test "does a 3×4 grid with seed 42 produce these adjacencies?" with no graphics dependency.
- **Geometry is engine-agnostic.** A POCO mesh model means the same floor plan can render in Avalonia, Unity, Godot, or a CAD exporter without forking the geometry code.
- **Determinism flows from the bottom up.** `SeededRandom` is the only stochastic input, so any layer above is deterministic if its inputs are.
