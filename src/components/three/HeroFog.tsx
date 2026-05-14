import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FogPlane() {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  useFrame((state) => {
    if (matRef.current) matRef.current.uniforms.uTime.value = state.clock.elapsedTime;
  });
  return (
    <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2.4, 0, 0]}>
      <planeGeometry args={[14, 5, 64, 64]} />
      <shaderMaterial
        ref={matRef}
        transparent
        depthWrite={false}
        uniforms={{
          uTime: { value: 0 },
          uColor: { value: new THREE.Color("#E10600") },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `}
        fragmentShader={`
          precision highp float;
          varying vec2 vUv;
          uniform float uTime;
          uniform vec3 uColor;
          float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
          float noise(vec2 p){
            vec2 i = floor(p), f = fract(p);
            float a = hash(i), b = hash(i+vec2(1.,0.)), c = hash(i+vec2(0.,1.)), d = hash(i+vec2(1.,1.));
            vec2 u = f*f*(3.-2.*f);
            return mix(a,b,u.x) + (c-a)*u.y*(1.-u.x) + (d-b)*u.x*u.y;
          }
          void main(){
            vec2 uv = vUv;
            float t = uTime * 0.08;
            float n = noise(uv*3.0 + vec2(t, -t*0.5));
            n = mix(n, noise(uv*6.0 - vec2(t*1.5, t)), 0.5);
            float bottom = smoothstep(0.0, 0.55, 1.0 - uv.y);
            float alpha = n * bottom * 0.55;
            gl_FragColor = vec4(uColor * (0.8 + n*0.4), alpha);
          }
        `}
      />
    </mesh>
  );
}

export function HeroFog() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.6, 4], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0 pointer-events-none"
    >
      <ambientLight intensity={0.4} />
      <Suspense fallback={null}>
        <FogPlane />
      </Suspense>
    </Canvas>
  );
}