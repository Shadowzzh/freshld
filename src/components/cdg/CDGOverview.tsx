'use client'

import {
  TrendingUp,
  AlertTriangle,
  Shield,
  Target,
  Database,
  Clock,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { NumberTicker } from '@/components/ui/number-ticker'
import { SectionTitleArea } from '@/components/ui/section-title-area'
import { cn } from '@/lib/utils'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'

const threatStats = [
  {
    value: 2021,
    label: '年份',
    description: '上半年全球勒索攻击事件已与2020年全年基本持平',
  },
  {
    value: 10,
    label: '倍增长',
    description: '国内勒索病毒恶意域名访问量同比增长超10倍',
  },
  {
    value: 100,
    label: '% 覆盖',
    description: '从政府机构到企业，勒索攻击无处不在',
  },
]

const coreValues = [
  {
    icon: Shield,
    title: '事前预防',
    description: '通过资产清点、文件备份、病毒查杀等手段，构建第一道防线',
    features: ['自动化资产清点', '触发式文件备份', '第三方杀毒引擎'],
    theme: 'primary' as const,
  },
  {
    icon: Target,
    title: '事中阻断',
    description: '基于双模型检测技术，实时监测并阻断勒索威胁',
    features: ['文件诱捕检测', '勒索行为分析', 'MBR防护机制'],
    theme: 'primary' as const,
  },
  {
    icon: TrendingUp,
    title: '事后恢复',
    description: '快速恢复数据，全路径溯源，确保业务连续性',
    features: ['热点文件急速恢复', '全路径攻击溯源', '应急响应机制'],
    theme: 'primary' as const,
  },
]

export function CDGOverview() {
  return (
    <section className={cn('py-20 bg-gray-50')}>
      <div className={cn('container mx-auto px-4 lg:px-8')}>
        {/* 威胁背景 */}
        <div className={cn('max-w-6xl mx-auto mb-20')}>
          {/* CDG 产品概述标题区域 */}
          <div className={cn('max-w-7xl mx-auto mb-20')}>
            <SectionTitleArea
              badge='产品概述'
              title='重新定义'
              subtitle='勒索防护新标准'
              description={
                <div>
                  明焰CDG是新一代防勒索系统，采用双模型检测技术和全生命周期防护理念。
                  <br />
                  为企业数据安全提供滴水不漏的全面防护。
                  <br />
                  从事前预防到事后恢复，构建立体化防御体系，确保业务持续稳定运行。
                </div>
              }
              stats={[
                {
                  value: (
                    <div>
                      <NumberTicker value={99.8} decimalPlaces={1} />%
                    </div>
                  ),
                  label: '勒索检测准确率',
                  icon: Shield,
                },
                {
                  value: (
                    <div>
                      <NumberTicker value={10} />s
                    </div>
                  ),
                  label: '文件恢复时间',
                  icon: Clock,
                },
                {
                  value: (
                    <div>
                      <NumberTicker value={10000} />+
                    </div>
                  ),
                  label: '保护企业数据',
                  icon: Database,
                },
              ]}
              decorationIcon={Shield}
            />
          </div>

          <SectionHeader
            badge='威胁态势'
            title={
              <div className='leading-tight'>
                勒索威胁日益严峻
                <br />
                数据安全刻不容缓
              </div>
            }
            description={
              <div>
                在数字化高速发展的今天，勒索病毒攻击事件持续走高，
                <br />
                已成为企业面临的严峻安全挑战。
                <br />
                从厄瓜多尔电信运营商到美国成品油管道，勒索攻击的全球性和破坏力不容忽视
                <br />
                数据安全刻不容缓。
              </div>
            }
            className={cn('mb-16')}
          />

          {/* 威胁统计 */}
          <AnimatedList
            className={cn('grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16')}
            direction='up'
            delayStep={0.1}
          >
            {threatStats.map((stat, index) => (
              <div key={stat.label} className={cn('text-center group')}>
                <div
                  className={cn(
                    'relative p-8 rounded-2xl bg-white border transition-all duration-300',
                    'border-primary/15 hover:border-primary/30',
                    'hover:scale-105',
                  )}
                >
                  {/* 警告图标 */}
                  <div
                    className={cn(
                      'w-16 h-16 mx-auto mb-6 rounded-full',
                      'bg-gradient-to-br from-primary/10 to-primary/20',
                      'flex items-center justify-center',
                      'group-hover:scale-110 transition-transform duration-300',
                    )}
                  >
                    <AlertTriangle className={cn('w-8 h-8 text-primary')} />
                  </div>

                  <div className={cn('text-4xl font-bold text-primary mb-2')}>
                    <NumberTicker
                      value={stat.value}
                      delay={0.5 + index * 0.2}
                      className={cn('text-primary')}
                    />
                    <span className={cn('text-2xl ml-1')}>{stat.label}</span>
                  </div>

                  <p
                    className={cn(
                      'text-sm text-gray-600 leading-relaxed',
                      'text-ellipsis overflow-hidden whitespace-nowrap',
                    )}
                  >
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedList>

          {/* 法规要求 */}
          <AnimatedSection
            direction='up'
            className={cn(
              'relative p-8 rounded-2xl',
              'bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5',
              'border border-primary/15',
            )}
          >
            <div className={cn('flex flex-col lg:flex-row items-start gap-6')}>
              <div
                className={cn(
                  'mt-2',
                  'w-16 h-16 rounded-xl',
                  'bg-gradient-to-br from-primary to-primary/80',
                  'flex items-center justify-center flex-shrink-0',
                )}
              >
                <Shield className={cn('w-8 h-8 text-white')} />
              </div>

              <div className={cn('flex-1')}>
                <h3 className={cn('text-xl font-bold text-gray-900 mb-3')}>
                  《中华人民共和国数据安全法》明确企业责任
                </h3>
                <p className={cn('text-gray-700 leading-relaxed')}>
                  数据安全已上升到国家战略层面，法律明确了企业数据安全保护的责任。
                  面对日益猖獗的勒索威胁和严格的合规要求，企业急需一套全面、高效的防勒索解决方案。
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* 产品理念 */}
        <div className={cn('max-w-6xl mx-auto')}>
          <SectionHeader
            badge='核心理念'
            title='全生命周期防护，构建立体防御体系'
            description={
              <div>
                明焰CDG秉承全生命周期防护理念，基于大数据分析的精准判断和双模型检测技术。
                <br />
                为企业提供创新的勒索解决方案。
              </div>
            }
            className={cn('mb-16')}
          />

          {/* 核心价值 */}
          <AnimatedList
            initialDelay={0.3}
            className={cn('grid grid-cols-1 lg:grid-cols-3 gap-8')}
          >
            {coreValues.map(value => {
              const IconComponent = value.icon
              return (
                <div
                  key={value.title}
                  className={cn(
                    'h-full p-8 px-14 rounded-2xl bg-white border border-primary/15',
                    'transition-all duration-300 hover:border-primary/30',
                    'hover:scale-105 group text-center',
                  )}
                >
                  {/* 图标 */}
                  <div
                    className={cn(
                      'w-16 h-16 mb-6 rounded-xl mx-auto',
                      'bg-gradient-to-br from-primary/10 to-primary/20',
                      'flex items-center justify-center',
                      'group-hover:scale-110 transition-transform duration-300',
                    )}
                  >
                    <IconComponent className={cn('w-8 h-8 text-primary')} />
                  </div>

                  {/* 标题 */}
                  <h3 className={cn('text-xl font-bold text-gray-900 mb-4')}>
                    {value.title}
                  </h3>

                  {/* 描述 */}
                  <p className={cn('text-gray-600 leading-relaxed mb-6')}>
                    {value.description}
                  </p>

                  {/* 特性列表 */}
                  <ul
                    className={cn(
                      'grid grid-cols-1 sm:grid-cols-2 gap-2 text-center',
                    )}
                  >
                    {value.features.map((feature, index) => (
                      <li
                        key={index}
                        className={cn(
                          'flex items-center justify-center text-sm text-gray-700',
                          'before:content-["•"] before:text-primary before:mr-2 before:text-lg before:flex-shrink-0',
                        )}
                      >
                        <span className={cn('truncate')}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </AnimatedList>
        </div>

        {/* 产品定位 */}
        <AnimatedSection
          direction='up'
          duration={0.3}
          className={cn('max-w-6xl mx-auto mt-20 text-center')}
        >
          <div
            className={cn(
              'relative p-12 rounded-3xl',
              'bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5',
              'border border-primary/15',
            )}
          >
            {/* 装饰性背景 */}
            <div
              className={cn(
                'absolute -top-6 -right-6 w-32 h-32 rounded-full',
                'bg-gradient-radial from-primary/20 via-primary/10 to-transparent blur-2xl',
              )}
            />
            <div
              className={cn(
                'absolute -bottom-6 -left-6 w-24 h-24 rounded-full',
                'bg-gradient-radial from-primary/15 via-primary/5 to-transparent blur-xl',
              )}
            />

            <div className={cn('relative z-10')}>
              <h3 className={cn('text-3xl font-bold text-gray-700 mb-6')}>
                智能守护企业数据资产，7×24小时全天候防护
              </h3>
              <p className={cn('text-lg text-gray-500 leading-relaxed')}>
                明焰CDG致力于打造以&ldquo;资产多维度监控&rdquo;、&ldquo;双模型多维度精准检测&rdquo;、
                &ldquo;热点文件急速恢复&rdquo;和&ldquo;全路径溯源&rdquo;为核心的防勒索系统，
                为您的关键数据资产提供滴水不漏的全面防护，确保业务持续稳定运行。
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
