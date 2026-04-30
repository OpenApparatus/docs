---
title: Installation
sidebar_position: 2
---

# Installation

## Requirements

- **.NET 8 SDK** or newer.
- A clone of [OpenApparatus/core](https://github.com/OpenApparatus/core) (Studio currently references it via a relative `ProjectReference`).

## Clone alongside Core

The default project layout expects `core` and `studio` as siblings:

```
parent/
├── openapparatus-core/
└── openapparatus-studio/
```

```bash
git clone https://github.com/OpenApparatus/core.git openapparatus-core
git clone https://github.com/OpenApparatus/studio.git openapparatus-studio
```

## Run

```bash
cd openapparatus-studio
dotnet run --project src/OpenApparatus.Studio
```

The app opens with the [welcome panel](./ui-tour#welcome-panel) — pick **New** to start a blank project, **Open** to load a `.oapp`, or **Shortcuts** to see the keyboard reference.

## Custom Core location

If your clone of `core` lives somewhere other than `../openapparatus-core/`, override the `OpenApparatusCoreRepo` MSBuild property:

```bash
dotnet build -p:OpenApparatusCoreRepo=/path/to/openapparatus-core/
```

Or set it in your shell environment so `dotnet run` picks it up.

## Platforms

Avalonia 11 targets Windows, macOS, and Linux from the same project. The build is x64; arm64 has not been verified.

## Future: NuGet

Once `OpenApparatus.Core` ships on NuGet, the local-clone requirement goes away — Studio will reference Core as a NuGet package and the build will work without a sibling repo.
