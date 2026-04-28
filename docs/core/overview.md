---
title: Overview
sidebar_position: 1
---

# Core overview

`OpenApparatus.Core` is the engine-agnostic .NET library that does the actual work — generating a `FloorPlan`, assembling per-cell mesh data, and guaranteeing reproducibility from a seed. Studio and the Unity package are both thin adapters over it.

> Repo: [OpenApparatus/core](https://github.com/OpenApparatus/core) · License: MIT

## What it does

- Generates **multi-room floor plans** (and, in time, mazes and other apparatuses) from a parameter spec.
- Produces **engine-agnostic mesh data** (POCOs) that any host can convert to its renderable mesh type.
- Guarantees **deterministic output** — same seed + same parameters always produce the same `FloorPlan`.

## Status

Pre-release. The public API is unstable until v0.1. Track milestones on the [repo README](https://github.com/OpenApparatus/core).

| Milestone | Description | Status |
|---|---|---|
| A0 | Repo scaffold + sentinel test | ✅ |
| A1 | Topology data model + grid+domino generator + spanning-tree passage assigner | ⏳ |
| A2 | Engine-agnostic mesh builder for a single rectangular cell | ⏳ |
| A3 | Doorway tunnel geometry through shared walls | ⏳ |
| A4 | Full floor-plan mesh assembler | ⏳ |

## Where to next

- [Installation](./installation) — how to depend on Core from a .NET project.
- [Architecture](./architecture) — the three-layer design.
- [Determinism](./determinism) — the reproducibility guarantee and how to use it.
