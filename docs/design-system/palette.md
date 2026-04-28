---
title: Palette
sidebar_position: 2
---

# Palette

The theme relies heavily on the **emerald color scale** (Tailwind CSS defaults). Every role below maps to a specific emerald shade — don't substitute arbitrary greens.

## Base layer (world)

| Role | Token | Value |
|---|---|---|
| <span className="swatch" style={{background: '#ecfdf5'}} /> Background (Canvas) | `emerald-50` | `#ecfdf5` |
| <span className="swatch" style={{background: 'rgba(16, 185, 129, 0.15)'}} /> Grid lines | `emerald-500 / 15%` | `rgba(16, 185, 129, 0.15)` |

## Text & ink

| Role | Token | Value |
|---|---|---|
| <span className="swatch" style={{background: '#022c22'}} /> Primary headings / text | `emerald-950` | `#022c22` |
| <span className="swatch" style={{background: '#064e3b'}} /> Primary body | `emerald-900` | `#064e3b` |
| <span className="swatch" style={{background: 'rgba(6, 95, 70, 0.8)'}} /> Secondary body | `emerald-800 / 80%` | `rgba(6, 95, 70, 0.8)` |
| <span className="swatch" style={{background: '#047857'}} /> Muted / metadata | `emerald-700` | `#047857` |

## Accents & UI

| Role | Token | Value |
|---|---|---|
| <span className="swatch" style={{background: '#10b981'}} /> Primary accent (borders, icons, emphasized UI) | `emerald-500` | `#10b981` |
| <span className="swatch" style={{background: '#34d399'}} /> Secondary accent (hover, active) | `emerald-400` | `#34d399` |
| <span className="swatch" style={{background: '#059669'}} /> Deep accent (buttons, badges) | `emerald-600` | `#059669` |

## Rules

- **Don't introduce greens outside this scale.** All greens come from emerald-50 through emerald-950.
- **Saturated accents only on UI elements.** The page itself stays in the emerald-50 / 100 / 950 range; saturation belongs on borders, buttons, and active states.
- **Translucency over flat fills** for any surface that should feel like a HUD panel — see [Primitives → Glass HUD](./primitives#glass-hud-panel).
