'use client'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { createScaleIn, hoverScale } from '@/utils/animations'

interface StatCardProps {
  value: React.ReactNode
  label: string
  icon?: React.ComponentType<{ className?: string }>
  className?: string
}

export function StatCard({
  value,
  label,
  icon: Icon,
  className,
}: StatCardProps) {
  const animations = createScaleIn(0)
  const hoverAnimations = hoverScale

  return (
    <motion.div
      {...animations}
      variants={hoverAnimations}
      whileHover='hover'
      className={cn(
        'p-4 md:p-6 bg-white border border-gray-200 rounded-2xl text-center',
        'hover:border-primary/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out',
        className,
      )}
    >
      {Icon && (
        <div className='w-12 h-12 mb-3 mx-auto rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 text-primary group-hover:scale-110 transition-transform duration-300'>
          <Icon className='w-6 h-6' />
        </div>
      )}
      <div className='text-2xl font-bold mb-1 text-gray-900'>{value}</div>
      <div className='text-sm text-gray-600 font-medium'>{label}</div>
    </motion.div>
  )
}
