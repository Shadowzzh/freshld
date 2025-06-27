/**
 * 动画库工具
 * 统一管理常用的动画配置
 */

import { Variants } from 'motion/react'

// 动画配置常量
const ANIMATION_CONFIG = {
  durations: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    slower: 0.8,
  },
  easings: {
    easeOutQuart: [0.165, 0.84, 0.44, 1],
    easeOutExpo: [0.19, 1, 0.22, 1],
    easeOutCirc: [0.075, 0.82, 0.165, 1],
    easeInOutBack: [0.68, -0.55, 0.265, 1.55],
  },
  delays: {
    none: 0,
    short: 0.1,
    medium: 0.2,
    long: 0.3,
    stagger: 0.1,
  },
} as const

// 悬停动画变体（使用transform替代shadow）
export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: ANIMATION_CONFIG.durations.fast,
      ease: ANIMATION_CONFIG.easings.easeOutQuart,
    },
  },
}

// 动画配置生成器
export const createFadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_CONFIG.durations.slow,
      delay,
    },
  },
})

export const createScaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_CONFIG.durations.slow,
      delay,
      type: 'spring',
      stiffness: 100,
    },
  },
})
