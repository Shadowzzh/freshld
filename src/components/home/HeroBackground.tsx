'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'

const RenderPc = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <>
      <Image
        src='/images/blue-bg.webp'
        alt='Background'
        onLoad={() => setImageLoaded(true)}
        fill
        className={cn(
          'absolute left-0 z-10',
          'object-cover',
          'transition-[opacity,translate] duration-[0ms,3000ms] ease-out-circ',
          imageLoaded
            ? 'opacity-100 -translate-x-50'
            : 'opacity-0 -translate-x-100',
        )}
        priority
        quality={100}
        sizes='100vw'
      />

      <div
        className={cn(
          imageLoaded ? 'opacity-100' : 'opacity-0',
          'lg:block hidden',
          'absolute -right-[20%] top-0 w-full h-full -z-[0]',
          'transition-opacity duration-1000',
          'animate-video-scroll',
        )}
      >
        <div
          className={cn(
            'absolute left-0 top-0 size-full',
            'bg-primary/70',
            'backdrop-blur-xs',
          )}
        />
        <video
          className='w-auto h-[100vh] object-cover'
          src='/video/data-shield-small.mp4'
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </>
  )
}

const RenderMobile = () => {
  return <></>
}

/** 背景 */
export const HeroBackground = () => {
  const { isMobile } = useIsMobile(1024) // 使用 1024px 作为桌面设备断点
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      aria-label='hero-bg'
      className={cn(
        'transition-opacity duration-300',
        'absolute left-0 top-0',
        'min-h-[100vh] w-full',
        'bg-brand-secondary',
      )}
    >
      {isMobile ? <RenderMobile /> : <RenderPc />}
    </div>
  )
}
