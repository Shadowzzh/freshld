import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/home/HeroSection'
import { Footer } from '@/components/Footer'
import { cn } from '@/lib/utils'
import { HeroCoreCompetency } from '@/components/home/HeroCoreCompetency'
import { ProductOverviewSection } from '@/components/home/ProductOverviewSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { homeMetadata } from '@/lib/metadata'

export const metadata: Metadata = homeMetadata

// 结构化数据 (JSON-LD) 用于SEO优化
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '明焰安全',
  description:
    '专业的网络安全防护解决方案提供商，提供NGEP端点防护、CNAPP云原生安全等企业级解决方案',
  url: 'https://www.mingyan.com',
  logo: 'https://www.mingyan.com/images/logo.png',
  sameAs: ['https://www.mingyan.com'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'Chinese',
  },
  areaServed: 'CN',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '网络安全解决方案',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'NGEP端点防护系统',
          description:
            '下一代端点防护系统，提供轻量级全能客户端，CPU占用小于1%，威胁检测准确率99.9%',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'CNAPP云原生应用保护平台',
          description:
            '云原生安全解决方案，提供容器安全、镜像扫描、集群防护等全栈安全服务',
        },
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      {/* 结构化数据 */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className={cn('min-h-screen')}>
        {/* 顶部工具栏 */}
        {/* <HeaderTools /> */}

        {/* 主导航栏 */}
        <Header />

        {/* 主要内容区域 */}
        <main role='main' aria-label='首页主要内容'>
          {/* 英雄区域 */}
          <HeroSection />

          {/* 核心竞争力展示 */}
          <HeroCoreCompetency />

          {/* 产品概览 */}
          <ProductOverviewSection />

          {/* 客户证言与合作伙伴 */}
          <TestimonialsSection />
        </main>

        {/* 页脚 */}
        <Footer />
      </div>
    </>
  )
}
