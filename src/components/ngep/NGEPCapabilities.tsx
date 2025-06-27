'use client'

import { cn } from '@/lib/utils'
import {
  Activity,
  AlertTriangle,
  Eye,
  FileSearch,
  Lock,
  Network,
  Scan,
  Search,
  Settings,
  Shield,
  Target,
  Zap,
} from 'lucide-react'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'
import { MetallicShineCard } from '../ui/metallic-shine'
import { NumberTicker } from '@/components/ui/number-ticker'
const capabilities = [
  {
    phase: '事前预警与评估',
    description: '主动发现风险，预防威胁发生',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    features: [
      {
        icon: Search,
        title: '资产清点',
        description: '全面发现和管理网络中的所有端点设备，建立完整的资产清单',
      },
      {
        icon: AlertTriangle,
        title: '风险发现',
        description: '识别系统漏洞、配置风险和潜在威胁，提供风险评估报告',
      },
      {
        icon: Settings,
        title: '基线合规',
        description: '检查系统配置是否符合安全基线，确保合规性要求',
      },
      {
        icon: Scan,
        title: '病毒扫描',
        description: '定期扫描文件系统，检测和清除已知恶意软件',
      },
    ],
  },
  {
    phase: '事中监测与分析',
    description: '实时监控威胁，快速检测响应',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    features: [
      {
        icon: Eye,
        title: '实时监测',
        description: '24/7监控端点活动，实时分析进程、网络和文件行为',
      },
      {
        icon: Target,
        title: '威胁检测',
        description: '基于AI和机器学习的高级威胁检测，识别未知威胁',
      },
      {
        icon: Lock,
        title: '勒索攻击防御',
        description: '专门针对勒索软件的防护机制，阻止文件加密行为',
      },
      {
        icon: Network,
        title: '横向渗透防御',
        description: '监控内网横向移动，防止攻击者在网络中扩散',
      },
    ],
  },
  {
    phase: '事后处置与响应',
    description: '快速响应处置，恢复系统安全',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    features: [
      {
        icon: Zap,
        title: '缓解响应',
        description: '自动隔离威胁，阻断攻击链，最小化安全事件影响',
      },
      {
        icon: Activity,
        title: '系统修复',
        description: '清除恶意文件，修复系统配置，恢复正常运行状态',
      },
      {
        icon: FileSearch,
        title: '取证溯源',
        description: '详细记录攻击过程，提供完整的事件时间线和证据链',
      },
      {
        icon: Shield,
        title: '加固防护',
        description: '基于攻击分析结果，加强系统防护措施，防止类似攻击',
      },
    ],
  },
]
export default function NGEPCapabilities() {
  return (
    <section className={cn('py-24 bg-white', 'relative overflow-hidden')}>
      <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8')}>
        {/* 标题区域 */}
        <AnimatedSection className='text-center mb-16'>
          <div
            className={cn(
              'inline-flex items-center px-4 py-2 rounded-full',
              'bg-primary/10 text-primary font-semibold text-sm mb-4',
            )}
          >
            核心能力
          </div>

          <h2
            className={cn(
              'text-3xl md:text-4xl lg:text-5xl font-bold',
              'text-foreground mb-6',
            )}
          >
            三阶段全生命周期防护
          </h2>

          <p
            className={cn(
              'text-xl text-muted-foreground max-w-3xl mx-auto',
              'leading-relaxed',
            )}
          >
            从事前预警到事后处置，构建完整的端点安全防护体系，
            确保每个阶段都有针对性的安全措施
          </p>
        </AnimatedSection>

        {/* 能力阶段 */}
        <AnimatedList initialDelay={0.2} delayStep={0.2} className='space-y-16'>
          {capabilities.map((capability, index) => (
            <div key={index} className={cn('relative')}>
              {/* 阶段标题 */}
              <div className='text-center mb-12'>
                <div
                  className={cn(
                    'inline-flex items-center px-6 py-3 rounded-full mb-4',
                    'bg-gradient-to-r',
                    capability.color,
                    'text-white font-semibold text-lg',
                  )}
                >
                  第{index + 1}阶段：{capability.phase}
                </div>
                <p className='text-muted-foreground text-lg'>
                  {capability.description}
                </p>
              </div>

              {/* 功能网格 */}
              <div
                className={cn(
                  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
                )}
              >
                {capability.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className={cn(
                      'group p-6 rounded-xl',
                      'bg-card/50 backdrop-blur-sm border border-primary/15',
                      'hover:border-primary/30 hover:bg-card/70',
                      'hover:-translate-y-2',
                      'transition-all duration-300',
                    )}
                  >
                    <div
                      className={cn(
                        'w-12 h-12 rounded-lg mb-4',
                        'bg-primary/10 group-hover:bg-primary/20',
                        'flex items-center justify-center',
                        'group-hover:scale-110 transition-all',
                      )}
                    >
                      <feature.icon className={cn('w-6 h-6 text-primary')} />
                    </div>

                    <h4
                      className={cn(
                        'text-lg font-semibold text-foreground mb-2',
                      )}
                    >
                      {feature.title}
                    </h4>

                    <p className='text-muted-foreground text-sm leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* 连接线 - 除了最后一个阶段 */}
              {index < capabilities.length - 1 && (
                <div className={cn('flex justify-center mt-12 mb-4')}>
                  <div
                    className={cn(
                      'w-px h-16 bg-gradient-to-b from-primary/30 to-primary/50',
                      'relative',
                    )}
                  >
                    <div
                      className={cn(
                        'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
                        'w-3 h-3 bg-primary rounded-full',
                        'animate-pulse',
                      )}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </AnimatedList>

        {/* 统计数据 */}
        <AnimatedSection delay={1.0}>
          <div
            className={cn(
              'mt-20 p-12 rounded-2xl',
              'bg-gradient-to-r from-gray-800 to-blue-700',
              'text-white text-center',
            )}
          >
            <h3 className='text-2xl font-bold mb-8'>防护效果统计</h3>
            <AnimatedList
              initialDelay={0.3}
              delayStep={0.2}
              className='grid grid-cols-2 md:grid-cols-4 gap-8'
            >
              <MetallicShineCard>
                <div className='mb-2'>
                  <NumberTicker
                    value={12}
                    className='text-3xl font-bold text-primary'
                  />
                </div>
                <div className='text-sm text-blue-200'>核心防护功能</div>
              </MetallicShineCard>
              <MetallicShineCard>
                <div className='mb-2 text-3xl font-bold text-primary'>
                  <NumberTicker
                    value={99.9}
                    decimalPlaces={1}
                    className='text-3xl font-bold text-primary'
                  />
                  %
                </div>
                <div className='text-sm text-blue-200'>威胁检测率</div>
              </MetallicShineCard>
              <MetallicShineCard>
                <div className='mb-2 text-3xl font-bold text-primary'>
                  <NumberTicker
                    value={1}
                    className='text-3xl font-bold text-primary'
                  />
                  s
                </div>
                <div className='text-sm text-blue-200'>响应时间</div>
              </MetallicShineCard>
              <MetallicShineCard>
                <div className='mb-2 text-3xl font-bold text-primary'>
                  0.01 %
                </div>
                <div className='text-sm text-blue-200'>误报率</div>
              </MetallicShineCard>
            </AnimatedList>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
