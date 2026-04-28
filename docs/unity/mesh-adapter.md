---
title: Mesh adapter
sidebar_position: 5
---

# Mesh adapter

`UnityMeshAdapter` is the thin shim that converts engine-agnostic [`MeshData`](../core/geometry) POCOs from `OpenApparatus.Core` into `UnityEngine.Mesh` instances Unity can render.

> Source: `Runtime/UnityMeshAdapter.cs` in [OpenApparatus/unity](https://github.com/OpenApparatus/unity).

## What it does

For each `MeshData` produced by Core, `UnityMeshAdapter`:

1. Creates a new `UnityEngine.Mesh`.
2. Copies vertices (with the appropriate coordinate-system flip — see below).
3. Copies normals and UVs.
4. Sets the index buffer with `subMeshCount = 3` and writes the three submesh slices in order: `0=Floor`, `1=Walls`, `2=Ceiling`.
5. Calls `mesh.RecalculateBounds()` so the mesh is properly culled.

## Coordinate-system flip

Core uses a right-handed Y-up coordinate system. Unity uses a left-handed Y-up system. The adapter flips the Z axis on every vertex (and adjusts winding order on the index buffer) so geometry renders the right way out — outward-facing normals, no inverted lighting.

This flip is a single line in the adapter; nothing else in the package needs to know about it.

## Why a separate adapter

Keeping this code in the Unity package (rather than in Core) is deliberate:

- Core stays engine-agnostic — no `UnityEngine` reference, no Unity-shaped assumptions.
- Other adapters (Avalonia in Studio, future Godot or CAD adapters) can do their own conversion without going through Unity-specific code.
- The same `MeshData` POCO can feed all of them.

## Performance

For small floor plans (tens of rooms) the adapter is fast enough to run synchronously on the main thread during `Awake` or in the Editor `delayCall`. If you need to generate large environments at runtime, profile first — the bottleneck is usually Core's geometry assembly, not the adapter copy.
