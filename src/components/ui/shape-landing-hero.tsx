'use client'

import { motion } from 'framer-motion'
import { Circle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState, useEffect, useMemo } from 'react'

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'from-primary/[0.08]',
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn('absolute', className)}
    >
      <div
        style={{
          width,
          height,
        }}
        className='relative'
      >
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r to-transparent',
            gradient,
            'border-2 border-primary/[0.15]',
          )}
        />
      </div>
    </motion.div>
  )
}

// 屏幕尺寸检测 Hook（防抖优化）
function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    function updateScreenSize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // 防抖处理
    let timeoutId: NodeJS.Timeout
    function debouncedResize() {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(updateScreenSize, 150)
    }

    // 初始化
    updateScreenSize()

    // 监听窗口大小变化
    window.addEventListener('resize', debouncedResize)

    return () => {
      window.removeEventListener('resize', debouncedResize)
      clearTimeout(timeoutId)
    }
  }, [])

  return screenSize
}

// 根据屏幕尺寸计算缩放比例
function getScaleFactor(width: number) {
  if (width < 640) return 0.4 // 手机
  if (width < 768) return 0.5 // 大手机/小平板
  if (width < 1024) return 0.6 // 平板
  if (width < 1280) return 0.7 // 小笔记本
  if (width < 1536) return 0.8 // 笔记本
  return 1 // 大屏幕
}

function HeroGeometric({
  showContent = false,
  badge = '明焰安全',
  title1 = '构建安全防线',
  title2 = '守护数字未来',
}: {
  showContent?: boolean
  badge?: string
  title1?: string
  title2?: string
}) {
  const { width } = useScreenSize()
  const scaleFactor = getScaleFactor(width)

  // 缓存形状尺寸计算
  const shapeConfigs = useMemo(
    () => [
      {
        delay: 0.3,
        width: Math.round(550 * scaleFactor),
        height: Math.round(150 * scaleFactor),
        rotate: 12,
        gradient: 'from-primary/[0.15]',
        className: 'left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]',
      },
      {
        delay: 0.5,
        width: Math.round(500 * scaleFactor),
        height: Math.round(120 * scaleFactor),
        rotate: -15,
        gradient: 'from-primary/[0.12]',
        className: 'right-[-5%] md:right-[0%] top-[70%] md:top-[75%]',
      },
      {
        delay: 0.4,
        width: Math.round(300 * scaleFactor),
        height: Math.round(80 * scaleFactor),
        rotate: -8,
        gradient: 'from-primary/[0.18]',
        className: 'left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]',
      },
      {
        delay: 0.6,
        width: Math.round(200 * scaleFactor),
        height: Math.round(60 * scaleFactor),
        rotate: 20,
        gradient: 'from-primary/[0.10]',
        className: 'right-[15%] md:right-[20%] top-[10%] md:top-[15%]',
      },
      {
        delay: 0.7,
        width: Math.round(150 * scaleFactor),
        height: Math.round(40 * scaleFactor),
        rotate: -25,
        gradient: 'from-primary/[0.14]',
        className: 'left-[20%] md:left-[25%] top-[5%] md:top-[10%]',
      },
      {
        delay: 0.8,
        width: Math.round(100 * scaleFactor),
        height: Math.round(30 * scaleFactor),
        rotate: 35,
        gradient: 'from-primary/[0.16]',
        className: 'right-[5%] md:right-[10%] bottom-[20%] md:bottom-[25%]',
      },
    ],
    [scaleFactor],
  )

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div className='absolute inset-0 overflow-hidden'>
      {/* 主背景渐变 */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-primary/[0.03] blur-3xl' />

      {/* 几何形状装饰 */}
      <div className='absolute inset-0 overflow-hidden'>
        {shapeConfigs.map((config, index) => (
          <ElegantShape
            key={index}
            delay={config.delay}
            width={config.width}
            height={config.height}
            rotate={config.rotate}
            gradient={config.gradient}
            className={config.className}
          />
        ))}
      </div>

      {/* 可选的内容区域 */}
      {showContent && (
        <div className='relative z-10 container mx-auto px-4 md:px-6 h-full flex items-center justify-center'>
          <div className='max-w-3xl mx-auto text-center'>
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial='hidden'
              animate='visible'
              className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/[0.15] mb-8 md:mb-12'
            >
              <Circle className='h-2 w-2 fill-primary/80' />
              <span className='text-sm text-primary/80 tracking-wide'>
                {badge}
              </span>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial='hidden'
              animate='visible'
            >
              <h1 className='text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight'>
                <span className='bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80'>
                  {title1}
                </span>
                <br />
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80'>
                  {title2}
                </span>
              </h1>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial='hidden'
              animate='visible'
            >
              <p className='text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4'>
                专业的网络安全解决方案，为您的数字资产提供全方位保护
              </p>
            </motion.div>
          </div>
        </div>
      )}

      {/* 渐变遮罩 */}
      <div className='absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80 pointer-events-none' />
    </div>
  )
}

export { HeroGeometric }
