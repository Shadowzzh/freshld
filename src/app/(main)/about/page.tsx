import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { cn } from '@/lib/utils'
import { AboutHero } from '@/components/about'
import { AboutInfo } from '@/components/about/AbooutInfo'
import { WhyChooseUs } from '@/components/about/WhyChooseUs'
import { AboutTimelineDynamic } from '@/components/about/AboutTimelineDynamic'

export const metadata: Metadata = {
  title: '关于我们 | 明焰安全',
  description:
    '明焰安全（FYRESHLD NGEP）是广州奇盾信息技术有限公司旗下的核心品牌。国际顶尖技术团队，铸就明焰安全，致力于保护网络空间每一个端点免受威胁。',
  keywords: [
    '明焰安全',
    '奇盾信息',
    '网络安全',
    '端点防护',
    'NGEP',
    '浙江大学',
    'AI安全',
  ].join(','),
  authors: [{ name: '明焰安全' }],
  creator: '明焰安全',
  publisher: '明焰安全',
  category: '网络安全',
  openGraph: {
    title: '关于我们 - 明焰安全',
    description:
      '国际顶尖技术团队，铸就明焰安全。与浙江大学实验室紧密合作，在产学研方面取得丰硕成果。',
    type: 'website',
    locale: 'zh_CN',
    siteName: '明焰安全',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function About() {
  return (
    <main className={cn('min-h-screen')}>
      <Header />
      <AboutHero />
      <AboutInfo />
      <WhyChooseUs />
      <AboutTimelineDynamic />
      <Footer />
    </main>
  )
}
