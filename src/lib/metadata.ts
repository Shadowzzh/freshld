import { Metadata } from 'next'

// 网站基础信息
export const siteMetadata = {
  title: '明焰安全',
  description: '明焰安全，网络空间的守护者',
  baseUrl: 'https://www.mingyan.com',
  author: '明焰安全',
  locale: 'zh_CN' as const,
  category: '网络安全' as const,
}

// 通用关键词库
export const commonKeywords = [
  '明焰安全',
  '网络安全',
  '信息安全',
  '企业安全',
  '网络空间',
  '守护者',
]

// NGEP 产品关键词
export const ngepKeywords = [
  'NGEP',
  '端点防护',
  '威胁检测',
  '勒索防护',
  'APT防护',
  '主机安全',
  '终端安全',
  '内网安全',
  '横向渗透防护',
  '威胁狩猎',
  '零日漏洞防护',
  '行为分析',
  'AI安全',
  '机器学习安全',
  '端点安全管理',
]

// CNAPP 产品关键词
export const cnappKeywords = [
  'CNAPP',
  '云原生应用保护平台',
  '云原生安全',
  '容器安全',
  '微服务安全',
  'Kubernetes安全',
  '云安全',
  '容器逃逸',
  '镜像扫描',
  '基线合规',
  '微隔离',
  '网络策略',
  '集群安全',
  '云原生防护',
  '服务网格安全',
  'DevSecOps',
  '云原生威胁检测',
  '容器运行时安全',
]

// 根布局 metadata 配置
export const rootLayoutMetadata: Metadata = {
  title: {
    template: '%s | 明焰安全',
    default: '明焰安全 - 网络空间的守护者',
  },
  description: siteMetadata.description,
  keywords: commonKeywords.join(','),
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.author,
  publisher: siteMetadata.author,
  category: siteMetadata.category,
  metadataBase: new URL(siteMetadata.baseUrl),

  // 增强的 OpenGraph 配置
  openGraph: {
    type: 'website',
    locale: siteMetadata.locale,
    siteName: siteMetadata.title,
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.baseUrl,
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: '明焰安全 - 网络空间的守护者',
        type: 'image/jpeg',
      },
    ],
  },

  // 增强的 Twitter 配置
  twitter: {
    card: 'summary_large_image',
    site: '@mingyan_security',
    creator: '@mingyan_security',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ['/images/twitter-card-default.jpg'],
  },

  // 搜索引擎优化
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // 验证和分析
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },

  // 图标配置
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
  },

  // 应用配置
  applicationName: siteMetadata.title,
  referrer: 'origin-when-cross-origin',

  // 格式检测
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

// 首页 metadata 配置
export const homeMetadata: Metadata = {
  title: '明焰安全 - 网络空间的守护者',
  description:
    '明焰安全专注于网络安全防护，提供NGEP端点防护、威胁检测、安全防御等企业级解决方案。保护您的网络空间，守护数字资产安全。',
  keywords: [
    ...commonKeywords,
    '网站首页',
    '企业官网',
    '网络防护',
    '数字安全',
  ].join(','),
  openGraph: {
    title: '明焰安全 - 网络空间的守护者',
    description: '专业的网络安全防护解决方案提供商，守护您的数字资产安全',
    url: '/',
    images: [
      {
        url: '/images/home-og-image.jpg',
        width: 1200,
        height: 630,
        alt: '明焰安全官网首页',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '明焰安全 - 网络空间的守护者',
    description: '专业的网络安全防护解决方案提供商',
    images: ['/images/home-twitter-card.jpg'],
  },
  alternates: {
    canonical: '/',
  },
}

// NGEP 产品页面 metadata 配置
export const ngepMetadata: Metadata = {
  title: '明焰NGEP - 下一代端点防护系统',
  description:
    '明焰NGEP是新一代端点防护系统，提供轻量级全能客户端（CPU占用<1%）、复合式智能防御引擎、开放式大数据架构。支持事前预警、事中监测、事后处置全生命周期防护，99.9%威胁检测准确率，<30s响应时间，专业防护勒索病毒、APT攻击、内网横向渗透。',
  keywords: [...commonKeywords, ...ngepKeywords].join(','),
  openGraph: {
    title: '明焰NGEP - 下一代端点防护系统',
    description:
      '明焰NGEP提供轻量级、智能化、全方位的端点安全防护解决方案，CPU占用<1%，99.9%威胁检测准确率',
    url: '/products/ngep',
    images: [
      {
        url: '/images/ngep-og-image.jpg',
        width: 1200,
        height: 630,
        alt: '明焰NGEP - 下一代端点防护系统',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '明焰NGEP - 下一代端点防护系统',
    description: '明焰NGEP提供轻量级、智能化、全方位的端点安全防护解决方案',
    images: ['/images/ngep-twitter-card.jpg'],
  },
  alternates: {
    canonical: '/products/ngep',
  },
}

// CNAPP 产品页面 metadata 配置
export const cnappMetadata: Metadata = {
  title: '明焰CNAPP - 云原生应用保护平台',
  description:
    '明焰CNAPP是下一代云原生安全解决方案，提供全栈覆盖、行为驱动、智能分析的云原生应用保护。支持容器安全、镜像扫描、集群风险检测、基线合规、微隔离策略、网络访问关系可视化等功能，为您的云原生环境提供全生命周期安全防护。',
  keywords: [...commonKeywords, ...cnappKeywords].join(','),
  openGraph: {
    title: '明焰CNAPP - 云原生应用保护平台',
    description:
      '明焰CNAPP提供全面的云原生安全防护解决方案，覆盖容器、微服务、K8s集群等全栈安全',
    url: '/products/cnapp',
    images: [
      {
        url: '/images/cnapp-og-image.jpg',
        width: 1200,
        height: 630,
        alt: '明焰CNAPP - 云原生应用保护平台',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '明焰CNAPP - 云原生应用保护平台',
    description: '明焰CNAPP提供全面的云原生安全防护解决方案',
    images: ['/images/cnapp-twitter-card.jpg'],
  },
  alternates: {
    canonical: '/products/cnapp',
  },
}

// 病毒库下载中心 metadata 配置
export const downloadMetadata: Metadata = {
  title: '病毒库下载中心',
  description: '提供最新病毒库文件下载服务，保护您的系统安全',
  keywords: [
    '病毒库下载',
    '病毒定义',
    '安全更新',
    '病毒防护',
    '系统安全',
    '恶意软件防护',
    '安全软件',
    '病毒扫描',
  ].join(','),
  authors: [{ name: '病毒库下载中心' }],
  creator: '病毒库下载中心',
  publisher: '病毒库下载中心',
  category: '系统安全',
  metadataBase: new URL('https://dl.fyreshld.cn'),

  // 图标配置
  icons: {
    icon: [{ url: '/globe.svg', type: 'image/svg+xml' }],
    apple: '/globe.svg',
  },

  // OpenGraph 配置
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: '病毒库下载中心',
    title: '病毒库下载中心',
    description: '提供最新病毒库文件下载服务',
    url: 'https://dl.fyreshld.cn',
    images: [
      {
        url: '/globe.svg',
        width: 200,
        height: 200,
        alt: '病毒库下载中心',
        type: 'image/svg+xml',
      },
    ],
  },

  // Twitter 配置
  twitter: {
    card: 'summary',
    title: '病毒库下载中心',
    description: '提供最新病毒库文件下载服务',
    images: ['/globe.svg'],
  },

  // 搜索引擎优化
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // 应用配置
  applicationName: '病毒库下载中心',
  referrer: 'origin-when-cross-origin',

  // 格式检测
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}
