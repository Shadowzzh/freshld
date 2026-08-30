'use client'

import { DottedGlowBackground } from '../ui/dotted-glow-background'

export function LibHero() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5'>
      <DottedGlowBackground
        className='pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-10 '
        opacity={1}
        gap={20}
        radius={8}
        colorLightVar='--color-yellow-500'
        glowColorLightVar='--color-yellow-600'
        colorDarkVar='--color-yellow-500'
        glowColorDarkVar='--color-yellow-800'
        backgroundOpacity={0}
        speedMin={1}
        speedMax={2}
        speedScale={1}
      />

      <div className='relative container mx-auto px-6 py-24 lg:py-36'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent'>
            病毒库下载中心
          </h1>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent' />
    </section>
  )
}
