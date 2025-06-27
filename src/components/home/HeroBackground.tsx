'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'

/** 背景 */
export const HeroBackground = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div
      className={cn(
        'transition-opacity duration-300',
        'absolute left-0 top-0',
        'min-h-[100vh] w-full',
        'bg-black',
      )}
    >
      <Image
        src='/images/black-bg.png'
        alt='Background'
        onLoad={() => setImageLoaded(true)}
        fill
        className={cn(
          'brightness-0 saturate-0',
          'absolute left-0 z-10',
          'object-cover',
          'transition-[opacity,translate] duration-[0ms,3000ms] ease-out-circ',
          imageLoaded
            ? 'opacity-100 translate-x-20'
            : 'opacity-0 translate-x-0',
        )}
        priority
        quality={100}
        sizes='100vw'
      />
      {/* 视频 */}
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
            'bg-[#F6A834]/70',
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
    </div>
  )
}
