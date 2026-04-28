---
title: Primitives
sidebar_position: 4
---

# Primitives

Four reusable UI elements carry most of the AR HUD aesthetic.

## Glass HUD panel

Used for cards, modals, and navigation bars. Creates the illusion of a physical glass pane floating above the AR grid.

```css
.glass-panel {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(52, 211, 153, 0.4); /* emerald-400 / 40% */
  box-shadow: 0 8px 32px rgba(4, 120, 87, 0.05);
}
```

In dark mode, swap the white tint for a translucent deep emerald:

```css
[data-theme='dark'] .glass-panel {
  background-color: rgba(2, 44, 34, 0.7); /* emerald-950 / 70% */
}
```

## Targeting crosshairs (corner brackets)

Applied to the four corners of prominent HUD panels to give them a "targeting box" feel.

- **Implementation:** absolutely-positioned 14×14 px brackets at each corner.
- **Style:** `border-color: #10b981` (emerald-500), `border-width: 2px`.
- **Positioning:** offset by `-1px` (e.g. `top: -1px; left: -1px`) so they perfectly overlap the 1 px panel border.

```css
.glass-panel { position: relative; }
.glass-panel::before,
.glass-panel::after {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  border: 2px solid #10b981;
}
.glass-panel::before {
  top: -1px; left: -1px;
  border-right: 0; border-bottom: 0;
}
.glass-panel::after {
  bottom: -1px; right: -1px;
  border-left: 0; border-top: 0;
}
```

The remaining two corners (top-right, bottom-left) can be added with an inner element or pseudo-elements on a wrapping div — the docs site uses a `.hud-corners` helper.

## Status indicators (blinking dots)

Used next to technical labels to imply live telemetry or active systems.

- **Implementation:** a 6–8 px dot (or square).
- **Style:** `background-color: #10b981` (emerald-500).
- **Animation:** opacity pulses 1 → 0.5 over 2 s.

```css
.hud-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #10b981;
  border-radius: 50%;
  animation: hud-pulse 2s ease-in-out infinite;
}
@keyframes hud-pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.45; }
}
```

In Tailwind: `animate-pulse` is the equivalent.

### Usage

> <span className="hud-label"><span className="hud-dot" />STATUS · ONLINE</span>

Reserve dots for *meaningful* live signals — a status line, a streaming readout, an active sync. Decorative dots dilute the meaning.

## Perspective spatial grid

Used in backgrounds (or behind hero graphics) to establish 3D space.

```css
.spatial-grid {
  background-image:
    linear-gradient(to right, rgba(16, 185, 129, 0.15) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(16, 185, 129, 0.15) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

The docs site applies this to the page substrate via `body::before` so all content layers above the grid.

### 3D transform — tilted hero grid

For hero or showcase graphics, lay the grid flat across the Z-axis so it reads as a calibrated floor extending into the scene:

```css
.spatial-grid--perspective {
  /* …same gradients as above… */
  background-size: 60px 60px;
  transform: perspective(1000px) rotateX(60deg);
  transform-origin: center top;
}
```

Don't use the tilted variant in body content — keep perspective effects in hero / showcase areas where they don't fight with prose.

## Don't

- Don't apply glass blur to small elements (chips, inline code) — the effect is meant for *panels*, and overuse erodes the layered depth.
- Don't put corner brackets on every container — they signal "primary HUD frame" and lose meaning if they're decorative.
- Don't pulse a dot that isn't tied to live state. Static dots are fine; pulsing implies telemetry.
- Don't tilt or skew the grid in body content — keep perspective effects in hero / showcase areas.
