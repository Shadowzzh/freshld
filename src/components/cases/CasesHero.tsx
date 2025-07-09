'use client'

import { AnimatedList } from '@/components/ui/animated-section'
import { NumberTicker } from '@/components/ui/number-ticker'
import { ScrollIndicator } from '@/components/ui/scroll-indicator'
import { Users, Trophy, Sparkles } from 'lucide-react'
import { ShapeLandingHeroDynamic } from '../ui/shape-landing-hero-dynamic'

export function CasesHero() {
  // 统计数据配置
  const statsData = [
    {
      icon: Users,
      value: 50,
      suffix: '+',
      label: '知名企业',
      delay: 0.3,
    },
    {
      icon: Trophy,
      value: 8,
      suffix: '+',
      label: '行业覆盖',
      delay: 0.5,
    },
  ]

  return (
    <section className='relative h-[80vh] flex items-center justify-center overflow-hidden'>
      {/* 几何背景 */}
      <ShapeLandingHeroDynamic />
      {/* 内容区 */}
      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-5xl mx-auto text-center'>
          <AnimatedList className='space-y-6'>
            {/* 标签 */}
            <div className='mb-6'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/15 text-primary text-sm font-medium'>
                <Sparkles className='w-4 h-4' />
                真实案例·见证实力
              </span>
            </div>

            {/* 主标题 */}
            <h1 className='text-4xl lg:text-6xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent'>
                客户成功故事
              </span>
            </h1>

            {/* 副标题 */}
            <div className='text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed'>
              从金融巨头到科技先锋，探索明焰安全如何助力各行业领军企业
              <span className='text-primary font-semibold'>
                构建坚不可摧的安全防线
              </span>
            </div>

            {/* 统计数据 */}
            <div className='grid grid-cols-2 gap-8 max-w-xs mx-auto mb-12'>
              <AnimatedList className='contents'>
                {statsData.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div key={index} className='text-center'>
                      <div className='inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3'>
                        <IconComponent className='size-6' />
                      </div>
                      <div className='text-3xl font-bold text-foreground'>
                        <NumberTicker
                          value={stat.value}
                          className='text-3xl font-bold text-foreground'
                        />
                        {stat.suffix}
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        {stat.label}
                      </div>
                    </div>
                  )
                })}
              </AnimatedList>
            </div>
          </AnimatedList>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 z-10 m-auto'>
        {/* 滚动指示器 */}
        <ScrollIndicator
          borderColor='border-primary/30'
          dotColor='bg-primary/60'
          containerClassName='mt-8'
        />
      </div>
      {/* 底部装饰线 */}
      <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent' />
    </section>
  )
}
