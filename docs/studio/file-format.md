---
title: .floorplan.json file format
sidebar_position: 4
---

# `.floorplan.json` file format

Studio saves and loads `.floorplan.json` files. **Only the parameter spec is stored** — the floor plan itself is regenerated deterministically from the seed when the file is loaded. This keeps files tiny and makes them durable across mesh-format changes.

## Why parameters, not geometry

- A spec is a few hundred bytes; a mesh is megabytes.
- A spec round-trips through generator improvements (so long as the algorithm version is recorded; see [Determinism](../core/determinism)).
- A spec is human-readable and diff-friendly in version control.

## Schema

```json
{
  "version": "0.1.0",
  "spec": {
    "width": 5,
    "height": 4,
    "tileSize": 1.0,
    "rectangleRooms": 6,
    "wallThickness": 0.1,
    "wallHeight": 2.5,
    "doorWidth": 0.9,
    "doorHeight": 2.0,
    "seed": 42,
    "outerEntrance": true
  }
}
```

> ⚠️ Schema is illustrative — final field names may shift before v0.1. The serializer lives at `Services/FloorPlanJsonSerializer.cs` in the studio repo.

## Loading

When Studio loads a file, it:

1. Parses the JSON into a `FloorPlanSpec`.
2. Pushes the spec values into the parameter panel.
3. Regenerates the floor plan via `OpenApparatus.Core` from the seed and parameters.
4. Redraws the preview.

If the saved `version` doesn't match the current Core version, Studio will warn — the geometry may differ. See [Determinism: cross-version](../core/determinism).
