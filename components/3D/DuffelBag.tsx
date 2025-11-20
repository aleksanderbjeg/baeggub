import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

// Procedurally generated stylized duffel bag
const DuffelBagModel = (props: any) => {
  const group = useRef<THREE.Group>(null);

  // Floating animation handled by Float wrapper, but we add rotation interaction
  // The OrbitControls in the parent component handles user interaction (drag to rotate)
  
  // Subtle breathing motion
  useFrame((state) => {
    if (group.current) {
      // Slight bobbing synced with scroll or time if needed
      // Here we just let it float naturally via <Float>
    }
  });

  const bagMaterial = new THREE.MeshStandardMaterial({
    color: '#111111',
    roughness: 0.7,
    metalness: 0.1,
  });

  const strapMaterial = new THREE.MeshStandardMaterial({
    color: '#080808',
    roughness: 0.9,
    metalness: 0.0,
    flatShading: true, // Seatbelt look
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={group} {...props} dispose={null} rotation={[0.1, -0.5, 0]}>
        {/* Main Body Cylinder */}
        <mesh rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
          <cylinderGeometry args={[1, 1, 4, 32]} />
          <primitive object={bagMaterial} />
        </mesh>

        {/* End Caps (Spheres slightly flattened) */}
        <mesh position={[2, 0, 0]} scale={[0.2, 1, 1]} castShadow>
          <sphereGeometry args={[1, 32, 32]} />
          <primitive object={bagMaterial} />
        </mesh>
        <mesh position={[-2, 0, 0]} scale={[0.2, 1, 1]} castShadow>
          <sphereGeometry args={[1, 32, 32]} />
          <primitive object={bagMaterial} />
        </mesh>

        {/* Straps (Seatbelt style) - Rings around the bag */}
        <mesh position={[1, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <torusGeometry args={[1.02, 0.08, 16, 64]} />
          <primitive object={strapMaterial} />
        </mesh>
        <mesh position={[-1, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <torusGeometry args={[1.02, 0.08, 16, 64]} />
          <primitive object={strapMaterial} />
        </mesh>

        {/* Handles connecting the straps */}
        <mesh position={[0, 1.2, 0]} rotation={[0, 0, 0]} castShadow>
           <boxGeometry args={[2.2, 0.1, 0.3]} />
           <primitive object={strapMaterial} />
        </mesh>
        
        {/* Vertical connectors for handles */}
        <mesh position={[1, 0.8, 0]} rotation={[0, 0, -0.2]} castShadow>
          <boxGeometry args={[0.1, 0.8, 0.3]} />
           <primitive object={strapMaterial} />
        </mesh>
        <mesh position={[-1, 0.8, 0]} rotation={[0, 0, 0.2]} castShadow>
          <boxGeometry args={[0.1, 0.8, 0.3]} />
           <primitive object={strapMaterial} />
        </mesh>

        {/* BÆGG Logo - Front */}
        <Text
          position={[0, 0, 1.05]}
          fontSize={0.8}
          font="https://fonts.gstatic.com/s/lora/v32/0QI6MX1D_JOuGQbT0gvTJPa787weuxJBkq18kIM3.woff"
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          BÆGG
        </Text>

        {/* BÆGG Logo - Back */}
        <Text
          position={[0, 0, -1.05]}
          rotation={[0, Math.PI, 0]}
          fontSize={0.8}
          font="https://fonts.gstatic.com/s/lora/v32/0QI6MX1D_JOuGQbT0gvTJPa787weuxJBkq18kIM3.woff"
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          BÆGG
        </Text>
      </group>
    </Float>
  );
};

export default DuffelBagModel;
