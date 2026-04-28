# OpenApparatus docs

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Deploy](https://github.com/OpenApparatus/docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/OpenApparatus/docs/actions/workflows/deploy.yml)

Documentation site for the [OpenApparatus](https://github.com/OpenApparatus) ecosystem — a small set of open-source tools for procedurally generating reproducible navigation environments for behavioural research.

Built with [Docusaurus](https://docusaurus.io/) and deployed to GitHub Pages.

## What's documented

The site has one section per repository in the org:

- **[Core](https://github.com/OpenApparatus/core)** — the engine-agnostic .NET library.
- **[Studio](https://github.com/OpenApparatus/studio)** — the cross-platform Avalonia desktop app.
- **[Unity](https://github.com/OpenApparatus/unity)** — the Unity Package Manager package.

Plus a shared introduction, getting-started page, and contributing guide.

## Local development

```bash
git clone https://github.com/OpenApparatus/docs.git
cd docs
npm install
npm start
```

The dev server lives at `http://localhost:3000` and hot-reloads on changes.

## Build

```bash
npm run build
```

Outputs static HTML to `build/`. Serve it locally with `npm run serve`.

## Deployment

Pushes to `main` trigger the [`deploy.yml`](.github/workflows/deploy.yml) workflow, which builds the site and publishes it to GitHub Pages.

## Contributing

Every page in the rendered site has an "Edit this page" link at the bottom — that opens the source `.md` file on GitHub. PRs welcome.

For broader contribution guidance see the [Contributing page](docs/contributing.md).

## License

MIT — see [LICENSE](LICENSE).
