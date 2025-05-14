import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HeroLights from "./HeroLights";
import { lazy, Suspense, useContext } from "react";
import { DeviceContext } from "../../context/DeviceContext";

const Room = lazy(() => import("./Room"));

export default function HeroExperience() {
  const isMobile = useContext(DeviceContext);

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      frameloop="demand"
      dpr={isMobile ? 1 : [1, 2]}
      antialias={(!isMobile).toString()}
    >
      <HeroLights />

      <OrbitControls
        enablePan={false}
        enableZoom={!isMobile}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Suspense fallback={null}>
          <Room />
        </Suspense>
      </group>
    </Canvas>
  );
}
