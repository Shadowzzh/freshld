import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface MetallicShineProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  shineClassName?: string
  cardClassName?: string
  enableHoverEffect?: boolean
  enableGlobalShine?: boolean
  enableAutoAnimation?: boolean
  animationInterval?: number
}

/**
 * 金属光泽效果
 * @param param0
 * @returns
 */
export function MetallicShine({
  children,
  className,
  containerClassName,
  enableHoverEffect = true,
  enableGlobalShine = true,
}: MetallicShineProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden',
        enableGlobalShine && [
          'before:absolute before:inset-0',
          'before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent',
          'before:translate-x-[-200%] before:skew-x-12 before:transition-transform before:duration-[2000ms] before:ease-out',
          enableHoverEffect && 'hover:before:translate-x-[200%]',
          'after:absolute after:inset-0',
          'after:bg-gradient-to-br after:from-white/5 after:via-transparent after:to-white/5',
          'after:translate-y-[-100%] after:translate-x-[-100%] after:scale-150 after:rotate-45',
          'after:transition-all after:duration-[1500ms] after:ease-in-out',
          enableHoverEffect &&
            'hover:after:translate-y-[100%] hover:after:translate-x-[100%]',
        ],
        containerClassName,
      )}
    >
      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  )
}

export function MetallicShineCard({
  children,
  className,
  shineClassName,
  enableHoverEffect = true,
}: {
  children: ReactNode
  className?: string
  shineClassName?: string
  enableHoverEffect?: boolean
}) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-xl p-4',
        'bg-white/5 backdrop-blur-sm border border-white/10',
        'transition-all duration-300',
        enableHoverEffect && 'hover:bg-white/10 hover:border-white/20',
        className,
      )}
    >
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent',
          'translate-x-[-100%] skew-x-12 transition-transform duration-1000 ease-out',
          enableHoverEffect && 'group-hover:translate-x-[100%]',
          shineClassName,
        )}
      />
      <div className='relative z-10'>{children}</div>
    </div>
  )
}
