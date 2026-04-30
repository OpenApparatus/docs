---
title: Contributing
sidebar_position: 99
displayed_sidebar: coreSidebar
---

# Contributing

OpenApparatus is open source under the MIT license. Contributions are welcome.

## Where to file issues

File issues in the repo that owns the surface area you're reporting on:

- **Generation logic, topology, geometry, determinism** → [OpenApparatus/core](https://github.com/OpenApparatus/core/issues)
- **Studio app behaviour, UI, file format, OBJ export** → [OpenApparatus/studio](https://github.com/OpenApparatus/studio/issues)
- **Unity component behaviour, editor workflow, package install** → [OpenApparatus/unity](https://github.com/OpenApparatus/unity/issues)
- **Documentation typos, missing sections, broken links** → [OpenApparatus/docs](https://github.com/OpenApparatus/docs/issues)

If you're not sure, file in `core` — we'll move it.

## Editing these docs

This site lives at [OpenApparatus/docs](https://github.com/OpenApparatus/docs). Every page has an "Edit this page" link at the bottom that opens the source `.md` on GitHub.

Local development:

```bash
git clone https://github.com/OpenApparatus/docs.git
cd docs
npm install
npm start
```

The dev server lives at `http://localhost:3000`.

## Code contributions

Each repo has its own `CONTRIBUTING.md` (when present) for coding-style and PR-process specifics. In general:

- Open an issue first for non-trivial changes so we can agree on direction before code is written.
- Keep PRs focused — one logical change per PR.
- Match the existing style; we don't enforce a formatter beyond `dotnet format` defaults.
- For changes to generation logic, include or update tests demonstrating the determinism guarantee still holds.

## License

All contributions are licensed under MIT, the same license as the project.
