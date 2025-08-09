import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Edges } from '@react-three/drei';
import * as THREE from 'three';

function Shield() {
  const meshRef = useRef<THREE.Mesh>(null!);

  // Create a stylized shield shape (rounded top, tapered bottom)
  const geometry = useMemo(() => {
    const w = 2.2; // width
    const h = 3.0; // height
    const topRadius = 0.6;
    const bottomPointY = -h / 2;

    const shape = new THREE.Shape();
    // Start at top-left curve
    shape.moveTo(-w / 2 + topRadius, h / 2);
    shape.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - topRadius);
    // Left vertical down
    shape.lineTo(-w / 2, h * 0.05);
    // Left taper towards bottom point
    shape.quadraticCurveTo(-w * 0.45, -h * 0.2, 0, bottomPointY);
    // Right side back up
    shape.quadraticCurveTo(w * 0.45, -h * 0.2, w / 2, h * 0.05);
    // Right vertical up to rounded top
    shape.lineTo(w / 2, h / 2 - topRadius);
    shape.quadraticCurveTo(w / 2, h / 2, w / 2 - topRadius, h / 2);
    // Close across top
    shape.lineTo(-w / 2 + topRadius, h / 2);

    const extrude = new THREE.ExtrudeGeometry(shape, {
      depth: 0.35,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.08,
      bevelSegments: 4,
      curveSegments: 64,
      steps: 2,
    });
    extrude.center();
    return extrude;
  }, []);

  const materialFace = useMemo(
    () => new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#93c5fd'),
      metalness: 0.9,
      roughness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      reflectivity: 1,
      envMapIntensity: 1.25,
    }),
    []
  );

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.4;
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef} geometry={geometry} material={materialFace} rotation={[0.15, 0.2, 0]}>
        <Edges scale={1.01} color="#60a5fa" threshold={15} />
      </mesh>
    </Float>
  );
}

const ShieldCanvas: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [0, 0.8, 6], fov: 55 }} dpr={[1, 2]} gl={{ alpha: true, antialias: true }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 6, 6]} intensity={1.2} color={new THREE.Color('#93c5fd')} />
        <directionalLight position={[-5, 2, -3]} intensity={0.4} color={new THREE.Color('#60a5fa')} />

        <Shield />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ShieldCanvas;


