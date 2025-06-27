import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { cn } from '@/lib/utils'
import {
  CasesHero,
  CasesCTA,
  InteractiveCases,
  CasesTimeline,
  IndustryGrid,
  CasesMetrics,
} from '@/components/cases'

export const metadata: Metadata = {
  title: '客户案例 - 明焰安全真实案例分享 | 明焰安全',
  description:
    '明焰安全服务中国银联、蚂蚁金服、中兴通讯等知名企业，提供NGEP端点防护、容器安全等解决方案。查看真实客户案例，了解安全防护效果。',
  keywords: [
    '客户案例',
    '明焰安全案例',
    'NGEP案例',
    '中国银联',
    '蚂蚁金服',
    '端点防护案例',
    '网络安全解决方案',
  ].join(','),
  authors: [{ name: '明焰安全' }],
  creator: '明焰安全',
  publisher: '明焰安全',
  category: '网络安全',

  openGraph: {
    title: '客户案例 - 明焰安全真实案例分享',
    description:
      '明焰安全服务中国银联、蚂蚁金服、中兴通讯等知名企业，查看真实客户案例，了解安全防护效果。',
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
    canonical: 'https://www.mingyan.com/cases',
  },
}

export default function CasesPage() {
  return (
    <main className={cn('min-h-screen')}>
      <Header />
      <div className='min-h-screen'>
        <CasesHero />
        <CasesMetrics />
        <InteractiveCases />
        <IndustryGrid />
        <CasesTimeline />
        <CasesCTA />
      </div>
      <Footer />
    </main>
  )
}
