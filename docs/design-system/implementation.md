---
title: Implementation notes
sidebar_position: 6
---

# Implementation notes

How to apply the AR HUD theme across each surface of the OpenApparatus ecosystem.

## Docusaurus (this docs site)

- Apply **Space Mono** to sidebar navigation and section headers.
- Use the [**Glass HUD panel**](./primitives#glass-hud-panel) treatment for code blocks and callout admonitions — translucent emerald-deep background, emerald-400 hairline border, soft 32 px shadow.
- Layer the [perspective grid](./primitives#perspective-spatial-grid) on the page substrate (`body::before`) so all content floats over the calibrated 3D field.
- Active sidebar items, breadcrumbs, and primary buttons take the **emerald-500 / 600** accent. Body links stay quiet (emerald-700 with underline) until hover.

The CSS variables and overrides live in [`src/css/custom.css`](https://github.com/OpenApparatus/docs/blob/main/src/css/custom.css).

## Avalonia (OpenApparatus Studio)

Studio is a desktop app, so it can pull more aggressive HUD effects than a browser allows:

- **Acrylic / blur window effects** — use the OS-native blur (Mica on Windows 11, vibrancy on macOS, blur on supported Linux compositors) for the main window background. This replicates the Glass HUD behind the entire app, not just per-panel.
- **Visual editor canvas** — render the [perspective spatial grid](./primitives#perspective-spatial-grid) as the canvas background. The grid orients the user in space and reinforces the "looking through a HUD" metaphor.
- **Theme tokens** — port the emerald palette into `src/OpenApparatus.Studio/Themes/Tokens.axaml` so every control consumes the system colors instead of stock Fluent defaults.
- **Iconography** — keep icons in the existing Lucide stroke style (already in `Themes/Icons.axaml`); recolor strokes to `#10b981` for active state and `#064e3b` for neutral.

## Unity (OpenApparatus.Unity)

Unity rendering is full 3D — the HUD aesthetic mostly applies to *editor* surfaces (custom inspector, scene gizmos) rather than runtime visuals.

- **Custom inspector** — use emerald accent for the Generate / Reseed / Clear buttons; keep technical labels in mono.
- **Scene gizmos** — when drawing debug overlays for cell boundaries or doorways, use emerald-500 strokes against transparent fills. The runtime mesh itself remains untextured / shader-driven by the consuming scene.

## Marketing surfaces (future)

When OpenApparatus.org or similar marketing sites are built, they should:

- Lead with a **hero spatial grid** (60 px × 60 px, tilted with the 3D transform from [Primitives → Perspective grid](./primitives#perspective-spatial-grid)).
- Use the [HUD microcopy](./microcopy) substitutions on every CTA, feature tag, and status badge.
- Reserve emerald saturation for **interactive** elements; keep the canvas in the emerald-50 range so the accent has somewhere to land.

## Source of truth

Anything ambiguous should default to the rules in:

- [Concept & philosophy](./overview)
- [Palette](./palette)
- [Typography](./typography)
- [Primitives](./primitives)
- [Microcopy & tone](./microcopy)

When in doubt: **clinical, energetic, spatial.** Not consumer, not soft, not generative.
