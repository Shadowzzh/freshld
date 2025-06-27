'use client'

import { Award, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NumberTicker } from '@/components/ui/number-ticker'
import { AnimatedList } from '@/components/ui/animated-section'

export function WhyChooseUs() {
  const advantages = [
    {
      icon: Shield,
      title: '深厚技术积累',
      description:
        '我们拥有基于攻击链的威胁检测和实时溯源技术，能够实现进程级别的全路径溯源分析，帮助用户快速定位问题根源并进行取证。我们的产品在勒索防护、云原生安全、APT防御等多个关键领域表现卓越。',
      highlight: '进程级全路径溯源',
      stats: { value: 99.9, suffix: '%', label: '检测准确率' },
    },
    {
      icon: Award,
      title: '广泛的行业认可',
      description:
        '明焰安全已成功服务于中国银联、蚂蚁金服、中国联通、中国移动、中船重工、华为、阿里云、中兴、浙商证券、绍兴银行等众多知名企业和政府机构，覆盖金融、企业、政府、云计算等多个重点行业。',
      highlight: '知名企业客户',
      stats: { value: 20, suffix: '+', label: '企业客户' },
    },
  ]

  return (
    <section className='pt-24 relative bg-gradient-to-b from-slate-50 to-white'>
      <div className='container mx-auto px-4 relative z-10'>
        {/* 标题区域 */}
        <AnimatedList className='text-center mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-4'>
            为什么选择明焰安全？
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            专业实力与深厚积累，为您的数字安全保驾护航
          </p>
        </AnimatedList>

        {/* 核心优势 */}
        <AnimatedList
          initialDelay={0.4}
          delayStep={0.2}
          className='grid lg:grid-cols-2 gap-8'
        >
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={cn(
                'p-8 rounded-2xl border border-primary/15 bg-card',
                'hover:border-primary/30 transition-all duration-300 hover:scale-105',
                'flex flex-col h-full',
              )}
            >
              {/* 图标和标题 */}
              <div className='flex items-start space-x-4 mb-6'>
                <div className='p-3 rounded-lg bg-primary/10 border border-primary/15 flex-shrink-0'>
                  <advantage.icon className='w-8 h-8 text-primary' />
                </div>
                <div className='flex-1'>
                  <h3 className='text-xl font-bold text-foreground mb-2'>
                    {advantage.title}
                  </h3>
                  <div className='inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full'>
                    {advantage.highlight}
                  </div>
                </div>
              </div>

              {/* 描述内容 */}
              <div className='flex-1 mb-6'>
                <p className='text-muted-foreground leading-relaxed'>
                  {advantage.description}
                </p>
              </div>

              {/* 数据统计 */}
              <div className='border-t border-primary/15 pt-6'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-primary mb-1'>
                    <NumberTicker
                      value={advantage.stats.value}
                      delay={0.5 + index * 0.2}
                      decimalPlaces={advantage.stats.value < 10 ? 1 : 0}
                    />
                    {advantage.stats.suffix}
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    {advantage.stats.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AnimatedList>
      </div>
    </section>
  )
}
