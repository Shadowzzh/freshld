'use client'

import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Zap,
  Hospital,
  Factory,
  Building,
  Users,
  Clock,
  TrendingUp,
  Lock,
  RefreshCw,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const scenarioSteps = [
  {
    id: 'attack',
    icon: AlertTriangle,
    title: '勒索攻击发生',
    description: '用户点击勒索钓鱼邮件，恶意软件开始执行',
    color: 'from-primary to-primary/80',
    status: 'danger',
  },
  {
    id: 'detection',
    icon: Shield,
    title: '静态查杀检测',
    description: '系统自动进行静态查杀，识别已知勒索病毒',
    color: 'from-primary to-primary/80',
    status: 'processing',
  },
  {
    id: 'hardening',
    icon: Lock,
    title: '系统加固',
    description: '固化服务器配置，减少攻击面，提升安全性',
    color: 'from-primary to-primary/80',
    status: 'processing',
  },
  {
    id: 'behavior',
    icon: Zap,
    title: '行为检测阻断',
    description: '动态实时行为检测告警并阻断勒索行为',
    color: 'from-primary to-primary/80',
    status: 'processing',
  },
  {
    id: 'response',
    icon: RefreshCw,
    title: '应急响应',
    description: '启动应急响应，进行主机隔离、清理和清除',
    color: 'from-primary to-primary/80',
    status: 'success',
  },
  {
    id: 'recovery',
    icon: CheckCircle,
    title: '系统恢复',
    description: '根据溯源分析结果，恢复到攻击前的健康状态',
    color: 'from-primary to-primary/80',
    status: 'success',
  },
]

const customerCases = [
  {
    id: 'hospital',
    icon: Hospital,
    title: '某三甲医院（应急）',
    industry: '医疗行业',
    problem: '门诊部分电脑被勒索，影响正常办公',
    solution: [
      '利用微隔离功能进行内网东西向流量隔离',
      '开启勒索病毒主动防御，实现检测、阻断、清除',
      '通过全路径溯源功能定位并清理勒索病毒',
    ],
    result:
      '快速遏制和清理勒索病毒，保护数据安全，及时恢复业务，实现了全网威胁监控和自动阻断',

    color: 'from-primary to-primary/80',
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: '某制造业企业',
    industry: '制造业',
    problem:
      '办公区电脑被勒索，网络设备异常流量，需要防御勒索扩散和阻止非法外联',
    solution: [
      '利用微隔离阻止病毒扩散',
      '开启勒索病毒主动防御、检测、阻断、清除',
      '通过全路径溯源定位并清理勒索病毒和非法外联',
    ],
    result: '解决了勒索软件问题，同时阻止了非法外联导致的信息泄露',

    color: 'from-primary to-primary/80',
  },
]

const benefits = [
  {
    icon: Zap,
    title: '快速响应',
    description: '毫秒级威胁检测，秒级应急响应',
  },
  {
    icon: TrendingUp,
    title: '业务连续',
    description: '最小化业务中断，确保业务连续性',
  },
  {
    icon: Users,
    title: '专业服务',
    description: '7×24小时专业技术支持和应急响应',
    stats: '7x24 技术支持',
  },
]

export function CDGScenarios() {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <SectionHeader
            badge='应用场景'
            title='实战验证，守护企业数据安全'
            description='明焰CDG在多个行业的实际部署中表现卓越，为客户提供了可靠的防勒索保护，确保业务连续性和数据安全。'
            className='mb-16'
          />

          {/* 防勒索一体化场景 */}
          <div className='mb-20'>
            <AnimatedSection
              direction='up'
              duration={0.6}
              className='text-center mb-12'
            >
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                防勒索一体化场景应用
              </h3>
              <p className='text-gray-600 max-w-3xl mx-auto'>
                从勒索攻击发生到系统完全恢复的全流程防护演示
              </p>
            </AnimatedSection>

            {/* 场景流程图 */}
            <div className='relative'>
              <AnimatedList
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                direction='up'
                itemClassName='relative'
              >
                {scenarioSteps.map((step, index) => (
                  <Card
                    key={step.id}
                    className={cn(
                      'p-6 text-center transition-all duration-300 group relative z-10',
                      'border-primary/15 hover:border-primary/30',
                      'hover:scale-105',
                    )}
                  >
                    {/* 步骤编号 */}
                    <div className='absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center'>
                      {index + 1}
                    </div>

                    {/* 图标 */}
                    <div
                      className={cn(
                        'w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center',
                        'group-hover:scale-110 transition-transform duration-300',
                        `bg-gradient-to-br ${step.color}`,
                      )}
                    >
                      <step.icon className='w-8 h-8 text-white' />
                    </div>

                    {/* 内容 */}
                    <h4 className='font-bold text-gray-900 mb-2'>
                      {step.title}
                    </h4>
                    <p className='text-sm text-gray-600 leading-relaxed'>
                      {step.description}
                    </p>

                    {/* 状态指示 */}
                    <div className='mt-4'>
                      <div
                        className={cn(
                          'inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium',
                          {
                            'bg-red-100 text-red-700': step.status === 'danger',
                            'bg-blue-100 text-blue-700':
                              step.status === 'processing',
                            'bg-green-100 text-green-700':
                              step.status === 'success',
                          },
                        )}
                      >
                        {step.status === 'danger' && (
                          <AlertTriangle className='w-3 h-3' />
                        )}
                        {step.status === 'processing' && (
                          <Clock className='w-3 h-3' />
                        )}
                        {step.status === 'success' && (
                          <CheckCircle className='w-3 h-3' />
                        )}
                        {step.status === 'danger' && '威胁'}
                        {step.status === 'processing' && '处理中'}
                        {step.status === 'success' && '完成'}
                      </div>
                    </div>
                  </Card>
                ))}
              </AnimatedList>
            </div>
          </div>

          {/* 客户案例 */}
          <div className='mb-20'>
            <AnimatedSection
              direction='up'
              duration={0.6}
              className='text-center mb-12'
            >
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                客户成功案例
              </h3>
              <p className='text-gray-600 max-w-3xl mx-auto'>
                真实案例验证，明焰CDG在关键时刻为客户提供可靠保护
              </p>
            </AnimatedSection>

            <AnimatedList
              className='grid grid-cols-1 lg:grid-cols-2 gap-8'
              direction='up'
            >
              {customerCases.map(caseItem => (
                <Card
                  className='p-8 h-full transition-all duration-300'
                  key={caseItem.id}
                >
                  {/* 案例头部 */}
                  <div className='flex items-start gap-6 mb-6'>
                    <div
                      className={cn(
                        'w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0',
                        `bg-gradient-to-br ${caseItem.color}`,
                      )}
                    >
                      <caseItem.icon className='w-8 h-8 text-white' />
                    </div>
                    <div className='flex-1'>
                      <h4 className='text-xl font-bold text-gray-900 mb-2'>
                        {caseItem.title}
                      </h4>
                      <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium'>
                        <Building className='w-4 h-4' />
                        {caseItem.industry}
                      </div>
                    </div>
                  </div>

                  {/* 问题描述 */}
                  <div className='mb-6'>
                    <h5 className='font-semibold text-gray-900 mb-2'>
                      面临挑战
                    </h5>
                    <p className='text-gray-600 text-sm leading-relaxed'>
                      {caseItem.problem}
                    </p>
                  </div>

                  {/* 解决方案 */}
                  <div>
                    <h5 className='font-semibold text-gray-900 mb-3'>
                      解决方案
                    </h5>
                    <div className='space-y-2'>
                      {caseItem.solution.map((item, itemIndex) => (
                        <div key={itemIndex} className='flex items-start gap-3'>
                          <CheckCircle className='w-4 h-4 text-green-500 flex-shrink-0 mt-0.5' />
                          <span className='text-sm text-gray-700'>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </AnimatedList>
          </div>

          {/* 核心优势 */}
          <AnimatedSection
            direction='up'
            duration={0.8}
            className='p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/15'
          >
            <div className='text-center mb-8'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                为什么选择明焰CDG
              </h3>
              <p className='text-gray-600 max-w-3xl mx-auto'>
                经过实战验证的防勒索解决方案，为您的企业数据提供最可靠的保护
              </p>
            </div>

            <AnimatedList
              className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8'
              direction='up'
              itemClassName='text-center'
            >
              {benefits.map(benefit => (
                <div key={benefit.title}>
                  <div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center'>
                    <benefit.icon className='w-8 h-8 text-primary' />
                  </div>
                  <h4 className='font-bold text-gray-900 mb-2'>
                    {benefit.title}
                  </h4>
                  <p className='text-sm text-gray-600 mb-3 leading-relaxed'>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </AnimatedList>

            <div className='text-center'>
              <Link href={`/contact`}>
                <Button size='lg' className='px-8 py-4 cursor-pointer'>
                  <Shield className='w-5 h-5 mr-2' />
                  立即体验
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
