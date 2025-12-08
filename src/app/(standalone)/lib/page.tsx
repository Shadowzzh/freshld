import { Metadata } from 'next'
import { Suspense } from 'react'
import { cn } from '@/lib/utils'
import { LibHero } from '@/components/lib/LibHero'
import { LibraryDownloadSection } from '@/components/lib/LibraryDownloadSection'
import { LibraryLoadingFallback } from '@/components/lib/LibraryLoadingFallback'

export const metadata: Metadata = {
  title: '病毒库下载中心',
  description: '病毒库下载中心',
  keywords: [
    '病毒库下载',
    '病毒防护',
    '安全更新',
    'Linux病毒库',
    'Windows病毒库',
  ].join(','),
  openGraph: {
    title: '病毒库下载中心',
    description:
      '获取最新的病毒定义库，保持您的安全防护始终最新。支持Linux和Windows多平台下载。',
    type: 'website',
    locale: 'zh_CN',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function LibPage() {
  return (
    <main
      className={cn(
        'min-h-screen bg-gradient-to-br from-slate-50 via-background to-blue-50',
      )}
    >
      <div className='min-h-screen'>
        <LibHero />
        <Suspense fallback={<LibraryLoadingFallback />}>
          <LibraryDownloadSection />
        </Suspense>
      </div>
    </main>
  )
}
