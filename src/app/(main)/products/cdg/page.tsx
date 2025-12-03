import { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CDGHero } from '@/components/cdg/CDGHero'
import { CDGOverview } from '@/components/cdg/CDGOverview'
import { CDGArchitecture } from '@/components/cdg/CDGArchitecture'
import { CDGFeatures } from '@/components/cdg/CDGFeatures'
import { CDGTechnology } from '@/components/cdg/CDGTechnology'
import { CDGScenarios } from '@/components/cdg/CDGScenarios'

export const metadata: Metadata = {
  title: '明焰CDG防勒索系统 - 您的数据守护神 | 明焰安全',
  description:
    '明焰CDG防勒索系统基于"事前预防、事中阻断、事后恢复"的全生命周期防护理念，提供双模型检测技术、热点文件急速恢复、全路径溯源等核心功能，为企业数据提供全面防护。',
  keywords: [
    'CDG',
    '防勒索系统',
    '明焰安全',
    '数据保护',
    '勒索病毒防护',
    '文件备份',
    '威胁检测',
    '攻击溯源',
  ].join(','),
  authors: [{ name: '明焰安全' }],
  creator: '明焰安全',
  publisher: '明焰安全',
  category: '网络安全',

  openGraph: {
    title: '明焰CDG防勒索系统 - 您的数据守护神',
    description:
      '基于双模型检测技术的全生命周期防勒索解决方案，事前预防、事中阻断、事后恢复，全面保护企业数据安全。',
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
}

export default function CDGPage() {
  return (
    <main className={cn('min-h-screen')}>
      <Header />
      <div className='min-h-screen'>
        <CDGHero />
        <CDGOverview />
        <CDGArchitecture />
        <CDGFeatures />
        <CDGTechnology />
        <CDGScenarios />
      </div>
      <Footer />
    </main>
  )
}
