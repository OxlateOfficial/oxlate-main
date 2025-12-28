"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface ConnectionPoint {
  lat: number;
  lon: number;
  label: string;
}

// Convert lat/lon to 3D coordinates on a sphere
function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

// Create a curved arc between two points
function createArc(
  start: THREE.Vector3,
  end: THREE.Vector3,
  arcHeight: number = 0.5
): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const numPoints = 50;

  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    
    // Linear interpolation between start and end
    const point = new THREE.Vector3().lerpVectors(start, end, t);
    
    // Add arc height (parabolic curve)
    const heightMultiplier = Math.sin(t * Math.PI) * arcHeight;
    point.normalize().multiplyScalar(2.5 + heightMultiplier);
    
    points.push(point);
  }

  return points;
}

function Globe() {
  const globeRef = useRef<THREE.Group>(null);
  
  // Connection points representing major cities/logistics hubs
  const connectionPoints: ConnectionPoint[] = useMemo(() => [
    { lat: 37.7749, lon: -122.4194, label: "San Francisco" },
    { lat: 51.5074, lon: -0.1278, label: "London" },
    { lat: 35.6762, lon: 139.6503, label: "Tokyo" },
    { lat: 1.3521, lon: 103.8198, label: "Singapore" },
    { lat: 40.7128, lon: -74.0060, label: "New York" },
    { lat: 31.2304, lon: 121.4737, label: "Shanghai" },
    { lat: -33.8688, lon: 151.2093, label: "Sydney" },
    { lat: 52.5200, lon: 13.4050, label: "Berlin" },
  ], []);

  // Connection pairs for arcs
  const connections = useMemo(() => [
    [0, 1], // SF to London
    [1, 2], // London to Tokyo
    [2, 3], // Tokyo to Singapore
    [3, 5], // Singapore to Shanghai
    [4, 1], // NY to London
    [0, 2], // SF to Tokyo
    [5, 6], // Shanghai to Sydney
    [1, 7], // London to Berlin
  ], []);

  // Auto-rotate globe
  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  // Create wireframe sphere geometry
  const wireframeGeometry = useMemo(() => {
    const radius = 2.5;
    const widthSegments = 40;
    const heightSegments = 40;
    
    const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
    return geometry;
  }, []);

  // Create connection arcs
  const arcs = useMemo(() => {
    return connections.map(([startIdx, endIdx], index) => {
      const start = connectionPoints[startIdx];
      const end = connectionPoints[endIdx];
      
      const startVec = latLonToVector3(start.lat, start.lon, 2.5);
      const endVec = latLonToVector3(end.lat, end.lon, 2.5);
      
      const arcPoints = createArc(startVec, endVec, 0.8);
      const curve = new THREE.CatmullRomCurve3(arcPoints);
      const tubeGeometry = new THREE.TubeGeometry(curve, 50, 0.008, 8, false);
      
      return (
        <mesh key={`arc-${index}`} geometry={tubeGeometry}>
          <meshBasicMaterial color="#4a90e2" transparent opacity={0.6} />
        </mesh>
      );
    });
  }, [connections, connectionPoints]);

  // Create dots at connection points
  const dots = useMemo(() => {
    return connectionPoints.map((point, index) => {
      const position = latLonToVector3(point.lat, point.lon, 2.5);
      
      return (
        <mesh key={`dot-${index}`} position={position}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshBasicMaterial color="#4a90e2" />
          {/* Glow effect */}
          <mesh>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshBasicMaterial
              color="#4a90e2"
              transparent
              opacity={0.3}
            />
          </mesh>
        </mesh>
      );
    });
  }, [connectionPoints]);

  return (
    <group ref={globeRef}>
      {/* Wireframe Globe */}
      <lineSegments geometry={wireframeGeometry}>
        <lineBasicMaterial color="#d0d0d0" transparent opacity={0.7} />
      </lineSegments>
      
      {/* Connection Arcs */}
      {arcs}
      
      {/* Connection Dots */}
      {dots}
    </group>
  );
}

export default function WireframeGlobeHero() {
  return (
    <div className="absolute w-full h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* 3D Globe Canvas - Positioned as background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{
            position: [0, 0, 6],
            fov: 45,
          }}
          style={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "190vw",
            height: "190vh",
          }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          
          <Globe />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minDistance={4}
            maxDistance={10}
            enableDamping
            dampingFactor={0.05}
          />
        </Canvas>
      </div>
    </div>
  );
}