import React from 'react'
import { cn } from '@/lib/utils'

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string
  duration?: string
}

export const PulsatingButton = React.forwardRef<
  HTMLButtonElement,
  PulsatingButtonProps
>(
  (
    {
      className,
      children,
      pulseColor = '#fcd295',
      duration = '1.5s',
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          'relative flex cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2 text-center text-primary-foreground',
          className,
        )}
        style={
          {
            '--pulse-color': pulseColor,
            '--duration': duration,
          } as React.CSSProperties
        }
        {...props}
      >
        <div className='relative z-10'>{children}</div>
        <div className='absolute inset-0 animate-pulse-outline rounded-lg' />
      </button>
    )
  },
)

PulsatingButton.displayName = 'PulsatingButton'
