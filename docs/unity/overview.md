---
title: Overview
sidebar_position: 1
---

# Unity overview

The **OpenApparatus Unity package** is a Unity Package Manager (UPM) package that consumes [`OpenApparatus.Core`](../core/overview) to procedurally generate reproducible navigation environments — multi-room floor plans, mazes, and behavioural-research apparatuses — directly inside Unity scenes.

> Repo: [OpenApparatus/unity](https://github.com/OpenApparatus/unity) · License: MIT · Targets Unity 2022.3 LTS+.

## What ships in the package

| Path | What it is |
|---|---|
| `Plugins/OpenApparatus.Core.dll` | The engine-agnostic Core library, built by the publish script. |
| `Runtime/FloorPlanInstance.cs` | MonoBehaviour driving generation; owns the spawned children. |
| `Runtime/UnityMeshAdapter.cs` | Converts engine-agnostic `MeshData` → `UnityEngine.Mesh`. |
| `Editor/FloorPlanInstanceEditor.cs` | Custom inspector with Generate / Reseed / Clear buttons. |

## How you use it

1. Install the package (see [Installation](./installation)).
2. Drop a **FloorPlanInstance** component on an empty GameObject.
3. Tweak any field in the inspector — the floor plan rebuilds live.
4. Press play — your scene now contains a procedurally generated, deterministic environment.

## What you get in the scene

`FloorPlanInstance` spawns one child GameObject per cell, each with a `MeshFilter` and `MeshRenderer`. Each cell mesh has three submeshes (`0=Floor`, `1=Walls`, `2=Ceiling`) and the inspector exposes three Material slots that map to them in order.

## Where to next

- [Installation](./installation) — clone, build, link.
- [`FloorPlanInstance`](./floorplan-instance) — component reference.
- [Editor workflow](./editor-workflow) — auto-rebuild, Generate/Reseed/Clear, debouncing.
