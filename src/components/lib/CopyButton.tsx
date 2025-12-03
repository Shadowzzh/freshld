'use client'

import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface CopyButtonProps {
  text: string
  className?: string
  iconClassName?: string
  copiedIconClassName?: string
  feedbackDuration?: number
  onCopy?: (text: string) => void
}

export function CopyButton({
  text,
  className = 'p-1 hover:bg-gray-200 rounded-sm transition-colors overflow-hidden cursor-pointer',
  iconClassName = 'w-3 h-3 text-gray-500',
  copiedIconClassName = 'w-3 h-3 text-green-600',
  feedbackDuration = 2000,
  onCopy,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      // 检查是否支持 Clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text)
      } else {
        // 降级方案：使用 document.execCommand
        const textArea = document.createElement('textarea')
        textArea.value = text
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()

        const success = document.execCommand('copy')
        document.body.removeChild(textArea)

        if (!success) {
          throw new Error('Failed to copy text')
        }
      }

      setCopied(true)
      onCopy?.(text)
      setTimeout(() => setCopied(false), feedbackDuration)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  return (
    <button onClick={copyToClipboard} className={cn(className)}>
      {copied ? (
        <Check className={cn(copiedIconClassName)} />
      ) : (
        <Copy className={cn(iconClassName)} />
      )}
    </button>
  )
}
