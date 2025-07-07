'use client'

import { cn } from '@/lib/utils'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'
import { NumberTicker } from '@/components/ui/number-ticker'
import {
  BarChart3,
  Shield,
  Zap,
  Cpu,
  Brain,
  Database,
  Network,
} from 'lucide-react'
import { MetallicShineCard } from '../ui/metallic-shine'

// NGEP 产品优势数据
const ngepAdvantages = [
  {
    icon: Cpu,
    title: '轻量级全能客户端',
    description: 'CPU占用<1%，内存占用<50M，对系统性能影响极小',
    features: ['超低资源占用', '快速部署安装', '支持老化系统', '静默后台运行'],
    theme: 'blue' as const,
  },
  {
    icon: Brain,
    title: '复合式智能防御引擎',
    description: '多引擎协同工作，AI驱动的威胁检测和分析',
    features: ['AI机器学习', '行为分析引擎', '签名检测引擎', '沙箱分析引擎'],
    theme: 'purple' as const,
  },
  {
    icon: Database,
    title: '开放式大数据架构',
    description: '云端大数据分析，支持海量数据处理和存储',
    features: ['云端数据分析', '弹性扩展能力', '实时数据同步', '历史数据追溯'],
    theme: 'green' as const,
  },
  {
    icon: Network,
    title: '全路径溯源专利',
    description: '独有的攻击路径追踪技术，完整还原攻击过程',
    features: ['攻击链重构', '时间线分析', '证据链完整', '可视化展示'],
    theme: 'orange' as const,
  },
]

// NGEP 对比数据
const ngepComparisonStats = [
  {
    label: '检测速度提升',
    value: 10,
    suffix: 'x',
    description: '相比传统方案',
  },
  {
    label: '资源占用降低',
    value: 90,
    suffix: '%',
    description: 'CPU和内存优化',
  },
  {
    label: '误报率降低',
    value: 99,
    suffix: '%',
    description: '智能算法优化',
  },
  {
    label: '部署时间',
    value: 5,
    suffix: 'min',
    description: '快速安装配置',
  },
]

export default function NGEPAdvantages() {
  return (
    <section className={cn('py-24 bg-white', 'relative overflow-hidden')}>
      <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8')}>
        {/* 标题区域 */}
        <AnimatedSection className='text-center mb-16'>
          <div
            className={cn(
              'inline-flex items-center px-4 py-2 rounded-full',
              'bg-primary/10 text-primary font-semibold text-sm mb-4',
            )}
          >
            产品优势
          </div>

          <h2
            className={cn(
              'text-3xl md:text-4xl lg:text-5xl font-bold',
              'text-gray-900 mb-6',
            )}
          >
            技术领先的核心优势
          </h2>

          <p
            className={cn(
              'text-xl text-gray-600 max-w-3xl mx-auto',
              'leading-relaxed',
            )}
          >
            凭借独创的技术架构和算法优化，为企业提供高效、智能、可靠的端点安全防护
          </p>
        </AnimatedSection>

        {/* 核心优势网格 */}
        <AnimatedList className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20'>
          {ngepAdvantages.map((advantage, index) => (
            <div
              key={index}
              className={cn(
                'group relative h-full',
                'p-6 rounded-xl',
                'bg-card/50 backdrop-blur-sm border border-primary/15',
                'hover:border-primary/30 hover:bg-card/70',
                'hover:-translate-y-2',
                'transition-all duration-300',
              )}
            >
              <div className='h-full flex flex-col'>
                <div className='flex items-start space-x-4 mb-6'>
                  <div
                    className={cn(
                      'w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0',
                      'bg-primary/10 group-hover:bg-primary/20 transition-colors',
                    )}
                  >
                    <advantage.icon className='w-6 h-6 text-primary' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold text-foreground mb-2'>
                      {advantage.title}
                    </h3>
                    <p className='text-muted-foreground leading-relaxed'>
                      {advantage.description}
                    </p>
                  </div>
                </div>

                <div className='flex-1'>
                  <ul className='space-y-3'>
                    {advantage.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className='flex items-center space-x-3'
                      >
                        <div className='w-2 h-2 bg-primary rounded-full flex-shrink-0' />
                        <span className='text-sm text-muted-foreground'>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </AnimatedList>

        {/* 关键技术 */}
        <AnimatedSection>
          <div
            className={cn(
              'bg-gradient-to-br from-primary/10 via-transparent to-primary/5',
              'rounded-3xl p-8 md:p-12 mb-20 border border-primary/15',
              'h-full',
            )}
          >
            <div className='text-center mb-12'>
              <h3 className='text-2xl md:text-3xl font-bold text-foreground mb-4'>
                关键技术创新
              </h3>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                基于前沿技术研发，持续创新突破，为用户提供最先进的安全防护能力
              </p>
            </div>

            <AnimatedList className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {[
                {
                  title: 'MITRE ATT&CK框架映射',
                  description: '基于权威的攻击技术框架，精准识别攻击手法',
                  icon: Shield,
                },
                {
                  title: '主动威胁狩猎',
                  description: '主动搜寻潜在威胁，而非被动等待攻击发生',
                  icon: Zap,
                },
                {
                  title: '云端威胁情报',
                  description: '实时更新全球威胁情报，快速识别新兴威胁',
                  icon: BarChart3,
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className={cn(
                    'group p-6 rounded-xl text-center',
                    'bg-card/50 backdrop-blur-sm border border-primary/15',
                    'hover:border-primary/30 hover:bg-card/70',
                    'hover:scale-105 transition-all duration-300',
                  )}
                >
                  <div
                    className={cn(
                      'w-12 h-12 rounded-lg mb-4 mx-auto',
                      'bg-primary/10 group-hover:bg-primary/20',
                      'flex items-center justify-center transition-colors',
                    )}
                  >
                    <tech.icon className='w-6 h-6 text-primary' />
                  </div>
                  <h4 className='text-lg font-semibold text-foreground mb-2'>
                    {tech.title}
                  </h4>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {tech.description}
                  </p>
                </div>
              ))}
            </AnimatedList>
          </div>
        </AnimatedSection>

        {/* 性能对比 */}
        <AnimatedSection>
          {/* 性能对比 */}
          <div
            className={cn(
              'p-12 rounded-2xl',
              'bg-gradient-to-r from-gray-800 to-blue-700',
              'text-white text-center',
            )}
          >
            <div className='text-center mb-8'>
              <h3 className='text-2xl font-bold mb-4'>性能优势对比</h3>
              <p className='text-blue-200'>与传统端点防护产品相比的显著优势</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
              {ngepComparisonStats.map((stat, index) => (
                <MetallicShineCard
                  key={index}
                  className='flex items-center justify-center'
                >
                  <div className='mb-2 text-3xl font-bold text-primary'>
                    <NumberTicker
                      value={stat.value}
                      className='text-3xl font-bold text-primary'
                    />
                    <span>{stat.suffix}</span>
                  </div>
                  <div className='text-sm text-blue-200'>
                    {stat.description}
                  </div>
                </MetallicShineCard>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
