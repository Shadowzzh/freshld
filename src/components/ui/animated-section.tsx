'use client'

// 导入 framer-motion 的 motion 组件用于动画效果
import { motion } from 'framer-motion'
// 导入工具函数用于 className 组合
import { cn } from '@/lib/utils'
// 导入 React 相关类型
import { ReactNode } from 'react'

// 简单的自动延迟列表组件（无 Context，纯计算）
interface AnimatedListProps {
  /** 子组件内容 */
  children: ReactNode[]
  /** 可选的 CSS 类名 */
  className?: string
  /** 动画延迟时间，默认为 0.2 */
  delayStep?: number
  /** 动画初始延迟时间，默认为 0 */
  initialDelay?: number
  /** 子组件的 CSS 类名 */
  itemClassName?: string
  /** 动画方向，默认为 'up' */
  direction?: 'up' | 'down' | 'left' | 'right'
  /** 动画持续时间，默认为 0.6 */
  duration?: number
}

/**
 * 自动延迟的列表组件
 * @param props
 * @returns
 */
export function AnimatedList(props: AnimatedListProps) {
  const {
    children,
    className,
    delayStep = 0.1,
    initialDelay = 0,
    itemClassName,
    direction = 'up',
    duration = 0.6,
  } = props

  return (
    <div className={cn(className)}>
      {children.map((child, index) => (
        <AnimatedSection
          key={index}
          direction={direction}
          delay={initialDelay + index * delayStep}
          duration={duration}
          className={itemClassName}
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  )
}

// 定义 AnimatedSection 组件的属性接口
interface AnimatedSectionProps {
  /** 子组件内容 */
  children: ReactNode
  /** 可选的 CSS 类名 */
  className?: string
  /** 动画延迟时间，默认为 0 */
  delay?: number
  /** 动画方向，默认为 'up' */
  direction?: 'up' | 'down' | 'left' | 'right'
  /** 动画移动距离，默认为 20 */
  distance?: number
  /** 动画持续时间，默认为 0.6 */
  duration?: number
  /** 是否只播放一次动画，默认为 true */
  once?: boolean
}

// 导出 AnimatedSection 组件
export function AnimatedSection(props: AnimatedSectionProps) {
  const {
    children,
    className,
    delay = 0,
    direction = 'up',
    distance = 20,
    duration = 0.6,
    once = true,
  } = props

  // 根据动画方向获取初始位置
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        // 从下方进入，初始位置向下偏移
        return { opacity: 0, y: distance }
      case 'down':
        // 从上方进入，初始位置向上偏移
        return { opacity: 0, y: -distance }
      case 'left':
        // 从右侧进入，初始位置向右偏移
        return { opacity: 0, x: distance }
      case 'right':
        // 从左侧进入，初始位置向左偏移
        return { opacity: 0, x: -distance }
      default:
        // 默认从下方进入
        return { opacity: 0, y: distance }
    }
  }

  // 根据动画方向获取最终位置
  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        // 垂直方向动画，最终位置 y 为 0
        return { opacity: 1, y: 0 }
      case 'left':
      case 'right':
        // 水平方向动画，最终位置 x 为 0
        return { opacity: 1, x: 0 }
      default:
        // 默认垂直方向
        return { opacity: 1, y: 0 }
    }
  }

  // 返回 motion.div 组件
  return (
    <motion.div
      initial={getInitialPosition()} // 设置初始动画状态
      whileInView={getFinalPosition()} // 当元素进入视口时的动画状态
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      viewport={{
        once,
        // margin: '-50px', // 提前触发动画，优化用户体验
      }} // 设置视口检测选项
      className={cn(className)} // 应用 className
    >
      {children}
    </motion.div>
  )
}

// 预设的动画变体 - 滑入动画
export const AnimatedSlideIn = (props: AnimatedSectionProps) => {
  const {
    children,
    className,
    delay,
    direction = 'right',
    distance = 20,
  } = props

  return (
    <AnimatedSection
      direction={direction} // 从左侧滑入的动画
      distance={distance} // 标准的移动距离
      duration={0.6} // 标准的动画速度
      delay={delay} // 传入的延迟时间（可选，会自动计算）
      className={className} // 传入的样式类名
    >
      {children}
    </AnimatedSection>
  )
}
