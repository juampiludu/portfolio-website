import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function TechIcon({ icon }) {
  const scene = useGLTF(icon.modelPath);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />

      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Suspense fallback={null}>
        <Environment preset="city" />
      </Suspense>

      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={icon.scale} rotation={icon.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
}
