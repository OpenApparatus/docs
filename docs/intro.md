---
title: Introduction
slug: /
sidebar_position: 1
---

# OpenApparatus

**OpenApparatus** is a small ecosystem of open-source tools for procedurally generating reproducible navigation environments — multi-room floor plans, mazes, and behavioural-research apparatuses — with deterministic output suitable for replication across studies.

Same seed + same parameters → same environment. Methods sections only need to record the seed and parameters for a result to be reconstructable.

## The three repos

The project is split across three repositories, each with a focused responsibility:

| Repo | What it is | Audience |
|---|---|---|
| [**core**](https://github.com/OpenApparatus/core) | Engine-agnostic .NET library — topology, geometry, determinism. | Library consumers, integrators. |
| [**studio**](https://github.com/OpenApparatus/studio) | Cross-platform Avalonia desktop app for authoring, previewing, and exporting floor plans. | Researchers, designers. |
| [**unity**](https://github.com/OpenApparatus/unity) | Unity Package Manager (UPM) package consuming Core to spawn environments in scenes. | Unity developers. |

```
           ┌──────────────────┐
           │ OpenApparatus.   │
           │ Core (.NET lib)  │
           └────────▲─────────┘
                    │
         ┌──────────┴──────────┐
         │                     │
┌────────┴─────────┐   ┌───────┴──────────┐
│ OpenApparatus    │   │ OpenApparatus    │
│ Studio (Avalonia)│   │ Unity (UPM)      │
└──────────────────┘   └──────────────────┘
```

## Where to go next

- **[Getting started](./getting-started)** — pick the path that matches your role.
- **[Core](./core/overview)** — for working directly with the .NET library.
- **[Studio](./studio/overview)** — for authoring floor plans without writing code.
- **[Unity](./unity/overview)** — for using floor plans in Unity scenes.

## Status

Pre-release — under active early development. Public APIs are unstable until v0.1.
