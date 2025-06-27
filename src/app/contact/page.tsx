import { Metadata } from 'next'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { CompanyLocations } from '@/components/contact/CompanyLocations'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: '联系我们 - 点亮安全，守护您的数字未来 | 明焰安全',
  description:
    '明焰安全致力于构筑坚不可摧的安全防线，让每一次创新都安心无虞。提供多渠道联系方式，期待与您开启深度合作，共同探索数字安全的新边界。',
  keywords: [
    '明焰安全',
    '联系我们',
    '网络安全',
    'NGEP',
    '商务合作',
    '技术支持',
  ].join(','),
  authors: [{ name: '明焰安全' }],
  creator: '明焰安全',
  publisher: '明焰安全',
  category: '网络安全',
  openGraph: {
    title: '联系明焰安全 - 您身边的网络安全专家',
    description:
      '广州奇盾信息技术有限公司，专注端点安全与云安全产品，为您提供全方位的网络安全解决方案。',
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

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <ContactHero />
        <div className='container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-16'>
          <ContactForm />
          <CompanyLocations />
        </div>
      </main>
      <Footer />
    </>
  )
}
