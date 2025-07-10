'use client'

import { cn } from '@/lib/utils'
import { Shield, Eye, Zap, Target, Users, Globe } from 'lucide-react'
import { SectionTitleArea } from '@/components/ui/section-title-area'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'

export default function NGEPOverview() {
  return (
    <section
      className={cn('pt-16 md:pt-24 bg-white', 'relative overflow-hidden')}
    >
      {/* 动态背景装饰 */}
      <div className='absolute inset-0'>
        {/* 网格背景 */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_110%)]' />
      </div>

      <div
        className={cn('relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8')}
      >
        {/* NGEP 产品概述标题区域 */}
        <AnimatedSection>
          <SectionTitleArea
            badge='产品概述'
            title='重新定义'
            subtitle='端点安全防护'
            description='明焰NGEP是新一代端点防护系统，采用云原生架构和AI驱动的威胁检测技术'
            secondaryDescription='为企业提供全方位、智能化的端点安全解决方案'
            stats={[]}
            decorationIcon={Shield}
          />
        </AnimatedSection>

        {/* 次要特性 - 不规则网格 */}
        <div className={cn('max-w-7xl mx-auto mb-8')}>
          <AnimatedSection className='text-center mb-12'>
            <h3
              className={cn(
                'text-2xl md:text-3xl font-bold text-gray-900 mb-4 ',
                'bg-gradient-to-r from-gray-900 to-gray-700',
                'bg-clip-text text-transparent',
              )}
            >
              完整的安全能力矩阵
            </h3>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              多维度安全防护能力，构建立体化防御体系
            </p>
          </AnimatedSection>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <AnimatedList
              direction='up'
              className='md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6'
            >
              {[
                {
                  icon: Target,
                  title: '精准识别',
                  description: '基于AI和机器学习的威胁识别',
                },
                {
                  icon: Users,
                  title: '统一管理',
                  description: '集中化控制台，统一管理所有端点设备的安全状态',
                },
                {
                  icon: Globe,
                  title: '云端协同',
                  description: '云端威胁情报实时更新，全球威胁信息共享防护',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    'p-6 rounded-xl relative overflow-hidden',
                    'border border-primary/15 backdrop-blur-sm',
                    'hover:border-primary/30 hover:-translate-y-1',
                    'transition-all duration-300',
                    'group  h-full',
                  )}
                >
                  {/* 背景装饰 */}
                  <div
                    className={cn(
                      'absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl transition-colors duration-300',
                      'bg-primary/8',
                      'group-hover:bg-primary/12',
                    )}
                  />
                  <div className='absolute -bottom-2 -left-2 w-16 h-16 bg-white/20 rounded-full blur-xl' />

                  <div className='relative z-10'>
                    <div className='flex items-center space-x-4 mb-4'>
                      <div
                        className={cn(
                          'w-12 h-12 rounded-xl',
                          'bg-gradient-to-br from-primary/20 to-primary/10',
                          'flex items-center justify-center shadow-sm',
                          'group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-primary/20',
                          'transition-all duration-300',
                        )}
                      >
                        <feature.icon className='w-6 h-6 text-primary' />
                      </div>
                      <h4
                        className={cn(
                          'text-lg font-bold text-gray-900',
                          'group-hover:text-primary',
                          'transition-colors duration-300',
                        )}
                      >
                        {feature.title}
                      </h4>
                    </div>
                    <p className='text-gray-600 leading-relaxed pl-16 text-sm'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </AnimatedList>
          </div>
        </div>

        {/* 统一防护架构 - 流程时间线 */}
        <AnimatedSection>
          <div className={cn('p-8 md:p-12 rounded-3xl')}>
            <div className='text-center mb-16'>
              <h3
                className={cn(
                  'text-2xl md:text-3xl font-bold text-gray-900 mb-4',
                )}
              >
                统一防护架构
              </h3>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                从端点到云端的全链路安全防护，实现威胁的快速发现、分析和处置
              </p>
            </div>

            {/* 流程时间线 */}
            <div className='max-w-6xl mx-auto'>
              <div className='relative'>
                {/* 时间线背景 */}
                <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary to-primary/20 hidden md:block' />

                {/* 流程步骤 */}
                <AnimatedList className='space-y-12'>
                  {[
                    {
                      icon: Shield,
                      title: '端点防护',
                      desc: '轻量级客户端，实时监控与防护',
                      detail:
                        '部署在终端设备上的轻量级Agent，负责实时数据采集、本地威胁检测和初步响应处置',
                      position: 'left',
                    },
                    {
                      icon: Eye,
                      title: '智能分析',
                      desc: 'AI威胁检测，行为分析引擎',
                      detail:
                        '云端AI引擎对收集的数据进行深度分析，识别复杂威胁模式和异常行为',
                      position: 'right',
                    },
                    {
                      icon: Zap,
                      title: '自动响应',
                      desc: '威胁隔离处置，取证溯源分析',
                      detail:
                        '基于分析结果自动执行响应策略，包括威胁隔离、文件清理和详细取证',
                      position: 'left',
                    },
                  ].map((step, index) => (
                    <div
                      key={index}
                      className={cn(
                        'relative flex items-center',
                        step.position === 'right' ? 'md:flex-row-reverse' : '',
                      )}
                    >
                      {/* 时间线节点 */}
                      <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10' />

                      {/* 内容卡片 */}
                      <div
                        className={cn(
                          'w-full md:w-5/12 p-6 rounded-2xl bg-white border border-primary/15',
                          'transition-all duration-300',
                          'hover:border-primary/30 hover:-translate-y-1',
                          'group ',
                        )}
                      >
                        <div className='flex items-start space-x-4'>
                          <div
                            className={cn(
                              'w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center',
                              'group-hover:bg-primary/20 transition-colors',
                            )}
                          >
                            <step.icon className='w-6 h-6 text-primary' />
                          </div>
                          <div className='flex-1'>
                            <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                              {step.title}
                            </h4>
                            <p className='text-primary font-medium text-sm mb-3'>
                              {step.desc}
                            </p>
                            <p className='text-gray-600 text-sm leading-relaxed'>
                              {step.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </AnimatedList>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
