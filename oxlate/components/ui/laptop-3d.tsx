"use client";

/**
 * Laptop3D
 * --------
 * Renders the laptop.glb model (Model_2_2k) with @react-three/fiber + @react-three/drei.
 *
 * Animation (matches user sketch):
 *   • Frame node  → stays 100 % static (laptop base / body on the desk)
 *   • Screen node → rotates from nearly vertical/closed  to fully open  as the
 *                   user scrolls through the pinned hero section
 *
 * Side-view diagram from sketch:
 *   Before scroll : lid ≈ 90° upright  (quaternion equiv: -1.35 rad on X)
 *   After  scroll : lid ≈ 120° reclined (quaternion equiv: +0.45 rad on X)
 */

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  ContactShadows,
  PerspectiveCamera,
} from "@react-three/drei";
import { useScroll, useTransform, MotionValue } from "framer-motion";
import * as THREE from "three";
import type { RefObject } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Inner scene component (must live inside <Canvas>)
// ─────────────────────────────────────────────────────────────────────────────
function LaptopScene({ screenAngle }: { screenAngle: MotionValue<number> }) {
  const { nodes } = useGLTF("/laptop.glb") as any;
  const screenRef = useRef<THREE.Object3D>(null);

  // Drive THREE rotation from Framer MotionValue every frame — no re-renders
  useFrame(() => {
    if (screenRef.current) {
      screenRef.current.rotation.x = screenAngle.get();
    }
  });

  return (
    <group
      // Center the model and face the camera
      position={[0, -0.55, 0]}
      rotation={[0.08, 0, 0]}   // slight top-down tilt so base is visible
      scale={0.013}
    >
      {/* Laptop base — completely static */}
      <primitive object={nodes.Frame} />

      {/* Screen lid — rotates on X axis (hinge) as scroll progresses */}
      <primitive ref={screenRef} object={nodes.Screen} />
    </group>
  );
}

// Preload so the model is ready before the hero is mounted
useGLTF.preload("/laptop.glb");

// ─────────────────────────────────────────────────────────────────────────────
// Spinner shown while the GLTF loads
// ─────────────────────────────────────────────────────────────────────────────
function Spinner() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-16 w-16">
        <span className="absolute inset-0 rounded-full border-2 border-bronze/15" />
        <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-bronze" />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Public component — drop-in replacement for <DeviceMockup>
// ─────────────────────────────────────────────────────────────────────────────
interface Laptop3DProps {
  /** Ref pointing to the sticky pinned hero <section> that drives scroll */
  targetRef: RefObject<HTMLElement | null>;
}

export function Laptop3D({ targetRef }: Laptop3DProps) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  /**
   * Lid angle in radians driven by scroll:
   *   0 % scroll → -1.4 rad  (~  -80 °) = lid almost vertical / closed
   *  85 % scroll →  0.42 rad (~  +24 °) = lid fully open / reclined
   *
   * Animation finishes at 85 % so the lid is completely open before the
   * sticky section unpins and the next section scrolls into view.
   */
  const screenAngle = useTransform(
    scrollYProgress,
    [0, 0.85],
    [-1.4, 0.42]
  );

  return (
    <div className="relative h-full w-full min-h-[320px]">
      <Suspense fallback={<Spinner />}>
        <Canvas
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          {/* Camera — slightly elevated, looking slightly down at the laptop */}
          <PerspectiveCamera makeDefault fov={28} position={[0, 1.6, 7]} />

          {/* ── Lighting ─────────────────────────────────────────────────── */}
          {/* Key light */}
          <directionalLight
            position={[3, 6, 5]}
            intensity={1.6}
            color="#ffffff"
            castShadow
          />
          {/* Fill light (left side) */}
          <directionalLight
            position={[-4, 3, 2]}
            intensity={0.6}
            color="#d4b896"  /* warm bronze fill */
          />
          {/* Ambient */}
          <ambientLight intensity={0.55} />
          {/* Subtle rim from behind */}
          <pointLight position={[0, 2, -4]} intensity={0.3} color="#c8a87a" />

          {/* Ground shadow */}
          <ContactShadows
            position={[0, -1.15, 0]}
            opacity={0.4}
            scale={6}
            blur={2.5}
            far={2.5}
            color="#1a1208"
          />

          {/* HDR reflections for realistic materials */}
          <Environment preset="city" />

          {/* The actual laptop */}
          <LaptopScene screenAngle={screenAngle} />
        </Canvas>
      </Suspense>
    </div>
  );
}
