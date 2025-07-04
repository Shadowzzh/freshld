'use client'

import { cn } from '@/lib/utils'
import { Network, Container, Shield, Workflow, Eye } from 'lucide-react'

// CNAPP 产品优势数据
const cnapppAdvantages = [
  {
    icon: Network,
    title: '网络隔离策略高效自学习',
    description: '基于流量分析和行为建模，自动生成最优网络隔离策略',
    features: ['流量行为分析', '策略自动生成', '动态策略调整', '零信任架构'],
    theme: 'blue' as const,
  },
  {
    icon: Container,
    title: '基于行为模型的容器逃逸检测',
    description: '通过容器行为基线建模，精准识别容器逃逸攻击',
    features: ['行为基线建模', '异常行为检测', '实时逃逸告警', '自动阻断响应'],
    theme: 'purple' as const,
  },
  {
    icon: Shield,
    title: '全面的容器安全管理能力',
    description: '从镜像扫描到运行时防护的全生命周期安全管理',
    features: ['镜像漏洞扫描', '运行时监控', '合规性检查', '安全策略管理'],
    theme: 'green' as const,
  },
  {
    icon: Workflow,
    title: '微服务隔离策略自动生成',
    description: '智能分析微服务间通信，自动生成精细化隔离策略',
    features: ['服务依赖分析', '通信模式识别', '策略自动生成', '动态策略更新'],
    theme: 'orange' as const,
  },
  {
    icon: Eye,
    title: '容器行为感知',
    description: '深度感知容器内部行为，识别异常活动和潜在威胁',
    features: ['进程行为监控', '文件系统监控', '网络活动监控', '系统调用分析'],
    theme: 'red' as const,
  },
]

export function CNAPPAdvantages() {
  return (
    <section className={cn('py-16 md:py-20 lg:py-24 bg-background')}>
      <div className={cn('max-w-7xl mx-auto px-6 md:px-8 lg:px-12')}>
        {/* 标题部分 */}
        <div className={cn('text-center mb-16 md:mb-20')}>
          <div className='inline-flex items-center px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-primary/10 text-primary font-semibold text-sm md:text-base mb-6 md:mb-8'>
            产品优势
          </div>
          <h2
            className={cn(
              'text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 md:mb-8',
            )}
          >
            产品优势
          </h2>
          <p
            className={cn(
              'text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 md:px-0',
            )}
          >
            明焰CNAPP凭借先进的技术架构和创新的安全理念，为云原生环境提供卓越的安全防护能力
          </p>
        </div>

        {/* 优势列表 */}
        <div
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8',
          )}
        >
          {cnapppAdvantages.map((advantage, index) => {
            const IconComponent = advantage.icon

            return (
              <div
                key={index}
                className={cn(
                  'group relative p-6 md:p-8 rounded-2xl',
                  'bg-card/50 border border-primary/15',
                  'hover:border-primary/15 hover:bg-card/80',
                  'transition-all duration-300',
                  'hover:scale-105',
                  'text-center md:text-left',
                )}
              >
                {/* 悬停光效 */}
                <div
                  className={cn(
                    'absolute inset-0 opacity-0 group-hover:opacity-10',
                    'bg-gradient-to-br from-primary/20 via-transparent to-primary/20',
                    'transition-opacity duration-500',
                  )}
                />

                {/* 内容 */}
                <div className='relative z-10'>
                  {/* 图标 */}
                  <div
                    className={cn(
                      'w-16 h-16 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-2xl flex items-center justify-center mb-6',
                      'bg-primary/10 text-primary',
                      'group-hover:bg-primary/20 group-hover:scale-110',
                      'transition-all duration-300',
                      'mx-auto md:mx-0',
                    )}
                  >
                    <IconComponent className='w-8 h-8 md:w-8 md:h-8 lg:w-9 lg:h-9' />
                  </div>

                  {/* 标题 */}
                  <h3
                    className={cn(
                      'text-xl md:text-xl lg:text-2xl font-bold text-foreground mb-4',
                      'transition-colors duration-300',
                    )}
                  >
                    {advantage.title}
                  </h3>

                  {/* 描述 */}
                  <p
                    className={cn(
                      'text-muted-foreground text-base md:text-base leading-relaxed mb-6',
                      'group-hover:text-foreground transition-colors duration-300',
                    )}
                  >
                    {advantage.description}
                  </p>

                  {/* 特性列表 */}
                  <ul className={cn('text-left', 'grid grid-cols-2 gap-2')}>
                    {advantage.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={cn(
                          'flex items-center space-x-3 text-sm md:text-sm',
                          'group-hover:transform group-hover:translate-x-2',
                          'transition-all duration-300',
                          'justify-center md:justify-start',
                        )}
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className='w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0' />
                        <span
                          className={cn(
                            'text-muted-foreground',
                            'group-hover:text-primary/80 transition-colors duration-300',
                          )}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 装饰性边框 */}
                <div
                  className={cn(
                    'absolute top-0 left-0 w-full h-px',
                    'bg-gradient-to-r from-transparent via-primary/30 to-transparent',
                    'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                  )}
                />
              </div>
            )
          })}
        </div>

        {/* 底部总结 */}
        <div className={cn('mt-16 md:mt-20 lg:mt-24 text-center')}>
          <div
            className={cn(
              'p-8 md:p-10 lg:p-12 rounded-3xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/15',
            )}
          >
            <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6'>
              领先的云原生安全技术
            </h3>
            <p className='text-base md:text-lg lg:text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed px-4 md:px-0'>
              通过创新的技术架构和智能化的安全策略，明焰CNAPP为云原生环境提供了前所未有的安全防护能力
              <br />
              让您的云原生应用在享受敏捷性和可扩展性的同时，获得企业级的安全保障。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
