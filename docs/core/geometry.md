---
title: Geometry
sidebar_position: 5
---

# Geometry

The geometry layer turns a `FloorPlan` into **engine-agnostic mesh data**. The output is a set of POCOs that any host (Avalonia, Unity, an OBJ exporter) can convert to its native renderable type.

> Source: `src/OpenApparatus.Core/Geometry/`

## `MeshData`

The central POCO. Holds:

- A vertex array (positions, plus normals/UVs as the format extends).
- An index array.
- Submesh slices that group indices by material role.

A floor plan produces **one `MeshData` per cell**, not one big mesh, so hosts can spawn one game object per room and assign per-room materials or colliders.

## Submesh layout

Each cell mesh has three submeshes, in this fixed order:

| Submesh | Index | Role |
|---|---|---|
| `Floor` | 0 | The floor polygon. |
| `Walls` | 1 | The four walls (minus any doorway openings). |
| `Ceiling` | 2 | The ceiling polygon (optional, depending on host). |

The Unity adapter maps these directly to Material slots 0/1/2 on the `MeshRenderer`. Studio's OBJ exporter writes them as named groups (`floor`, `walls`, `ceiling`).

## Doorway tunnels

Passages between adjacent cells are rendered as **tunnels through the shared wall** rather than two abutting half-doorways. This means the passage geometry is consistent regardless of which side you look from, and lighting / collision behave correctly. (Milestone A3.)

## Hosts

Each host converts `MeshData` to its own type:

- **Studio** uses an Avalonia 2D top-down renderer for live preview, and an OBJ writer for export. See [Studio: OBJ export](../studio/obj-export).
- **Unity** has `UnityMeshAdapter` that builds a `UnityEngine.Mesh` per cell. See [Unity: Mesh adapter](../unity/mesh-adapter).

## Status

⏳ Geometry milestones (A2–A4) are in progress. This page describes the intended design; the API is not yet stable.
