import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ContainerProps } from 'react-three-fiber';

const Canvas = dynamic(
  () => import('react-three-fiber').then(pack => pack.Canvas),
  { ssr: false }
) as React.NamedExoticComponent<ContainerProps>;

const Model = dynamic(
  () => import('../components/Model'),
  { ssr: false }
);

const OrbitControls = dynamic(
  () => import('drei').then(pack => pack.OrbitControls),
  { ssr: false }
);

const Lights = dynamic(
  () => import('../components/Light'),
  { ssr: false }
);

export function CanvasModel() {
  const [gltfMoviment, setGltfMoviment] = useState(true);

  return (
    <Canvas 
      colorManagement 
      camera={{ position: [100, 0, 300] }}
      onMouseEnter={() => setGltfMoviment(false)}
      onMouseLeave={() => setGltfMoviment(true)}
    >
      <OrbitControls />
      <Lights />
      <Model moviment={gltfMoviment} />
    </Canvas>
  )
}