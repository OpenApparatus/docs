---
title: OBJ export
sidebar_position: 5
---

# OBJ export

Studio can export the assembled 3D geometry of a floor plan to a Wavefront OBJ file. The export is structured for downstream use — one OBJ object per room, with named groups so you can re-skin rooms independently in your renderer of choice.

## Structure

The exported file contains:

- **One OBJ object (`o room_<index>`)** per cell in the floor plan.
- **Three named groups** per room:
  - `g floor` — the floor polygon.
  - `g walls` — the four walls, with doorway openings cut out.
  - `g ceiling` — the ceiling polygon.

This mirrors the [submesh layout](../core/geometry#submesh-layout) used by the engine-agnostic mesh data: floor / walls / ceiling, in that order.

## Why per-room objects

Behavioural-research apparatuses often need per-room treatment — different materials, textures, light sources, or even hidden rooms during certain phases of a study. Splitting on rooms at export time means downstream tools (Blender, Unity import, custom pipelines) can address each room individually without having to slice a single mesh.

## Coordinate system

OBJ export uses a right-handed Y-up coordinate system, matching what most DCC tools expect. (Unity uses a left-handed system internally; the [Unity adapter](../unity/mesh-adapter) handles the flip on import.)

## What's not exported

- Doors as separate geometry — the wall geometry has the openings cut, but no door panel is added.
- Materials (`.mtl`) — Studio writes geometry only; assign materials in your downstream tool.
- Lights, cameras, or other scene metadata.

## Source

The exporter lives at `Services/ObjExporter.cs` in the [studio repo](https://github.com/OpenApparatus/studio).
