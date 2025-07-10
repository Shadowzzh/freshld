'use client'

import { cn } from '@/lib/utils'
import {
  CheckCircle,
  AlertTriangle,
  Sparkles,
  Globe,
  Container,
  Workflow,
  Server,
  Database,
  MonitorSpeaker,
  Search,
} from 'lucide-react'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'
import { motion } from 'motion/react'

// CNAPP 云原生安全挑战数据
const cnappSecurityChallenges = [
  {
    challenge: '资产管理动态性高',
    solution: '自动化资产发现与跟踪',
    description:
      '云原生架构下的资产快速迭代与动态更新，使得传统的静态资产管理产品难以适应',
  },
  {
    challenge: '缺少容器镜像漏洞扫描',
    solution: '全面镜像安全扫描',
    description:
      '传统漏洞扫描主要针对应用和操作系统，但缺少对容器镜像的漏洞扫描能力',
  },
  {
    challenge: '东西向流量防护需求增加',
    solution: '云原生网络安全防护',
    description:
      '传统防火墙主要防护南北向流量，但在云原生环境中，东西向流量（即内部微服务之间的通信）更多，传统防火墙不适用',
  },
  {
    challenge: '容器引擎漏洞导致逃逸风险',
    solution: '容器运行时安全防护',
    description:
      'Docker等容器引擎作为轻量级隔离，与虚拟机不同，容器间共享宿主机Linux内核，隔离程度更低，更容易被攻击者突破并逃逸至宿主机',
  },
  {
    challenge: '传统防病毒网关失效',
    solution: '容器集群内部安全防护',
    description:
      '云原生架构内部的病毒传播不会经过外部网关，导致传统的防病毒网关无法发挥作用',
  },
  {
    challenge: 'NIDS无法检测容器数据包',
    solution: '云原生网络入侵检测',
    description:
      '由于网络入侵检测系统（NIDS）在网络架构中的位置限制，无法检测到容器的数据包',
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

// CNAPP 解决方案数据
const cnappSolutions = [
  {
    title: '资产盘点与安全总览',
    description:
      '自动盘点容器、镜像、集群、主机等资产，消除暗资产，实时更新资产状态，实现资产管理的精细化',
  },
  {
    title: '镜像风险一键扫描',
    description:
      '提前发现容器镜像中存在的漏洞、木马病毒、敏感信息和弱密码等危险因素，对危险镜像的启动进行有效的策略控制',
  },
  {
    title: '微隔离策略',
    description:
      '支持自动和手动配置网络策略，实现Pod粒度的网络微隔离，通过自动化分析建立网络连接关系，生成并部署符合最小权限要求的微隔离策略',
  },
  {
    title: '容器逃逸检测',
    description:
      '使用大语言模型对海量容器逃逸攻击路径进行分析，实现基于文件挂载错误和命令执行的容器逃逸检测，基于行为模型与特征校验实现容器逃逸的检测与溯源分析',
  },
  {
    title: '容器风险监听与行为感知',
    description:
      '对容器逃逸、反弹Shell、非法提权、恶意挖矿等常见风险行为进行监听和阻断，利用低资源多源点行为数据无损采集技术，实现基于命名空间感知的容器行为识别',
  },
  {
    title: '基线合规检查',
    description:
      '提供自动化检测，满足监管政策与合规性要求，支持CIS发布的各版本基线标准，针对每项标准提供基线检测方法与修复建议',
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
        <AnimatedSection className={cn('text-center mb-16 lg:mb-24')}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-full',
              'bg-primary/10 border border-primary/20 mb-8',
            )}
          >
            <Sparkles className={cn('w-4 h-4 text-primary')} />
            <span className={cn('text-sm font-semibold text-primary')}>
              云原生安全领域的创新突破
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={cn(
              'text-4xl md:text-5xl lg:text-6xl font-bold mb-8',
              'bg-gradient-to-r from-primary via-primary/80 to-primary',
              'bg-clip-text text-transparent',
            )}
          >
            云原生安全
            <span className={cn('text-foreground ml-4')}>新时代</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={cn(
              'text-lg md:text-xl text-muted-foreground mb-6',
              'max-w-4xl mx-auto leading-relaxed',
            )}
          >
            在数字化转型的浪潮中，云原生技术以其弹性、可扩展性和敏捷性，正成为企业应用部署的核心。
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={cn(
              'text-lg md:text-xl text-muted-foreground mb-12',
              'max-w-4xl mx-auto leading-relaxed',
            )}
          >
            明焰CNAPP应运而生，旨在提供一套全面的、一体化的云原生安全解决方案。
          </motion.p>
        </AnimatedSection>

        {/* 挑战与解决方案 */}
        <AnimatedSection
          className={cn(
            'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-24',
          )}
        >
          {/* 挑战 */}
          <AnimatedSection
            direction='left'
            className={cn(
              'relative p-4 sm:p-6 lg:p-8 rounded-2xl bg-card/60',
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
                'text-xl sm:text-2xl font-bold text-foreground mb-6 lg:mb-8',
                'flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-0',
              )}
            >
              <div
                className={cn(
                  'p-2 rounded-xl bg-primary/10 sm:mr-4 mb-2 sm:mb-0',
                  'ring-2 ring-primary/20',
                )}
              >
                <AlertTriangle className='w-6 h-6 text-primary' />
              </div>
              云原生安全挑战
            </h3>
            <AnimatedList className={cn('space-y-6')}>
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
                    'overflow-hidden',
                  )}
                >
                  <h4
                    className={cn(
                      'font-bold text-foreground mb-3 relative z-10',
                      'text-lg',
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
            className={cn(
              'relative p-4 sm:p-6 lg:p-8 rounded-2xl bg-card/60',
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
                'text-xl sm:text-2xl font-bold text-foreground mb-6 lg:mb-8',
                'flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-0',
              )}
            >
              <div
                className={cn(
                  'p-2 rounded-xl bg-primary/10 sm:mr-4 mb-2 sm:mb-0',
                  'ring-2 ring-primary/20',
                )}
              >
                <CheckCircle className='w-6 h-6 text-primary' />
              </div>
              明焰CNAPP解决方案
            </h3>
            <AnimatedList className={cn('space-y-4')}>
              {cnappSolutions.map((solution, index) => (
                <div
                  key={index}
                  className={cn(
                    'group relative p-6 rounded-xl',
                    'bg-gradient-to-br from-primary/5 to-primary/10',
                    'border border-primary/15',
                    'hover:border-primary/15',
                    'transition-all duration-300',
                    'hover:scale-105',
                    'overflow-hidden',
                  )}
                >
                  <h4
                    className={cn(
                      'font-bold text-foreground mb-3 relative z-10',
                      'text-lg',
                      'transition-colors duration-300 flex items-center gap-2',
                    )}
                  >
                    {solution.title}
                  </h4>
                  <p
                    className={cn(
                      'text-muted-foreground relative z-10 leading-relaxed',
                      'group-hover:text-foreground',
                      'transition-colors duration-300',
                    )}
                  >
                    {solution.description}
                  </p>
                </div>
              ))}
            </AnimatedList>
          </AnimatedSection>
        </AnimatedSection>

        {/* 产品架构 */}
        <AnimatedSection className={cn('mb-24')}>
          <AnimatedSection className={cn('text-center mb-16')}>
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
            className={cn(
              'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8',
            )}
          >
            {cnappArchitectureLayers.map((layer, index) => {
              const IconComponent = layer.icon
              return (
                <div
                  key={index}
                  className={cn(
                    'group relative p-4 sm:p-6 lg:p-8 rounded-2xl',
                    'bg-card/60 backdrop-blur-sm',
                    'border border-primary/15',
                    'hover:border-primary/15',
                    'transition-all duration-300',
                    'hover:scale-105',
                    'overflow-hidden text-center',
                  )}
                >
                  <div
                    className={cn(
                      'w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 lg:mb-6 rounded-2xl',
                      'bg-primary/10 flex items-center justify-center',
                      'group-hover:bg-primary/20 transition-all duration-300',
                      'group-hover:scale-110 group-hover:rotate-6',
                    )}
                  >
                    <IconComponent className='w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary' />
                  </div>

                  <h4
                    className={cn(
                      'text-center',
                      'text-sm sm:text-base lg:text-lg font-bold text-foreground mb-2 sm:mb-3',
                      'group-hover:text-primary transition-colors duration-300',
                    )}
                  >
                    {layer.title}
                  </h4>

                  <p
                    className={cn(
                      'text-center',
                      'text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4',
                      'group-hover:text-foreground transition-colors duration-300',
                    )}
                  >
                    {layer.description}
                  </p>

                  <div className='grid grid-cols-1 gap-1'>
                    {layer.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={cn(
                          'text-center',
                          'text-xs sm:text-sm text-muted-foreground/80 px-1 sm:px-2',
                          'transition-all duration-300',
                          'before:content-["•"] before:text-primary before:mr-1 sm:before:mr-2 before:text-sm sm:before:text-base',
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
        <AnimatedSection className={cn('mb-24')}>
          <AnimatedSection className={cn('text-center mb-16')}>
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
            className={cn(
              'grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16',
            )}
          >
            {cnappDeploymentArchitecture.map((deployment, index) => {
              const IconComponent = deployment.icon
              return (
                <div
                  key={index}
                  className={cn(
                    'group relative p-4 sm:p-6 lg:p-8 xl:p-10 rounded-2xl overflow-hidden',
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
                    <div className='flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-4 sm:mb-6 text-center sm:text-left'>
                      <div
                        className={cn(
                          'w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-2xl flex items-center justify-center',
                          'bg-primary/10 ',
                          'transition-all duration-300 ',
                        )}
                      >
                        <IconComponent className='w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-primary' />
                      </div>
                      <div>
                        <h4
                          className={cn(
                            'text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-foreground mb-2',
                            'transition-colors duration-300',
                          )}
                        >
                          {deployment.component}
                        </h4>
                        <p
                          className={cn(
                            'text-xs sm:text-sm lg:text-base text-muted-foreground',
                            'transition-colors duration-300',
                          )}
                        >
                          {deployment.description}
                        </p>
                      </div>
                    </div>
                    <ul
                      className={cn(
                        'grid grid-cols-2 gap-3 sm:gap-4 relative z-10',
                        'text-center sm:text-left',
                      )}
                    >
                      {deployment.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className={cn(
                            'flex items-center sm:items-start gap-2 sm:gap-3 text-muted-foreground',
                            'transition-colors duration-300',
                            'justify-center sm:justify-start',
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
                          <span className='font-medium text-xs sm:text-sm lg:text-base'>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
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
