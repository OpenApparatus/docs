---
title: Settings & persistence
sidebar_position: 12
---

# Settings & persistence

Studio persists a small set of preferences across sessions in a JSON file under your user-profile application data directory.

## File location

| Platform | Path |
|---|---|
| **Windows** | `%APPDATA%\OpenApparatus\Studio\settings.json` |
| **macOS** | `~/Library/Application Support/OpenApparatus/Studio/settings.json` |
| **Linux** | `~/.config/OpenApparatus/Studio/settings.json` |

The path resolves from `Environment.SpecialFolder.ApplicationData`. Studio creates the directory on first save.

## What's persisted

| Field | Purpose |
|---|---|
| `windowX`, `windowY`, `windowWidth`, `windowHeight` | Window geometry. `NaN` means "auto-size on launch". |
| `windowMaximized` | Restore the maximized state. |
| `themeVariant` | `"Light"` or `"Dark"`. |
| `recentFiles` | Up to **8** recently opened `.oapp` paths, deduplicated. |
| `lastOpenedFile` | Path to the project opened in the previous session. |
| `lastExportFolder` | Last directory used for any export. |

## What's _not_ persisted in settings

Anything project-specific lives on the [`.oapp` file](./file-format), not in settings. That includes camera state, zoom, selection, and the placement constraints. Settings is strictly for cross-project preferences.

## Recent files

Surfaced in:

- The [welcome panel](./ui-tour#welcome-panel) on launch.
- The command palette's **File** category as quick-open entries.

The list is capped at 8 entries, deduplicated, and pruned if a path no longer resolves.

## Robustness

- Loading is best-effort: a missing or malformed `settings.json` falls back to defaults; the app still launches cleanly.
- Saving is fire-and-forget: failures (locked file, full disk) are swallowed so they don't block UI actions.

## Source

`Services/AppSettings.cs` defines the POCO and load / save methods. The settings instance lives on `MainWindowViewModel`, which writes on shutdown and after every recent-file or theme change.
