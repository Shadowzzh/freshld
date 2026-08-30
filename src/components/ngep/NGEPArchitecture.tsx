'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import {
  CheckCircle,
  Cloud,
  Database,
  Monitor,
  Network,
  Server,
  Shield,
  X,
  Zap,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'
import { OrbitingCircles } from '@/components/ui/orbiting-circles'
import Link from 'next/link'

export default function NGEPArchitecture() {
  const integrations = [
    {
      icon: Monitor,
      title: '态势感知平台',
      description: '与SIEM/SOC平台深度集成，提供全网安全态势',
    },
    {
      icon: Shield,
      title: 'Web应用防火墙',
      description: '与WAF联动，实现Web应用和端点的协同防护',
    },
    {
      icon: Network,
      title: '网络流量分析',
      description: '与NTA系统协同，提供网络和端点的全方位监控',
    },
    {
      icon: Database,
      title: '威胁情报平台',
      description: '集成威胁情报，增强威胁识别和响应能力',
    },
  ]

  // 架构图数据，适配自定义 ArchitectureHoverEffect 组件
  const architectureItems = [
    {
      title: '端点层',
      description: '轻量级Agent • 实时数据采集 • 本地威胁检测 • 自动响应处置',
      link: '#endpoint',
      icon: Monitor,
    },
    {
      title: '管理层',
      description:
        '统一管理控制台 • 策略配置下发 • 告警事件处理 • 报表统计分析',
      link: '#management',
      icon: Server,
    },
    {
      title: '云端层',
      description: 'AI威胁分析 • 威胁情报更新 • 大数据关联 • 云端沙箱分析',
      link: '#cloud',
      icon: Cloud,
    },
  ]

  const deploymentFeatures = [
    {
      icon: Zap,
      title: '快速部署',
      description: '5分钟完成安装配置，支持批量部署管理',
    },

    {
      icon: Cloud,
      title: '服务端轻量',
      description: '云原生架构，弹性扩展，运维成本低',
    },
    {
      icon: CheckCircle,
      title: '兼容性强',
      description: '支持Windows/Linux，兼容老化系统',
    },
  ]

  // 自定义架构图悬停效果组件
  const ArchitectureHoverEffect = ({
    items,
    className,
  }: {
    items: {
      title: string
      description: string
      link: string
      icon: React.ComponentType<{ className?: string }>
    }[]
    className?: string
  }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
      <div
        className={cn('grid grid-cols-1 md:grid-cols-3 gap-8 py-0', className)}
      >
        {items.map((item, idx) => {
          const IconComponent = item.icon
          return (
            <a
              href={item?.link}
              key={item?.link}
              className='relative group block p-2 h-full w-full'
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className='absolute inset-0 h-full w-full bg-white/5 backdrop-blur-sm block rounded-xl'
                    layoutId='architectureHoverBackground'
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>

              <div
                className={cn(
                  'p-6 rounded-xl h-full w-full',
                  'bg-white/10 backdrop-blur-sm border border-white/20',
                  'group-hover:border-white/30 transition-all duration-300',
                  'relative z-20',
                )}
              >
                <div className='text-center mb-6'>
                  <div
                    className={cn(
                      'w-16 h-16 mx-auto mb-4 rounded-full',
                      'bg-primary/20 flex items-center justify-center',
                      'group-hover:bg-primary/30 transition-colors',
                    )}
                  >
                    <IconComponent className='w-8 h-8 text-primary' />
                  </div>
                  <h4 className='text-lg font-semibold text-white'>
                    {item.title}
                  </h4>
                </div>
                <p className='text-sm text-blue-200 text-center leading-relaxed'>
                  {item.description}
                </p>
              </div>
            </a>
          )
        })}
      </div>
    )
  }

  return (
    <section className={cn('py-24 bg-white', 'relative overflow-hidden')}>
      <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8')}>
        {/* 产品协同 - 分屏式布局 */}
        <div className='mb-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            {/* 左侧内容 */}
            <AnimatedSection direction='left' className='space-y-8'>
              <div>
                <div
                  className={cn(
                    'inline-flex items-center px-4 py-2 rounded-full',
                    'bg-primary/10 text-primary font-semibold text-sm mb-4',
                  )}
                >
                  产品协同
                </div>

                <h2
                  className={cn(
                    'text-3xl md:text-4xl font-bold',
                    'text-foreground mb-6',
                  )}
                >
                  开放生态，无缝集成
                </h2>

                <p
                  className={cn(
                    'text-lg text-muted-foreground',
                    'leading-relaxed mb-8',
                  )}
                >
                  与主流安全产品深度集成，构建统一的安全防护体系，
                  实现安全能力的协同增强
                </p>
              </div>

              {/* 集成特点列表 */}
              <AnimatedList direction='right' className='space-y-4'>
                {[
                  '标准API接口，快速对接',
                  '统一数据格式，无缝协作',
                  '联动响应机制，协同防护',
                  '开放平台架构，生态共建',
                ].map((feature, index) => (
                  <div key={index} className='flex items-center space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full' />
                    <span className='text-muted-foreground'>{feature}</span>
                  </div>
                ))}
              </AnimatedList>
            </AnimatedSection>

            {/* 右侧集成图谱 - 使用 OrbitingCircles */}
            <AnimatedSection
              direction='right'
              className='relative flex items-center justify-center'
            >
              <div className='relative size-80 flex items-center justify-center'>
                {/* 中心核心引擎 */}
                <div className='relative size-80 mx-auto flex items-center justify-center'>
                  {/* 中心核心 */}
                  <div className='relative flex flex-col items-center'>
                    <div className='relative size-24 group flex items-center justify-center'>
                      {/* 外层光环效果 */}
                      <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full animate-pulse'></div>
                      <div className='absolute inset-1 bg-gradient-to-br from-primary/30 to-primary/50 rounded-full blur-sm'></div>
                      {/* 内部光泽效果 */}
                      <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full'></div>

                      {/* 内容 */}
                      <div className='relative text-center text-white z-10'>
                        <Shield className='size-7 mx-auto mb-1 drop-shadow-lg' />
                        <div className='text-xs font-medium tracking-wide'>
                          核心引擎
                        </div>
                      </div>
                    </div>
                    {/* 底部阴影 */}
                    <div className='absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black/10 rounded-full blur-md'></div>
                  </div>
                </div>

                {/* 环绕的集成产品 */}
                <OrbitingCircles
                  radius={130}
                  duration={25}
                  iconSize={72}
                  path={true}
                >
                  {integrations.map((integration, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className='group relative'
                    >
                      <div
                        className={cn(
                          'size-16 bg-white rounded-full overflow-hidden border-2 border-gray-200 ',
                          'flex items-center justify-center shadow-md',
                          'transition-all duration-300 hover:scale-110',
                          'group-hover:border-primary/40 group-hover:bg-primary/5',
                        )}
                      >
                        <integration.icon className='w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300' />
                      </div>

                      <div
                        className={cn(
                          'absolute -bottom-10 left-1/2 transform -translate-x-1/2',
                          'w-28 text-center opacity-0 group-hover:opacity-100',
                          'transition-all duration-300 group-hover:translate-y-1',
                          'pointer-events-none',
                        )}
                      >
                        <div
                          className={cn(
                            'text-xs font-medium text-foreground leading-tight',
                            'bg-card/95 backdrop-blur-sm px-2 py-1.5 shadow-lg',
                            'border border-primary/15 rounded',
                          )}
                        >
                          {integration.title}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </OrbitingCircles>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* 部署特点 - 对比表格式 */}
        <div className='mb-20'>
          <AnimatedList className='text-center mb-16'>
            <div
              className={cn(
                'inline-flex items-center px-4 py-2 rounded-full',
                'bg-primary/10 text-primary font-semibold text-sm mb-4',
              )}
            >
              部署特点
            </div>

            <h2
              className={cn(
                'text-3xl md:text-4xl font-bold',
                'text-foreground mb-6',
              )}
            >
              简单部署，强大性能
            </h2>

            <p
              className={cn(
                'text-xl text-muted-foreground max-w-3xl mx-auto',
                'leading-relaxed',
              )}
            >
              专为企业环境设计，支持快速部署和大规模管理，
              确保在不影响业务的前提下提供最强防护
            </p>
          </AnimatedList>

          {/* 对比表格布局 */}
          <AnimatedSection>
            <div className='bg-card rounded-2xl border border-gray-200 overflow-hidden'>
              <div className='grid grid-cols-1 md:grid-cols-2'>
                {/* 传统方案 */}
                <div className='p-8 bg-gray-50 border-r border-gray-200'>
                  <div className='text-center mb-6'>
                    <div className='w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center'>
                      <X className='w-6 h-6 text-gray-500' />
                    </div>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      传统方案
                    </h3>
                    <p className='text-sm text-gray-600'>
                      复杂部署，性能影响大
                    </p>
                  </div>
                  <AnimatedList className='space-y-3'>
                    {[
                      '部署周期：2-4周',
                      'CPU占用：5-15%',
                      '内存占用：200MB+',
                      '兼容性：有限支持',
                      '运维成本：高',
                    ].map((item, index) => (
                      <div key={index} className='flex items-center space-x-3'>
                        <X className='w-4 h-4 text-red-500 flex-shrink-0' />
                        <span className='text-muted-foreground text-sm'>
                          {item}
                        </span>
                      </div>
                    ))}
                  </AnimatedList>
                </div>

                {/* NGEP方案 */}
                <div className='p-8 bg-gradient-to-br from-green-50 to-emerald-50'>
                  <div className='text-center mb-6'>
                    <div className='w-12 h-12 bg-green-500 rounded-lg mx-auto mb-3 flex items-center justify-center'>
                      <CheckCircle className='w-6 h-6 text-white' />
                    </div>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      NGEP方案
                    </h3>
                    <p className='text-sm text-green-700'>
                      快速部署，零业务影响
                    </p>
                  </div>
                  <AnimatedList direction='right' className='space-y-3'>
                    {deploymentFeatures.map((feature, index) => (
                      <div key={index} className='flex items-center space-x-3'>
                        <CheckCircle className='w-4 h-4 text-primary flex-shrink-0' />
                        <span className='text-foreground text-sm font-medium'>
                          {feature.description}
                        </span>
                      </div>
                    ))}
                  </AnimatedList>
                </div>
              </div>

              {/* 底部CTA */}
              <div className='px-8 py-6 bg-gradient-to-r from-gray-50 to-green-50 border-t border-gray-200'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                  <div>
                    <h4 className='text-lg font-semibold text-gray-900 mb-1'>
                      立即体验差异化优势
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      免费试用30天，感受企业级安全防护的强大
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* 架构图 */}
        <AnimatedSection>
          <div
            className={cn(
              'bg-gradient-to-r from-gray-700 to-brand-secondary',
              'rounded-3xl p-8 md:p-12 mb-20',
              'text-white',
            )}
          >
            <div className='text-center mb-12'>
              <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                NGEP架构图
              </h3>
              <p className='text-blue-200 max-w-2xl mx-auto'>
                云端大脑 + 端点感知的分布式安全架构
              </p>
            </div>

            <ArchitectureHoverEffect
              items={architectureItems}
              className='grid-cols-1 md:grid-cols-3 py-0'
            />
          </div>
        </AnimatedSection>

        {/* CTA区域 */}
        <AnimatedSection>
          <div className='relative bg-background pb-20'>
            <div className='container mx-auto px-4'>
              <div className='relative z-10 max-w-4xl mx-auto'>
                <div className='text-center'>
                  <div className='relative p-8 rounded-2xl border border-primary/15 bg-card/50 backdrop-blur-sm'>
                    <CheckCircle className='w-12 h-12 text-primary mx-auto mb-4' />
                    <h3 className='text-2xl font-bold text-foreground mb-4'>
                      立即体验明焰NGEP
                    </h3>
                    <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
                      专业的端点安全防护，为您的企业提供全方位的安全保障
                    </p>

                    <Link href={`/contact`}>
                      <button
                        className={cn(
                          'cursor-pointer',
                          'px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300',
                        )}
                      >
                        立即体验
                      </button>
                    </Link>

                    {/* 背景装饰 */}
                    <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
