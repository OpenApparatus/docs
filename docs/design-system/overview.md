---
title: Overview
sidebar_position: 1
---

# Design system

> <span className="hud-label"><span className="hud-dot" />[01] AR_HUD_THEME · ACTIVE</span>

The OpenApparatus docs site, marketing surfaces, and product UI follow a single design system: **AR HUD**.

## Concept & philosophy

The **AR HUD** (Augmented Reality Heads-Up Display) theme frames the OpenApparatus ecosystem as a *spatial computing lens*. It implies that the software is projecting rigorous, deterministic digital geometry over the physical world.

## Key traits

- **Clinical but energetic.** Clinical white / mint backgrounds offset by highly saturated, energetic emerald accents.
- **Layered depth.** Heavy reliance on glassmorphism (background blurring) to create a sense of looking *through* an interface.
- **Technical precision.** Monospace typography, targeting crosshairs, coordinate grids, and operational microcopy.

## What's in this section

- [**Palette**](./palette) — the emerald scale and how each role is used.
- [**Typography**](./typography) — Inter for prose, Space Mono for HUD readouts.
- [**Primitives**](./primitives) — glass panels, targeting crosshairs, status dots, perspective grids.

## How to use it

If you're contributing to the docs, marketing site, or any user-facing product surface, this is the source of truth. Specifically:

- Reach for the **emerald scale** and the role-mapped variables, not arbitrary greens.
- Use **Space Mono uppercase** for technical/HUD elements (nav, buttons, tags, metadata) and **Inter** for prose.
- Wrap prominent panels in the **Glass HUD** treatment with **targeting crosshairs**.
- Place a **status dot** next to a label only when it implies live telemetry or an active system.
- Layer content over the **perspective grid** so the canvas reads as a calibrated 3D space, not a blank page.
