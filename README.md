# AI Copilot React SDK
[![CI](https://github.com/Auto-no-mous-AI/ai-copilot-sdk-react/actions/workflows/ci.yml/badge.svg)](https://github.com/Auto-no-mous-AI/ai-copilot-sdk-react/actions/workflows/ci.yml) [![Release](https://github.com/Auto-no-mous-AI/ai-copilot-sdk-react/actions/workflows/release.yml/badge.svg)](https://github.com/Auto-no-mous-AI/ai-copilot-sdk-react/actions/workflows/release.yml)



Standalone React hook wrapper for the core AI Copilot web SDK.

## Package

This repository publishes:

- `@auto-no-mous/copilot-react`

## What it includes

- `useCopilot(...)` React hook
- dependency on the core widget runtime from `@auto-no-mous/copilot-web`
- example React component source

## Install

```bash
npm install @auto-no-mous/copilot-react @auto-no-mous/copilot-web react
```

## Usage

```tsx
import { useCopilot } from '@auto-no-mous/copilot-react';

export function CopilotBootstrap() {
  useCopilot({
    appId: 'app_123',
    environment: 'prod',
    installToken: 'itkn_xxx',
    apiBaseUrl: 'https://api.example.com/api',
  });

  return null;
}
```

## Build

```bash
npm install
npm run build
```

## Example

See [example/App.tsx](example/App.tsx).

## CI And Release

- Manual CI trigger is available through the CI workflow in GitHub Actions.
- Release instructions live in [docs/releasing.md](./docs/releasing.md).

