'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { ServerModel } from './ServerModel'

export function ServerScene() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [4, 4, 4], fov: 40 }}>
        <Suspense fallback={null}>
          
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[5, 5, 5]} 
            angle={0.15} 
            penumbra={1} 
            intensity={1}
          />
          <pointLight position={[-5, -5, -5]} intensity={0.5} />
          
          <ServerModel />
          
          <OrbitControls 
            enableZoom={false}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI * 5 / 6}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}

