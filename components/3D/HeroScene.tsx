import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import DuffelBagModel from './DuffelBag';

const HeroScene: React.FC = () => {
  return (
    <div className="w-full h-[60vh] md:h-[80vh] bg-neutral-50 cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [0, 1, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow intensity={1} />
        <Suspense fallback={null}>
          <DuffelBagModel />
          <Environment preset="studio" />
          <ContactShadows resolution={1024} scale={10} blur={1.5} opacity={0.25} far={10} color="#000000" />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
