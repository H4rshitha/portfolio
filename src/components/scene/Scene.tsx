import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import type { Mesh, Points as ThreePoints } from 'three';
import Lighting from './lighting';
import { usePointerNDC } from './mouseUtils';
import { useIsMobile } from './resizeUtils';

function Blob({ simplified }: { simplified: boolean }) {
  const meshRef = useRef<Mesh>(null);
  const pointer = usePointerNDC();

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const targetRotX = pointer.current.y * 0.4;
    const targetRotY = pointer.current.x * 0.4;
    const ease = Math.min(delta * 2, 1);
    mesh.rotation.x += (targetRotX - mesh.rotation.x) * ease;
    mesh.rotation.y += (targetRotY - mesh.rotation.y) * ease;
  });

  return (
    <Float speed={simplified ? 0.6 : 1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.4, simplified ? 4 : 8]} />
        <MeshDistortMaterial
          color="#c084fc"
          roughness={0.15}
          metalness={0.4}
          distort={simplified ? 0.25 : 0.4}
          speed={simplified ? 1 : 2}
        />
      </mesh>
    </Float>
  );
}

function ParticleField({ count }: { count: number }) {
  const pointsRef = useRef<ThreePoints>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) pointsRef.current.rotation.y += delta * 0.02;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#7dd3fc"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

export default function Scene({ onReady }: { onReady?: () => void }) {
  const isMobile = useIsMobile();

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={() => onReady?.()}
    >
      <Lighting />
      <Blob simplified={isMobile} />
      <ParticleField count={isMobile ? 250 : 800} />
    </Canvas>
  );
}
