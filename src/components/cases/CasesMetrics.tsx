'use client'

import { NumberTicker } from '@/components/ui/number-ticker'
import { cn } from '@/lib/utils'
import { AnimatedList, AnimatedSection } from '@/components/ui/animated-section'
import { TrendingUp, Building2, Globe } from 'lucide-react'

// 指标数据
const metrics = [
  {
    icon: Building2,
    value: 50,
    suffix: '+',
    label: '服务客户',
    description: '知名企业选择明焰安全',
    variant: 'primary',
  },
  {
    icon: Globe,
    value: 100000,
    suffix: '+',
    label: '部署节点',
    description: '覆盖全球主要区域',
    variant: 'accent',
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: '%',
    label: '客户满意度',
    description: '持续优化服务体验',
    variant: 'muted',
  },
]

export function CasesMetrics() {
  return (
    <section id='cases-metrics' className='py-24 relative'>
      <div className='container mx-auto px-4'>
        <div className='relative z-10'>
          {/* 标题 */}
          <AnimatedSection className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold mb-4 text-primary'>
              数据见证实力
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              通过真实数据展现明焰安全的专业能力和服务成果
            </p>
          </AnimatedSection>

          {/* 指标网格 */}
          <AnimatedList className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={cn(
                  'group relative p-6 rounded-2xl border border-primary/15 ',
                  'bg-card/50 backdrop-blur-sm',
                  'hover:border-primary/30 hover:bg-card/80',
                  'transition-all duration-300',
                )}
              >
                {/* 内容 */}
                <div className='relative'>
                  {/* 图标 */}
                  <div
                    className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
                      'transition-all duration-300 group-hover:scale-110',
                      'bg-primary/10 text-primary',
                    )}
                  >
                    <metric.icon className='w-6 h-6' />
                  </div>

                  {/* 数值 */}
                  <div className='mb-2'>
                    <span className='text-3xl font-bold text-primary'>
                      <NumberTicker value={metric.value} />
                      {metric.suffix}
                    </span>
                  </div>

                  {/* 标签 */}
                  <h3 className='text-lg font-semibold text-foreground mb-1'>
                    {metric.label}
                  </h3>

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
