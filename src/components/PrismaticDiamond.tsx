'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial } from '@react-three/drei'
import type * as THREE from 'three'

export function PrismaticDiamond() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
      meshRef.current.rotation.x += delta * 0.1
    }
  })

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1, 0]} />
      <MeshTransmissionMaterial
        backside
        samples={16}
        resolution={512}
        transmission={1}
        roughness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        thickness={0.5}
        chromaticAberration={5}
        anisotropy={1}
        distortion={1}
        distortionScale={0.1}
        temporalDistortion={0.1}
        metalness={0.1}
        attenuationDistance={0.5}
        attenuationColor="#ffffff"
        color="#ffffff"
      />
    </mesh>
  )
}

