'use client'
import dynamic from 'next/dynamic'

export const ShapeLandingHeroDynamic = dynamic(
  () =>
    import('@/components/ui/shape-landing-hero').then(async mod => {
      return mod.HeroGeometric
    }),
  {
    ssr: false,
    loading: () => null,
  },
)
