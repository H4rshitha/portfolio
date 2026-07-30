import { useEffect, useRef } from 'react';
import { content } from '@/data/content';
import { useLoading } from '@/context/LoadingContext';
import Scene from './scene/Scene';
import SocialIcons from './SocialIcons';
import './styles/Landing.css';

export default function Landing() {
  const { registerTask } = useLoading();
  const releaseRef = useRef<(() => void) | null>(null);

  // Gate the Loading screen on the 3D scene's first render, not just a timer.
  useEffect(() => {
    releaseRef.current = registerTask();
    return () => releaseRef.current?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="hero" className="landing">
      <div className="landing__content">
        <span className="eyebrow">{content.identity.title}</span>
        <h1>{content.identity.name}</h1>
        <p className="landing__tagline">{content.identity.tagline}</p>
        <div className="landing__actions">
          <a href="#work" className="btn btn-primary">
            View Work
          </a>
          <a href="#contact" className="btn">
            Get in Touch
          </a>
        </div>
        <SocialIcons />
      </div>

      <div className="landing__scene" aria-hidden="true">
        <Scene onReady={() => releaseRef.current?.()} />
      </div>
    </section>
  );
}
