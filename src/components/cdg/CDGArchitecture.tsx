'use client'

import {
  Server,
  Database,
  Shield,
  Monitor,
  Network,
  Layers,
  Activity,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/card'
import { AnimatedList } from '@/components/ui/animated-section'
import { cn } from '@/lib/utils'

const systemLayers = [
  {
    id: 'platform',
    title: '平台管理层',
    description: '提供统一的管理控制台和用户界面',
    icon: Monitor,
    features: [
      '工作台管理',
      '用户权限管理',
      '资产清点',
      '策略中心',
      '安全事件管理',
      '日志管理',
      '系统管理',
      '升级包管理',
    ],
  },
  {
    id: 'analysis',
    title: '数据分析层',
    description: '智能分析引擎，提供威胁检测和溯源能力',
    icon: Activity,
    features: ['溯源引擎', '规则引擎', '分析引擎', '行为建模', '威胁情报'],
  },
  {
    id: 'storage',
    title: '数据存储层',
    description: '高效的数据存储、加工和清理',
    icon: Database,
    features: ['数据存储', '数据加工', '数据清理', '备份管理', '索引优化'],
  },
  {
    id: 'communication',
    title: '数据收发层',
    description: '负责与探针的通信和数据传输',
    icon: Network,
    features: [
      '通信服务',
      '数据接收',
      '数据解析',
      '指令下发',
      '策略更新',
      '升级更新',
    ],
  },
  {
    id: 'probe',
    title: '探针侧',
    description: '部署在终端的数据采集和防护组件',
    icon: Shield,
    features: [
      'Windows支持 (7/10/11, 2008/2012/2016/2019)',
      'Linux支持 (CentOS/RedHat, SUSE/Ubuntu)',
      '进程监控',
      '文件监控',
      '采集引擎',
    ],
  },
]

export function CDGArchitecture() {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        {/* 系统架构 */}
        <div className='max-w-6xl mx-auto mb-20'>
          <SectionHeader
            badge='系统架构'
            title='五层架构设计，构建完整防护体系'
            description='明焰CDG采用分层架构设计，从探针侧到平台管理层，每一层都承担着特定的功能职责，确保系统的稳定性和可扩展性。'
            className='mb-16'
          />

          {/* 架构层级图 */}
          <div className='relative max-w-4xl mx-auto'>
            {/* 架构层级 - 垂直流程图布局 */}
            <AnimatedList className='space-y-6' delayStep={0.15} direction='up'>
              {systemLayers.map((layer, index) => (
                <div key={layer.id} className='relative'>
                  {/* 连接箭头 */}
                  {index < systemLayers.length - 1 && (
                    <div className='absolute left-1/2 -bottom-3 transform -translate-x-1/2 z-10'>
                      <div className='w-6 h-6 bg-white border-2 border-primary/30 rounded-full flex items-center justify-center'>
                        <div className='w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-primary'></div>
                      </div>
                    </div>
                  )}

                  {/* 架构层卡片 */}
                  <Card
                    className={cn(
                      'lg:min-h-32 p-6 transition-all duration-300 group hover:scale-[1.02]',
                      'border-primary/15 hover:border-primary/30 ',
                      'bg-white relative overflow-hidden',
                    )}
                  >
                    {/* 悬停效果 */}
                    <div
                      className={cn(
                        'absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent',
                        'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                      )}
                    />

                    <div className='relative z-10 h-full flex flex-col lg:flex-row lg:items-center gap-6'>
                      {/* 上部/左侧：图标和描述 */}
                      <div className='flex items-center gap-4 flex-shrink-0 min-w-0 lg:flex-1'>
                        <div
                          className={cn(
                            'w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0',
                            'bg-gradient-to-br from-primary to-primary/80',
                            'group-hover:scale-110 transition-transform duration-300',
                          )}
                        >
                          <layer.icon className='w-7 h-7 text-white' />
                        </div>
                        <div className='min-w-0 flex-1'>
                          <h3 className='text-xl font-bold text-gray-900 mb-1'>
                            {layer.title}
                          </h3>
                          <p className='text-sm text-gray-600 leading-relaxed'>
                            {layer.description}
                          </p>
                        </div>
                      </div>

                      {/* 下部/右侧：功能标签 */}
                      <div className='flex-shrink-0 min-w-0 lg:flex-1'>
                        <h4 className='text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider'>
                          核心功能
                        </h4>
                        <div className='flex flex-wrap gap-2'>
                          {layer.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className={cn(
                                'px-3 py-1.5 text-xs font-medium rounded-full',
                                'bg-primary/10 text-primary border border-primary/20',
                                'hover:bg-primary/15 transition-colors duration-200',
                              )}
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </AnimatedList>
          </div>
        </div>

        {/* 部署架构 */}
        <div className='max-w-6xl mx-auto'>
          <SectionHeader
            badge='部署架构'
            title='集中管理，分布式部署'
            description={
              <>
                采用集中管理、分布式部署的方式，安全管控中心独立部署。<br />
                客户端分布在总部、分支机构及云端，形成一体化安全防护体系。
              </>
            }
            className='mb-16'
          />

          {/* 架构优势 */}
          <AnimatedList
            direction='up'
            initialDelay={0.3}
            delayStep={0.2}
            className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
          >
            {[
              {
                icon: Layers,
                title: '分层设计',
                description: '清晰的架构层次，便于维护和扩展',
              },
              {
                icon: Server,
                title: '集中管理',
                description: '统一的管控中心，简化运维管理',
              },
              {
                icon: Network,
                title: '分布式部署',
                description: '灵活的部署方式，适应不同环境',
              },
              {
                icon: Shield,
                title: '全面防护',
                description: '覆盖总部、分支和云端的完整防护',
              },
            ].map(advantage => (
              <Card
                key={advantage.title}
                className={cn(
                  'p-6 text-center transition-all duration-300 group',
                  'border-primary/15 hover:border-primary/30',
                  'hover:scale-105',
                )}
              >
                {/* 悬停效果边框 */}
                <div
                  className={cn(
                    'absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100',
                    'transition-opacity duration-300',
                    'bg-gradient-to-br from-amber-500/10 via-transparent to-amber-500/5',
                    'pointer-events-none',
                  )}
                />

                <div className='w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <advantage.icon className='w-6 h-6 text-primary' />
                </div>
                <h4 className='font-bold text-gray-900 mb-2'>
                  {advantage.title}
                </h4>
                <p className='text-sm text-gray-600 leading-relaxed'>
                  {advantage.description}
                </p>
              </Card>
            ))}
          </AnimatedList>
        </div>
      </div>
    </section>
  )
}
