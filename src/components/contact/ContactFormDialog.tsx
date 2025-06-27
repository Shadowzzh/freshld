'use client'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { ContactForm } from './ContactForm'

interface ContactFormDialogProps {
  open: boolean
  onOpenChangeAction: (open: boolean) => void
}

export function ContactFormDialog({
  open,
  onOpenChangeAction,
}: ContactFormDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChangeAction}>
      <DialogContent className='max-w-3xl max-h-[90vh] p-0 overflow-hidden'>
        <DialogTitle className='sr-only'>预约演示 - 联系我们</DialogTitle>
        <div className='overflow-y-auto max-h-[90vh] px-6 py-6'>
          <ContactForm variant='dialog' />
        </div>
      </DialogContent>
    </Dialog>
  )
}
