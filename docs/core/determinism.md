---
title: Determinism
sidebar_position: 6
---

# Determinism

The central reproducibility guarantee:

> **Same seed + same parameters → same `FloorPlan`. Always. On every platform.**

This is what makes OpenApparatus useful for behavioural research. A methods section that records "seed = 42, width = 5, height = 4, rooms = 6" is enough for another lab to reconstruct the exact apparatus, identical down to the last vertex.

## How it's enforced

- Every generator and passage assigner takes a `SeededRandom` instance — the only stochastic input.
- `SeededRandom` is a deterministic PRNG with a fixed algorithm; it does **not** delegate to `System.Random` (whose internal state changed across .NET versions).
- The library uses no wall-clock time, GUIDs, hash randomisation, or other implicit non-determinism.
- All collection iteration is over ordered structures; no dictionary-iteration-order foot-guns.

## What you record

To reconstruct a `FloorPlan`, you need:

1. The OpenApparatus.Core version (e.g. `0.1.0`).
2. The seed (an integer).
3. The parameter spec — width, height, room count, etc.

Studio's `.floorplan.json` saves exactly these three things. The mesh itself is regenerated on load. See [Studio: file format](../studio/file-format).

## What is *not* guaranteed across versions

A `FloorPlan` is reproducible **within a single version of OpenApparatus.Core**. Algorithm changes between versions may produce a different floor plan from the same seed and parameters — that's why you record the version.

When we change generation logic in a way that breaks reproducibility, the version bumps to a new minor (during pre-release) or major (post-1.0).

## Testing determinism

Determinism is covered by sentinel tests in `core` — fixed seeds and parameters, asserted against a hand-recorded golden output. If you contribute generation logic, your PR should include or update one of these tests.
