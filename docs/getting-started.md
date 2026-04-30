---
title: Getting started
sidebar_position: 2
displayed_sidebar: coreSidebar
---

# Getting started

Pick the path that matches your role.

## I want to author floor plans visually

Use **Studio** — a cross-platform desktop app that lets you tweak parameters, see a live 2D preview, and export to JSON or OBJ.

→ [Studio overview](./studio/overview) → [Studio installation](./studio/installation)

## I want to use floor plans in a Unity scene

Use the **Unity** package — drop a `FloorPlanInstance` component on a GameObject and the environment rebuilds live in the Editor.

→ [Unity overview](./unity/overview) → [Unity installation](./unity/installation)

## I want to call the library from .NET

Use **Core** directly — depend on `OpenApparatus.Core` from your own .NET project.

→ [Core overview](./core/overview) → [Core installation](./core/installation)

## I want to understand the design

Start with [Core architecture](./core/architecture) and [determinism](./core/determinism). Both Studio and Unity are thin adapters over Core, so understanding Core is enough to understand the project as a whole.
