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
  { value: 1, label: 'CPU占用', suffix: '%' },
  { value: 50, label: '内存占用', suffix: 'M' },
  { value: 99.9, label: '检测准确率', suffix: '%' },
  { value: 24, label: '实时防护', suffix: '/7', value2: 7 },
]

const features = [
  { title: '事前预警', desc: '资产清点、风险发现、基线合规' },
  { title: '事中监测', desc: '实时监测、威胁检测、勒索防护' },
  { title: '事后处置', desc: '缓解响应、系统修复、取证溯源' },
]

export default function NGEPHero() {
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
              明焰 NGEP
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
            'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold',
            'mb-4 sm:mb-6 leading-tight',
            'bg-gradient-to-r from-white via-blue-100 to-white',
            'bg-clip-text text-transparent',
            'px-2 sm:px-0',
          )}
        >
          下一代端点防护系统
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className={cn(
            'text-lg sm:text-xl md:text-2xl text-blue-100',
            'mb-6 sm:mb-8 max-w-4xl mx-auto',
            'leading-relaxed',
            'px-4 sm:px-0',
          )}
        >
          端点全生命周期安全防护，将预防、检测和响应集中在统一控制台中
        </motion.p>

        {/* 特色描述 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className={cn(
            'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12',
            'max-w-4xl mx-auto',
            'px-2 sm:px-0',
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
                  'p-4 sm:p-6',
                  'transform hover:-translate-y-1 sm:hover:-translate-y-2',
                  'transition-all duration-500 ease-out',
                )}
              >
                <h3
                  className={cn(
                    'font-semibold text-base sm:text-lg mb-2',
                    ' transition-colors duration-300',
                  )}
                >
                  {feature.title}
                </h3>
                <p
                  className={cn(
                    'text-blue-200 text-xs sm:text-sm',
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
            'space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6',
            'px-4 sm:px-0',
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
                'group px-6 sm:px-8 py-3 sm:py-4 rounded-lg',
                'bg-primary hover:bg-primary/90',
                'text-white font-semibold text-base sm:text-lg',
                'flex items-center space-x-2',
                'shadow-lg',
                'w-full sm:w-auto min-w-[160px] justify-center',
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
                'group px-6 sm:px-8 py-3 sm:py-4 rounded-lg',
                'border-2 border-white/30 hover:border-white/50',
                'text-white/40 hover:text-white font-semibold text-base sm:text-lg',
                'flex items-center space-x-2',
                'backdrop-blur-sm hover:bg-white/5',
                'w-full sm:w-auto min-w-[160px] justify-center',
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
            'mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10',
            'max-w-3xl mx-auto',
            'px-2 sm:px-0',
          )}
        >
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                viewport={{ once: true }}
                className='text-center'
              >
                <div className='text-2xl sm:text-3xl font-bold text-primary mb-2'>
                  <NumberTicker
                    className='text-2xl sm:text-3xl font-bold text-primary'
                    value={stat.value}
                    decimalPlaces={stat.label === '检测准确率' ? 1 : 0}
                  />
                  {stat.value2 && (
                    <>
                      /
                      <NumberTicker
                        className='text-2xl sm:text-3xl font-bold text-primary'
                        value={stat.value2}
                      />
                    </>
                  )}
                  {stat.suffix}
                </div>
                <div className='text-xs sm:text-sm text-blue-200'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <ScrollIndicator
          borderColor='border-white/30'
          dotColor='bg-white/50'
          size='md'
        />
      </motion.div>
    </motion.section>
  )
}
