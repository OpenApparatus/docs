---
title: Topology
sidebar_position: 4
---

# Topology

The topology layer holds the **pure data model** of a floor plan — what rooms exist, how they relate, where the passages are. No rendering, no engine, no math beyond integer coordinates.

> Source: `src/OpenApparatus.Core/Topology/`

## Core types

### `FloorPlan`

The root aggregate. A collection of cells and the relationships between them. Everything downstream — geometry, exports, scene spawning — reads from a `FloorPlan`.

### `Cell`

A single rectangular room or maze tile. Carries its grid coordinates, dimensions, and any per-cell metadata (room type, label, etc.).

### `Adjacency`

Records that two cells share a wall — the precondition for a passage.

### `Passage`

A connection between two adjacent cells. In the rendered output this becomes a doorway (and, downstream, a tunnel through the shared wall — see [Geometry](./geometry)).

## Generators

`IFloorPlanGenerator` is the strategy interface. The shipping generator for milestone A1 is **grid + domino with a spanning-tree passage assigner**:

1. Lay out a grid of cells.
2. Optionally merge adjacent grid cells into "domino" rooms (rectangular rooms larger than 1×1).
3. Build the cell adjacency graph.
4. Assign passages by computing a spanning tree over the adjacency graph — guarantees the floor plan is fully connected with no redundant doorways.

Future generators (mazes, more complex apparatuses) implement the same interface.

## Determinism

Every generator takes a `SeededRandom` instance. Same seed + same parameters → same `FloorPlan`, byte-for-byte. See [Determinism](./determinism).

## API reference

> ⏳ This page will be filled in once the A1 milestone lands and the API stabilises.
