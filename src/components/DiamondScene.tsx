'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { PrismaticDiamond } from './PrismaticDiamond'

export function DiamondScene() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <PrismaticDiamond />
          <OrbitControls enableZoom={false} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}

