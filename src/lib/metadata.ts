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

// 关于我们页面 metadata 配置
export const aboutMetadata: Metadata = {
  title: '关于我们 - 明焰安全发展历程',
  description:
    '了解明焰安全的发展历程，从2012年浙江大学互联网安全实验室成立，到2025年银联10万节点验收成功，见证我们在网络安全领域的专业成长。',
  keywords: [
    ...commonKeywords,
    '关于我们',
    '公司历程',
    '发展历史',
    '浙江大学',
    '杭州奇盾',
    'CNAPP',
    '银联验收',
  ].join(','),
  openGraph: {
    title: '关于我们 - 明焰安全发展历程',
    description: '见证明焰安全在网络安全领域的专业成长历程',
    url: '/about',
    images: [
      {
        url: '/images/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: '明焰安全发展历程',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '关于我们 - 明焰安全发展历程',
    description: '见证明焰安全在网络安全领域的专业成长历程',
    images: ['/images/about-twitter-card.jpg'],
  },
  alternates: {
    canonical: '/about',
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

// 生成动态 metadata 的工具函数
export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  additionalKeywords: string[] = [],
  ogImage?: string,
): Metadata {
  const fullTitle = `${title} | ${siteMetadata.title}`
  const keywords = [...commonKeywords, ...additionalKeywords].join(',')
  const canonicalUrl = `${siteMetadata.baseUrl}${path}`

  return {
    /** 标题 */
    title,
    /** 描述 */
    description,
    /** 关键词 */
    keywords,
    /** 作者 */
    authors: [{ name: siteMetadata.author }],
    creator: siteMetadata.author,
    /** 发布者 */
    publisher: siteMetadata.author,
    /** 分类 */
    category: siteMetadata.category,
    /** OpenGraph */
    openGraph: {
      /** 标题 */
      title: fullTitle,
      description,
      /** 链接 */
      url: path,
      /** 类型 */
      type: 'website',
      /** 语言 */
      locale: siteMetadata.locale,
      /** 站点名称 */
      siteName: siteMetadata.title,
      /** 图片 */
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
    },
    twitter: {
      /** 卡片类型 */
      card: 'summary_large_image',
      /** 标题 */
      title: fullTitle,
      /** 描述 */
      description,
      /** 图片 */
      images: ogImage ? [ogImage.replace('-og-', '-twitter-')] : undefined,
    },
    /** 搜索引擎优化 */
    robots: {
      /** 索引 */
      index: true,
      /** 跟随 */
      follow: true,
      /** Google 搜索引擎优化 */
      googleBot: {
        /** 索引 */
        index: true,
        /** 跟随 */
        follow: true,
        /** 视频预览 */
        'max-video-preview': -1,
        /** 图片预览 */
        'max-image-preview': 'large',
        /** 片段预览 */
        'max-snippet': -1,
      },
    },
    /** 替代链接 */
    alternates: {
      canonical: canonicalUrl,
    },
  }
}
