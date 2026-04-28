---
title: Typography
sidebar_position: 3
---

# Typography

The theme uses a **strict two-font system** to separate readable prose from technical data.

## Inter (sans-serif)

- **Role:** long-form reading, paragraphs, primary marketing headings.
- **Weights:** 400 (Regular), 600 (Semibold), 700 (Bold).
- **Application:** body text, H1 / H2 / H3 titles.

## Space Mono (monospace)

- **Role:** technical data, metadata, navigation, buttons, small labels, HUD elements.
- **Weights:** 400 (Regular), 700 (Bold).
- **Application:** navigation links, button text, small uppercase tags (e.g. `[01] CORE_PROTOCOL`), code snippets, coordinate readouts.

## Styling rules

Space Mono is **almost always used in uppercase** with increased letter-spacing — `tracking-widest` in Tailwind, or `0.1em` in plain CSS.

### Examples

`[01] CORE_PROTOCOL`

`STATUS · ONLINE`

`X: 0042   Y: 0117   Z: -0089`

```css
.hud-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

## Heading scale

| Element | Font | Treatment |
|---|---|---|
| H1, H2, H3 | Inter | Sentence-case, weight 700, tight letter-spacing (`-0.01em`) |
| H4, H5, H6 | Space Mono | UPPERCASE, weight 700, `0.06em` letter-spacing |
| Body | Inter | Weight 400, `1.6` line-height |
| Code / metadata | Space Mono | Weight 400/700, often UPPERCASE |
