---
title: Overview
sidebar_position: 1
---

# Studio overview

**OpenApparatus Studio** is a cross-platform desktop app for authoring, previewing, and exporting OpenApparatus floor plans. It's a thin GUI wrapper around `OpenApparatus.Core`.

> Repo: [OpenApparatus/studio](https://github.com/OpenApparatus/studio) · License: MIT · Built with [Avalonia 11](https://avaloniaui.net/) on .NET 8.

## What it does (v0.1 target)

- **Live 2D top-down preview** of a generated floor plan, redrawing on every parameter change.
- **Parameter panel** — width / height / tile size, rectangle-room count, wall thickness / height, door width / height, seed, outer-entrance toggle.
- **Save / load** of `.floorplan.json` files. Only the parameter spec is saved; the floor plan itself is regenerated deterministically from the seed.
- **Export OBJ** of the assembled 3D geometry, one OBJ object per room, with named groups for floor / walls / ceiling.

## Why Studio exists

Researchers shouldn't need to write C# to design an apparatus. Studio gives them:

- A visual feedback loop — change a parameter, see the result immediately.
- A reproducible artefact — the saved `.floorplan.json` records exactly what they need to share with collaborators.
- A clean handoff — export OBJ for downstream rendering or fabrication, or share the JSON for someone else to load.

## Where to next

- [Installation](./installation) — clone, build, run.
- [UI tour](./ui-tour) — what each part of the window does.
- [File format](./file-format) — the `.floorplan.json` spec.
- [OBJ export](./obj-export) — how the export is structured.
