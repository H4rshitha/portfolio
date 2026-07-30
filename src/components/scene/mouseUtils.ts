import { useEffect, useRef } from 'react';

export interface PointerState {
  x: number;
  y: number;
}

/** Tracks pointer position in normalized device coords ([-1, 1]) via a ref,
 * so consumers can read it inside useFrame without triggering re-renders. */
export function usePointerNDC() {
  const pointer = useRef<PointerState>({ x: 0, y: 0 });

  useEffect(() => {
    function handlePointerMove(e: PointerEvent) {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return pointer;
}
