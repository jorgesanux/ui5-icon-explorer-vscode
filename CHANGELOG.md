# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2026-08-18

### Changed
- Updated the extension toolchain to latest compatible releases:
  - `@types/assert` → `^1.5.11`
  - `@types/vscode` → `^1.125.0`
  - `@types/webpack-env` → `^1.18.8`
  - `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` → `^8.67.0`
  - `@vscode/test-web` → `^0.0.81`
  - `@vscode/vsce` → `^3.9.2`
  - `mocha` → `^11.8.0`
  - `ovsx` → `^1.1.1`
  - `ts-loader` → `^9.6.2`
  - `webpack` → `^5.109.2`
- Updated `engines.vscode` from `^1.95.0` to `^1.125.0` to align with the new `@types/vscode` and packaging requirements.

### Security
- Regenerated lockfile and dependency tree to remove known vulnerabilities (`npm audit` now reports 0 vulnerabilities).

### Compatibility
- Validated packaging flow with both Marketplace/OpenVSX tooling (`@vscode/vsce` and `ovsx` CLI).

## [1.2.0] - 2026-03-08

### Security
- Fixed 23 vulnerabilities (6 low, 4 moderate, 11 high, 2 critical) by upgrading all devDependencies.
- Applied `npm overrides` to force secure versions of `minimatch`, `diff`, and `serialize-javascript` in transitive dependencies.

### Changed
- **engines.vscode**: Updated minimum required VS Code version from `^1.91.0` to `^1.95.0`.
- **@vscode/vsce**: Updated from `^2.31.1` to `^3.7.1` (major version upgrade with improved publishing support).
- **typescript**: Updated from `^5.4.5` to `^5.9.3`.
- **webpack**: Updated from `^5.96.1` to `^5.105.4` (fixes SSRF vulnerability in `buildHttp`).
- **eslint**: Updated from `^8.57.0` to `^8.57.1`.
- **@typescript-eslint/eslint-plugin** and **@typescript-eslint/parser**: Updated from `^7.x` to `^8.56.1`.
- **@types/vscode**: Updated from `^1.91.0` to `^1.95.0`.
- **@vscode/test-web**: Updated from `^0.0.63` to `^0.0.80`.
- **@vscode/codicons**: Updated from `^0.0.36` to `^0.0.44` (includes newer codicons).
- **mocha**: Updated from `^10.5.2` to `^11.7.5`.
- **copy-webpack-plugin**: Updated from `^12.0.2` to `^14.0.0`.
- **@types/mocha**: Updated from `^10.0.7` to `^10.0.10`.
- Updated ESLint config: replaced removed `@typescript-eslint/semi` rule with the base `semi` rule (required by `@typescript-eslint` v8).

### Added
- **ovsx** (`^0.10.9`): Added the Open VSX Registry CLI tool as a devDependency.
- `publish-vsce` script: Publishes the extension to the VS Code Marketplace using `vsce publish`.
- `publish-ovsx` script: Publishes the extension to the Open VSX Registry using `ovsx publish`.

## [1.1.0] - 2024-11-18

### Changed
- Webpack Update: Updated Webpack from version 5.93.0 to 5.96.1 to improve security and performance.
- @vscode/test-web Update: Updated the version of @vscode/test-web to maintain compatibility with the latest versions of Visual Studio Code.
- New Icons: Added the unsynchronize icon and updated the unicode for the pdf-attachment icon.
- Font File Update: Updated the .woff font file to include new icons and improvements.
- Group Ordering: Ordered icon groups in ascending order to improve readability and maintenance.

## [1.0.0] - 2024-08-11

### Added
- Support for searching and filtering icons
- Copy icons in different formats
- Context menu for copying icons
- Icon tags on hover
- Support of SAP Icons font


## [1.0.1] - 2024-08-14

### Added
- Entry point for desktop environments
- Content security police for static resources.
- Nonce generation
