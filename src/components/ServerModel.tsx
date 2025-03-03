'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

interface IcosahedronGeometry {
  positions: Float32Array;
  indices: Uint16Array;
}

export function ServerModel() {
  const groupRef = useRef<THREE.Group>(null!)
  const blueLedRef = useRef<THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>>(null!)
  const greenLedRef = useRef<THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>>(null!)
  const shieldRef = useRef<THREE.Group>(null!)

  const icosahedronGeometry = useMemo<IcosahedronGeometry>(() => {
    const geometry = new THREE.IcosahedronGeometry(2.5, 0)
    const positions = geometry.attributes.position?.array
    const indices = geometry.index?.array

    if (!positions || !indices) {
      return {
        positions: new Float32Array(),
        indices: new Uint16Array()
      }
    }

    return {
      positions: positions as Float32Array,
      indices: indices as Uint16Array
    }
  }, [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15
    }
    if (blueLedRef.current && greenLedRef.current) {
      blueLedRef.current.material.opacity = (Math.sin(state.clock.elapsedTime * 2) + 1) / 2
      greenLedRef.current.material.opacity = (Math.sin(state.clock.elapsedTime * 2 + Math.PI) + 1) / 2
    }
    if (shieldRef.current) {
      shieldRef.current.rotation.y -= delta * 0.02
      shieldRef.current.rotation.z += delta * 0.02
    }
  })

  const shieldMaterial = useMemo(() => (
    <MeshTransmissionMaterial
      samples={16}
      resolution={256}
      transmission={1}
      roughness={0.2}
      thickness={0.1}
      ior={1.5}
      chromaticAberration={0.06}
      distortion={0.1}
      distortionScale={0.3}
      temporalDistortion={0.2}
      clearcoat={1}
      attenuationDistance={0.5}
      attenuationColor='#ffffff'
      color='#87CEFA'
    />
  ), [])

  const shieldFacets = useMemo(() => {
    const facets: JSX.Element[] = []
    const { positions, indices } = icosahedronGeometry

    for (let i = 0; i < indices.length; i += 3) {
      const a = indices[i] ?? 0
      const b = indices[i + 1] ?? 0
      const c = indices[i + 2] ?? 0

      if (a * 3 + 2 >= positions.length || 
          b * 3 + 2 >= positions.length || 
          c * 3 + 2 >= positions.length) {
        continue
      }

      const px1 = positions[a * 3] ?? 0
      const py1 = positions[a * 3 + 1] ?? 0
      const pz1 = positions[a * 3 + 2] ?? 0
      
      const px2 = positions[b * 3] ?? 0
      const py2 = positions[b * 3 + 1] ?? 0
      const pz2 = positions[b * 3 + 2] ?? 0
      
      const px3 = positions[c * 3] ?? 0
      const py3 = positions[c * 3 + 1] ?? 0
      const pz3 = positions[c * 3 + 2] ?? 0

      const centroid = new THREE.Vector3(
        (px1 + px2 + px3) / 3,
        (py1 + py2 + py3) / 3,
        (pz1 + pz2 + pz3) / 3
      )

      facets.push(
        <mesh key={i} position={centroid.multiplyScalar(1.05)}>
          <planeGeometry args={[1.5, 1.5]} />
          {shieldMaterial}
        </mesh>
      )
    }
    return facets
  }, [icosahedronGeometry, shieldMaterial])

  const blackMatteMaterial = useMemo(() => (
    <meshStandardMaterial
      color="#111111"
      roughness={0.9}
      metalness={0.1}
    />
  ), [])

  return (
    <group ref={groupRef}>
      {/* Split polyhedron shield */}
      <group ref={shieldRef}>
        {shieldFacets}
      </group>

      {/* Create stacked servers */}
      {[0, 0.3, 0.6, 0.9, 1.2].map((y, index) => (
        <group key={index} position={[0, y - 0.6, 0]}>
          {/* Main server body with rounded corners */}
          <RoundedBox args={[1.8, 0.18, 1.8]} radius={0.04} smoothness={4}>
            {blackMatteMaterial}
          </RoundedBox>

          {/* Top panel with slight reflection */}
          <RoundedBox args={[1.62, 0.02, 1.62]} radius={0.02} smoothness={4} position={[0, 0.09, 0]}>
            <meshStandardMaterial
              color="#222222"
              roughness={0.7}
              metalness={0.3}
            />
          </RoundedBox>

          {/* Update LED positions */}
          <mesh 
            ref={blueLedRef}
            position={[0.89, 0.06, 0.36]}
          >
            <sphereGeometry args={[0.015, 16, 16]} />
            <meshBasicMaterial
              color="#0000ff"
              transparent
              opacity={0.8}
            />
          </mesh>

          <mesh 
            ref={greenLedRef}
            position={[0.89, 0.06, 0.54]}
          >
            <sphereGeometry args={[0.015, 16, 16]} />
            <meshBasicMaterial
              color="#00ff00"
              transparent
              opacity={0.8}
            />
          </mesh>
        </group>
      ))}
    </group>
  )
}

