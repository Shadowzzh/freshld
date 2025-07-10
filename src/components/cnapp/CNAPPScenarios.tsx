'use client'

import { cn } from '@/lib/utils'
import { Landmark, Factory, Cloud, Building } from 'lucide-react'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'

// CNAPP 典型案例数据
const cnappScenarios = [
  {
    id: 'zhejiang-sports',
    title: '浙江省体育局',
    subtitle: '政务云容器安全防护',
    industry: '政府',
    description:
      '为浙江省体育局政务云平台提供全面的容器安全防护，确保政务数据安全',
    solution: [
      '部署CNAPP管控平台，统一管理所有容器资产',
      '实施镜像安全扫描，确保基础镜像安全可信',
      '配置网络微隔离策略，实现服务间零信任访问',
      '建立容器运行时监控，实时检测异常行为',
    ],
    results: [
      '100%容器资产可视化管理',
      '镜像漏洞检出率提升90%',
      '网络攻击阻断率达99%',
      '安全事件响应时间缩短80%',
    ],
    theme: 'blue' as const,
    icon: Landmark,
  },
  {
    id: 'hunan-chuangfa',
    title: '湖南创发集团',
    subtitle: '云上资产安全管理',
    industry: '制造',
    description: '为湖南创发集团云原生应用提供全生命周期安全管理',
    solution: [
      '建立云原生资产清单，实现资产全面可视化',
      '实施DevSecOps流程，将安全融入CI/CD管道',
      '部署运行时防护，保障生产环境容器安全',
      '建立安全合规检查，满足行业监管要求',
    ],
    results: [
      '资产管理效率提升70%',
      '安全漏洞修复时间缩短60%',
      '合规检查自动化率达95%',
      '安全运营成本降低50%',
    ],
    theme: 'green' as const,
    icon: Factory,
  },
  {
    id: 'daoke-cloud',
    title: '道客云安全',
    subtitle: '云原生管理平台安全赋能',
    industry: '科技',
    description: '为道客云安全管理平台提供云原生安全能力集成',
    solution: [
      '集成CNAPP API，增强平台安全检测能力',
      '提供容器安全SDK，支持第三方应用集成',
      '建立威胁情报共享，提升威胁识别准确性',
      '实现安全数据统一分析，提供综合安全视图',
    ],
    results: [
      '平台安全能力提升3倍',
      '威胁检测准确率达98%',
      '客户满意度提升40%',
      '市场竞争力显著增强',
    ],
    theme: 'purple' as const,
    icon: Cloud,
  },
  {
    id: 'zte-communication',
    title: '中兴通讯',
    subtitle: '微服务访问控制策略自动化',
    industry: '通信',
    description: '为中兴通讯大规模微服务架构提供自动化安全策略管理',
    solution: [
      '部署智能策略引擎，自动分析服务依赖关系',
      '实施零信任网络架构，确保服务间安全通信',
      '建立动态策略调整机制，适应业务变化需求',
      '提供可视化管理界面，简化策略配置操作',
    ],
    results: [
      '策略配置效率提升10倍',
      '网络安全事件减少95%',
      '运维工作量降低80%',
      '业务连续性得到保障',
    ],
    theme: 'orange' as const,
    icon: Building,
  },
]

export function CNAPPScenarios() {
  return (
    <section className={cn('py-20 bg-gray-50')}>
      <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8')}>
        {/* 标题部分 */}
        <AnimatedSection className={cn('text-center mb-16')}>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6'>
            应用场景
          </div>
          <h2
            className={cn('text-3xl md:text-4xl font-bold text-primary mb-6')}
          >
            应用场景
          </h2>
          <p
            className={cn(
              'text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed',
            )}
          >
            明焰CNAPP在各行各业的成功实践，为不同规模和需求的企业提供定制化的云原生安全解决方案
          </p>
        </AnimatedSection>

        {/* 场景列表 */}
        <AnimatedList
          className={cn('grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16')}
        >
          {cnappScenarios.map((scenario, index) => {
            const IconComponent = scenario.icon

            return (
              <div
                key={index}
                className={cn(
                  'group relative p-6 sm:p-8 rounded-2xl border border-primary/15 overflow-hidden',
                  'bg-card/50 backdrop-blur-sm',
                  'hover:border-primary/15 hover:bg-card/80',
                  'transition-all duration-300',
                )}
              >
                {/* 悬停光效 */}
                <div
                  className={cn(
                    'absolute inset-0 opacity-0 group-hover:opacity-20',
                    'bg-gradient-to-br from-primary/15 via-transparent to-primary/15',
                    'transition-opacity duration-500',
                  )}
                />

                {/* 头部信息 - 移动端优化 */}
                <div className='relative z-10'>
                  <div className='flex flex-col sm:flex-row items-center sm:items-start justify-between mb-6 text-center sm:text-left'>
                    <div className='flex flex-col sm:flex-row items-center sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0'>
                      <div
                        className={cn(
                          'w-12 h-12 rounded-xl flex items-center justify-center',
                          'bg-primary/10 text-primary',
                          'transition-all duration-300',
                        )}
                      >
                        <IconComponent className='w-6 h-6' />
                      </div>
                      <div>
                        <h3 className='text-lg sm:text-xl font-bold text-foreground mb-1 transition-colors duration-300'>
                          {scenario.title}
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                          {scenario.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className='text-center sm:text-right'>
                      <div className='text-sm font-medium text-primary'>
                        {scenario.industry}
                      </div>
                      <div className='text-xs text-muted-foreground'></div>
                    </div>
                  </div>

                  {/* 描述 */}
                  <p className='text-muted-foreground text-sm leading-relaxed mb-6 text-center sm:text-left group-hover:text-foreground transition-colors duration-300'>
                    {scenario.description}
                  </p>

                  {/* 解决方案 */}
                  <div>
                    <h4 className='text-sm font-semibold text-foreground mb-3 text-center sm:text-left'>
                      解决方案
                    </h4>
                    <ul className='space-y-2'>
                      {scenario.solution.slice(0, 2).map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className='flex items-start justify-center sm:justify-start space-x-2 text-xs text-muted-foreground'
                        >
                          <div className='w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0' />
                          <span className='text-center sm:text-left'>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
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

        {/* 底部CTA */}
        <AnimatedSection className={cn('mt-16 text-center')}>
          <div
            className={cn(
              'p-8 rounded-2xl bg-primary/5 border border-primary/15',
            )}
          >
            <h3 className='text-2xl font-bold text-foreground mb-4'>
              跨行业成功实践
            </h3>
            <p className='text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6'>
              从政府机构到企业集团，从云服务商到通信设备制造商，明焰CNAPP在各个行业都展现出了卓越的适应性和实用性。
              <br />
              无论您的组织规模大小，我们都能为您提供量身定制的云原生安全解决方案。
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
