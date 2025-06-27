'use client'
import dynamic from 'next/dynamic'

export const MarqueeDynamic = dynamic(
  () =>
    import('@/components/ui/marquee').then(async mod => {
      return mod.Marquee
    }),
  {
    ssr: false,
    loading: () => null,
  },
)
