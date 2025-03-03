'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function ProtectiveNetwork() {
  const networkRef = useRef<THREE.Group>(null!)
  const particlesRef = useRef<THREE.Points>(null!)
  const linesRef = useRef<THREE.LineSegments>(null!)

  const particleCount = 100 // Reduced from 200
  const radius = 1.8
  const connectionDistance = 1.2 // Increased to create fewer, longer connections

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    return positions
  }, [])

  const lightBlueColor = useMemo(() => new THREE.Color(0x87CEFA), []) // Light blue color

  const lineMaterial = useMemo(() => new THREE.LineBasicMaterial({ 
    color: lightBlueColor, 
    transparent: true, 
    opacity: 0.3 
  }), [lightBlueColor])

  const connections = useMemo(() => {
    const lines = []
    for (let i = 0; i < particleCount; i++) {
      const p1 = new THREE.Vector3(
        particlePositions[i * 3],
        particlePositions[i * 3 + 1],
        particlePositions[i * 3 + 2]
      )
      for (let j = i + 1; j < particleCount; j++) {
        const p2 = new THREE.Vector3(
          particlePositions[j * 3],
          particlePositions[j * 3 + 1],
          particlePositions[j * 3 + 2]
        )
        if (p1.distanceTo(p2) < connectionDistance) {
          lines.push(p1.clone(), p2.clone())
        }
      }
    }
    return lines
  }, [particlePositions])

  useFrame((state, delta) => {
    if (networkRef.current) {
      networkRef.current.rotation.y += delta * 0.05
    }
    if (particlesRef.current?.geometry?.attributes?.position) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        const time = state.clock.elapsedTime
        const offset = i * 0.01
        
        // Calculate new position
        const theta = Math.atan2(positions[i3 + 1] ?? 0, positions[i3] ?? 0)
        const phi = Math.acos((positions[i3 + 2] ?? 0) / radius)
        
        const newRadius = radius + Math.sin(time + offset) * 0.03
        
        positions[i3] = newRadius * Math.sin(phi) * Math.cos(theta)
        positions[i3 + 1] = newRadius * Math.sin(phi) * Math.sin(theta)
        positions[i3 + 2] = newRadius * Math.cos(phi)
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
    if (linesRef.current?.geometry?.attributes?.position) {
      const positions = linesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 6) {
        const p1 = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2])
        const p2 = new THREE.Vector3(positions[i + 3], positions[i + 4], positions[i + 5])
        
        const time = state.clock.elapsedTime
        const offset1 = i * 0.0001
        const offset2 = (i + 3) * 0.0001
        
        p1.normalize().multiplyScalar(radius + Math.sin(time + offset1) * 0.03)
        p2.normalize().multiplyScalar(radius + Math.sin(time + offset2) * 0.03)
        
        positions[i] = p1.x
        positions[i + 1] = p1.y
        positions[i + 2] = p1.z
        positions[i + 3] = p2.x
        positions[i + 4] = p2.y
        positions[i + 5] = p2.z
      }
      linesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group ref={networkRef}>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            args={[particlePositions, 3]}
            attach="attributes-position"
            count={particleCount}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.03} color={lightBlueColor} transparent opacity={0.6} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            args={[new Float32Array(connections.flatMap(v => [v.x, v.y, v.z])), 3]}
            attach="attributes-position"
            count={connections.length}
            array={new Float32Array(connections.flatMap(v => [v.x, v.y, v.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <primitive object={lineMaterial} />
      </lineSegments>
    </group>
  )
}

