'use client'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { Cloud, ArrowRight, Play } from 'lucide-react'
import { MetallicShineCard } from '@/components/ui/metallic-shine'
import { ScrollIndicator } from '@/components/ui/scroll-indicator'
import { VortexDynamic } from '../ui/vortex-dynamic'
import Link from 'next/link'

// CNAPP 支持的云原生平台
const cnappSupportedPlatforms = [
  'Kubernetes',
  'Docker',
  'Containerd',
  'Rancher',
  'OpenShift',
]

export function CNAPPHero() {
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
        'py-12',
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
          className={cn('text-center mb-4')}
        >
          <div
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/30 border border-primary/15 mb-6',
            )}
          >
            <Cloud className={cn('w-4 h-4 text-primary')} />
            <span className={cn('text-sm font-semibold text-primary')}>
              明焰 CNAPP
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
          云原生应用保护平台
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
          全栈覆盖、行为驱动、智能分析的云原生安全解决方案
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
          {[
            { title: '资产盘点', desc: '容器、镜像、集群、主机全面盘点' },
            { title: '风险检测', desc: '镜像扫描、集群风险、基线合规' },
            { title: '运行时防护', desc: '容器逃逸、微隔离、网络策略' },
          ].map((feature, index) => (
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
                  'transform',
                  'transition-all duration-300',
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
              )}
            >
              <span>免费试用</span>
              <ArrowRight
                className={cn(
                  'w-5 h-5 group-hover:translate-x-1 transition-transform',
                )}
              />
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
              <Play className={cn('w-5 h-5')} />
              <span>观看演示</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* 支持的平台 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className={cn('mt-12 text-center')}
        >
          <p className={cn('text-blue-200 text-sm mb-6')}>支持主流云原生平台</p>
          <div
            className={cn(
              'flex flex-wrap items-center justify-center gap-8 opacity-70',
            )}
          >
            {cnappSupportedPlatforms.map((platform, index) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  'text-blue-200/80 text-sm font-medium hover:text-primary transition-colors duration-300',
                )}
              >
                {platform}
              </motion.div>
            ))}
          </div>
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
