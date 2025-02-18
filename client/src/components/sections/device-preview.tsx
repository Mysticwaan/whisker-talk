import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Card } from "@/components/ui/card";
import { Suspense } from "react";

function Device() {
  return (
    <mesh>
      <boxGeometry args={[1, 0.2, 0.5]} />
      <meshStandardMaterial color="#666" />
      {/* Sensor components */}
      <mesh position={[0.3, 0.15, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      {/* LED indicator */}
      <mesh position={[-0.3, 0.15, 0]}>
        <sphereGeometry args={[0.03]} />
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
      </mesh>
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Device />
      <OrbitControls enableZoom={false} />
    </>
  );
}

export function DevicePreview() {
  return (
    <section id="device" className="scroll-mt-16 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">3D Device Preview</h2>

        <Card className="w-full aspect-video">
          <Suspense 
            fallback={
              <div className="w-full aspect-video flex items-center justify-center bg-muted">
                <p className="text-muted-foreground">Loading 3D model...</p>
              </div>
            }
          >
            <Canvas
              camera={{ position: [2, 2, 2], fov: 50 }}
              gl={{ antialias: true }}
              style={{ background: 'transparent' }}
            >
              <Scene />
            </Canvas>
          </Suspense>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Interact with the 3D model by clicking and dragging to rotate
          </p>
        </div>
      </motion.div>
    </section>
  );
}