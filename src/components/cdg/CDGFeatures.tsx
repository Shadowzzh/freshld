'use client'

import { cn } from '@/lib/utils'
import {
  Shield,
  FileText,
  Scan,
  Target,
  Eye,
  Zap,
  RefreshCw,
  Search,
  AlertTriangle,
  Database,
  HardDrive,
  Activity,
  Lock,
  CheckCircle,
  type LucideIcon,
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'

const preventionFeatures = [
  {
    icon: Database,
    title: '资产清点',
    description: '自动化清点硬件、软件、进程、端口等通用资产，实现全流程监管',
    features: [
      '硬件资产自动识别',
      '软件版本智能检测',
      '进程端口实时监控',
      '账号权限全面梳理',
      '中间件数据库发现',
      'Web应用框架识别',
      '资产变更实时报警',
      '多视角管理展示',
    ],
  },
  {
    icon: FileText,
    title: '文件备份',
    description: '独特的触发式备份技术，确保数据最接近被篡改时的有效性',
    features: [
      '触发式自动备份',
      '自定义文件类型',
      '数据等级分类管理',
      '备份区域访问控制',
      '增量备份优化',
      '备份完整性校验',
      '快速恢复机制',
      '存储空间优化',
    ],
  },
  {
    icon: Scan,
    title: '病毒查杀',
    description: '内置第三方杀毒引擎，全面查杀已知勒索病毒威胁',
    features: [
      '第三方杀毒引擎',
      '病毒库自动更新',
      '策略灵活配置',
      '实时扫描监控',
      'Windows/Linux支持',
      '定时扫描任务',
      '隔离区管理',
      '扫描日志记录',
    ],
  },
]

const detectionFeatures = [
  {
    icon: Target,
    title: '文件诱捕',
    description: '设置高仿真重要文件作为陷阱，监控勒索软件访问行为',
    features: [
      '自动诱捕文件生成',
      '手动陷阱文件设置',
      '高仿真文件模拟',
      '实时访问监控',
      '加密行为捕获',
      '触发即时阻断',
      '诱捕日志记录',
      '误报率极低',
    ],
  },
  {
    icon: Activity,
    title: '勒索行为检测',
    description: '内置行为分析引擎，通过特征模型实现精准检测判断',
    features: [
      '行为分析引擎',
      '勒索特征建模',
      '机器学习算法',
      '多维度数据收集',
      '进程行为监控',
      '系统内核分析',
      '用户交互检测',
      '容器环境支持',
    ],
  },
  {
    icon: HardDrive,
    title: 'MBR防护',
    description: '针对磁盘加密类勒索病毒，及时阻断MBR写入攻击',
    features: [
      'MBR写入监控',
      '磁盘加密检测',
      'Petya类病毒防护',
      '启动区域保护',
      '实时阻断机制',
      '系统启动保障',
      '恢复机制完善',
      '兼容性优化',
    ],
  },
]

const recoveryFeatures = [
  {
    icon: RefreshCw,
    title: '文件修复',
    description: '热点文件极速恢复，将数据恢复到感染前的可信状态',
    features: [
      '热点文件识别',
      '极速恢复机制',
      '可信状态还原',
      '增量恢复优化',
      '批量恢复支持',
      '恢复进度监控',
      '完整性验证',
      '恢复日志记录',
    ],
  },
  {
    icon: Search,
    title: '攻击溯源',
    description: '专利技术实现全访问日志分析，快速还原攻击链条',
    features: [
      '进程监控溯源',
      '全访问日志分析',
      '攻击链条还原',
      '多维度细粒度数据',
      '行为语义分析',
      '攻击线图生成',
      '威胁源头定位',
      '秒级事件关联',
    ],
  },
  {
    icon: AlertTriangle,
    title: '应急响应',
    description: '及时隔离感染主机，自动隔离恶意文件，防止威胁扩散',
    features: [
      '感染主机隔离',
      '网络通讯阻断',
      '恶意文件隔离',
      '威胁扩散防护',
      '自动响应机制',
      '手动干预支持',
      '隔离状态监控',
      '恢复流程指导',
    ],
  },
]

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

export function CDGFeatures() {
  const renderFeatureCard = (feature: Feature) => (
    <div
      key={feature.title}
      className={cn(
        'group relative p-6 rounded-2xl border border-primary/15',
        'bg-white/80 backdrop-blur-sm h-full flex flex-col',
        'hover:border-primary/30 hover:bg-white hover:scale-105',
        'transition-all duration-300',
      )}
    >
      {/* 图标 */}
      <div
        className={cn(
          'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
          'transition-all duration-300 group-hover:scale-105',
          'bg-primary/10 text-primary',
        )}
      >
        <feature.icon className='w-6 h-6' />
      </div>

      {/* 标题和描述 */}
      <h3 className='text-lg font-semibold text-gray-900 mb-3'>
        {feature.title}
      </h3>
      <p className='text-sm text-gray-600 leading-relaxed mb-4'>
        {feature.description}
      </p>

      {/* 功能列表 */}
      <div className='flex-1'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
          {feature.features.map((item, idx) => (
            <div
              key={idx}
              className='flex items-center space-x-2 p-2 rounded-lg bg-white/80 border border-gray-100 hover:bg-gray-50/50 transition-colors duration-300'
            >
              <div className='w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-primary/10'>
                <CheckCircle className='w-2.5 h-2.5 text-primary' />
              </div>
              <span className='text-xs font-medium text-gray-700 flex-1'>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 悬停效果边框 */}
      <div
        className={cn(
          'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100',
          'transition-opacity duration-300',
          'bg-gradient-to-br from-primary/10 via-transparent to-primary/5',
          'pointer-events-none',
        )}
      />
    </div>
  )

  const renderCategoryHeader = (
    icon: LucideIcon,
    title: string,
    description: string,
  ) => {
    const Icon = icon
    return (
      <div className='flex items-center gap-3 mb-8'>
        <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center'>
          <Icon className='w-6 h-6 text-primary' />
        </div>
        <div>
          <h3 className='text-2xl font-bold text-gray-900'>{title}</h3>
          <p className='text-gray-600'>{description}</p>
        </div>
      </div>
    )
  }

  return (
    <section className='py-24 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='relative z-10'>
          {/* 标题 */}
          <AnimatedSection className='text-center mb-16'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6'>
              功能特性
            </div>
            <h2 className='text-3xl lg:text-4xl font-bold mb-4 text-primary'>
              全方位防护能力，构建立体安全防线
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              明焰CDG提供从事前预防到事后恢复的完整功能体系，每个环节都经过精心设计，确保为您的数据提供最全面的保护
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <Tabs defaultValue='all' className='w-full'>
              <TabsList className='grid w-full grid-cols-4 mb-12'>
                <TabsTrigger value='all' className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4' />
                  全部功能
                </TabsTrigger>
                <TabsTrigger
                  value='prevention'
                  className='flex items-center gap-2'
                >
                  <Shield className='w-4 h-4' />
                  事前预防
                </TabsTrigger>
                <TabsTrigger
                  value='detection'
                  className='flex items-center gap-2'
                >
                  <Eye className='w-4 h-4' />
                  事中阻断
                </TabsTrigger>
                <TabsTrigger
                  value='recovery'
                  className='flex items-center gap-2'
                >
                  <RefreshCw className='w-4 h-4' />
                  事后恢复
                </TabsTrigger>
              </TabsList>

              {/* 全部功能 */}
              <TabsContent value='all' className='space-y-16'>
                {/* 事前预防 */}
                <div>
                  {renderCategoryHeader(
                    Shield,
                    '事前预防',
                    '构建第一道防线，防患于未然',
                  )}
                  <AnimatedList
                    initialDelay={0.2}
                    delayStep={0.2}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  >
                    {preventionFeatures.map(renderFeatureCard)}
                  </AnimatedList>
                </div>

                {/* 事中阻断 */}
                <div>
                  {renderCategoryHeader(
                    Eye,
                    '事中阻断',
                    '实时监测威胁，精准阻断攻击',
                  )}
                  <AnimatedList
                    initialDelay={0.2}
                    delayStep={0.1}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  >
                    {detectionFeatures.map(renderFeatureCard)}
                  </AnimatedList>
                </div>

                {/* 事后恢复 */}
                <div>
                  {renderCategoryHeader(
                    RefreshCw,
                    '事后恢复',
                    '快速恢复数据，溯源攻击路径',
                  )}
                  <AnimatedList
                    initialDelay={0.3}
                    delayStep={0.1}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  >
                    {recoveryFeatures.map(renderFeatureCard)}
                  </AnimatedList>
                </div>
              </TabsContent>

              {/* 单独标签页 */}
              <TabsContent value='prevention'>
                <AnimatedList
                  initialDelay={0.1}
                  delayStep={0.1}
                  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                >
                  {preventionFeatures.map(renderFeatureCard)}
                </AnimatedList>
              </TabsContent>

              <TabsContent value='detection'>
                <AnimatedList
                  initialDelay={0.1}
                  delayStep={0.1}
                  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                >
                  {detectionFeatures.map(renderFeatureCard)}
                </AnimatedList>
              </TabsContent>

              <TabsContent value='recovery'>
                <AnimatedList
                  initialDelay={0.1}
                  delayStep={0.1}
                  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                >
                  {recoveryFeatures.map(renderFeatureCard)}
                </AnimatedList>
              </TabsContent>
            </Tabs>
          </AnimatedSection>

          {/* 分割线 */}
          <AnimatedSection className='flex justify-center my-20'>
            <div className='w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent' />
          </AnimatedSection>

          {/* 核心技术亮点 */}
          <AnimatedSection className='text-center mb-12'>
            <h3 className='text-2xl lg:text-3xl font-bold mb-4 text-primary'>
              核心技术亮点
            </h3>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              明焰CDG集成了多项创新技术，为您提供业界领先的防勒索解决方案
            </p>
          </AnimatedSection>

          <AnimatedList
            initialDelay={0.4}
            delayStep={0.1}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
          >
            {[
              {
                icon: Lock,
                title: '双模型检测',
                description: '行为分析+诱捕检测双重保障',
              },
              {
                icon: Zap,
                title: '实时监控',
                description: '毫秒级威胁响应能力',
              },
              {
                icon: Database,
                title: '专利溯源',
                description: '全路径攻击链条还原',
              },
              {
                icon: Shield,
                title: '零误报',
                description: '智能学习降低误报率',
              },
            ].map(highlight => (
              <div
                key={highlight.title}
                className={cn(
                  'group relative p-6 rounded-2xl border border-primary/15',
                  'bg-white/80 backdrop-blur-sm text-center',
                  'hover:border-primary/30 hover:scale-105',
                  'transition-all duration-300',
                )}
              >
                <div
                  className={cn(
                    'w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4',
                    'transition-all duration-300 group-hover:scale-105',
                    'bg-primary/10 text-primary',
                  )}
                >
                  <highlight.icon className='w-6 h-6' />
                </div>
                <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                  {highlight.title}
                </h4>
                <p className='text-sm text-gray-600'>{highlight.description}</p>

                {/* 悬停效果边框 */}
                <div
                  className={cn(
                    'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100',
                    'transition-opacity duration-300',
                    'bg-gradient-to-br from-primary/10 via-transparent to-primary/5',
                    'pointer-events-none',
                  )}
                />
              </div>
            ))}
          </AnimatedList>
        </div>
      </div>
    </section>
  )
}
