import React, { Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, OrbitControls, Sparkles, Stars } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedTorusKnot() {
  const material = useMemo(() => new THREE.MeshStandardMaterial({ color: '#6aa9ff', metalness: 0.6, roughness: 0.2 }), []);
  const meshRef = React.useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[0, 0, 0]} material={material}>
        <torusKnotGeometry args={[1.2, 0.35, 220, 36]} />
      </mesh>
    </Float>
  );
}

function GridPlane() {
  const grid = useMemo(() => new THREE.GridHelper(40, 40, new THREE.Color('#3b82f6'), new THREE.Color('#0ea5e9')), []);
  return <primitive object={grid} rotation={[Math.PI / 2, 0, 0]} position={[0, -2, 0]} />;
}

const Web3Background: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 1.5, 6], fov: 60 }}>
        <color attach="background" args={[0x000000]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 6, 4]} intensity={1.1} />
        <directionalLight position={[-6, 2, -2]} intensity={0.4} color={new THREE.Color('#7dd3fc')} />

        <Suspense fallback={null}>
          <Environment preset="city" />
          <Stars radius={80} depth={40} count={4000} factor={4} saturation={0} fade speed={0.6} />
          <Sparkles size={2} count={120} speed={0.4} opacity={0.6} color="#60a5fa" />
          <AnimatedTorusKnot />
          <GridPlane />
        </Suspense>

        {/* Optional user control for debugging; can be removed */}
        {/* <OrbitControls enablePan={false} enableZoom={false} /> */}
      </Canvas>
    </div>
  );
};

export default Web3Background;


