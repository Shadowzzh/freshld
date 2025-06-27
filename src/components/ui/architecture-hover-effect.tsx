'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

export const ArchitectureHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link: string
    icon?: React.ComponentType<{ className?: string }>
    subtitle?: string
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      className={cn('grid grid-cols-1 md:grid-cols-3 gap-8 py-0', className)}
    >
      {items.map((item, idx) => {
        const IconComponent = item.icon
        return (
          <a
            href={item?.link}
            key={item?.link}
            className='relative group block p-2 h-full w-full'
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className='absolute inset-0 h-full w-full bg-white/5 backdrop-blur-sm block rounded-xl'
                  layoutId='architectureHoverBackground'
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <div
              className={cn(
                'p-6 rounded-xl h-full w-full',
                'bg-white/10 backdrop-blur-sm border border-white/20',
                'group-hover:border-white/30 transition-all duration-300',
                'relative z-20',
              )}
            >
              <div className='text-center mb-6'>
                {IconComponent && (
                  <div
                    className={cn(
                      'w-16 h-16 mx-auto mb-4 rounded-full',
                      'bg-primary/20 flex items-center justify-center',
                      'group-hover:bg-primary/30 transition-colors',
                    )}
                  >
                    <IconComponent className='w-8 h-8 text-primary' />
                  </div>
                )}
                <h4 className='text-lg font-semibold text-white'>
                  {item.title}
                </h4>
                {item.subtitle && (
                  <div className='text-xs text-gray-300 mt-1'>
                    {item.subtitle}
                  </div>
                )}
              </div>
              <p className='text-sm text-blue-200 text-center leading-relaxed'>
                {item.description}
              </p>
            </div>
          </a>
        )
      })}
    </div>
  )
}
