'use client'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { Shield, ArrowRight, Play } from 'lucide-react'
import { NumberTicker } from '@/components/ui/number-ticker'
import { MetallicShineCard } from '@/components/ui/metallic-shine'
import { ScrollIndicator } from '@/components/ui/scroll-indicator'
import { VortexDynamic } from '@/components/ui/vortex-dynamic'
import Link from 'next/link'

const stats = [
  { value: 1000, label: '攻击场景', suffix: '+' },
  { value: 24, label: '持续验证', suffix: '/7', value2: 7 },
  { value: 99.9, label: '模拟准确率', suffix: '%' },
  { value: 0, label: '生产影响', suffix: '%' },
]

const features = [
  { title: 'APT追踪', desc: '实时跟踪黑客组织动态和攻击手法' },
  { title: '威胁复现', desc: '基于真实攻击事件的无害化模拟' },
  { title: '防御验证', desc: '全自动化验证安全产品有效性' },
]

export default function MeasureHero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={cn(
        'flex flex-col items-center justify-center',
        'relative min-h-[calc(100vh-4rem)]',
        'bg-gradient-to-br from-slate-800 via-blue-600 to-slate-700',
        'overflow-hidden',
      )}
    >
      <VortexDynamic rangeY={700} particleCount={100} baseHue={200} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className={cn(
          'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
          'text-center text-white',
        )}
      >
        {/* 产品标识 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-4'
        >
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/30 border border-primary/15 mb-6'>
            <Shield className='w-4 h-4 text-primary' />
            <span className='text-sm font-semibold text-primary'>
              明焰 度量验证平台
            </span>
          </div>
        </motion.div>

        {/* 主标题 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={cn(
            'text-4xl md:text-5xl lg:text-6xl font-bold',
            'mb-6 leading-tight',
            'bg-gradient-to-r from-white via-blue-100 to-white',
            'bg-clip-text text-transparent',
          )}
        >
          网络攻防实战演练
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className={cn(
            'text-xl md:text-2xl text-blue-100',
            'mb-8 max-w-4xl mx-auto',
            'leading-relaxed',
          )}
        >
          基于真实威胁情报的全自动化安全验证平台，验证您的安全防线
        </motion.p>

        {/* 特色描述 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className={cn(
            'grid grid-cols-1 md:grid-cols-3 gap-6 mb-12',
            'max-w-4xl mx-auto',
          )}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <MetallicShineCard
                className={cn(
                  'p-6 ',
                  'transform  hover:-translate-y-2',
                  'transition-all duration-500 ease-out',
                )}
              >
                <h3
                  className={cn(
                    'font-semibold text-lg mb-2',
                    ' transition-colors duration-300',
                  )}
                >
                  {feature.title}
                </h3>
                <p
                  className={cn(
                    'text-blue-200 text-sm',
                    'group-hover:text-blue-100 transition-colors duration-300',
                  )}
                >
                  {feature.desc}
                </p>
              </MetallicShineCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className={cn(
            'flex flex-col sm:flex-row items-center justify-center',
            'space-y-4 sm:space-y-0 sm:space-x-6',
          )}
        >
          <Link href='/contact'>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
              viewport={{ once: true }}
              className={cn(
                'cursor-pointer',
                'group px-8 py-4 rounded-lg',
                'bg-primary hover:bg-primary/90',
                'text-white font-semibold text-lg',
                'flex items-center space-x-2',
                'shadow-lg',
              )}
            >
              <span>免费试用</span>
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </motion.button>
          </Link>

          <Link href='/contact'>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              className={cn(
                'cursor-pointer',
                'group px-8 py-4 rounded-lg',
                'border-2 border-white/30 hover:border-white/50',
                'text-white font-semibold text-lg',
                'flex items-center space-x-2',
                'backdrop-blur-sm hover:bg-white/5',
              )}
            >
              <Play className='w-5 h-5' />
              <span>观看演示</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* 性能指标 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={cn(
            'mt-16 pt-8 border-t border-white/10',
            'grid grid-cols-2 md:grid-cols-4 gap-8',
            'max-w-3xl mx-auto',
          )}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='text-3xl font-bold text-primary mb-2'>
                <NumberTicker
                  className='text-3xl font-bold text-primary'
                  value={stat.value}
                  delay={0.8 + index * 0.2}
                  decimalPlaces={stat.label === '模拟准确率' ? 1 : 0}
                />
                {stat.value2 && (
                  <>
                    /
                    <NumberTicker
                      className='text-3xl font-bold text-primary'
                      value={stat.value2}
                      delay={0.8 + index * 0.2}
                    />
                  </>
                )}
                {stat.suffix}
              </div>
              <div className='text-sm text-blue-200'>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <ScrollIndicator
          borderColor='border-white/30'
          dotColor='bg-white/50'
          delay={1.5}
          size='md'
        />
      </motion.div>
    </motion.section>
  )
}
