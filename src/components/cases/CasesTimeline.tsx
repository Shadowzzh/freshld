'use client'

import { Calendar, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedSection } from '@/components/ui/animated-section'
import { motion } from 'framer-motion'

// 时间轴数据
const timelineData = [
  {
    year: '2024',
    quarter: 'Q2',
    title: '中国银联全面部署',
    description:
      '完成中国银联信息总中心的NGEP端点防护全面部署，保障国家金融支付系统安全。',
    highlight: true,
    metrics: '覆盖10万+节点',
  },
  {
    year: '2024',
    quarter: 'Q1',
    title: '医疗行业突破',
    description:
      '新疆八院成功部署CDG勒索防护方案，开启医疗行业安全防护新篇章。',
    highlight: false,
    metrics: '0数据丢失',
  },
  {
    year: '2023',
    quarter: 'Q4',
    title: '云原生安全里程碑',
    description: '与阿里云达成战略合作，CNAPP解决方案助力云原生应用安全。',
    highlight: true,
    metrics: '100%镜像安全',
  },
  {
    year: '2023',
    quarter: 'Q3',
    title: '金融科技创新',
    description: '蚂蚁金服采用NGEP方案，实现云上主机安全防护的创新实践。',
    highlight: false,
    metrics: '100%威胁可见性',
  },
  {
    year: '2023',
    quarter: 'Q2',
    title: '电信行业拓展',
    description: '中国移动大规模部署终端安全管理方案，提升响应效率90%。',
    highlight: false,
    metrics: '减少90%响应时间',
  },
]

export function CasesTimeline() {
  return (
    <section className='py-24 relative bg-background'>
      <div className='container mx-auto px-4'>
        {/* 标题 */}
        <AnimatedSection className='text-center mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-4'>成长历程</h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            见证明焰安全与客户共同成长的每一个重要时刻
          </p>
        </AnimatedSection>

        {/* 时间轴 */}
        <div className='relative max-w-4xl mx-auto'>
          {/* 中心线 */}
          <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent' />

          {/* 时间轴项目 */}
          <div className='space-y-12'>
            {timelineData.map((item, index) => (
              <AnimatedSection
                key={index}
                delay={0.1 * index}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div
                  className={cn(
                    'relative flex items-center',
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse',
                  )}
                >
                  {/* 内容卡片 */}
                  <motion.div
                    className={cn(
                      'w-5/12',
                      index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left',
                    )}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={cn(
                        'p-6 rounded-xl border bg-card/50 backdrop-blur-sm',
                        'transition-all duration-300',
                        item.highlight
                          ? 'border-primary/30 hover:border-primary/50'
                          : 'border-primary/15  hover:border-primary/30',
                      )}
                    >
                      {/* 时间标签 */}
                      <div
                        className={cn(
                          'flex items-center gap-2 mb-3',
                          index % 2 === 0 ? 'justify-end' : 'justify-start',
                        )}
                      >
                        <Calendar className='w-4 h-4 text-primary' />
                        <span className='text-sm font-medium text-primary'>
                          {item.year} {item.quarter}
                        </span>
                      </div>

                      {/* 标题 */}
                      <h3 className='text-lg font-semibold text-foreground mb-2'>
                        {item.title}
                      </h3>

                      {/* 描述 */}
                      <p className='text-sm text-muted-foreground mb-3'>
                        {item.description}
                      </p>

                      {/* 指标 */}
                      <div
                        className={cn(
                          'inline-flex items-center gap-2 px-3 py-1 rounded-full',
                          'bg-primary/10 text-primary text-xs font-medium',
                        )}
                      >
                        <CheckCircle2 className='w-3 h-3' />
                        {item.metrics}
                      </div>
                    </div>
                  </motion.div>

                  {/* 中心点 */}
                  <div className='absolute left-1/2 transform -translate-x-1/2'>
                    <motion.div
                      className={cn(
                        'w-4 h-4 rounded-full border-2 bg-background',
                        item.highlight
                          ? 'border-primary bg-primary'
                          : 'border-primary/50',
                      )}
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.highlight && (
                        <div className='absolute inset-0 rounded-full bg-primary animate-ping' />
                      )}
                    </motion.div>
                  </div>

                  {/* 空白占位 */}
                  <div className='w-5/12' />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* 底部说明 */}
        <AnimatedSection delay={0.8} className='mt-16 text-center'>
          <div className='max-w-3xl mx-auto'>
            <h3 className='text-xl font-semibold text-foreground mb-4'>
              与客户共创未来
            </h3>
            <p className='text-muted-foreground'>
              每一个成功案例都是我们前进的动力。明焰安全将继续以创新技术和专业服务，
              为更多客户提供卓越的网络安全保障，共同构建更加安全的数字世界。
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
