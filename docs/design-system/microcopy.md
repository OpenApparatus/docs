---
title: Microcopy & tone
sidebar_position: 5
---

# Microcopy & tone of voice

Replace standard web terminology with **operational, spatial, or hardware-centric** terms — especially in any text that ships in the monospace font.

The goal: make the interface read like an instrument readout, not a marketing site.

## Substitution table

| Standard web copy | AR HUD substitution |
|---|---|
| Learn more | `READ_MANIFESTO`, `ACCESS_DOCS`, `VIEW_SCHEMATIC` |
| Features | `CORE_PROTOCOL`, `SYSTEM_MODULES` |
| Use cases | `TARGET_VECTORS` |
| Status: Online | `SYS.TRACKING_ACTIVE`, `ALL_SYSTEMS_NOMINAL`, `ANCHOR: DETECTED` |

## Rules

- **Uppercase, underscore-separated** for any HUD readout. `CORE_PROTOCOL`, not `Core Protocol`.
- **Keep prose in plain English.** Body paragraphs, intros, and explanations stay readable. The HUD voice is for labels, buttons, status lines, and section tags — *not* for documentation prose.
- **Don't invent jargon that doesn't map to anything.** `TELEMETRY_FLUX` is meaningless. `SYS.TRACKING_ACTIVE` works because it implies a real underlying signal.
- **Stay deterministic.** This is a behavioural-research toolchain — language should sound calibrated and reproducible, not mystical or generative.

## Examples

### Section headers / tags

```
[01] CORE_PROTOCOL          ← H4-equivalent tag, Space Mono uppercase
[02] SYSTEM_MODULES
[03] TARGET_VECTORS
```

### Live status lines

```
SYS.TRACKING_ACTIVE       ●
ANCHOR: DETECTED          ●
SEED: 42 · DETERMINISTIC  ●
```

(The `●` is the [pulsing status dot](./primitives#status-indicators-blinking-dots).)

### Buttons / CTAs

```
ACCESS_DOCS  →
VIEW_SCHEMATIC
RUN_SIMULATION
EXPORT_OBJ
```

## Don't

- ✗ "Click here to learn more" — replace with `ACCESS_DOCS →`.
- ✗ "Awesome features that will blow your mind" — pure marketing voice; doesn't fit.
- ✗ Mixed casing in HUD readouts (`Core_Protocol`, `core_protocol`). Always full uppercase.
- ✗ Decorative HUD copy that doesn't correspond to a real signal or action.
