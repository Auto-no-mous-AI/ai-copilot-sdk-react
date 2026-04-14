# AI Copilot React SDK

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
