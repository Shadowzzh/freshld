'use client'

import { cn } from '@/lib/utils'
import {
  Shield,
  Bot,
  Eye,
  Target,
  Settings,
  CheckCircle,
  Activity,
} from 'lucide-react'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'

// 产品功能数据
const features = [
  {
    icon: Bot,
    title: '攻防机器人模拟',
    description:
      '利用先进的攻防机器人，模拟真实黑客的攻击行为，进行无害化测试验证',
    category: '智能化',
  },
  {
    icon: Eye,
    title: '真实场景模拟',
    description:
      '内置上千种真实攻击场景，通过从真实攻击事件中提取的信息还原威胁',
    category: '场景化',
  },
  {
    icon: Activity,
    title: '可视化量化',
    description: '提供可定制的观看界面，满足各级人员对安全验证内容的需求',
    category: '可视化',
  },
  {
    icon: Shield,
    title: '全自动化验证',
    description: '平台支持全自动化运行，自定义验证范围、场景、剧本和循环周期',
    category: '自动化',
  },
  {
    icon: Target,
    title: '精准威胁复现',
    description: '基于真实攻击事件精准复现攻击手法，验证已部署的各类安全措施',
    category: '精准化',
  },
  {
    icon: Settings,
    title: '多维度验证',
    description: '参照真实攻击场景进行可重复的持续性端到端的测试验证',
    category: '全面化',
  },
]

export default function MeasureFeatures() {
  return (
    <section className='py-24 relative bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='relative z-10'>
          {/* 标题 */}
          <AnimatedSection className='text-center mb-16'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6'>
              产品功能
            </div>
            <h2 className='text-3xl lg:text-4xl font-bold mb-4 text-primary'>
              全自动化、可量化的防御体系验证
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              基于黑客组织和受害者情报为攻击库来源的安全验证平台，持续更新最新攻击手法进行测试
            </p>
          </AnimatedSection>

          {/* 功能网格 */}
          <AnimatedList className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20'>
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  'group relative p-6 rounded-2xl border border-primary/15',
                  'bg-white/80 backdrop-blur-sm',
                  'hover:border-primary/30 hover:bg-white hover:scale-105',
                  'transition-all duration-300',
                  'h-full flex flex-col', // 添加 h-full 和 flex 布局
                )}
              >
                {/* 内容 */}
                <div className='relative'>
                  {/* 图标 */}
                  <div
                    className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
                      'transition-all duration-300 group-hover:scale-110',
                      'bg-primary/10 text-primary',
                    )}
                  >
                    <feature.icon className='w-6 h-6' />
                  </div>

                  {/* 分类标签 */}
                  <div className='mb-3'>
                    <span className='text-xs font-medium text-primary/70 bg-primary/5 px-2 py-1 rounded-md'>
                      {feature.category}
                    </span>
                  </div>

                  {/* 标题 */}
                  <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                    {feature.title}
                  </h3>

                  {/* 描述 */}
                  <p className='text-sm text-gray-600 leading-relaxed'>
                    {feature.description}
                  </p>
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
            ))}
          </AnimatedList>

          {/* 分割线 */}
          <AnimatedSection className='flex justify-center mb-20'>
            <div className='w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent' />
          </AnimatedSection>

          {/* 自动化验证流程 */}
          <AnimatedSection className='text-center mb-12'>
            <h3 className='text-2xl lg:text-3xl font-bold mb-4 text-primary'>
              自动化验证流程
            </h3>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              从威胁情报收集到防御验证的全链路自动化流程，实现持续性安全验证
            </p>
          </AnimatedSection>

          {/* 流程步骤 */}
          <AnimatedList className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
            {[
              {
                icon: Target,
                title: '威胁情报收集',
                desc: 'APT组织跟踪，攻击手法分析',
                detail:
                  '7×24小时追踪全球APT组织动态，收集最新威胁情报，分析攻击手法和受害者信息',
                step: '01',
              },
              {
                icon: Settings,
                title: '攻击复现验证',
                desc: '无害化模拟，真实场景还原',
                detail:
                  '基于威胁情报精准复现攻击路径，在安全沙盒环境中进行无害化模拟测试',
                step: '02',
              },
              {
                icon: CheckCircle,
                title: '防御效果评估',
                desc: '可视化量化，漏检建议输出',
                detail: '直观展示防御体系有效性，提供详细的漏检建议和改进方案',
                step: '03',
              },
            ].map((step, index) => (
              <div
                key={index}
                className={cn(
                  'group relative p-6 rounded-2xl',
                  'bg-white border border-primary/15',
                  'hover:border-primary/30 hover:bg-white hover:scale-105',
                  'transition-all duration-300',
                  'h-full flex flex-col', // 添加 h-full 和 flex 布局
                )}
              >
                {/* 步骤编号 */}
                <div className='absolute top-4 right-4 text-3xl font-bold text-primary/20'>
                  {step.step}
                </div>

                <div className='flex items-start space-x-4'>
                  <div
                    className={cn(
                      'w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center',
                      'group-hover:bg-primary/20 transition-colors',
                    )}
                  >
                    <step.icon className='w-6 h-6 text-primary' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                      {step.title}
                    </h4>
                    <p className='text-primary font-medium text-sm mb-3'>
                      {step.desc}
                    </p>
                    <p className='text-gray-600 text-sm leading-relaxed'>
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedList>
        </div>
      </div>
    </section>
  )
}
