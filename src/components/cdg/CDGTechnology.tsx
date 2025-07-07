'use client'

import {
  Brain,
  Target,
  TrendingUp,
  Filter,
  Cpu,
  Database,
  Activity,
  Zap,
  CheckCircle,
  BarChart3,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/card'
import { NumberTicker } from '@/components/ui/number-ticker'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'
import { cn } from '@/lib/utils'

const coreTechnologies = [
  {
    id: 'dual-model',
    icon: Brain,
    title: '实时精准检测 - 双模型检测',
    description:
      '围绕勒索攻击异常加密行为进行分析，建立正常和异常文件加密行为模型',
    details: [
      '正常文件加密行为建模',
      '异常加密活动检测',
      '立即触发警报机制',
      '自动响应阻断',
      '显著提高精准度',
      '有效防范加密威胁',
    ],
    color: 'from-primary to-primary/80',
    stats: [
      { value: 99.9, label: '检测准确率', suffix: '%' },
      { value: 0.1, label: '误报率', suffix: '%', prefix: '<' },
    ],
  },
  {
    id: 'accuracy',
    icon: Target,
    title: '实时精准检测 - 模型准确度',
    description: '从多维度辅助判断，通过深度分析提高检测精准度',
    details: [
      '文件类特征识别',
      '批量文件处理检测',
      '注册表变更分析',
      '系统行为监控',
      '机器学习算法',
      '智能行为分析',
    ],
    color: 'from-primary to-primary/80',
    stats: [
      { value: 95, label: '特征识别率', suffix: '%' },
      { value: 10, label: '检测维度', suffix: '个', prefix: '>' },
    ],
  },
  {
    id: 'noise-reduction',
    icon: Filter,
    title: '实时精准检测 - 降噪技术',
    description: '采用规则管理和自学习策略，大幅降低行为检测误报',
    details: [
      'WPS、微信等软件白名单',
      '客户业务行为学习',
      '周期性规则优化',
      '运维人员确认机制',
      '自动规则生成',
      '误报率持续降低',
    ],
    color: 'from-primary to-primary/80',
    stats: [
      { value: 90, label: '误报降低', suffix: '%' },
      { value: 1000, label: '内置规则', suffix: '+' },
    ],
  },
]

const technicalAdvantages = [
  {
    icon: Activity,
    title: '行为分析引擎',
    description: '基于海量勒索攻击样本构建的监督式机器学习模型',
    features: [
      '用户交互监控',
      '进程行为分析',
      'OS底层数据收集',
      '系统内核身份信息',
      '物理信息采集',
      '文件信息分析',
    ],
  },
  {
    icon: Database,
    title: '威胁情报中心',
    description: '积累海量威胁数据，提供实时威胁情报支撑',
    features: [
      '全球威胁数据',
      '实时情报更新',
      '攻击模式识别',
      '威胁趋势分析',
      '恶意样本库',
      '攻击者画像',
    ],
  },
  {
    icon: Cpu,
    title: '底层安全内核',
    description: '深度集成系统内核，提供底层安全防护能力',
    features: [
      '内核级监控',
      '系统调用拦截',
      '驱动程序保护',
      '内存保护机制',
      '进程完整性',
      '文件系统防护',
    ],
  },
  {
    icon: Zap,
    title: '实时响应机制',
    description: '毫秒级威胁响应，确保及时阻断攻击',
    features: [
      '毫秒级检测',
      '自动阻断机制',
      '实时告警推送',
      '快速隔离处理',
      '应急响应流程',
      '恢复机制完善',
    ],
  },
]

const performanceMetrics = [
  {
    icon: TrendingUp,
    value: 99.9,
    label: '威胁检测准确率',
    suffix: '%',
    description: '基于双模型检测技术实现的高精度威胁识别',
  },
  {
    icon: Zap,
    value: 1,
    label: 'CPU占用率',
    suffix: '%',
    prefix: '<',
    description: '轻量级设计，对系统性能影响极小',
  },
  {
    icon: Filter,
    value: 0.1,
    label: '误报率',
    suffix: '%',
    prefix: '<',
    description: '智能学习算法有效降低误报干扰',
  },
  {
    icon: Activity,
    value: 100,
    label: '毫秒响应时间',
    suffix: 'ms',
    prefix: '<',
    description: '实时监控，毫秒级威胁响应能力',
  },
]

export function CDGTechnology() {
  return (
    <section className={cn('py-20 bg-white')}>
      <div className={cn('container mx-auto px-4')}>
        <div className={cn('max-w-6xl mx-auto')}>
          <SectionHeader
            badge='核心技术'
            title='创新技术驱动，构建智能防护体系'
            description='明焰CDG集成多项创新技术，通过双模型检测、智能学习、实时响应等核心技术，为您提供业界领先的防勒索解决方案。'
            className={cn('mb-16')}
          />

          {/* 核心技术详解 */}
          <AnimatedList
            className={cn('space-y-16 mb-20')}
            direction='up'
            duration={0.3}
          >
            {coreTechnologies.map((tech, index) => (
              <div
                key={tech.id}
                className={cn(
                  'flex flex-col gap-12 items-center',
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse',
                )}
              >
                {/* 技术说明 */}
                <div className={cn('flex-1 w-full')}>
                  <Card className={cn('p-8 h-full')}>
                    <div className={cn('flex items-start gap-6 mb-6')}>
                      <div
                        className={cn(
                          'w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0',
                          `bg-gradient-to-br ${tech.color}`,
                        )}
                      >
                        <tech.icon className={cn('w-8 h-8 text-white')} />
                      </div>
                      <div className={cn('flex-1')}>
                        <h3
                          className={cn('text-xl font-bold text-gray-900 mb-3')}
                        >
                          {tech.title}
                        </h3>
                        <p className={cn('text-gray-600 leading-relaxed')}>
                          {tech.description}
                        </p>
                      </div>
                    </div>

                    {/* 技术特点 */}
                    <AnimatedList
                      className={cn(
                        'grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6',
                      )}
                      direction='right'
                      itemClassName={cn(
                        'flex items-center gap-3 p-3 rounded-lg',
                        'bg-gray-50 hover:bg-gray-100',
                        'transition-colors duration-300',
                      )}
                    >
                      {tech.details.map((detail, detailIndex) => (
                        <div key={detailIndex}>
                          <CheckCircle
                            className={cn(
                              'w-4 h-4 text-green-500 flex-shrink-0',
                            )}
                          />
                          <span className={cn('text-sm text-gray-700')}>
                            {detail}
                          </span>
                        </div>
                      ))}
                    </AnimatedList>

                    {/* 性能指标 */}
                    <div className={cn('grid grid-cols-2 gap-4')}>
                      {tech.stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className={cn(
                            'text-center p-4 rounded-xl',
                            'bg-gradient-to-br from-gray-50 to-gray-100',
                          )}
                        >
                          <div
                            className={cn(
                              'text-2xl font-bold text-gray-900 mb-1',
                            )}
                          >
                            {stat.prefix && (
                              <span className={cn('text-lg text-primary mr-1')}>
                                {stat.prefix}
                              </span>
                            )}
                            <NumberTicker
                              value={stat.value}
                              delay={0.5 + index * 0.3 + statIndex * 0.1}
                              decimalPlaces={stat.value % 1 !== 0 ? 1 : 0}
                              className={cn('text-primary')}
                            />
                            <span className={cn('text-lg text-primary ml-1')}>
                              {stat.suffix}
                            </span>
                          </div>
                          <p
                            className={cn('text-xs text-gray-600 font-medium')}
                          >
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* 技术图示 */}
                <div className={cn('flex-1')}>
                  <AnimatedSection
                    direction='up'
                    duration={0.8}
                    className={cn('relative')}
                  >
                    <div
                      className={cn(
                        'relative h-80 rounded-3xl border overflow-hidden',
                        'bg-gradient-to-br from-primary/5 to-primary/10',
                        'border-primary/15',
                      )}
                    >
                      {/* 背景装饰 */}
                      <div className={cn('absolute inset-0 opacity-30')}>
                        <div
                          className={cn('absolute inset-0')}
                          style={{
                            backgroundImage: `
                            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
                          `,
                          }}
                        />
                      </div>

                      {/* 技术流程图 */}
                      <div
                        className={cn(
                          'relative z-10 h-full flex items-center justify-center p-8',
                        )}
                      >
                        <div className={cn('text-center')}>
                          <div
                            className={cn(
                              'w-full md:w-24 h-24 mx-auto mb-6 rounded-2xl',
                              'flex items-center justify-center shadow-lg',
                              `bg-gradient-to-br ${tech.color}`,
                            )}
                          >
                            <tech.icon className={cn('w-12 h-12 text-white')} />
                          </div>
                          <h4
                            className={cn(
                              'text-lg font-bold text-gray-900 mb-2',
                            )}
                          >
                            {tech.title.split(' - ')[1] || tech.title}
                          </h4>
                          <div
                            className={cn(
                              'flex items-center justify-center gap-2 text-sm text-gray-600',
                            )}
                          >
                            <BarChart3 className={cn('w-4 h-4')} />
                            <span>智能分析引擎</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            ))}
          </AnimatedList>

          {/* 技术优势 */}
          <div className={cn('mb-20')}>
            <AnimatedSection
              direction='up'
              duration={0.6}
              className={cn('text-center mb-12')}
            >
              <h3 className={cn('text-2xl font-bold text-gray-900 mb-4')}>
                技术优势
              </h3>
              <p className={cn('text-gray-600 max-w-3xl mx-auto')}>
                基于先进的技术架构和算法模型，提供全方位的技术保障
              </p>
            </AnimatedSection>

            <AnimatedList
              className={cn(
                'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8',
              )}
              direction='up'
            >
              {technicalAdvantages.map(advantage => (
                <Card
                  key={advantage.title}
                  className={cn(
                    'p-6 h-full transition-all duration-300 group',
                    'border-primary/15 hover:border-primary/30',
                    'hover:scale-105',
                  )}
                >
                  <div
                    className={cn(
                      'w-12 h-12 mb-4 rounded-xl flex items-center justify-center',
                      'bg-gradient-to-br from-primary/20 to-primary/10',
                      'group-hover:scale-110 transition-transform duration-300',
                    )}
                  >
                    <advantage.icon className={cn('w-6 h-6 text-primary')} />
                  </div>
                  <h4 className={cn('font-bold text-gray-900 mb-3')}>
                    {advantage.title}
                  </h4>
                  <p
                    className={cn('text-sm text-gray-600 mb-4 leading-relaxed')}
                  >
                    {advantage.description}
                  </p>
                  <div className={cn('space-y-2')}>
                    {advantage.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={cn(
                          'flex items-center gap-2 text-xs text-gray-700',
                        )}
                      >
                        <div
                          className={cn('w-1 h-1 rounded-full bg-primary')}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </AnimatedList>
          </div>

          {/* 性能指标 */}
          <AnimatedSection
            direction='up'
            duration={0.8}
            className={cn(
              'p-8 rounded-3xl border',
              'bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5',
              'border-primary/15',
            )}
          >
            <div className={cn('text-center mb-8')}>
              <h3 className={cn('text-2xl font-bold text-gray-900 mb-4')}>
                性能指标
              </h3>
              <p className={cn('text-gray-600 max-w-3xl mx-auto')}>
                通过持续的技术创新和优化，实现了业界领先的性能表现
              </p>
            </div>

            <AnimatedList
              className={cn(
                'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8',
              )}
              direction='up'
              itemClassName={cn('text-center group')}
            >
              {performanceMetrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={cn(
                    'relative p-6 rounded-2xl border',
                    'bg-white/80 backdrop-blur-sm',
                    'border-gray-200/50 hover:border-primary/30',
                    'transition-all duration-300',
                    'hover:-translate-y-2',
                    'h-full',
                  )}
                >
                  <div
                    className={cn(
                      'w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center',
                      'bg-gradient-to-br from-primary/20 to-primary/10',
                      'group-hover:scale-110 transition-transform duration-300',
                    )}
                  >
                    <metric.icon className={cn('w-6 h-6 text-primary')} />
                  </div>

                  <div className={cn('text-3xl font-bold text-gray-900 mb-2')}>
                    {metric.prefix && (
                      <span className={cn('text-2xl text-primary mr-1')}>
                        {metric.prefix}
                      </span>
                    )}
                    <NumberTicker
                      value={metric.value}
                      delay={0.8 + index * 0.2}
                      decimalPlaces={metric.value % 1 !== 0 ? 1 : 0}
                      className={cn('text-primary')}
                    />
                    <span className={cn('text-2xl text-primary ml-1')}>
                      {metric.suffix}
                    </span>
                  </div>

                  <h4 className={cn('font-bold text-gray-900 mb-2')}>
                    {metric.label}
                  </h4>
                  <p className={cn('text-xs text-gray-600 leading-relaxed')}>
                    {metric.description}
                  </p>
                </div>
              ))}
            </AnimatedList>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
