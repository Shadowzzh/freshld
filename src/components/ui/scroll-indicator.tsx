'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ScrollIndicatorProps {
  className?: string
  borderColor?: string
  dotColor?: string
  containerClassName?: string
  delay?: number
  size?: 'sm' | 'md' | 'lg'
}

/**
 * 滚动指示器
 * @param props
 * @returns
 */
export function ScrollIndicator(props: ScrollIndicatorProps) {
  const {
    className,
    borderColor = 'border-white/30',
    dotColor = 'bg-white/50',
    containerClassName,
    delay = 1.5,
  } = props

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={cn('relative py-10 2xl:py-16', containerClassName)}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className={cn(
          'm-auto',
          'w-5 h-8',
          'border-2 rounded-full',
          'flex justify-center',
          borderColor,
          className,
        )}
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          viewport={{ once: true }}
          className={cn('w-0.5 h-2 mt-1.5', 'rounded-full', dotColor)}
        />
      </motion.div>
    </motion.div>
  )
}
