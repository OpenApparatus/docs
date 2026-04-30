---
title: Exports (glTF, OBJ, JSON, PNG)
sidebar_position: 7
---

# Exports

Studio writes four formats. Use the **Export** dropdown in the toolbar, or the matching commands in the command palette (`Ctrl+K`).

| Format | Extension | What it's for |
|---|---|---|
| **glTF** | `.glb` (binary) or `.gltf` + `.bin` | Renderers, DCC tools, downstream Unity / web viewers. |
| **OBJ** | `.obj` | Wavefront geometry for Blender, fabrication, or any tool that reads OBJ. |
| **JSON spec** | `.json` | Downstream simulators / consumers — describes rooms, walls, passages, objects, constraints. |
| **PNG 2D** | `.png` | A rasterized top-down image for figures or sharing. |

The **last export folder** is remembered between sessions in [settings](./settings).

## glTF

The glTF exporter is the richest output. It writes a hierarchical scene with one node per room and one child node per surface:

```
OpenApparatus
├── room_0
│   ├── floor
│   ├── ceiling
│   ├── wall_0
│   ├── wall_1
│   └── ...
│   └── room_0_objects
│       ├── slot1_0
│       ├── slot1_1
│       └── ...
└── room_N
    └── ...
```

### Materials

- **Single-colour rooms**: one material per surface (floor / ceiling / shared wall).
- **Multi-colour rooms** (per-wall mode): each wall gets its own material.
- **Objects**: one material per object type, applied to every instance of that slot.

### Frame geometry

Doorways and windows include the full opening frame:

- **Top frame** (lintel)
- **Bottom frame** (threshold for doors, sill for windows)
- **Side caps / jambs**

This means an exported floor plan reads correctly when rendered standalone — there are no missing edges around openings.

### Per-side wall splitting

A wall shared between two rooms is exported as two surfaces — one in each room's hierarchy — so a renderer can apply each room's wall colour independently.

### `.glb` vs `.gltf`

- **`.glb`** packs geometry, materials, and metadata into one binary file. Easiest to share.
- **`.gltf`** writes a JSON file with a separate `.bin` payload. Useful if your pipeline needs to inspect or transform the JSON.

Source: `Services/GltfExporter.cs`.

## OBJ

Wavefront OBJ output — flat geometry, no per-room hierarchy. One file with the entire scene's vertices and faces.

- Right-handed Y-up coordinate system.
- No materials (`.mtl`) — assign in your downstream tool.
- No object panels — wall geometry has openings cut, but no door panels or window glass are added.
- No lights, cameras, or scene metadata.

OBJ is the most portable but least expressive format. Prefer **glTF** when the consumer supports it.

Source: `Services/ObjExporter.cs`.

## JSON spec

The JSON exporter (schema **v3**) writes a downstream-consumer description of the scene. Distinct from the [`.oapp` project file](./file-format) — `.oapp` round-trips the editor; this JSON is for tools that need a clean structural view.

### Top-level shape

```json
{
  "version": 3,
  "parameters": { /* tile size, wall / door / window dimensions, gridSubdivision, defaultObjectY */ },
  "grid":       { "width": ..., "length": ..., "tiles": [/* row-major room IDs, -1 = empty */] },
  "rooms":      [ /* per-room: position, tiles, shape bounds */ ],
  "walls":      [ /* per-room: start/end coords, neighbor room ID (null = exterior) */ ],
  "passages":   [ /* per adjacency: open / closed / doorway, opening list */ ],
  "objects":    [ /* slot, position, rotation, owning room */ ],
  "objectSlots":         [ /* type definitions: name, shape, color, size */ ],
  "placementConstraints": { /* full copy of the constraint set, if present */ }
}
```

The exact field names and the full schema are defined in `Services/JsonExporter.cs` — `SchemaVersion = 3`.

### Why a separate JSON

The editor's `.oapp` file carries UI state (camera, zoom, selections). The JSON spec is the **portable, downstream contract** — it should round-trip through generators and version-control diffs without churning on view changes.

## PNG 2D

Rasterizes the current 2D top-down view to a PNG file.

- A dialog prompts for **output resolution** (pixels) and an optional **tile-size override** (metres-per-tile rendered in the image).
- Honours the current overlay settings (walls, room labels, dimensions, etc.).
- Useful for quickly producing a figure for a methods section or a slide.

Source: `Views/Png2DExportDialog.axaml.cs`.
