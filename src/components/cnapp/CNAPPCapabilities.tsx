'use client'

import { cn } from '@/lib/utils'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'
import {
  Database,
  Scan,
  AlertTriangle,
  CheckCircle,
  Lock,
  Network,
  Shield,
} from 'lucide-react'

// CNAPP 核心能力数据
const cnappCapabilities = [
  {
    id: 'asset-inventory',
    title: '资产盘点与安全总览',
    description: '全面盘点云原生环境中的所有资产，提供统一的安全视图',
    icon: Database,
    theme: 'blue' as const,
    features: [
      '容器资产自动发现',
      '镜像仓库管理',
      '集群节点监控',
      '主机资产盘点',
      '安全态势总览',
      '风险等级评估',
    ],
  },
  {
    id: 'image-scanning',
    title: '镜像风险一键扫描',
    description: '深度扫描容器镜像，识别漏洞、恶意软件和配置风险',
    icon: Scan,
    theme: 'purple' as const,
    features: [
      'CVE漏洞检测',
      '恶意软件扫描',
      '敏感信息检测',
      '许可证合规检查',
      '镜像层分析',
      '修复建议提供',
    ],
  },
  {
    id: 'cluster-risk',
    title: '集群风险检测',
    description: 'Kubernetes集群安全配置检查和风险评估',
    icon: AlertTriangle,
    theme: 'orange' as const,
    features: [
      'RBAC权限检查',
      '网络策略审计',
      'Pod安全策略',
      '集群配置基线',
      '资源配额监控',
      '安全事件告警',
    ],
  },
  {
    id: 'compliance',
    title: '基线合规检查',
    description: '基于行业标准和最佳实践的合规性检查',
    icon: CheckCircle,
    theme: 'green' as const,
    features: [
      'CIS基准检查',
      'NIST框架对标',
      'PCI DSS合规',
      'SOC 2审计支持',
      '自定义合规规则',
      '合规报告生成',
    ],
  },
  {
    id: 'micro-isolation',
    title: '微隔离策略',
    description: '基于零信任原则的微服务间访问控制和隔离',
    icon: Lock,
    theme: 'indigo' as const,
    features: [
      '零信任网络架构',
      '服务间访问控制',
      '动态策略生成',
      '流量加密传输',
      '访问行为审计',
      '异常访问告警',
    ],
  },
  {
    id: 'network-visualization',
    title: '网络访问关系可视化',
    description: '直观展示微服务间的网络访问关系和依赖',
    icon: Network,
    theme: 'cyan' as const,
    features: [
      '服务拓扑图',
      '流量可视化',
      '依赖关系分析',
      '通信路径追踪',
      '异常流量标识',
      '网络策略建议',
    ],
  },
  {
    id: 'runtime-protection',
    title: '容器风险监听与阻断',
    description: '运行时容器行为监控和威胁阻断',
    icon: Shield,
    theme: 'red' as const,
    features: [
      '容器逃逸检测',
      '异常进程监控',
      '文件完整性监控',
      '网络异常检测',
      '自动威胁阻断',
      '事件取证分析',
    ],
  },
]

export function CNAPPCapabilities() {
  return (
    <section className={cn('py-20 bg-gray-50')}>
      <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8')}>
        {/* 标题部分 */}
        <AnimatedSection className={cn('text-center mb-16')}>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6'>
            核心功能
          </div>
          <h2
            className={cn('text-3xl md:text-4xl font-bold text-primary mb-6')}
          >
            核心功能
          </h2>
          <p
            className={cn(
              'text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed',
            )}
          >
            明焰CNAPP提供全面的云原生安全防护能力，覆盖从资产盘点到运行时防护的完整安全生命周期
          </p>
        </AnimatedSection>

        {/* 功能列表 */}
        <AnimatedList
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8',
          )}
        >
          {cnappCapabilities.map((capability, index) => {
            const IconComponent = capability.icon

            return (
              <div
                key={index}
                className={cn(
                  'group p-6 sm:p-8 rounded-2xl border border-primary/15',
                  'bg-card/50 backdrop-blur-sm',
                  'hover:border-primary/15 hover:bg-card/80',
                  'transition-all duration-300',
                  'transform hover:scale-105',
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
                  {/* 头部信息 - 移动端居中布局 */}
                  <div className='flex flex-col sm:flex-row items-center sm:items-start justify-between mb-6'>
                    <div className='flex flex-col sm:flex-row items-center sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left'>
                      <div
                        className={cn(
                          'w-12 h-12 rounded-xl flex items-center justify-center',
                          'bg-primary/10 text-primary',
                          'group-hover:bg-primary/20 group-hover:scale-105',
                          'transition-all duration-300',
                        )}
                      >
                        <IconComponent className='w-6 h-6' />
                      </div>
                      <div>
                        <h3 className='text-lg sm:text-xl font-bold text-foreground mb-2 transition-colors duration-300'>
                          {capability.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* 描述 */}
                  <p className='text-muted-foreground text-sm leading-relaxed mb-6 text-center sm:text-left transition-colors duration-300'>
                    {capability.description}
                  </p>

                  {/* 功能特性 - 移动端优化为单列 */}
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    {capability.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={cn(
                          'flex items-center justify-center sm:justify-start space-x-2 text-sm',
                          'p-2 rounded-lg bg-primary/5',
                          'group-hover:bg-primary/10 transition-colors duration-300',
                        )}
                      >
                        <div className='w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0' />
                        <span className='text-muted-foreground transition-colors duration-300'>
                          {feature}
                        </span>
                      </div>
                    ))}
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
      </div>
    </section>
  )
}
