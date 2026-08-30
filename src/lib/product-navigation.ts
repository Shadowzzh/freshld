export interface ProductNavigationItem {
  title: string
  footerTitle: string
  href: string
  description: string
}

export const productNavigationItems: ProductNavigationItem[] = [
  {
    title: '明焰主机安全防护系统 (NGEP)',
    footerTitle: 'NGEP 主机安全',
    href: '/products/ngep',
    description:
      '统一端点与主机安全管理，覆盖资产风险发现、威胁检测、攻击追踪和响应处置。',
  },
  {
    title: '明焰云原生应用保护平台 (CNAPP)',
    footerTitle: 'CNAPP 云原生安全',
    href: '/products/cnapp',
    description:
      '覆盖云原生应用开发、交付与运行生命周期，提供容器、镜像、集群和微隔离安全能力。',
  },
  {
    title: '明焰防勒索系统 (CDG)',
    footerTitle: 'CDG 防勒索系统',
    href: '/products/cdg',
    description:
      '围绕事前预防、事中阻断和事后恢复，提供勒索威胁检测、清洁备份与攻击路径追踪。',
  },
  {
    title: '明焰安全验证平台',
    footerTitle: '安全验证平台',
    href: '/products/measure',
    description:
      '基于真实威胁情报提供全自动化、无害化安全验证，持续度量防御体系有效性。',
  },
  {
    title: '自动化渗透测试',
    footerTitle: '自动化渗透测试',
    href: '/products/aipentest',
    description:
      '利用 AI 智能体规划攻击路径、生成可复现的攻击计划，并在授权范围内执行测试、生成渗透测试报告。',
  },
]
