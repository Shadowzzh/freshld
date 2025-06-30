'use client'

import { cn } from '@/lib/utils'
import {
  Search,
  Shield,
  Target,
  Bot,
  FileSearch,
  Activity,
  RefreshCw,
  CheckCircle,
} from 'lucide-react'
import { NumberTicker } from '@/components/ui/number-ticker'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'

// 核心能力数据
const capabilities = [
  {
    icon: Search,
    title: 'APT组织跟踪',
    description:
      '7×24小时追踪全球APT组织攻击模式和受害者信息，收集最新威胁情报',
    category: '威胁情报',
  },
  {
    icon: FileSearch,
    title: '溯源分析',
    description: '深入分析攻击链路，对恶意程序进行逆向工程，揭示攻击原理',
    category: '分析能力',
  },
  {
    icon: Target,
    title: '攻击手法复现',
    description: '精准复现真实的攻击路径和攻击手法，还原威胁场景',
    category: '模拟验证',
  },
  {
    icon: Bot,
    title: '攻防机器人',
    description: '先进的攻防机器人模拟真实黑客攻击行为，进行无害化测试',
    category: '自动化',
  },
  {
    icon: Shield,
    title: '无害化模拟',
    description: '多角色保护机制，确保生产环境绝对安全，零影响验证',
    category: '安全保障',
  },
  {
    icon: Activity,
    title: '可视化量化',
    description: '提供可定制界面，满足各级人员对验证内容的需求',
    category: '效果展示',
  },
]

// 统计数据
const metrics = [
  {
    icon: Target,
    value: 1000,
    suffix: '+',
    label: '攻击场景',
    description: '覆盖最新威胁场景',
  },
  {
    icon: Shield,
    value: 99.9,
    suffix: '%',
    label: '模拟准确率',
    description: '精确还原真实攻击',
  },
  {
    icon: RefreshCw,
    value: 24,
    suffix: '/7',
    label: '持续验证',
    description: '全天候安全验证',
  },
  {
    icon: CheckCircle,
    value: 0,
    suffix: '%',
    label: '生产影响',
    description: '完全无害化测试',
  },
]

export default function MeasureCapabilities() {
  return (
    <section className='py-24 relative bg-background'>
      <div className='container mx-auto px-4'>
        <div className='relative z-10'>
          {/* 标题 */}
          <AnimatedSection className='text-center mb-16'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6'>
              核心能力
            </div>
            <h2 className='text-3xl lg:text-4xl font-bold mb-4 text-primary'>
              持续追踪APT攻击手法，验证防御韧性
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              基于顶尖的攻防实战经验与前沿技术，提供全自动化、无害化的安全验证服务
            </p>
          </AnimatedSection>

          {/* 能力网格 */}
          <AnimatedList
            className={cn(
              'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20',
              '',
            )}
          >
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className={cn(
                  'group relative p-6 rounded-2xl border border-primary/15',
                  'bg-card/50 backdrop-blur-sm',
                  'hover:border-primary/30 hover:bg-card/80 hover:scale-105',
                  'transition-all duration-300',
                  'h-full flex flex-col', // 添加 h-full 和 flex 布局
                )}
              >
                {/* 内容 */}
                <div className='relative flex flex-col h-full'>
                  {/* 图标 */}
                  <div
                    className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
                      'transition-all duration-300 group-hover:scale-110',
                      'bg-primary/10 text-primary',
                    )}
                  >
                    <capability.icon className='w-6 h-6' />
                  </div>

                  {/* 分类标签 */}
                  <div className='mb-3'>
                    <span className='text-xs font-medium text-primary/70 bg-primary/5 px-2 py-1 rounded-md'>
                      {capability.category}
                    </span>
                  </div>

                  {/* 标题 */}
                  <h3 className='text-lg font-semibold text-foreground mb-3'>
                    {capability.title}
                  </h3>

                  {/* 描述 */}
                  <p className='text-sm text-muted-foreground leading-relaxed flex-1'>
                    {capability.description}
                  </p>
                </div>

                {/* 悬停效果边框 */}
                <div
                  className={cn(
                    'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100',
                    'transition-opacity duration-300',
                    'bg-gradient-to-br from-primary/10 via-transparent to-primary/5',
                    'pointer-events-none',
                  )}
                />
              </div>
            ))}
          </AnimatedList>

          {/* 分割线 */}
          <AnimatedSection className='flex justify-center mb-20'>
            <div className='w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent' />
          </AnimatedSection>

          {/* 统计数据部分 */}
          <AnimatedSection className='text-center mb-12'>
            <h3 className='text-2xl lg:text-3xl font-bold mb-4 text-primary'>
              平台验证能力统计
            </h3>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              通过真实数据展现明焰度量验证平台的专业能力和验证效果
            </p>
          </AnimatedSection>

          {/* 统计指标网格 */}
          <AnimatedList className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={cn(
                  'group relative p-6 rounded-2xl border border-primary/15',
                  'bg-card/50 backdrop-blur-sm',
                  'hover:border-primary/30 hover:bg-card/80 hover:scale-105',
                  'transition-all duration-300',
                )}
              >
                {/* 内容 */}
                <div className='relative text-center'>
                  {/* 图标 */}
                  <div
                    className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4',
                      'transition-all duration-300 group-hover:scale-110',
                      'bg-primary/10 text-primary',
                    )}
                  >
                    <metric.icon className='w-6 h-6' />
                  </div>

                  {/* 数值 */}
                  <div className='mb-2'>
                    <span className='text-3xl font-bold text-primary'>
                      <NumberTicker
                        value={metric.value}
                        decimalPlaces={metric.value === 99.9 ? 1 : 0}
                      />
                      {metric.suffix}
                    </span>
                  </div>

                  {/* 标签 */}
                  <h4 className='text-lg font-semibold text-foreground mb-1'>
                    {metric.label}
                  </h4>

                  {/* 描述 */}
                  <p className='text-sm text-muted-foreground'>
                    {metric.description}
                  </p>
                </div>

                {/* 悬停效果边框 */}
                <div
                  className={cn(
                    'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100',
                    'transition-opacity duration-300',
                    'bg-gradient-to-br from-primary/10 via-transparent to-primary/5',
                    'pointer-events-none',
                  )}
                />
              </div>
            ))}
          </AnimatedList>
        </div>
      </div>
    </section>
  )
}
