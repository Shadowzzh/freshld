'use client'

import { cn } from '@/lib/utils'
import {
  CheckCircle,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Cloud,
  Container,
  Workflow,
  Server,
  Database,
  BarChart3,
  MonitorSpeaker,
  Search,
} from 'lucide-react'
import { NumberTicker } from '@/components/ui/number-ticker'
import { SectionTitleArea } from '@/components/ui/section-title-area'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'

// CNAPP 云原生安全挑战数据
const cnappSecurityChallenges = [
  {
    challenge: '资产可视化困难',
    solution: '自动化资产发现与盘点',
    description: '容器、镜像、集群资产动态变化，传统方式难以全面掌握',
  },
  {
    challenge: '镜像安全风险',
    solution: '全面镜像安全扫描',
    description: '镜像包含大量开源组件，存在已知漏洞和恶意代码风险',
  },
  {
    challenge: '配置安全复杂',
    solution: '基线合规自动检查',
    description: 'Kubernetes配置复杂，安全配置错误导致安全风险',
  },
  {
    challenge: '网络边界模糊',
    solution: '零信任网络架构',
    description: '微服务间通信复杂，传统网络边界防护失效',
  },
  {
    challenge: '运行时威胁检测',
    solution: '智能行为分析引擎',
    description: '容器运行时行为复杂，难以识别异常和威胁行为',
  },
]

// CNAPP 架构层级数据
const cnappArchitectureLayers = [
  {
    id: 'business-layer',
    title: '业务应用层',
    description: '云原生应用和微服务的安全防护',
    features: ['应用安全扫描', '代码安全检测', 'API安全防护', '业务逻辑保护'],
    icon: Globe,
    theme: 'blue' as const,
  },
  {
    id: 'container-layer',
    title: '容器运行层',
    description: '容器运行时的安全监控和防护',
    features: [
      '容器逃逸检测',
      '运行时行为监控',
      '异常进程检测',
      '文件完整性保护',
    ],
    icon: Container,
    theme: 'purple' as const,
  },
  {
    id: 'orchestration-layer',
    title: '编排管理层',
    description: 'Kubernetes等编排平台的安全管理',
    features: ['集群安全配置', 'RBAC权限管理', '网络策略控制', '资源配额管理'],
    icon: Workflow,
    theme: 'green' as const,
  },
  {
    id: 'infrastructure-layer',
    title: '基础设施层',
    description: '底层基础设施的安全防护',
    features: ['主机安全加固', '网络安全防护', '存储安全保护', '虚拟化安全'],
    icon: Server,
    theme: 'orange' as const,
  },
  {
    id: 'data-layer',
    title: '数据安全层',
    description: '数据的全生命周期安全保护',
    features: ['数据加密传输', '敏感数据识别', '数据访问控制', '数据备份恢复'],
    icon: Database,
    theme: 'red' as const,
  },
]

// CNAPP 部署架构数据
const cnappDeploymentArchitecture = [
  {
    component: '管控软件',
    description: '中央管理控制台，提供统一的安全管理和策略配置',
    features: [
      '安全策略管理',
      '资产统一管控',
      '告警事件处理',
      '合规报告生成',
      '用户权限管理',
    ],
    deployment: '可部署在云端或本地数据中心',
    icon: MonitorSpeaker,
  },
  {
    component: '探针软件',
    description: '轻量级Agent，部署在容器节点上进行数据采集和本地防护',
    features: [
      '实时数据采集',
      '本地威胁检测',
      '容器行为监控',
      '网络流量分析',
      '自动响应处置',
    ],
    deployment: '以DaemonSet方式部署在Kubernetes集群',
    icon: Search,
  },
]

// CNAPP 兼容性支持数据
const cnappCompatibility = [
  {
    category: '容器运行时',
    items: ['Docker', 'Containerd', 'CRI-O', 'Podman', 'rkt'],
    icon: Container,
  },
  {
    category: '编排平台',
    items: ['Kubernetes', 'OpenShift', 'Rancher', 'Docker Swarm', 'Nomad'],
    icon: Workflow,
  },
  {
    category: '云服务商',
    items: ['AWS EKS', 'Azure AKS', 'Google GKE', '阿里云ACK', '腾讯云TKE'],
    icon: Cloud,
  },
  {
    category: '操作系统',
    items: ['Ubuntu', 'CentOS', 'RHEL', 'SUSE', 'CoreOS'],
    icon: Server,
  },
  {
    category: '镜像仓库',
    items: ['Docker Hub', 'Harbor', 'Quay', 'ECR', 'ACR'],
    icon: Database,
  },
  {
    category: '监控工具',
    items: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'Istio'],
    icon: BarChart3,
  },
]

export function CNAPPOverview() {
  return (
    <section className={cn('relative py-24 bg-background', 'overflow-hidden')}>
      <div
        className={cn(
          'absolute top-0 left-0 right-0 h-px bg-gradient-to-r',
          'from-transparent via-primary/20 to-transparent',
        )}
      />
      <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8')}>
        {/* CNAPP 产品概述标题区域 */}
        <SectionTitleArea
          badge='云原生安全领域的创新突破'
          badgeIcon={Sparkles}
          title='云原生安全'
          subtitle='新时代'
          description='在数字化转型的浪潮中，云原生技术以其弹性、可扩展性和敏捷性，正成为企业应用部署的核心。'
          secondaryDescription='明焰CNAPP应运而生，旨在提供一套全面的、一体化的云原生安全解决方案。'
          stats={[
            {
              value: (
                <div>
                  <NumberTicker value={99.9} decimalPlaces={1} />%
                </div>
              ),
              label: '云原生安全覆盖率',
              icon: Shield,
            },
            {
              value: (
                <div>
                  <NumberTicker value={30} />s
                </div>
              ),
              label: '威胁响应时间',
              icon: Zap,
            },
            {
              value: (
                <div>
                  <NumberTicker value={1000} />+
                </div>
              ),
              label: '保护云原生应用',
              icon: Globe,
            },
          ]}
          decorationIcon={Shield}
        />

        {/* 挑战与解决方案 */}
        <AnimatedSection
          delay={0.4}
          className={cn('grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24')}
        >
          {/* 挑战 */}
          <AnimatedSection
            direction='left'
            delay={0.6}
            className={cn(
              'relative p-8 rounded-2xl bg-card/60',
              'backdrop-blur-sm border border-primary/15',
              'overflow-hidden',
            )}
          >
            {/* 背景装饰 */}
            <div className='absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl' />
            <div className='absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl' />
            <div
              className={cn(
                'absolute top-0 left-0 right-0 h-px bg-gradient-to-r',
                'from-transparent via-primary/30 to-transparent',
              )}
            />
            <h3
              className={cn(
                'text-2xl font-bold text-foreground mb-8 flex items-center',
              )}
            >
              <div
                className={cn(
                  'p-2 rounded-xl bg-primary/10 mr-4',
                  'ring-2 ring-primary/20',
                )}
              >
                <AlertTriangle className='w-6 h-6 text-primary' />
              </div>
              云原生安全挑战
            </h3>
            <AnimatedList
              delayStep={0.1}
              initialDelay={0.8}
              className={cn('space-y-6')}
            >
              {cnappSecurityChallenges.map((challenge, index) => (
                <div
                  key={index}
                  className={cn(
                    'group relative p-6 rounded-xl',
                    'bg-gradient-to-br from-primary/5 to-primary/10',
                    'border border-primary/15',
                    'hover:border-primary/15',
                    'transition-all duration-300',
                    'hover:scale-105',
                    'cursor-pointer overflow-hidden',
                  )}
                >
                  <div
                    className={cn(
                      'absolute inset-0 opacity-0 group-hover:opacity-30',
                      'bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20',
                      'transition-all duration-300',
                    )}
                  />
                  <div
                    className={cn(
                      'absolute top-0 left-0 w-full h-px',
                      'bg-gradient-to-r from-transparent via-primary/40 to-transparent',
                      'opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                    )}
                  />
                  <h4
                    className={cn(
                      'font-bold text-foreground mb-3 relative z-10',
                      'text-lg group-hover:text-primary',
                      'transition-colors duration-300',
                    )}
                  >
                    {challenge.challenge}
                  </h4>
                  <p
                    className={cn(
                      'text-muted-foreground relative z-10 leading-relaxed',
                      'group-hover:text-foreground',
                      'transition-colors duration-300',
                    )}
                  >
                    {challenge.description}
                  </p>
                </div>
              ))}
            </AnimatedList>
          </AnimatedSection>

          {/* 解决方案 */}
          <AnimatedSection
            direction='right'
            delay={0.8}
            className={cn(
              'relative p-8 rounded-2xl bg-card/60',
              'backdrop-blur-sm border border-primary/15',
              'overflow-hidden',
            )}
          >
            {/* 背景装饰 */}
            <div className='absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl' />
            <div className='absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl' />
            <div
              className={cn(
                'absolute top-0 left-0 right-0 h-px bg-gradient-to-r',
                'from-transparent via-primary/30 to-transparent',
              )}
            />
            <h3
              className={cn(
                'text-2xl font-bold text-foreground mb-8 flex items-center',
              )}
            >
              <div
                className={cn(
                  'p-2 rounded-xl bg-primary/10 mr-4',
                  'ring-2 ring-primary/20',
                )}
              >
                <CheckCircle className='w-6 h-6 text-primary' />
              </div>
              明焰CNAPP解决方案
            </h3>
            <div className={cn('space-y-6')}>
              <div
                className={cn(
                  'group relative p-6 rounded-xl',
                  'bg-gradient-to-br from-primary/5 to-primary/10',
                  'border border-primary/15',
                  'hover:border-primary/15',
                  'transition-all duration-300',
                  'hover:scale-105',
                  'cursor-pointer overflow-hidden',
                )}
              >
                <div
                  className={cn(
                    'absolute inset-0 opacity-0 group-hover:opacity-30',
                    'bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20',
                    'transition-all duration-300',
                  )}
                />
                <div
                  className={cn(
                    'absolute top-0 left-0 w-full h-px',
                    'bg-gradient-to-r from-transparent via-primary/40 to-transparent',
                    'opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                  )}
                />
                <h4
                  className={cn(
                    'font-bold text-foreground mb-3 relative z-10',
                    'text-lg group-hover:text-primary',
                    'transition-colors duration-300 flex items-center gap-2',
                  )}
                >
                  全栈覆盖
                  <ArrowRight className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1' />
                </h4>
                <p
                  className={cn(
                    'text-muted-foreground relative z-10 leading-relaxed',
                    'group-hover:text-foreground',
                    'transition-colors duration-300',
                  )}
                >
                  从主机、容器、镜像到K8s集群、服务网格及微服务，提供多层次立体纵深防御
                </p>
              </div>
              <div
                className={cn(
                  'group relative p-6 rounded-xl',
                  'bg-gradient-to-br from-primary/5 to-primary/10',
                  'border border-primary/15',
                  'hover:border-primary/15',
                  'transition-all duration-300',
                  'hover:scale-105',
                  'cursor-pointer overflow-hidden',
                )}
              >
                <div
                  className={cn(
                    'absolute inset-0 opacity-0 group-hover:opacity-30',
                    'bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20',
                    'transition-all duration-300',
                  )}
                />
                <div
                  className={cn(
                    'absolute top-0 left-0 w-full h-px',
                    'bg-gradient-to-r from-transparent via-primary/40 to-transparent',
                    'opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                  )}
                />
                <h4
                  className={cn(
                    'font-bold text-foreground mb-3 relative z-10',
                    'text-lg group-hover:text-primary',
                    'transition-colors duration-300 flex items-center gap-2',
                  )}
                >
                  行为驱动
                  <ArrowRight className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1' />
                </h4>
                <p
                  className={cn(
                    'text-muted-foreground relative z-10 leading-relaxed',
                    'group-hover:text-foreground',
                    'transition-colors duration-300',
                  )}
                >
                  面向业务、基于行为、面向威胁，实现精准检测与响应
                </p>
              </div>
              <div
                className={cn(
                  'group relative p-6 rounded-xl',
                  'bg-gradient-to-br from-primary/5 to-primary/10',
                  'border border-primary/15',
                  'hover:border-primary/15',
                  'transition-all duration-300',
                  'hover:scale-105',
                  'cursor-pointer overflow-hidden',
                )}
              >
                <div
                  className={cn(
                    'absolute inset-0 opacity-0 group-hover:opacity-30',
                    'bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20',
                    'transition-all duration-300',
                  )}
                />
                <div
                  className={cn(
                    'absolute top-0 left-0 w-full h-px',
                    'bg-gradient-to-r from-transparent via-primary/40 to-transparent',
                    'opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                  )}
                />
                <h4
                  className={cn(
                    'font-bold text-foreground mb-3 relative z-10',
                    'text-lg group-hover:text-primary',
                    'transition-colors duration-300 flex items-center gap-2',
                  )}
                >
                  智能分析
                  <ArrowRight className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1' />
                </h4>
                <p
                  className={cn(
                    'text-muted-foreground relative z-10 leading-relaxed',
                    'group-hover:text-foreground',
                    'transition-colors duration-300',
                  )}
                >
                  结合大数据分析与人工智能技术，实现可感知、可分析、可响应、可取证的安全能力
                </p>
              </div>
            </div>
          </AnimatedSection>
        </AnimatedSection>

        {/* 产品架构 */}
        <AnimatedSection delay={0.6} className={cn('mb-24')}>
          <AnimatedSection delay={0.7} className={cn('text-center mb-16')}>
            <h3
              className={cn(
                'text-3xl md:text-4xl font-bold mb-4',
                'text-primary',
              )}
            >
              5层架构立体纵深防御
            </h3>
            <p
              className={cn('text-lg text-muted-foreground max-w-2xl mx-auto')}
            >
              从数据到应用的全方位防护体系
            </p>
          </AnimatedSection>

          <AnimatedList
            delayStep={0.1}
            initialDelay={0.8}
            className={cn(
              'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8',
            )}
          >
            {cnappArchitectureLayers.map((layer, index) => {
              const IconComponent = layer.icon
              return (
                <div
                  key={index}
                  className={cn(
                    'group relative  p-8 px-16 lg:px-8 rounded-2xl',
                    'bg-card/60 backdrop-blur-sm',
                    'border border-primary/15',
                    'hover:border-primary/15',
                    'transition-all duration-300',
                    'hover:scale-105',
                    'overflow-hidden',
                  )}
                >
                  <div
                    className={cn(
                      'w-16 h-16 mx-auto mb-6 rounded-2xl',
                      'bg-primary/10 flex items-center justify-center',
                      'group-hover:bg-primary/20 transition-all duration-300',
                      'group-hover:scale-110 group-hover:rotate-6',
                    )}
                  >
                    <IconComponent className='w-8 h-8 text-primary' />
                  </div>

                  <h4
                    className={cn(
                      'text-center',
                      'text-lg font-bold text-foreground mb-3',
                      'group-hover:text-primary transition-colors duration-300',
                    )}
                  >
                    {layer.title}
                  </h4>

                  <p
                    className={cn(
                      'text-center',
                      'text-base text-muted-foreground leading-relaxed mb-4',
                      'group-hover:text-foreground transition-colors duration-300',
                    )}
                  >
                    {layer.description}
                  </p>

                  <div className='grid grid-cols-2 lg:grid-cols-1 gap-1'>
                    {layer.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={cn(
                          'lg:text-left text-center',
                          'text-sm text-muted-foreground/80 px-2',
                          'transition-all duration-300',
                          'before:content-["•"] before:text-primary before:mr-2 before:text-base',
                        )}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </AnimatedList>
        </AnimatedSection>

        {/* 灵活的部署架构 */}
        <AnimatedSection delay={0.8} className={cn('mb-24')}>
          <AnimatedSection delay={0.9} className={cn('text-center mb-16')}>
            <h3
              className={cn(
                'text-3xl md:text-4xl font-bold mb-4',
                'text-primary',
              )}
            >
              灵活的部署架构
            </h3>
            <p
              className={cn('text-lg text-muted-foreground max-w-2xl mx-auto')}
            >
              适应不同规模和需求的部署方案
            </p>
          </AnimatedSection>

          <AnimatedList
            delayStep={0.2}
            initialDelay={1.0}
            className={cn('grid grid-cols-1 lg:grid-cols-2 gap-16')}
          >
            {cnappDeploymentArchitecture.map((deployment, index) => {
              const IconComponent = deployment.icon
              return (
                <div
                  key={index}
                  className={cn(
                    'group relative p-10 rounded-2xl overflow-hidden',
                    'bg-card/60 backdrop-blur-sm',
                    'border border-primary/15',
                    'hover:border-primary/15',
                    'transition-all duration-300',
                    'hover:scale-105',
                  )}
                >
                  <div
                    className={cn(
                      'absolute inset-0 opacity-0',
                      'bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20',
                      'transition-all duration-300 rounded-2xl',
                    )}
                  />
                  <div className='absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl' />
                  <div
                    className={cn(
                      'absolute top-0 left-0 w-full h-px',
                      'bg-gradient-to-r from-transparent via-primary/30 to-transparent',
                      'opacity-0  transition-opacity duration-500',
                    )}
                  />
                  <div className='relative z-10'>
                    <div className='flex items-center gap-4 mb-6'>
                      <div
                        className={cn(
                          'w-16 h-16 rounded-2xl flex items-center justify-center',
                          'bg-primary/10 ',
                          'transition-all duration-300 ',
                        )}
                      >
                        <IconComponent className='w-8 h-8 text-primary' />
                      </div>
                      <div>
                        <h4
                          className={cn(
                            'text-2xl font-bold text-foreground mb-2',
                            'transition-colors duration-300',
                          )}
                        >
                          {deployment.component}
                        </h4>
                        <p
                          className={cn(
                            'text-muted-foreground',
                            'transition-colors duration-300',
                          )}
                        >
                          {deployment.description}
                        </p>
                      </div>
                    </div>
                    <ul
                      className={cn(
                        'grid grid-cols-2 lg:grid-cols-1 gap-1',
                        'space-y-4 relative z-10',
                        'md:text-left text-center'
                      )}
                    >
                      {deployment.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className={cn(
                            'flex items-start gap-3 text-muted-foreground',
                            'transition-colors duration-300',
                            'md:justify-start justify-center'
                          )}
                        >
                          <div
                            className={cn(
                              'p-1 rounded-full bg-primary/10 mt-0.5',
                              'ring-2 ring-primary/20',
                            )}
                          >
                            <CheckCircle className='w-4 h-4 text-primary' />
                          </div>
                          <span className='font-medium'>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </AnimatedList>
        </AnimatedSection>

        {/* 兼容性 */}
        <AnimatedSection
          delay={1.2}
          className={cn(
            'relative p-12 rounded-2xl overflow-hidden',
            'border border-primary/15',
          )}
        >
          {/* 背景装饰 */}
          <div
            className={cn(
              'absolute top-0 left-0 right-0 h-px bg-gradient-to-r',
              'from-transparent via-primary/30 to-transparent',
            )}
          />
          <AnimatedSection delay={1.3} className='mb-12 relative z-10'>
            <h3
              className={cn(
                'text-center ',
                'text-3xl md:text-4xl font-bold mb-4',
                'text-primary',
              )}
            >
              广泛的兼容性支持
            </h3>
            <p
              className={cn(
                'text-lg text-muted-foreground max-w-2xl mx-auto',
                'text-center ',
              )}
            >
              无缝集成主流技术栈和云原生生态
            </p>
          </AnimatedSection>

          <AnimatedList
            delayStep={0.1}
            className={cn(
              'grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto',
            )}
          >
            {cnappCompatibility.map((compat, index) => {
              return (
                <div
                  key={index}
                  className={cn(
                    'group relative  p-8 rounded-2xl overflow-hidden',
                    'bg-card/40 backdrop-blur-sm',
                    'border border-primary/15',
                    'hover:border-primary/15',
                    'transition-all duration-300',
                    'hover:scale-105',
                  )}
                >
                  <div
                    className={cn(
                      'absolute inset-0 opacity-0 group-hover:opacity-10',
                      'bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20',
                      'transition-all duration-300 rounded-2xl',
                    )}
                  />
                  {/* 装饰性背景 */}
                  <div
                    className={cn(
                      'absolute top-0 left-0 w-full h-px',
                      'bg-gradient-to-r from-transparent via-primary/30 to-transparent',
                      'opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                    )}
                  />
                  <div
                    className={cn(
                      'w-12 h-12 mx-auto mb-4 rounded-xl',
                      'bg-primary/10 flex items-center justify-center',
                    )}
                  >
                    <compat.icon className='w-6 h-6 text-primary' />
                  </div>
                  <h4
                    className={cn(
                      'text-center',
                      'text-lg font-bold text-foreground mb-4',
                      'transition-colors duration-300',
                    )}
                  >
                    {compat.category}
                  </h4>
                  <div className='space-y-1'>
                    {compat.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={cn(
                          'text-center ',
                          'before:content-["•"] before:text-primary before:mr-2 before:text-base',
                          'text-sm text-muted-foreground px-3 ',
                          'ransition-all duration-300',
                        )}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </AnimatedList>
        </AnimatedSection>
      </div>
    </section>
  )
}
