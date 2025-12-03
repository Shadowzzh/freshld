'use client'

import { cn } from '@/lib/utils'
import { LibraryData } from './types'
import { Terminal, Monitor, Download, Calendar } from 'lucide-react'
import { CopyButton } from './CopyButton'
import { Button } from './Button'
import { ValidationDialog } from './ValidationDialog'

const platformIcons = {
  linux: Terminal,
  windows: Monitor,
}

export function LibraryCard({ libraryData }: { libraryData: LibraryData }) {
  const PlatformIcon =
    platformIcons[libraryData.platform === 'Linux' ? 'linux' : 'windows']

  const getPlatformColor = () => {
    switch (libraryData.platform) {
      case 'Linux':
        return 'from-orange-500/20 to-yellow-500/20 border-orange-200'
      case 'Windows':
        return 'from-blue-500/20 to-cyan-500/20 border-blue-200'
      default:
        return 'from-gray-500/20 to-gray-500/20 border-gray-200'
    }
  }

  const getPlatformBadgeColor = () => {
    switch (libraryData.platform) {
      case 'Linux':
        return 'bg-orange-100 text-orange-700 border-orange-200'
      case 'Windows':
        return 'bg-blue-100 text-blue-700 border-blue-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  return (
    <div className='group relative bg-white rounded-2xl border border-gray-200'>
      <div className='relative p-6'>
        <div className='flex items-start justify-between mb-4'>
          <div className='flex items-center gap-3'>
            <div
              className={cn(
                'p-3 rounded-xl bg-gradient-to-br',
                getPlatformColor(),
              )}
            >
              <PlatformIcon className='w-6 h-6' />
            </div>

            <div>
              <span
                className={cn(
                  'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border',
                  getPlatformBadgeColor(),
                )}
              >
                {libraryData.platform}
              </span>
            </div>
          </div>
        </div>

        <h3 className='text-lg font-semibold text-gray-900 mb-2'>
          {libraryData.title}
        </h3>

        <div className='space-y-3 mb-6'>
          <div className='flex items-center gap-2 text-sm text-gray-500'>
            <Calendar className='w-4 h-4' />
            <span>病毒库日期：{libraryData.updateDate}</span>
          </div>
        </div>

        <div className='space-y-2 mb-6'>
          <div className='flex items-center justify-between p-2 bg-gray-50 rounded-lg gap-4'>
            <div className='flex items-center gap-4 overflow-hidden justify-between flex-1'>
              <span className='text-xs text-gray-600 font-mono'>MD5</span>
              <code className='text-xs text-gray-700 font-mono truncate'>
                {libraryData.fileMd5}
              </code>
            </div>

            <CopyButton text={libraryData.fileMd5} />
          </div>

          <div className='flex items-center justify-between p-2 bg-gray-50 rounded-lg'>
            <div className='flex items-center gap-4 overflow-hidden justify-between flex-1'>
              <span className='text-xs text-gray-600 font-mono'>SHA1</span>
              <code className='text-xs text-gray-700 font-mono truncate'>
                {libraryData.fileSha1}
              </code>
            </div>

            <CopyButton text={libraryData.fileSha1} />
          </div>
        </div>

        <ValidationDialog libraryData={libraryData}>
          <Button size='full' className='group/btn'>
            <Download className='w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform' />
            立即下载
          </Button>
        </ValidationDialog>
      </div>
    </div>
  )
}
