'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

interface MeteorsProps {
  /** 流星数量 */
  number?: number
  /** 最小延迟 */
  minDelay?: number
  /** 最大延迟 */
  maxDelay?: number
  /** 最小持续时间 */
  minDuration?: number
  /** 最大持续时间 */
  maxDuration?: number
  /** 流星角度 */
  angle?: number
  /** 流星颜色 */
  className?: string
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    [],
  )

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      '--angle': -angle + 'deg',
      top: '-5%',
      left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + 's',
      animationDuration:
        Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) +
        's',
    }))
    setMeteorStyles(styles)
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle])

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          style={{ ...style }}
          className={cn(
            'pointer-events-none absolute size-0.5 rotate-[var(--angle)] animate-meteor rounded-full bg-pri mary/50 shadow-[0_0_0_1px_#ffffff10]',
            className,
          )}
        >
          {/* Meteor Tail */}
          <div className='pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-primary/50 to-transparent' />
        </span>
      ))}
    </>
  )
}
