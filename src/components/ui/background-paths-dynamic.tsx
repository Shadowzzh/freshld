'use client'
import dynamic from 'next/dynamic'

export const BackgroundPathsDynamic = dynamic(
  () =>
    import('@/components/ui/background-paths').then(async mod => {
      return mod.FloatingPaths
    }),
  {
    ssr: false,
    loading: () => null,
  },
)
