'use client'

import { Timeline } from '@/components/ui/timeline'
import { AnimatedList, AnimatedSection } from '@/components/ui/animated-section'
import { TimelineContent } from './TimelineContent'
import { cn } from '@/lib/utils'

export function AboutTimeline() {
  const timelineData = [
    {
      title: '2024',
      content: (
        <TimelineContent description='银联 10 万节点验收成功' items={[]} />
      ),
    },
    {
      title: '2023',
      content: (
        <TimelineContent
          description='无锡/上海研发中心成立，入驻浙江大学上海高等研究院'
          items={[{ label: '上海研发中心' }, { label: '浙大高研院' }]}
        />
      ),
    },
    {
      title: '2022',
      content: (
        <TimelineContent
          description='银联6W节点交付，蚂蚁金服交付CNAPP商用'
          items={[{ label: '银联6W节点' }, { label: '蚂蚁CNAPP商用' }]}
        />
      ),
    },
    {
      title: '2021',
      content: (
        <TimelineContent
          description='企业获得ISO/IEC27001资质证书和质量管理体系认证证书，同年产品NGEP5.0正式发布，银联5w节点上线'
          items={[{ label: 'ISO27001认证' }, { label: 'NGEP5.0发布' }]}
        />
      ),
    },
    {
      title: '2020',
      content: (
        <TimelineContent
          description='完成PreA轮融资，发布明焰品牌商标和明焰NGEP产品'
          items={[{ label: 'PreA轮融资' }, { label: '明焰品牌发布' }]}
        />
      ),
    },
    {
      title: '2019',
      content: (
        <TimelineContent
          description='在行业市场取得突破，完成银联2W+规模项目交付'
          items={[{ label: '银联2W+项目交付' }]}
        />
      ),
    },
    {
      title: '2018',
      content: (
        <TimelineContent
          description='发布商业化产品'
          items={[{ label: '商业化产品' }]}
        />
      ),
    },
    {
      title: '2017',
      content: (
        <TimelineContent
          description='国际领先论文发表 完成天使轮融资，同年杭州奇盾成立'
          items={[{ label: '天使轮融资' }, { label: '杭州奇盾成立' }]}
        />
      ),
    },
    {
      title: '2015',
      content: (
        <TimelineContent
          description='启动主机APT防御国家级科研课题'
          items={[{ label: '国际论文发表' }]}
        />
      ),
    },
    {
      title: '2012',
      content: (
        <TimelineContent
          description='浙江大学互联网安全实验室成立'
          items={[{ label: '浙大安全实验室' }, { label: 'APT防御课题' }]}
        />
      ),
    },
  ]

  return (
    <div className='w-full relative pb-16 bg-gradient-to-b from-white via-primary/2 to-white'>
      <div
        className={cn(
          'max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 relative z-10',
        )}
      >
        <AnimatedList className='text-center mb-16'>
          <div
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-full',
              'bg-primary/10 border border-primary/15 mb-6',
            )}
          >
            <div className='w-2 h-2 bg-primary rounded-full animate-pulse' />
            <span className='text-sm font-medium text-primary'>发展历程</span>
          </div>
          <h2
            className={cn(
              'text-3xl md:text-4xl font-bold text-foreground',
              'bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent',
            )}
          >
            奇盾信息技术发展历程
          </h2>
          <p className='text-muted-foreground mt-4 max-w-2xl mx-auto'>
            从学术研究到产业应用，见证我们在网络安全领域的每一步成长
          </p>
        </AnimatedList>
      </div>

      <AnimatedSection direction='up'>
        <div className='relative z-10'>
          <Timeline data={timelineData} />
        </div>
      </AnimatedSection>
    </div>
  )
}
