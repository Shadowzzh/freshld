import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/badge'
import {
  Activity,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Shield,
  Target,
} from 'lucide-react'
import { AnimatedList, AnimatedSection } from '@/components/ui/animated-section'
import { FeatureList } from '@/components/ui/shared/FeatureList'
import { ActionButton } from '@/components/ui/shared/ActionButton'
import { SectionBackground } from '@/components/ui/shared/SectionBackground'
import Link from 'next/link'

// 产品卡片组件
interface ProductCardProps {
  product: {
    icon: React.ComponentType<{ className?: string }>
    title: string
    description: string
    features: string[]
    theme: 'orange'
    href: string
    badge?: string
  }
  index: number
}

/**
 * 产品卡片组件
 * @param product
 * @returns
 */
function ProductCard({ product }: ProductCardProps) {
  const { icon: Icon, title, description, features, href, badge } = product

  return (
    <div
      className={cn(
        'group',
        'relative h-full overflow-hidden rounded-2xl',
        'bg-white/80 backdrop-blur-sm',
        'border border-gray-200/60 transition-all duration-300',
        'hover:border-primary/30 hover:-translate-y-2',
      )}
    >
      {/* 卡片内容 */}
      <div className='relative z-10 p-6 sm:p-8 h-full flex flex-col'>
        {/* 头部区域 */}
        <div className='flex items-start justify-between mb-6'>
          {/* 图标 */}
          <div
            className={cn(
              'p-3 sm:p-4 rounded-xl transition-all duration-300',
              'shadow-md shadow-black/5',
              'group-hover:scale-110 group-hover:rotate-3',
              'bg-primary/10 text-primary group-hover:bg-primary/20',
            )}
          >
            <Icon className='w-6 h-6 sm:w-8 sm:h-8' />
          </div>

          {/* 徽章 */}
          {badge && (
            <Badge
              variant='secondary'
              className='text-xs font-medium shadow-sm bg-primary/10 text-primary'
            >
              {badge}
            </Badge>
          )}
        </div>

        {/* 标题和描述 */}
        <div className='flex-1 mb-6'>
          <Link href={href} className='cursor-pointer'>
            <h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors duration-300'>
              {title}
            </h3>
          </Link>

          <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
            {description}
          </p>
        </div>

        {/* 核心特性 */}
        <FeatureList features={features} maxVisible={4} className='mb-8' />

        {/* 行动按钮 */}
        <ActionButton href={href} variant='secondary'>
          了解详情
        </ActionButton>
      </div>
    </div>
  )
}

function FeaturedAutomatedPentest() {
  const features = [
    '环境情报自动收集',
    '潜在攻击面发现',
    '攻击路径智能规划',
    '可复现攻击计划',
  ]

  return (
    <article
      className={cn(
        'group overflow-hidden rounded-2xl',
        'bg-white/80 backdrop-blur-sm',
        'border border-gray-200/60 transition-all duration-300',
        'hover:border-primary/30 hover:-translate-y-2',
      )}
    >
      <div className='grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10'>
        <div className='min-w-0'>
          <div className='flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-md shadow-black/5 transition-all duration-300 group-hover:scale-110'>
            <BrainCircuit className='size-6' />
          </div>
          <div className='mt-6 flex flex-wrap items-center gap-3'>
            <span className='text-xs font-semibold text-primary'>
              AI 攻防能力
            </span>
            <Badge
              variant='secondary'
              className='bg-primary/10 text-primary shadow-sm'
            >
              自动化测试
            </Badge>
          </div>
          <Link href='/products/aipentest'>
            <h3 className='mt-3 text-2xl font-bold leading-tight text-gray-900 transition-colors hover:text-primary sm:text-3xl'>
              自动化渗透测试
            </h3>
          </Link>
          <p className='mt-4 max-w-2xl text-base leading-7 text-gray-600'>
            利用大语言模型整合攻击知识，自动完成环境侦察和攻击面发现，规划攻击路径、生成可复现的攻击计划，并在授权范围内执行测试、生成渗透测试报告。
          </p>
        </div>

        <div className='flex min-w-0 flex-col justify-between border-t border-gray-200 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0'>
          <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-1'>
            {features.map(feature => (
              <div
                key={feature}
                className='flex items-center gap-3 text-sm font-medium text-gray-700'
              >
                <CheckCircle2 className='size-4 shrink-0 text-primary' />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <ActionButton
            href='/products/aipentest'
            variant='secondary'
            className='mt-8 w-full sm:w-fit'
          >
            了解详情
          </ActionButton>
        </div>
      </div>
    </article>
  )
}

export function ProductOverviewSection() {
  const products = [
    {
      icon: Shield,
      title: '明焰主机安全防护系统',
      description:
        '网络空间主机和容器的贴身保镖，提供资产管理、威胁检测、勒索防护、统一化管理等一体化解决方案。',
      features: [
        '基于攻击链的实时溯源',
        '精准阻断内网横向攻击',
        '勒索病毒防护',
        'WEB服务器保护',
        '统一化管理界面',
        '容器安全防护',
      ],
      theme: 'orange' as const,
      href: '/products/ngep',
      badge: 'NGEP',
    },
    {
      icon: Cloud,
      title: '明焰云原生应用保护平台',
      description:
        '全栈云架构安全防御，覆盖微服务、容器、镜像、Kubernetes等云原生全生命周期，实现DevSecOps一体化。',
      features: [
        '自学习网络策略微隔离',
        '大数据模型异常行为监测',
        '全面集群基础设施安全检测',
        'DevSecOps一体化',
        'Kubernetes安全',
        '容器镜像安全扫描',
      ],
      theme: 'orange' as const,
      href: '/products/cnapp',
      badge: 'CNAPP',
    },
    {
      icon: Target,
      title: '明焰防勒索系统',
      description:
        '基于大数据分析的精准判断，提供新一代勒索解决方案，打造涵盖资产多维度监控、双模型多维度精准检测、热点文件急速恢复及全路径溯源的防勒索系统。',
      features: [
        '事前预防机制',
        '事中精准阻断',
        '事后全路径溯源',
        '资产多维度监控',
        '双模型精准检测',
        '热点文件急速恢复',
      ],
      theme: 'orange' as const,
      href: '/products/cdg',
      badge: 'CDG',
    },
    {
      icon: Activity,
      title: '明焰安全验证平台',
      description:
        '基于真实威胁情报的全自动化安全验证平台，通过模拟真实攻击场景，持续验证企业安全防护体系的有效性，为企业提供可量化的安全评估服务。',
      features: [
        '精准威胁还原',
        '无害化验证',
        '全自动化执行',
        '可视化量化',
        'APT组织实时追踪',
        '多维度防护验证',
      ],
      theme: 'orange' as const,
      href: '/products/measure',
      badge: 'MEASURE',
    },
  ]

  return (
    <SectionBackground variant='default'>
      {/* 节区标题 */}
      <AnimatedList className='mb-12 sm:mb-16'>
        <div className='text-center mb-6'>
          <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/15 text-primary text-sm font-medium'>
            <Shield className='w-4 h-4' />
            产品矩阵·全面防护
          </span>
        </div>
        <SectionHeader
          title={
            <div className='flex-col items-center justify-center leading-tight'>
              <div>五大核心产品</div>
              <div>构建全方位网络安全防护体系</div>
            </div>
          }
          description='从端点到云端，从防护到验证，打造企业级安全解决方案'
          className='text-center'
        />
      </AnimatedList>

      <AnimatedSection className='mb-6 sm:mb-8'>
        <FeaturedAutomatedPentest />
      </AnimatedSection>

      {/* 产品网格 */}
      <AnimatedList className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16'>
        {products.map((product, index) => (
          <ProductCard key={product.href} product={product} index={index} />
        ))}
      </AnimatedList>

      {/* 底部行动区域 */}
      <AnimatedList className='text-center'>
        <div className='mb-6'>
          <div
            className={cn(
              'inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full',
              'bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10',
              'border border-primary/15 text-primary font-medium',
              'backdrop-blur-sm text-sm sm:text-base',
            )}
          >
            <Shield className='w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3' />
            全方位安全防护，守护您的数字资产
          </div>
        </div>

        {/* 额外的行动按钮 */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <ActionButton href='/contact' variant='primary'>
            免费咨询
          </ActionButton>
          <ActionButton href='/cases' variant='outline' withIcon={false}>
            客户案例
          </ActionButton>
        </div>
      </AnimatedList>
    </SectionBackground>
  )
}
