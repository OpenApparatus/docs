---
title: Compatibility
sidebar_position: 6
---

# Compatibility

## Unity versions

The package targets **Unity 2022.3 LTS** and newer. Older LTS versions are not supported.

## .NET / scripting backend

- The bundled `OpenApparatus.Core.dll` is built against **`netstandard2.1`**, which is the API surface Unity's scripting runtime uses since 2021.2.
- Both **Mono** and **IL2CPP** scripting backends are supported.
- Both **.NET Standard 2.1** and **.NET Framework** API compatibility levels in Player Settings are supported (the DLL is `netstandard2.1`, the lowest common denominator).

## Render pipelines

The package itself doesn't ship shaders or materials — you provide the three Materials on `FloorPlanInstance`. So any render pipeline works:

- **Built-in** — use any built-in shader on the Materials.
- **URP** — use URP/Lit or any URP-compatible shader.
- **HDRP** — use HDRP/Lit or any HDRP-compatible shader.

If a Material slot is left empty, you'll see Unity's default magenta error material on that submesh — useful as a smoke test.

## Platforms

Anywhere Unity 2022.3 LTS runs — Windows, macOS, Linux, iOS, Android, WebGL, consoles. There is no platform-specific code in either Core or the package.

## Determinism across platforms

The same seed and parameters produce the same `FloorPlan` on every supported platform — that's the whole point of [determinism](../core/determinism). Floating-point ordering in the mesh data is identical across platforms because Core does no floating-point math during topology generation; geometry math is order-stable.
