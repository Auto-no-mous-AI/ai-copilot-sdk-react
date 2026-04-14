import { useEffect } from 'react';
import { initCopilot, InitCopilotOptions } from '@auto-no-mous/copilot-web';

export function useCopilot(options: InitCopilotOptions) {
  useEffect(() => {
    let mounted = true;
    void (async () => {
      if (!mounted) return;
      await initCopilot(options);
    })();

    return () => {
      mounted = false;
    };
  }, [options]);
}
