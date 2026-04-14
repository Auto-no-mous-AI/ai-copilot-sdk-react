# Getting Started

## Build the package

```bash
npm install
npm run build
```

## Use the hook

The hook initializes the copilot widget when the component mounts.

```tsx
useCopilot({
  appId: 'app_123',
  environment: 'prod',
  installToken: 'itkn_xxx',
  apiBaseUrl: 'http://127.0.0.1:3000/api',
});
```

## Local workspace note

This standalone repo points at the local `ai-copilot-sdk` repo through a `file:` dependency so it can be built and tested in the same workspace without publishing first.
