'use client'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { createFadeInUp, createScaleIn } from '@/utils/animations'

interface SectionHeaderProps {
  badge?: string
  title: React.ReactNode
  description?: React.ReactNode
  className?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
}: SectionHeaderProps) {
  const badgeAnimation = createScaleIn(0)
  const titleAnimation = createFadeInUp(0.1)
  const descriptionAnimation = createFadeInUp(0.2)

  return (
    <div className={cn('mb-8 md:mb-12 lg:mb-16 text-center', className)}>
      {badge && (
        <motion.div
          {...badgeAnimation}
          className='inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-primary/10 text-primary font-semibold text-sm shadow-sm transition-all duration-300'
        >
          <div className='w-2 h-2 bg-primary rounded-full animate-pulse' />
          {badge}
        </motion.div>
      )}

      <motion.div {...titleAnimation} className='max-w-3xl mx-auto'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
          {title}
        </h2>
      </motion.div>

      {description && (
        <motion.div {...descriptionAnimation} className='max-w-3xl mx-auto'>
          <div className='text-lg sm:text-xl text-gray-600 leading-relaxed'>
            {description}
          </div>
        </motion.div>
      )}
    </div>
  )
}
