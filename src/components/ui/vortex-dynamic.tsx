'use client'
import dynamic from 'next/dynamic'

export const VortexDynamic = dynamic(
  async () => {
    await new Promise(r => setTimeout(r, 5000))

    return import('@/components/ui/vortex-lite').then(async mod => {
      return mod.Vortex
    })
  },
  {
    ssr: false,
    loading: () => null,
  },
)
