import { useEffect, useRef, useState } from 'react';
import { useLoading } from '@/context/LoadingContext';
import './styles/Loading.css';

const MIN_DISPLAY_MS = 600;

export default function Loading() {
  const { isLoading, registerTask } = useLoading();
  const [mounted, setMounted] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);

  // Guarantee a minimum splash duration so the screen doesn't flash on fast loads.
  useEffect(() => {
    const release = registerTask();
    const timer = window.setTimeout(release, MIN_DISPLAY_MS);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoading || !mounted) return;
    const el = rootRef.current;
    if (!el) {
      setMounted(false);
      return;
    }
    const onEnd = () => setMounted(false);
    el.addEventListener('transitionend', onEnd, { once: true });
    el.classList.add('loading--hidden');
    return () => el.removeEventListener('transitionend', onEnd);
  }, [isLoading, mounted]);

  if (!mounted) return null;

  return (
    <div ref={rootRef} className="loading" role="status" aria-live="polite">
      <span className="loading__mark">HP</span>
      <span className="loading__label">Loading…</span>
    </div>
  );
}
