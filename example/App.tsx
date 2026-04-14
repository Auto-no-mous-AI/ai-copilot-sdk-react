import React from 'react';
import { useCopilot } from '../src/index';

export function App() {
  useCopilot({
    appId: 'demo-app',
    environment: 'dev',
    installToken: 'replace-with-real-install-token',
    apiBaseUrl: 'http://127.0.0.1:3000/api',
    theme: {
      primary: '#0f8a6f',
      drawerWidth: 460,
      placement: 'right',
    },
  });

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '48px', color: '#14324a' }}>
      <h1>React Host Example</h1>
      <p>This component bootstraps the AI Copilot widget in a React app.</p>
    </main>
  );
}
