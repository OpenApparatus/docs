---
title: Installation
sidebar_position: 2
---

# Installation

## Requirements

- **Unity 2022.3 LTS** or newer.
- **.NET 8 SDK** (only for building the bundled `OpenApparatus.Core.dll`).
- A clone of [OpenApparatus/core](https://github.com/OpenApparatus/core) alongside the unity package.

## Step 1 — Clone the repos

```bash
git clone https://github.com/OpenApparatus/core.git openapparatus-core
git clone https://github.com/OpenApparatus/unity.git openapparatus-unity
```

The publish script expects them as siblings.

## Step 2 — Build and stage the Core DLL

The package ships `Plugins/OpenApparatus.Core.dll` but it isn't checked into git — you build it locally:

```bash
# macOS / Linux
bash openapparatus-unity/build/publish-core-dll.sh

# Windows (PowerShell)
.\openapparatus-unity\build\publish-core-dll.ps1
```

The script builds `OpenApparatus.Core` against `netstandard2.1` and copies the resulting DLL to `openapparatus-unity/Plugins/`.

## Step 3 — Add the package to your Unity project

Edit your project's `Packages/manifest.json`:

```json
{
  "dependencies": {
    "com.openapparatus.unity": "file:../path/to/openapparatus-unity"
  }
}
```

…or copy `openapparatus-unity` into your project's `Packages/` folder directly.

When Unity reopens, it will resolve the package and `OpenApparatus.Core.dll` will be available.

## Verifying

Create an empty GameObject in a scene and add the `FloorPlanInstance` component. You should see a procedurally generated floor plan rebuild as you tweak fields. See [`FloorPlanInstance`](./floorplan-instance).
