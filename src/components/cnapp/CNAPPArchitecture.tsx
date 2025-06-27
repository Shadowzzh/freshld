'use client'

import { cn } from '@/lib/utils'
import {
  CheckCircle,
  Monitor,
  Cpu,
  Shield,
  Database,
  Network,
  Cloud,
  Container,
  HardDrive,
  Layers,
} from 'lucide-react'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'
import Link from 'next/link'

export function CNAPPArchitecture() {
  const architectureLayers = [
    {
      icon: Monitor,
      title: '用户交互层',
      description: '提供直观的管理界面和操作体验',
      components: [
        '资产管理',
        '用户交互',
        '威胁狩猎',
        '事件处理',
        '策略及知识管理',
        '系统配置',
      ],
      color: 'blue',
    },
    {
      icon: Cpu,
      title: '数据分析层',
      description: '智能分析和威胁识别的核心引擎',
      components: [
        '攻击行为模型',
        '异常行为模型',
        '事件调查分析',
        '影响分析',
        'AI威胁检测',
        '风险评估',
      ],
      color: 'green',
    },
    {
      icon: Shield,
      title: '端点监测响应层',
      description: '实时监控和快速响应的执行层',
      components: [
        '进程监控',
        '文件监控',
        '服务监控',
        '通信监控',
        '配置监控',
        '行为分析引擎',
      ],
      color: 'orange',
    },
    {
      icon: Database,
      title: '数据存储层',
      description: '安全可靠的数据存储和管理',
      components: [
        '知识库',
        '资产数据',
        '事件数据',
        '系统配置数据',
        '端点运行状态',
        '统计数据',
        '操作日志',
        '行为日志',
      ],
      color: 'purple',
    },
    {
      icon: Network,
      title: '数据收发层',
      description: '高效的数据传输和通信基础',
      components: [
        '指令下发',
        '数据收发',
        '数据接收',
        '策略更新',
        '数据上报',
        '状态同步',
      ],
      color: 'indigo',
    },
  ]

  const deploymentFeatures = [
    {
      icon: Cloud,
      title: '管控软件',
      description: '独立部署的管理控制中心',
      features: [
        '基于K8s容器化部署',
        '独立集群部署',
        '策略管理与下发',
        '威胁分析与响应',
        '资产管理与监控',
        '安全态势感知',
      ],
    },
    {
      icon: Container,
      title: '探针软件',
      description: '轻量级的数据采集代理',
      features: [
        '轻量级部署方式',
        '实时数据收集',
        '静态分析支持',
        '资产信息采集',
        '网络流量监控',
        'NetworkPolicy生成',
      ],
    },
  ]

  const compatibilityData = [
    {
      category: 'CPU架构',
      items: ['Intel X86', 'Kunpeng Processor', 'ARM', '飞腾'],
      icon: Cpu,
    },
    {
      category: '操作系统',
      items: ['统信UOS', '银河麒麟', 'CentOS', 'Ubuntu'],
      icon: HardDrive,
    },
    {
      category: '容器运行时',
      items: ['Docker', 'Containerd', 'CRI-O', 'Podman'],
      icon: Container,
    },
    {
      category: '编排工具',
      items: ['Kubernetes', 'Rancher', 'OpenShift', 'Docker Swarm'],
      icon: Layers,
    },
    {
      category: '公有云平台',
      items: ['华为云', '腾讯云', '阿里云', 'Azure'],
      icon: Cloud,
    },
    {
      category: '镜像仓库',
      items: ['Harbor', 'JFrog', 'Docker Registry', 'Quay'],
      icon: Database,
    },
  ]

  return (
    <section className={cn('py-20 bg-background')}>
      <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8')}>
        {/* 标题 */}
        <AnimatedSection className={cn('text-center mb-16')}>
          <div
            className={cn(
              'inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6',
            )}
          >
            技术架构
          </div>
          <h2
            className={cn('text-3xl md:text-4xl font-bold text-primary mb-6')}
          >
            技术架构
          </h2>
          <p
            className={cn(
              'text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed',
            )}
          >
            明焰CNAPP采用分层架构设计，提供全面的云原生安全防护能力
          </p>
        </AnimatedSection>

        {/* 架构层级 */}
        <AnimatedSection delay={0.2} className={cn('mb-20')}>
          <h3
            className={cn(
              'text-2xl font-bold text-foreground text-center mb-12',
            )}
          >
            5层架构体系
          </h3>
          <AnimatedList
            delayStep={0.2}
            initialDelay={0.3}
            className={cn(
              'space-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8',
            )}
          >
            {architectureLayers.map((layer, index) => {
              const IconComponent = layer.icon

              return (
                <div
                  key={index}
                  className={cn(
                    'group p-6 rounded-2xl border relative overflow-hidden',
                    'bg-card/50 border-primary/15',
                    'hover:border-primary/15 hover:bg-card/80',
                    'transition-all duration-300',
                    'hover:scale-105',
                    'cursor-pointer',
                  )}
                >
                  {/* 悬停光效 */}
                  <div
                    className={cn(
                      'absolute inset-0 opacity-0 group-hover:opacity-20',
                      'bg-gradient-to-r from-primary/10 via-transparent to-primary/10',
                      'transition-opacity duration-500',
                    )}
                  />

                  <div
                    className={cn('relative z-10 flex items-start space-x-6')}
                  >
                    {/* 图标 */}
                    <div
                      className={cn(
                        'w-16 h-16 rounded-2xl flex items-center justify-center',
                        'bg-primary/10 text-primary',
                        'group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6',
                        'transition-all duration-300',
                      )}
                    >
                      <IconComponent className={cn('w-8 h-8')} />
                    </div>

                    {/* 内容 */}
                    <div className={cn('flex-1')}>
                      <h4
                        className={cn(
                          'text-xl font-bold text-foreground mb-3',
                          'transition-colors duration-300',
                        )}
                      >
                        {layer.title}
                      </h4>
                      <p
                        className={cn(
                          'text-muted-foreground mb-4',
                          'group-hover:text-foreground transition-colors duration-300',
                        )}
                      >
                        {layer.description}
                      </p>
                      <div className={cn('flex flex-wrap gap-2')}>
                        {layer.components.map((component, componentIndex) => (
                          <span
                            key={componentIndex}
                            className={cn(
                              'px-3 py-1 rounded-full text-xs',
                              'bg-primary/5 text-primary/80 border border-primary/15',
                              'group-hover:bg-primary/10 group-hover:text-primary',
                              'transition-all duration-300',
                            )}
                          >
                            {component}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 装饰性边框 */}
                  <div
                    className={cn(
                      'absolute top-0 left-0 w-full h-px',
                      'bg-gradient-to-r from-transparent via-primary/30 to-transparent',
                      'opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                    )}
                  />
                </div>
              )
            })}
          </AnimatedList>
        </AnimatedSection>

        {/* 部署方式 */}
        <AnimatedSection delay={0.4} className={cn('mb-20')}>
          <h3
            className={cn(
              'text-2xl font-bold text-foreground text-center mb-12',
            )}
          >
            灵活的部署方式
          </h3>
          <AnimatedList
            delayStep={0.2}
            initialDelay={0.6}
            className={cn('grid grid-cols-1 lg:grid-cols-2 gap-8')}
          >
            {deploymentFeatures.map((feature, index) => {
              const IconComponent = feature.icon

              return (
                <div
                  key={index}
                  className={cn(
                    'group p-8 rounded-2xl border relative overflow-hidden',
                    'bg-card/50 border-primary/15',
                    'hover:border-primary/15 hover:bg-card/80',
                    'hover:bg-primary/5 hover:border-primary/30',
                    'transition-all duration-300',
                    'transform hover:scale-105',
                    'cursor-pointer',
                  )}
                >
                  {/* 悬停光效 */}
                  <div
                    className={cn(
                      'absolute inset-0 opacity-0 group-hover:opacity-10',
                      'bg-gradient-to-br from-primary/10 via-transparent to-primary/10',
                      'transition-opacity duration-300',
                    )}
                  />

                  <div className={cn('relative z-10')}>
                    <div className={cn('flex items-center mb-6')}>
                      <div
                        className={cn(
                          'w-12 h-12 rounded-xl flex items-center justify-center mr-4',
                          'bg-primary/10 text-primary',
                          'group-hover:bg-primary/20 group-hover:scale-110',
                          'transition-all duration-300',
                        )}
                      >
                        <IconComponent className={cn('w-6 h-6')} />
                      </div>
                      <div>
                        <h4
                          className={cn(
                            'text-xl font-bold text-foreground transition-colors duration-300',
                          )}
                        >
                          {feature.title}
                        </h4>
                        <p
                          className={cn(
                            'text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300',
                          )}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <ul className={cn('space-y-3')}>
                      {feature.features.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className={cn('flex items-start space-x-3')}
                        >
                          <CheckCircle
                            className={cn(
                              'w-4 h-4 text-primary mt-0.5 flex-shrink-0',
                            )}
                          />
                          <span
                            className={cn(
                              'text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300',
                            )}
                          >
                            {item}
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
                      'opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                    )}
                  />
                </div>
              )
            })}
          </AnimatedList>
        </AnimatedSection>

        {/* 兼容性支持 */}
        <AnimatedSection delay={0.6} className={cn('mb-20')}>
          <h3
            className={cn(
              'text-2xl font-bold text-foreground text-center mb-12',
            )}
          >
            广泛的兼容性支持
          </h3>
          <AnimatedList
            delayStep={0.1}
            initialDelay={0.8}
            className={cn(
              'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
            )}
          >
            {compatibilityData.map((category, index) => {
              const IconComponent = category.icon

              return (
                <div
                  key={index}
                  className={cn(
                    'group p-6 rounded-2xl bg-card border relative overflow-hidden',
                    'border-primary/15 hover:border-primary/15',
                    'hover:bg-primary/5 hover:border-primary/30',
                    'transition-all duration-300',
                    'transform hover:scale-105',
                    'cursor-pointer',
                  )}
                >
                  {/* 悬停光效 */}
                  <div
                    className={cn(
                      'absolute inset-0 opacity-0 group-hover:opacity-10',
                      'bg-gradient-to-br from-primary/10 via-transparent to-primary/10',
                      'transition-opacity duration-300',
                    )}
                  />
                  <div className={cn('relative z-10 text-center')}>
                    <div
                      className={cn(
                        'w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4',
                        'bg-primary/10 text-primary',
                        'group-hover:bg-primary/20 group-hover:scale-110',
                        'transition-all duration-300',
                      )}
                    >
                      <IconComponent className={cn('w-6 h-6')} />
                    </div>
                    <h4
                      className={cn(
                        'text-lg font-bold text-foreground mb-4  transition-colors duration-300',
                      )}
                    >
                      {category.category}
                    </h4>
                    <div className={cn('space-y-2')}>
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={cn(
                            'text-sm text-muted-foreground px-3 py-1 rounded-full',
                            'bg-primary/5 group-hover:bg-primary/10',
                            'transition-all duration-300',
                          )}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </AnimatedList>
        </AnimatedSection>

        {/* 底部总结 */}
        <AnimatedSection delay={1.0} className={cn('text-center')}>
          <div
            className={cn(
              'relative p-8 rounded-2xl border border-primary/15 bg-card/50 backdrop-blur-sm',
            )}
          >
            <CheckCircle
              className={cn('w-12 h-12 text-primary mx-auto mb-4')}
            />
            <h3 className={cn('text-2xl font-bold text-foreground mb-4')}>
              企业级云原生安全架构
            </h3>
            <p className={cn('text-muted-foreground mb-6 max-w-2xl mx-auto')}>
              明焰CNAPP通过科学的分层架构设计和灵活的部署方式，为企业提供了一套完整、可靠、易于管理的云原生安全解决方案。
              无论您使用何种技术栈，我们都能为您提供无缝的安全防护体验。
            </p>

            <Link href='/products/cnapp'>
              <button
                className={cn(
                  'cursor-pointer',
                  'px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300',
                )}
              >
                了解更多
              </button>
            </Link>

            {/* 背景装饰 */}
            <div
              className={cn(
                'absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none',
              )}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
