'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ContactFormDialog } from './contact/ContactFormDialog'
import { ArrowRight, Calendar } from 'lucide-react'

export function ContactButton() {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)

  return (
    <>
      <motion.button
        onClick={() => setIsContactDialogOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          'hidden lg:flex',
          'cursor-pointer',
          'text-white bg-gradient-to-r from-primary to-primary/90',
          'hover:from-primary/90 hover:to-primary/80',
          'transition-all duration-300',
          'px-4 py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-2.5',
          'rounded-lg font-semibold space-x-2',
          'items-center justify-center',
          'border border-primary/15',
          'text-xs lg:text-sm xl:text-base',
          'shadow-lg shadow-primary/25',
          'hover:shadow-xl hover:shadow-primary/30',
          'group relative overflow-hidden',
        )}
      >
        <div className='absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
        <Calendar className='w-3 h-3 lg:w-4 lg:h-4 relative z-10' />
        <span className='relative z-10'>预约演示</span>
        <ArrowRight className='w-3 h-3 lg:w-4 lg:h-4 relative z-10 group-hover:translate-x-0.5 transition-transform duration-200' />
      </motion.button>

      <ContactFormDialog
        open={isContactDialogOpen}
        onOpenChangeAction={setIsContactDialogOpen}
      />
    </>
  )
}
