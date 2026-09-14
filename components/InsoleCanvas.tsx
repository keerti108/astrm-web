"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

function InsoleMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireRef = useRef<THREE.Mesh>(null!);

  const geometry = useMemo(() => {
    // Procedural insole: build a shape path then extrude/lathe it
    const shape = new THREE.Shape();
    // Insole silhouette (right foot, top view, normalized)
    const pts: [number, number][] = [
      [0, 0],
      [0.18, 0.02],
      [0.30, 0.10],
      [0.34, 0.24],
      [0.32, 0.38],
      [0.28, 0.54],
      [0.26, 0.68],
      [0.28, 0.82],
      [0.30, 0.92],
      [0.26, 1.00],
      [0.18, 1.04],
      [0.08, 1.02],
      [0.00, 0.96],
      [-0.08, 1.00],
      [-0.16, 1.04],
      [-0.22, 1.00],
      [-0.26, 0.92],
      [-0.24, 0.82],
      [-0.22, 0.68],
      [-0.24, 0.54],
      [-0.28, 0.38],
      [-0.30, 0.24],
      [-0.24, 0.10],
      [-0.14, 0.02],
    ];

    shape.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) {
      shape.lineTo(pts[i][0], pts[i][1]);
    }
    shape.closePath();

    // Extrude with beveling
    const extrudeSettings = {
      depth: 0.04,
      bevelEnabled: true,
      bevelThickness: 0.012,
      bevelSize: 0.008,
      bevelSegments: 4,
      curveSegments: 24,
    };

    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geo.center();

    // Add subtle arch displacement to top face vertices
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      if (z > 0.03) {
        // Arch in middle-rear
        const archY = (y + 0.1) * 2.5;
        const archX = x * 3;
        const arch = Math.exp(-archX * archX - archY * archY) * 0.06;
        pos.setZ(i, z + arch);
      }
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();

    return geo;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.18;
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.06 + 0.3;
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.015;
    }
    if (wireRef.current) {
      wireRef.current.rotation.copy(meshRef.current.rotation);
      wireRef.current.position.copy(meshRef.current.position);
    }
  });

  return (
    <group>
      <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial
          color="#E8E3D8"
          roughness={0.55}
          metalness={0.08}
          envMapIntensity={0.6}
        />
      </mesh>
      <mesh ref={wireRef} geometry={geometry}>
        <meshBasicMaterial
          color="#C35038"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>
    </group>
  );
}

export default function InsoleCanvas() {
  return (
    <div
      style={{
        width: "100%",
        height: "clamp(360px, 50vw, 600px)",
        background: "transparent",
        cursor: "grab",
      }}
      aria-label="Interactive 3D insole model"
    >
      <Canvas
        camera={{ position: [0, 0.3, 1.6], fov: 36 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[2, 3, 2]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <directionalLight position={[-2, 1, -1]} intensity={0.3} color="#C35038" />
        <pointLight position={[0, -1, 1]} intensity={0.2} color="#EDE8DC" />

        <InsoleMesh />

        <OrbitControls
          enablePan={false}
          minDistance={0.8}
          maxDistance={3}
          enableDamping
          dampingFactor={0.08}
        />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
