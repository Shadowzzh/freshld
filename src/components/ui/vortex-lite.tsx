import { cn } from '@/lib/utils'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { createNoise3D } from 'simplex-noise'
import { motion } from 'motion/react'
import {
  AnimationPerformanceManager,
  DevicePerformanceDetector,
  type PerformanceMetrics,
} from '@/lib/animation-performance'
import { env } from '@/env'

interface VortexProps {
  /** 子组件 */
  children?: React.ReactNode
  /** 类名 */
  className?: string
  /** 容器类名 */
  containerClassName?: string
  /** 粒子数量 */
  particleCount?: number
  /** 粒子范围 */
  rangeY?: number
  /** 基础色调 */
  baseHue?: number
  /** 基础速度 */
  baseSpeed?: number
  /** 粒子范围速度 */
  rangeSpeed?: number
  /** 基础半径 */
  baseRadius?: number
  /** 粒子范围半径 */
  rangeRadius?: number
  /** 背景颜色 */
  backgroundColor?: string
  /** 是否启用发光效果 */
  enableGlow?: boolean
  /** 目标帧率 */
  targetFPS?: number
  /** 是否自动优化 */
  autoOptimize?: boolean
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef(null)
  const animationFrameId = useRef<number | null>(null)
  const frameCount = useRef<number>(0)

  // 视口检测状态
  const [isInView, setIsInView] = useState<boolean>(false)
  const isInViewRef = useRef<boolean>(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // 性能管理器
  const performanceManager = useRef<AnimationPerformanceManager | null>(null)
  const [performanceMetrics, setPerformanceMetrics] =
    useState<PerformanceMetrics | null>(null)

  // 性能自适应状态
  const [currentParticleCount, setCurrentParticleCount] = useState<number>(
    props.particleCount ||
      (typeof window !== 'undefined' && window.innerWidth < 768 ? 200 : 400),
  )
  const [glowEnabled, setGlowEnabled] = useState<boolean>(
    props.enableGlow ?? true,
  )

  const particlePropCount = 9
  const particlePropsLength = currentParticleCount * particlePropCount
  const rangeY = props.rangeY || 100
  const baseTTL = 50
  const rangeTTL = 150
  const baseSpeed = props.baseSpeed || 0.0
  const rangeSpeed = props.rangeSpeed || 1.5
  const baseRadius = props.baseRadius || 1
  const rangeRadius = props.rangeRadius || 3
  const baseHue = props.baseHue || 220
  const rangeHue = 100
  const noiseSteps = 3
  const xOff = 0.00125
  const yOff = 0.00125
  const zOff = 0.0005
  const backgroundColor = props.backgroundColor || 'transparent'
  const autoOptimize = props.autoOptimize ?? true

  let tick = 0
  const noise3D = createNoise3D()
  let particleProps = new Float32Array(particlePropsLength)
  const center: [number, number] = [0, 0]

  const TAU: number = 2 * Math.PI
  const rand = (n: number): number => n * Math.random()
  const randRange = (n: number): number => n - rand(2 * n)
  const fadeInOut = (t: number, m: number): number => {
    const hm = 0.5 * m
    return Math.abs(((t + hm) % m) - hm) / hm
  }
  const lerp = (n1: number, n2: number, speed: number): number =>
    (1 - speed) * n1 + speed * n2

  const setup = () => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (canvas && container) {
      const ctx = canvas.getContext('2d')

      if (ctx) {
        resize(canvas, ctx)
        initParticles()
        draw(canvas, ctx)
      }
    }
  }

  const initParticles = () => {
    tick = 0
    particleProps = new Float32Array(currentParticleCount * particlePropCount)

    for (
      let i = 0;
      i < currentParticleCount * particlePropCount;
      i += particlePropCount
    ) {
      initParticle(i)
    }
  }

  const initParticle = (i: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const x = rand(canvas.width)
    const y = center[1] + randRange(rangeY)
    const vx = 0
    const vy = 0
    const life = 0
    const ttl = baseTTL + rand(rangeTTL)
    const speed = baseSpeed + rand(rangeSpeed)
    const radius = baseRadius + rand(rangeRadius)
    const hue = baseHue + rand(rangeHue)

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i)
  }

  const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const currentTime = performance.now()

    // 视口外性能优化：不在视口中时降低动画频率或暂停
    if (!isInViewRef.current) {
      // 移动端完全暂停动画
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        animationFrameId.current = window.requestAnimationFrame(() =>
          draw(canvas, ctx),
        )
        return
      }

      // 桌面端大幅降低动画频率（每10帧执行1次）
      if (frameCount.current % 10 !== 0) {
        animationFrameId.current = window.requestAnimationFrame(() =>
          draw(canvas, ctx),
        )
        return
      }
    }

    // 性能管理器帧率控制
    if (
      performanceManager.current &&
      !performanceManager.current.measureFrame(currentTime)
    ) {
      animationFrameId.current = window.requestAnimationFrame(() =>
        draw(canvas, ctx),
      )
      return
    }

    frameCount.current++

    tick++

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    drawParticles(ctx)

    // 有条件地渲染发光效果
    if (glowEnabled) {
      renderGlowOptimized(canvas, ctx)
    }

    renderToScreen(canvas, ctx)

    animationFrameId.current = window.requestAnimationFrame(() =>
      draw(canvas, ctx),
    )
  }

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    for (
      let i = 0;
      i < currentParticleCount * particlePropCount;
      i += particlePropCount
    ) {
      updateParticle(i, ctx)
    }
  }

  const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const i2 = 1 + i,
      i3 = 2 + i,
      i4 = 3 + i,
      i5 = 4 + i,
      i6 = 5 + i,
      i7 = 6 + i,
      i8 = 7 + i,
      i9 = 8 + i

    const x = particleProps[i]
    const y = particleProps[i2]
    const n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU
    const vx = lerp(particleProps[i3], Math.cos(n), 0.5)
    const vy = lerp(particleProps[i4], Math.sin(n), 0.5)
    let life = particleProps[i5]
    const ttl = particleProps[i6]
    const speed = particleProps[i7]
    const x2 = x + vx * speed
    const y2 = y + vy * speed
    const radius = particleProps[i8]
    const hue = particleProps[i9]

    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx)

    life++

    particleProps[i] = x2
    particleProps[i2] = y2
    particleProps[i3] = vx
    particleProps[i4] = vy
    particleProps[i5] = life

    if (checkBounds(x, y, canvas) || life > ttl) {
      initParticle(i)
    }
  }

  const drawParticle = (
    x: number,
    y: number,
    x2: number,
    y2: number,
    life: number,
    ttl: number,
    radius: number,
    hue: number,
    ctx: CanvasRenderingContext2D,
  ) => {
    ctx.save()
    ctx.lineCap = 'round'
    ctx.lineWidth = radius
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x2, y2)
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
  }

  const checkBounds = (x: number, y: number, canvas: HTMLCanvasElement) => {
    return x > canvas.width || x < 0 || y > canvas.height || y < 0
  }

  const resize = (
    canvas: HTMLCanvasElement,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _ctx?: CanvasRenderingContext2D,
  ) => {
    const { innerWidth, innerHeight } = window

    canvas.width = innerWidth
    canvas.height = innerHeight

    center[0] = 0.5 * canvas.width
    center[1] = 0.5 * canvas.height
  }

  // 优化的发光效果 - 减少 blur 强度和次数
  const renderGlowOptimized = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
  ) => {
    ctx.save()
    // 只使用一次较轻的 blur 效果
    ctx.filter = 'blur(3px) brightness(150%)'
    ctx.globalCompositeOperation = 'lighter'
    ctx.drawImage(canvas, 0, 0)
    ctx.restore()
  }

  const renderToScreen = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
  ) => {
    ctx.save()
    ctx.globalCompositeOperation = 'lighter'
    ctx.drawImage(canvas, 0, 0)
    ctx.restore()
  }

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (canvas && ctx) {
      resize(canvas, ctx)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 初始化性能管理器
  useEffect(() => {
    if (autoOptimize) {
      const config = {
        ...DevicePerformanceDetector.getRecommendedConfig(),
        targetFPS: props.targetFPS || 50,
        autoOptimize,
      }

      performanceManager.current = new AnimationPerformanceManager(config)

      // 订阅性能更新
      const unsubscribe = performanceManager.current.subscribe(metrics => {
        setPerformanceMetrics(metrics)

        // 性能自适应调整
        if (metrics.averageFPS < metrics.targetFPS * 0.8) {
          // 性能不足，降级
          if (currentParticleCount > 100) {
            setCurrentParticleCount(prev => Math.max(100, prev - 50))
          } else if (glowEnabled) {
            setGlowEnabled(false)
          }
        } else if (
          metrics.averageFPS > metrics.targetFPS * 1.1 &&
          currentParticleCount < (props.particleCount || 400)
        ) {
          // 性能充足，可以提升
          setCurrentParticleCount(prev =>
            Math.min(props.particleCount || 400, prev + 25),
          )
        }
      })

      return unsubscribe
    }
  }, [
    autoOptimize,
    props.targetFPS,
    props.particleCount,
    currentParticleCount,
    glowEnabled,
  ])

  // 设置视口检测
  useEffect(() => {
    if (containerRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          const intersecting = entry.isIntersecting
          setIsInView(intersecting)
          isInViewRef.current = intersecting
        },
        {
          threshold: 0.1, // 10%可见时触发
          rootMargin: '100px', // 提前100px触发，优化用户体验
        },
      )

      observerRef.current.observe(containerRef.current)
    }

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  // 重新初始化粒子当数量改变时
  useEffect(() => {
    if (canvasRef.current) {
      initParticles()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentParticleCount])

  useEffect(() => {
    setup()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
      observerRef.current?.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleResize])

  return (
    <div
      ref={containerRef}
      className={cn('relative h-full w-full', props.containerClassName)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-transparent'
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>

      <div className={cn('relative z-10', props.className)}>
        {props.children}
      </div>

      {/* 性能信息 - 开发环境显示 */}
      {env.NODE_ENV === 'development' && autoOptimize && (
        <div className='absolute top-2 right-2 z-20 bg-black/50 text-white p-2 rounded text-xs'>
          <div>粒子数: {currentParticleCount}</div>
          <div>发光效果: {glowEnabled ? '开启' : '关闭'}</div>
          <div>视口状态: {isInView ? '可见' : '不可见'}</div>
          {performanceMetrics && (
            <>
              <div>目标FPS: {performanceMetrics.targetFPS}</div>
              <div>实时FPS: {performanceMetrics.currentFPS.toFixed(1)}</div>
              <div>平均FPS: {performanceMetrics.averageFPS.toFixed(1)}</div>
              <div>
                设备评分: {DevicePerformanceDetector.getPerformanceScore()}/10
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
