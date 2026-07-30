import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from 'react';

interface LoadingContextValue {
  isLoading: boolean;
  registerTask: () => () => void;
}

const LoadingContext = createContext<LoadingContextValue | null>(null);

/**
 * Tracks outstanding "ready" tasks (fonts, 3D scene, etc.) so the Loading
 * screen only fades out once everything gating first paint has resolved.
 */
export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pendingCount = useRef(0);
  const settledRef = useRef(false);

  const registerTask = useCallback(() => {
    pendingCount.current += 1;
    let released = false;

    return () => {
      if (released) return;
      released = true;
      pendingCount.current -= 1;
      if (pendingCount.current <= 0 && !settledRef.current) {
        settledRef.current = true;
        setIsLoading(false);
      }
    };
  }, []);

  const value = useMemo(() => ({ isLoading, registerTask }), [isLoading, registerTask]);

  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
}

export function useLoading() {
  const ctx = useContext(LoadingContext);
  if (!ctx) throw new Error('useLoading must be used within a LoadingProvider');
  return ctx;
}
