'use client'
import dynamic from 'next/dynamic'

export const MeteorsDynamic = dynamic(
  async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    return import('@/components/ui/meteors').then(async mod => {
      return mod.Meteors
    })
  },
  {
    ssr: false,
    loading: () => null,
  },
)
