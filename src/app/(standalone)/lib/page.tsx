import { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { LibHero } from '@/components/lib/LibHero'
import { LibraryDownloadSection } from '@/components/lib/LibraryDownloadSection'

export const metadata: Metadata = {
  title: '病毒库下载中心 - 明焰安全',
  description:
    '明焰安全病毒库下载中心，提供最新的病毒定义库下载，包括Linux和Windows平台的完整病毒库，确保您的安全防护始终保持最新状态。',
  keywords: [
    '病毒库下载',
    '病毒定义库',
    '明焰安全',
    '病毒防护',
    '安全更新',
    'Linux病毒库',
    'Windows病毒库',
    '威胁检测',
  ].join(','),
  authors: [{ name: '明焰安全' }],
  creator: '明焰安全',
  publisher: '明焰安全',
  category: '网络安全',

  openGraph: {
    title: '病毒库下载中心 - 明焰安全',
    description:
      '获取最新的病毒定义库，保持您的安全防护始终最新。支持Linux和Windows多平台下载。',
    type: 'website',
    locale: 'zh_CN',
    siteName: '明焰安全',
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

  alternates: {
    canonical: 'https://www.mingyan.com/lib',
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
        <LibraryDownloadSection />
      </div>
    </main>
  )
}
