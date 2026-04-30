---
title: Overview
sidebar_position: 1
---

# Studio overview

**OpenApparatus Studio** is a cross-platform desktop app for authoring, previewing, and exporting OpenApparatus floor plans. It pairs a tile-based 2D grid editor with a software-rendered 3D isometric preview, a rich per-room property panel, an object-placement system with optional constraints, and four export formats.

> Repo: [OpenApparatus/studio](https://github.com/OpenApparatus/studio) · License: MIT · Built with [Avalonia 11](https://avaloniaui.net/) on .NET 8.

## What it does

### Authoring
- **2D grid editor** — paint tiles into rooms, drag rooms, select walls, place objects.
- **3D isometric preview** — software-rasterized perspective view; orbit, pan, zoom.
- **Per-room editing** — name, floor / ceiling colour, single-colour or per-wall colours.
- **Walls & openings** — toggle walls between closed / open / doorway, place doors and windows with offset, width, height, sill height, hinge position, and swing direction.
- **Objects** — define object types (shape, colour, size) and place instances; constraints can validate placement (object-to-object, object-to-wall, door-to-object, per-room counts, door-angle band).

### Productivity
- **Command palette** (`Ctrl+K`) — fuzzy-searchable for every command.
- **Keyboard shortcuts** for the most common actions; press `F1` for the in-app overlay.
- **Drag-scrub labels** — drag any numeric label horizontally to adjust its value.
- **Expression input** — type `1.2 + 0.05` into any numeric field.
- **Undo / Redo** with snapshot-based state capture.
- **Toast notifications** with optional inline undo for destructive actions.

### Persistence & export
- **`.oapp` project files** round-trip the full editor state (grid, rooms, colours, objects, constraints, camera) — see [File format](./file-format).
- **Recent files**, window position, and theme persist across sessions.
- **Exports**:
  - **glTF** — `.glb` or `.gltf`+`.bin`, hierarchical (per-room, per-surface).
  - **OBJ** — flat Wavefront mesh.
  - **JSON spec** — downstream-consumer schema (v3) with rooms, walls, passages, objects, and constraints.
  - **PNG 2D** — rasterized top-down image.

## Why Studio exists

Researchers shouldn't need to write C# to design an apparatus. Studio gives them:

- A visual feedback loop — every change re-renders the 2D and 3D views immediately.
- A reproducible artefact — the saved `.oapp` records exactly what was authored, and the JSON export is the input for downstream pipelines.
- A clean handoff — export glTF/OBJ for rendering or fabrication, JSON for simulation, PNG for figures.

## Where to next

- [Installation](./installation) — clone, build, run.
- [UI tour](./ui-tour) — what each region of the window does.
- [Views](./views) — 2D top-down editor and 3D isometric preview.
- [Editing](./editing) — rooms, walls, doors, and windows.
- [Objects & constraints](./objects-and-constraints) — placing objects and validating placements.
- [Exports](./exports) — glTF, OBJ, JSON, PNG.
- [Keyboard shortcuts](./keyboard-shortcuts) and [Command palette](./command-palette).
- [Power features](./power-features) — drag-scrub, expression input, undo/redo, toasts.
- [File format](./file-format) — the `.oapp` schema.
- [Settings](./settings) — what's persisted between sessions.
- [Architecture](./architecture) — for contributors.
