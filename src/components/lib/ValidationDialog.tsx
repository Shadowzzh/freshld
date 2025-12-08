'use client'

import { useState, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import {
  Fingerprint,
  Loader2,
  CheckCircle,
  XCircle,
  Download,
} from 'lucide-react'
import { LibraryData } from './types'
import { Button } from '../ui/button'

export interface ValidationDialogProps {
  children: ReactNode
  libraryData: LibraryData
  allowedUuids?: string[]
}

export function ValidationDialog({
  children,
  libraryData,
  allowedUuids = [],
}: ValidationDialogProps) {
  const [machineCode, setMachineCode] = useState('')
  const [isValidating, setIsValidating] = useState(false)
  const [validationResult, setValidationResult] = useState<
    'success' | 'error' | null
  >(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleValidate = async (machineCode: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 1000))

    return allowedUuids.includes(machineCode.trim())
  }

  const handleSubmit = async (e?: React.FormEvent | React.MouseEvent) => {
    e?.preventDefault()

    if (!machineCode.trim()) {
      setValidationResult('error')
      setErrorMessage('请输入机器码')
      return
    }

    setIsValidating(true)
    setValidationResult(null)
    setErrorMessage('')

    try {
      const isValid = await handleValidate(machineCode.trim())

      if (isValid) {
        setValidationResult('success')
        if (libraryData) {
          window.open(libraryData.downloadUrl, '_blank')
        }
        handleClose()
      } else {
        setValidationResult('error')
        setErrorMessage('机器码不正确，请重新输入')
      }
    } catch {
      setValidationResult('error')
      setErrorMessage('验证失败，请稍后重试')
    } finally {
      setIsValidating(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isValidating && validationResult !== 'success') {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleClose = () => {
    setMachineCode('')
    setValidationResult(null)
    setErrorMessage('')
  }

  const getIconState = () => {
    if (isValidating) return <Loader2 className='w-5 h-5 animate-spin' />
    if (validationResult === 'success')
      return <CheckCircle className='w-5 h-5 text-green-500' />
    if (validationResult === 'error')
      return <XCircle className='w-5 h-5 text-red-500' />
    return <Fingerprint className='w-5 h-5' />
  }

  return (
    <Dialog onOpenChange={handleClose}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={cn('sm:max-w-md', 'p-6')}
        showCloseButton={!isValidating}
      >
        <DialogHeader>
          <DialogTitle className='flex items-center gap-3'>
            {getIconState()}
            机器码验证
          </DialogTitle>

          <DialogDescription>请输入您的机器码以验证下载权限</DialogDescription>
        </DialogHeader>

        <form className={cn('space-y-4')} onSubmit={e => e.preventDefault()}>
          <div className='gap-3 flex flex-col'>
            <label htmlFor='machineCode' className='text-sm font-medium '>
              机器码
            </label>

            <input
              id='machineCode'
              type='text'
              value={machineCode}
              onChange={e => setMachineCode(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder='请输入机器码 (格式: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)'
              className={cn(
                'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50',
                'transition-all duration-200',
                validationResult === 'error'
                  ? 'border-red-300 bg-red-50 focus:border-red-500'
                  : 'border-gray-300 focus:border-primary',
              )}
              disabled={isValidating || validationResult === 'success'}
            />
            {errorMessage && (
              <p className='text-sm text-red-500 flex items-center gap-1'>
                <XCircle className='w-3 h-3' />
                {errorMessage}
              </p>
            )}
          </div>
        </form>

        <div className='mt-2 pt-6 border-t border-gray-200'>
          <div className='text-sm text-muted-foreground'>
            <p className='font-medium mb-1'>下载信息：</p>
            <p>文件：{libraryData.title}</p>
            <p>病毒库日期：{libraryData.updateDate}</p>
          </div>
        </div>

        <DialogFooter className='flex gap-2 w-full'>
          <DialogClose asChild>
            <Button
              disabled={isValidating || validationResult === 'success'}
              type='button'
              variant='secondary'
              className='cursor-pointer'
            >
              取消
            </Button>
          </DialogClose>

          <Button
            disabled={isValidating || validationResult === 'success'}
            onClick={handleSubmit}
            className='cursor-pointer'
          >
            {isValidating ? (
              <>
                <Loader2 className='w-4 h-4 animate-spin' />
                验证中...
              </>
            ) : (
              <>
                <Download className='w-4 h-4' />
                验证并下载
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
