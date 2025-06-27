import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { cn } from '@/lib/utils'
import {
  MeasureHero,
  MeasureCapabilities,
  MeasureFeatures,
  MeasureScenarios,
} from '@/components/measure'
import { MeasureCTA } from '@/components/measure/MeasureCTA'

export const metadata: Metadata = {
  title: '度量验证平台 - 网络攻防实战演练平台 | 明焰安全',
  description:
    '明焰安全度量验证平台基于真实威胁情报的全自动化安全验证平台。7×24小时追踪APT组织动态，1000+攻击场景，99.9%模拟准确率，0%生产影响。支持护网、勒索防护、钓鱼邮件、边界验证等多种应用场景。',
  keywords: [
    '度量验证平台',
    '明焰安全',
    '攻防演练',
    'APT追踪',
    '威胁模拟',
    '安全验证',
    '护网演练',
    '勒索防护验证',
    '钓鱼邮件测试',
    '边界安全验证',
    '无害化模拟',
    '攻防机器人',
  ].join(','),
  authors: [{ name: '明焰安全' }],
  creator: '明焰安全',
  publisher: '明焰安全',
  category: '网络安全',

  openGraph: {
    title: '度量验证平台 - 网络攻防实战演练平台',
    description:
      '基于真实威胁情报的全自动化安全验证平台，7×24小时追踪APT组织动态，验证您的安全防线。',
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
    canonical: 'https://www.mingyan.com/products/measure',
  },
}

export default function MeasurePage() {
  return (
    <main className={cn('min-h-screen')}>
      <Header />
      <div className='min-h-screen'>
        <MeasureHero />
        <MeasureCapabilities />
        <MeasureFeatures />
        <MeasureScenarios />
        <MeasureCTA />
      </div>
      <Footer />
    </main>
  )
}
