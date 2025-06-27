/**
 * 动画性能管理器
 * 自动检测性能并动态调整动画参数
 */

export interface PerformanceMetrics {
  currentFPS: number
  averageFPS: number
  targetFPS: number
  frameCount: number
  droppedFrames: number
  frameDropRate: number
  lastFrameTime: number
  stability: number // FPS稳定性指标 (0-1, 1最稳定)
  performanceLevel: 'low' | 'medium' | 'high'
}

export interface PerformanceConfig {
  /** 目标帧率 */
  targetFPS: number
  /** 最低可接受帧率 */
  minAcceptableFPS: number
  /** 性能检测间隔（帧数） */
  checkInterval: number
  /** FPS历史记录长度 */
  historyLength: number
  /** 性能调整阈值 */
  adjustmentThreshold: number
  /** 是否启用自动优化 */
  autoOptimize: boolean
  /** 启用详细日志 */
  debug?: boolean
  /** 平滑因子 (0-1, 用于平滑FPS计算) */
  smoothingFactor?: number
}

export class AnimationPerformanceManager {
  private config: PerformanceConfig
  private fpsHistory: number[] = []
  private frameCount = 0
  private droppedFrames = 0
  private lastFrameTime = 0
  private lastMeasureTime = 0
  private currentTargetFPS: number
  private frameInterval: number
  private callbacks: Set<(metrics: PerformanceMetrics) => void> = new Set()

  // 新增：帧时间历史，用于稳定性分析
  private frameTimeHistory: number[] = []
  // 新增：实际帧率（包括跳帧）
  private actualFrameCount = 0
  private lastActualFrameTime = 0

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      /** 目标帧率 */
      targetFPS: 60,
      /** 最低可接受帧率 */
      minAcceptableFPS: 30,
      /** 性能检测间隔（帧数） */
      checkInterval: 60,
      /** FPS历史记录长度 */
      historyLength: 120,
      /** 性能调整阈值 */
      adjustmentThreshold: 0.8,
      /** 是否启用自动优化 */
      autoOptimize: true,
      /** 启用详细日志 */
      debug: false,
      /** 平滑因子 */
      smoothingFactor: 0.1,
      ...config,
    }

    this.currentTargetFPS = this.config.targetFPS
    this.frameInterval = 1000 / this.currentTargetFPS
  }

  /**
   * 测量当前帧性能（改进版）
   */
  measureFrame(currentTime: number): boolean {
    if (!this.config.autoOptimize) return true

    // 始终计算实际帧率
    this.actualFrameCount++

    // 计算真实的FPS（包括被跳过的帧）
    if (this.lastActualFrameTime > 0) {
      const actualDeltaTime = currentTime - this.lastActualFrameTime
      if (actualDeltaTime > 0) {
        const actualFPS = 1000 / actualDeltaTime

        // 使用指数移动平均来平滑FPS
        if (this.fpsHistory.length > 0) {
          const smoothedFPS =
            this.fpsHistory[this.fpsHistory.length - 1] *
              (1 - this.config.smoothingFactor!) +
            actualFPS * this.config.smoothingFactor!
          this.recordFPS(smoothedFPS)
        } else {
          this.recordFPS(actualFPS)
        }

        // 记录帧时间用于稳定性分析
        this.frameTimeHistory.push(actualDeltaTime)
        if (this.frameTimeHistory.length > 30) {
          this.frameTimeHistory.shift()
        }
      }
    }
    this.lastActualFrameTime = currentTime

    // 帧率限制检查
    const shouldRender =
      this.lastFrameTime === 0 ||
      currentTime - this.lastFrameTime >= this.frameInterval

    if (!shouldRender) {
      this.droppedFrames++
      return false // 跳过此帧
    }

    // 实际渲染的帧
    this.frameCount++
    this.lastFrameTime = currentTime

    // 定期检查性能
    if (this.actualFrameCount % this.config.checkInterval === 0) {
      this.checkAndAdjustPerformance()
    }

    return true
  }

  /**
   * 记录FPS值
   */
  private recordFPS(fps: number) {
    // 过滤异常值
    if (fps > 0 && fps <= 200) {
      this.fpsHistory.push(fps)
      if (this.fpsHistory.length > this.config.historyLength) {
        this.fpsHistory.shift()
      }
    }
  }

  /**
   * 计算FPS稳定性
   */
  private calculateStability(): number {
    if (this.frameTimeHistory.length < 5) return 1

    // 计算帧时间的标准差
    const mean =
      this.frameTimeHistory.reduce((a, b) => a + b, 0) /
      this.frameTimeHistory.length
    const variance =
      this.frameTimeHistory.reduce(
        (sum, time) => sum + Math.pow(time - mean, 2),
        0,
      ) / this.frameTimeHistory.length
    const stdDev = Math.sqrt(variance)

    // 将标准差转换为0-1的稳定性分数
    // 标准差越小，稳定性越高
    const targetFrameTime = 1000 / this.currentTargetFPS
    const normalizedStdDev = stdDev / targetFrameTime
    return Math.max(0, Math.min(1, 1 - normalizedStdDev))
  }

  /**
   * 智能性能调整
   */
  private checkAndAdjustPerformance() {
    if (this.fpsHistory.length === 0) return

    const metrics = this.getMetrics()
    const { averageFPS, frameDropRate, stability } = metrics

    // 确定性能级别
    let performanceLevel: 'low' | 'medium' | 'high' = 'medium'
    if (
      averageFPS >= this.currentTargetFPS * 0.95 &&
      frameDropRate < 0.05 &&
      stability > 0.8
    ) {
      performanceLevel = 'high'
    } else if (
      averageFPS < this.currentTargetFPS * 0.7 ||
      frameDropRate > 0.2 ||
      stability < 0.5
    ) {
      performanceLevel = 'low'
    }

    // 智能调整目标帧率
    if (this.config.autoOptimize) {
      this.adjustPerformanceBasedOnLevel(performanceLevel, averageFPS)
    }

    // 更新指标并通知订阅者
    const updatedMetrics = { ...metrics, performanceLevel }
    this.notifySubscribers(updatedMetrics)

    if (this.config.debug) {
      console.log(
        `📊 性能指标: FPS=${averageFPS.toFixed(1)}, 掉帧率=${(frameDropRate * 100).toFixed(1)}%, 稳定性=${(stability * 100).toFixed(0)}%, 级别=${performanceLevel}`,
      )
    }
  }

  /**
   * 基于性能级别的智能调整
   */
  private adjustPerformanceBasedOnLevel(
    level: 'low' | 'medium' | 'high',
    currentAvgFPS: number,
  ) {
    let newTargetFPS = this.currentTargetFPS

    switch (level) {
      case 'low':
        // 性能不足，智能降级
        if (this.currentTargetFPS > this.config.minAcceptableFPS) {
          // 基于实际性能计算新目标
          newTargetFPS = Math.max(
            this.config.minAcceptableFPS,
            Math.floor(currentAvgFPS / 5) * 5, // 向下取整到最近的5的倍数
          )
        }
        break

      case 'high':
        // 性能充足，尝试提升
        if (this.currentTargetFPS < this.config.targetFPS) {
          // 渐进式提升
          const increment = this.currentTargetFPS >= 45 ? 5 : 10
          newTargetFPS = Math.min(
            this.config.targetFPS,
            this.currentTargetFPS + increment,
          )
        }
        break

      case 'medium':
        // 性能适中，保持当前设置
        break
    }

    if (newTargetFPS !== this.currentTargetFPS) {
      this.adjustTargetFPS(newTargetFPS)
    }
  }

  /**
   * 调整目标帧率
   */
  private adjustTargetFPS(newTargetFPS: number) {
    const oldFPS = this.currentTargetFPS
    this.currentTargetFPS = newTargetFPS
    this.frameInterval = 1000 / this.currentTargetFPS

    if (this.config.debug || process.env.NODE_ENV === 'development') {
      console.log(`🎯 动画帧率调整: ${oldFPS}fps → ${this.currentTargetFPS}fps`)
    }
  }

  /**
   * 获取当前性能指标（改进版）
   */
  getMetrics(): PerformanceMetrics {
    const averageFPS =
      this.fpsHistory.length > 0
        ? this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length
        : 0

    const frameDropRate =
      this.actualFrameCount > 0 ? this.droppedFrames / this.actualFrameCount : 0

    const stability = this.calculateStability()

    // 基于多个指标确定性能级别
    let performanceLevel: 'low' | 'medium' | 'high' = 'medium'
    if (
      averageFPS >= this.currentTargetFPS * 0.95 &&
      frameDropRate < 0.05 &&
      stability > 0.8
    ) {
      performanceLevel = 'high'
    } else if (
      averageFPS < this.currentTargetFPS * 0.7 ||
      frameDropRate > 0.2 ||
      stability < 0.5
    ) {
      performanceLevel = 'low'
    }

    return {
      currentFPS: this.getCurrentFPS(),
      averageFPS,
      targetFPS: this.currentTargetFPS,
      frameCount: this.frameCount,
      droppedFrames: this.droppedFrames,
      frameDropRate,
      lastFrameTime: this.lastFrameTime,
      stability,
      performanceLevel,
    }
  }

  /**
   * 获取实时FPS（改进的平滑算法）
   */
  getCurrentFPS(): number {
    if (this.fpsHistory.length < 3) return 0

    // 使用加权移动平均，最近的帧权重更高
    const recentFrames = this.fpsHistory.slice(-10)
    const weights = recentFrames.map((_, i) => Math.pow(1.2, i))
    const weightedSum = recentFrames.reduce(
      (sum, fps, i) => sum + fps * weights[i],
      0,
    )
    const totalWeight = weights.reduce((a, b) => a + b, 0)

    return weightedSum / totalWeight
  }

  /**
   * 订阅性能更新
   */
  subscribe(callback: (metrics: PerformanceMetrics) => void): () => void {
    this.callbacks.add(callback)
    return () => this.callbacks.delete(callback)
  }

  /**
   * 通知订阅者
   */
  private notifySubscribers(metrics: PerformanceMetrics) {
    this.callbacks.forEach(callback => callback(metrics))
  }

  /**
   * 重置性能统计
   */
  reset() {
    this.fpsHistory = []
    this.frameTimeHistory = []
    this.frameCount = 0
    this.actualFrameCount = 0
    this.droppedFrames = 0
    this.lastFrameTime = 0
    this.lastActualFrameTime = 0
    this.currentTargetFPS = this.config.targetFPS
    this.frameInterval = 1000 / this.currentTargetFPS
  }

  /**
   * 获取当前目标帧率
   */
  get targetFPS(): number {
    return this.currentTargetFPS
  }

  /**
   * 获取帧间隔
   */
  get interval(): number {
    return this.frameInterval
  }

  /**
   * 是否应该渲染当前帧（简单检查，不更新状态）
   */
  shouldRenderFrame(currentTime: number): boolean {
    return (
      this.lastFrameTime === 0 ||
      currentTime - this.lastFrameTime >= this.frameInterval
    )
  }
}

/**
 * 创建性能管理器的Hook
 */
export function useAnimationPerformance(
  config: Partial<PerformanceConfig> = {},
) {
  const manager = new AnimationPerformanceManager(config)
  return manager
}

/**
 * 设备性能检测
 */
export class DevicePerformanceDetector {
  static getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
    if (typeof window === 'undefined') return 'desktop'

    const width = window.innerWidth
    if (width < 768) return 'mobile'
    if (width < 1024) return 'tablet'
    return 'desktop'
  }

  static getRecommendedConfig(): Partial<PerformanceConfig> {
    const deviceType = this.getDeviceType()

    switch (deviceType) {
      case 'mobile':
        return {
          targetFPS: 30,
          minAcceptableFPS: 20,
          checkInterval: 30,
          historyLength: 60,
        }
      case 'tablet':
        return {
          targetFPS: 45,
          minAcceptableFPS: 25,
          checkInterval: 45,
          historyLength: 90,
        }
      default:
        return {
          targetFPS: 60,
          minAcceptableFPS: 30,
          checkInterval: 60,
          historyLength: 120,
        }
    }
  }

  /**
   * 检测设备内存（如果可用）
   */
  static getDeviceMemory(): number {
    // @ts-expect-error navigator.deviceMemory 是实验性API
    return navigator.deviceMemory || 4 // 默认4GB
  }

  /**
   * 检测硬件并发数
   */
  static getHardwareConcurrency(): number {
    return navigator.hardwareConcurrency || 4
  }

  /**
   * 综合设备性能评分 (1-10)
   */
  static getPerformanceScore(): number {
    const deviceType = this.getDeviceType()
    const memory = this.getDeviceMemory()
    const cores = this.getHardwareConcurrency()

    let score = 5 // 基础分数

    // 设备类型权重
    switch (deviceType) {
      case 'desktop':
        score += 3
        break
      case 'tablet':
        score += 1
        break
      case 'mobile':
        score -= 1
        break
    }

    // 内存权重
    if (memory >= 8) score += 2
    else if (memory >= 4) score += 1
    else score -= 1

    // CPU权重
    if (cores >= 8) score += 1
    else if (cores <= 2) score -= 1

    return Math.max(1, Math.min(10, score))
  }
}

/**
 * 全局性能管理器实例
 */
export const globalPerformanceManager = new AnimationPerformanceManager(
  DevicePerformanceDetector.getRecommendedConfig(),
)
