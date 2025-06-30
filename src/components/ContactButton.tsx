'use client'

import { useState } from 'react'
import { ContactFormDialog } from './contact/ContactFormDialog'
import { ArrowRight, Calendar } from 'lucide-react'
import { PulsatingButton } from './ui/pulsating-button'
import { cn } from '@/lib/utils'

/**  */
export function ContactButton(props: { className?: string }) {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)

  return (
    <>
      <PulsatingButton
        pulseColor='#fcd295'
        onClick={() => setIsContactDialogOpen(true)}
        className={props.className}
      >
        <div
          className={cn(
            'flex items-center justify-center',
            'space-x-2',
            'lx:text-base text-sm',
          )}
        >
          <Calendar className={cn('size-3 lg:size-4', 'relative z-10')} />

          <span className={cn('relative z-10')}>预约演示</span>

          <ArrowRight
            className={cn(
              'size-3 lg:size-4',
              'relative z-10',
              'group-hover:translate-x-0.5 transition-transform duration-200',
            )}
          />
        </div>
      </PulsatingButton>

      <ContactFormDialog
        open={isContactDialogOpen}
        onOpenChangeAction={setIsContactDialogOpen}
      />
    </>
  )
}
