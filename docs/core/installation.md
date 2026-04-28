---
title: Installation
sidebar_position: 2
---

# Installation

## Requirements

- **.NET 8 SDK** or newer.
- The library multi-targets `net8.0` and `netstandard2.1` (the latter for Unity 2021.2+ compatibility).

## From source (current)

Until `OpenApparatus.Core` ships on NuGet, depend on it as a `ProjectReference` from a sibling clone:

```bash
git clone https://github.com/OpenApparatus/core.git
cd core
dotnet test
```

Reference it from your own project:

```xml
<ProjectReference Include="..\path\to\core\src\OpenApparatus.Core\OpenApparatus.Core.csproj" />
```

## NuGet (planned)

Once v0.1 ships, install via:

```bash
dotnet add package OpenApparatus.Core
```

This page will be updated when that lands.

## Verifying the install

A minimal smoke test once you have a reference:

```csharp
using OpenApparatus.Core;

// (Stub — actual API names will be filled in as A1 lands.)
// var rng = new SeededRandom(seed: 42);
// var plan = generator.Generate(spec, rng);
// Console.WriteLine(plan.Cells.Count);
```
