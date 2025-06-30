'use client'

import { Award, Target } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'
import { MetallicShineCard } from '../ui/metallic-shine'

const missionValues = [
  {
    icon: Target,
    title: '使命与愿景',
    description:
      '保护网络空间每个端点免受威胁，对标国际领先的安全企业，致力于成为行业头部提供商。',
    highlight: '自2017年成立以来',
  },
  {
    icon: Award,
    title: '技术认可',
    description:
      '多次获得微软可信计算奖，获得多项国家重点研发项目和示范应用，拥有多项核心专利。',
    highlight: '微软可信计算奖',
  },
]

const products = [
  {
    name: '明焰主机安全防护系统（NGEP）',
    description:
      '下一代端点保护，事前预警评估、事中监测分析、事后处置响应的闭环管理',
  },
  {
    name: '明焰云原生应用保护平台（CNAPP）',
    description: '云原生应用全生命周期安全防护，从开发到运行的全栈安全体系',
  },
  {
    name: '明焰安全度量验证平台',
    description: '可感知、可分析、可响应、可取证的智慧安全体系',
  },
]

/**
 * 联系信息组件
 * @returns
 */
export function AboutInfo() {
  return (
    <section className='py-24 relative bg-white'>
      <div className='container mx-auto px-4 relative z-10'>
        {/* 公司介绍标题 */}
        <AnimatedList className='text-center mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-4'>
            明焰安全的使命与愿景
          </h2>

          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            我们是广州奇盾信息技术有限公司旗下的核心品牌，专注于端点安全与云安全产品的研发与创新
          </p>
        </AnimatedList>

        {/* 明焰安全的使命与愿景 */}
        <AnimatedList className='grid lg:grid-cols-2 gap-8 mb-20'>
          {missionValues.map((item, index) => (
            <div
              key={index}
              className={cn(
                'p-8 rounded-2xl border border-primary/15 bg-card',
                'transition-all duration-300 ease-out  hover:border-primary/30 hover:scale-105',
              )}
            >
              <div className={cn('flex items-start space-x-4')}>
                <div className='p-3 rounded-lg bg-primary/10 border border-primary/15 flex-shrink-0'>
                  <item.icon className='w-6 h-6 text-primary' />
                </div>
                <div className='flex-1'>
                  <h3 className='text-xl font-semibold mb-3'>{item.title}</h3>
                  <p className='text-muted-foreground leading-relaxed mb-3'>
                    {item.description}
                  </p>
                  <div className='inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full'>
                    {item.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AnimatedList>

        {/* 产品矩阵 */}
        <AnimatedSection className='text-center mb-12'>
          <h3 className='text-2xl lg:text-3xl font-bold mb-4'>
            全面的产品矩阵
          </h3>
          <p className='text-muted-foreground text-lg'>
            为客户提供全生命周期的安全防护解决方案
          </p>
        </AnimatedSection>

        <AnimatedList
          className='grid lg:grid-cols-3 gap-6'
          itemClassName='flex-1 items-stretch content-stretch'
        >
          {products.map((product, index) => (
            <div
              key={index}
              className={cn(
                'h-full',
                'p-6 rounded-xl border border-primary/15 bg-card',
                'transition-all duration-300  hover:border-primary/15',
                'group hover:scale-105',
              )}
            >
              <div className='h-2 w-16 bg-gradient-to-r from-primary to-primary/50 rounded-full mb-4 group-hover:w-24 transition-all duration-300' />
              <h4 className='text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors'>
                {product.name}
              </h4>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                {product.description}
              </p>
            </div>
          ))}
        </AnimatedList>

        {/* 核心理念 */}
        <AnimatedSection className='mt-20 text-center'>
          <MetallicShineCard
            shineClassName={cn(
              'bg-gradient-to-r from-transparent via-primary/10 to-transparent',
            )}
            className={cn(
              'max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/15',
              'hover:bg-primary/ hover:border-primary/15',
              'transform  hover:-translate-y-2',
            )}
          >
            <h3 className='text-xl font-semibold mb-4 text-primary'>
              核心理念
            </h3>
            <p className='text-lg text-foreground leading-relaxed'>
              明焰安全始终秉持&ldquo;以技术为主实战纵深防御&rdquo;的理念，为企业构建从端到云的全栈安全体系。
              我们相信，通过领先的AI技术，监控操作系统中所有进程行为，能够让黑客无所遁形。
            </p>
          </MetallicShineCard>
        </AnimatedSection>
      </div>
    </section>
  )
}
