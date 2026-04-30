---
title: .oapp project file format
sidebar_position: 8
---

# `.oapp` project file format

Studio saves and loads its native projects as `.oapp` files — JSON documents that round-trip the **full editor state**. Open a project, edit, save, reopen: the canvas comes back exactly as you left it, including selections, camera, and constraints.

> Distinct from the [JSON spec export](./exports#json-spec). The `.oapp` is editor-internal; the JSON spec is the downstream-consumer contract. Most users only handle `.oapp`.

## Why a separate format

- **Lossless round-trip.** The JSON spec drops UI state (camera, zoom, selection); the `.oapp` keeps everything.
- **Versioned migration.** A `version` field gates schema changes; older saves can be upgraded as the editor evolves.
- **Compact.** Camel-cased property names; `null` and default values omitted on write.

## Top-level schema (v1.0)

```json
{
  "version": "1.0",
  "title": "Open field arena",

  "gridWidth": 8,
  "gridLength": 6,
  "tileSize": 1.0,
  "wallThickness": 0.1,
  "wallHeight": 2.5,
  "doorWidth": 0.9,
  "doorHeight": 2.0,
  "windowWidth": 0.6,
  "windowHeight": 0.5,
  "windowSillHeight": 1.0,
  "gridSubdivision": 4,
  "defaultObjectY": 0.0,

  "defaultFloorColor":   [0.85, 0.85, 0.85],
  "defaultCeilingColor": [0.95, 0.95, 0.95],

  "roomGrid": [0, 0, -1, 1, 1, ...],

  "roomFloorColors":     { "0": [...], "1": [...] },
  "roomCeilingColors":   { "0": [...] },
  "roomSingleWallColors":{ "0": [...] },
  "roomNames":           { "0": "Start box", "1": "Arena" },
  "multiColorRoomIds":   [1],

  "wallColors": { "1_4500_3000": [0.6, 0.2, 0.2] },

  "passageOverrides": [ { /* start/end mm coords, kind, openings */ } ],

  "objectTypes": [ { "name": "Reward", "shape": "Sphere", "color": [...], "size": 0.3 } ],
  "objects":     [ { "slot": 1, "owningRoomId": 1, "x": 4.5, "y": 0, "z": 3.0, "rotation": 0 } ],

  "cameraView":  "TopDown",
  "zoomFactor":  1.4,
  "panOffsetX":  0,
  "panOffsetY":  0,
  "isoYaw":      0.7853,
  "isoPitch":    -0.3,
  "isoDistance": 18.0,
  "isoPivotX":   4.0,
  "isoPivotY":   1.0,
  "isoPivotZ":   3.0,

  "constraints": { /* full PlacementConstraints copy */ }
}
```

## Sections

### Project metadata
- `version` — `"1.0"`. Studio refuses to load anything that doesn't start with `"1."`.
- `title` — display name; falls back to the file name.

### Grid & dimensions
- `gridWidth` × `gridLength` — tile count along each axis.
- `tileSize` — metres per tile.
- `wallThickness`, `wallHeight` — wall geometry.
- `doorWidth` / `doorHeight`, `windowWidth` / `windowHeight` / `windowSillHeight` — opening defaults.
- `gridSubdivision` — sub-tile resolution used by **Snap objects to grid**.
- `defaultObjectY` — Y coordinate applied to newly-placed objects.

### Tile ownership
- `roomGrid` — flattened row-major `int[gridWidth × gridLength]`. Each cell is a room ID, or `-1` for empty.

### Per-room palettes
- `roomFloorColors` / `roomCeilingColors` / `roomSingleWallColors` — `Dict<roomId, [r, g, b]>` (0–1 floats).
- `roomNames` — `Dict<roomId, name>`.
- `multiColorRoomIds` — list of room IDs that opt into per-wall colour overrides.

### Per-wall colour overrides
- `wallColors` — `Dict<"{roomId}_{midXmm}_{midZmm}", [r,g,b]>`. The key encodes the wall's midpoint in millimetres so the same wall is identifiable after grid edits.

### Passages
- `passageOverrides` — list of adjacency overrides. Each entry encodes its endpoints in millimetres (start / end), its kind (`Closed` / `Open` / `Doorway`), and the list of openings (offset, width, height, sill, hinge, swing).

### Objects
- `objectTypes` — type library: `name`, `shape`, `color`, `size`.
- `objects` — instances: `slot` (1-based), `owningRoomId`, `x`, `y`, `z`, `rotation` (radians).

### Camera state
- `cameraView` — `"TopDown"` or `"Iso"`.
- 2D camera: `zoomFactor`, `panOffsetX`, `panOffsetY`.
- 3D camera: `isoYaw`, `isoPitch`, `isoDistance`, `isoPivot{X,Y,Z}`.

### Constraints
- `constraints` — full POCO copy of [placement constraints](./objects-and-constraints#placement-constraints).

## Loading

When Studio loads an `.oapp` file it:

1. Parses the JSON into a `ProjectFile`.
2. Verifies `version` starts with `"1."`; otherwise rejects with `Unsupported project version`.
3. Pushes every field back onto the view-model.
4. Rebuilds the grid, passages, and 3D mesh.
5. Restores the camera and the surface / overlay settings.

## Versioning

Currently `1.0`. Future schema changes will:

- Bump the version (`1.1`, `1.2`, ...).
- Add backward-compatible defaults for new fields.
- Reject saves from incompatible major versions until a migrator ships.

## Source

- Persistence layer: `Services/ProjectIO.cs`.
- The `ProjectFile` POCO mirrors every authored field on `MainWindowViewModel`; null / default values are omitted on write.
