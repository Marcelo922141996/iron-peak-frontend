import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Stars, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Dumbbell() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.6;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });
  const red = new THREE.Color("#E10600");
  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 2.4]}>
      {/* Bar */}
      <mesh castShadow>
        <cylinderGeometry args={[0.18, 0.18, 3.2, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.95} roughness={0.15} />
      </mesh>
      {/* Plates */}
      {[-1.4, 1.4].map((y) => (
        <group key={y} position={[0, y, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.95, 0.95, 0.35, 48]} />
            <meshStandardMaterial color={red} metalness={0.8} roughness={0.25} emissive={red} emissiveIntensity={0.25} />
          </mesh>
          <mesh position={[0, y > 0 ? 0.22 : -0.22, 0]} castShadow>
            <cylinderGeometry args={[0.55, 0.55, 0.18, 32]} />
            <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export function Hero3DScene() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 6, 14]} />
      <ambientLight intensity={0.35} />
      <spotLight position={[5, 6, 6]} angle={0.4} penumbra={1} intensity={2.2} color="#ff2a1f" castShadow />
      <pointLight position={[-5, -3, -4]} intensity={1.4} color="#ff5733" />
      <Suspense fallback={null}>
        <Stars radius={50} depth={40} count={1500} factor={3} fade speed={0.6} />
        <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.9}>
          <Dumbbell />
        </Float>
        <ContactShadows position={[0, -2.4, 0]} opacity={0.45} blur={2.6} scale={8} far={4} color="#E10600" />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}