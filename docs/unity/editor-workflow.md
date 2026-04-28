---
title: Editor workflow
sidebar_position: 4
---

# Editor workflow

`FloorPlanInstance` is designed so that working in the Editor feels live — change a number, see the result.

## Live rebuild on parameter change

When `autoRegenerateInEditor` is on, every inspector edit triggers a regeneration:

1. Unity calls `OnValidate` on the component.
2. The component schedules a rebuild via `EditorApplication.delayCall`.
3. By the next editor tick, multiple rapid edits have collapsed into a single rebuild — the **debounce** that prevents thrashing while you drag a slider.

This means you can scrub a slider without Unity locking up regenerating on every frame.

## Manual control

The custom inspector (`Editor/FloorPlanInstanceEditor.cs`) adds three buttons:

| Button | What it does |
|---|---|
| **Generate** | Rebuild now, using current parameters. Useful when `autoRegenerateInEditor` is off. |
| **Reseed** | Roll a new random seed and rebuild. Quick way to flip through plans without leaving the inspector. |
| **Clear** | Destroy all spawned children. Gives you a clean GameObject to inspect or reparent. |

## Toggling auto-rebuild

Turn `autoRegenerateInEditor` off when:

- You're editing many fields at once and don't want to wait for intermediate rebuilds.
- You're tweaking parameters that don't visually change anything (renaming, materials).
- You're profiling or debugging and want full control over when generation runs.

## Play mode

The component generates once on `Awake` and doesn't auto-rebuild on parameter changes during play. Parameter tweaks during play are not preserved when you exit play mode — same rule as any Unity component.

If you need runtime regeneration (e.g. for a study that varies parameters between trials), call `Generate()` on the component from your own script.
