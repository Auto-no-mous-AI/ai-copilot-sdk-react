# React SDK Compatibility Contract

## Package

`@auto-no-mous/copilot-react`

## Stable Surface

- `useCopilot(options)` remains the primary integration API.
- React 18+ remains supported.
- `@auto-no-mous/copilot-web` stays a peer dependency.

## Enterprise Guarantees

- The hook must not initialize more than once for the same mounted component lifecycle.
- Configuration errors must be visible to developers during integration.
- Host applications remain responsible for token minting and tenant authorization.
