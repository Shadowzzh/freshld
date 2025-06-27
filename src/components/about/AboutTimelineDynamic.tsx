'use client'
import dynamic from 'next/dynamic'

export const AboutTimelineDynamic = dynamic(
  () =>
    import('@/components/about/AboutTimeline').then(async mod => {
      return mod.AboutTimeline
    }),
  {
    ssr: false,
    loading: () => null,
  },
)
