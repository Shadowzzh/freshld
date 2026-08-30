'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import Link from 'next/link'

export default function BackgroundDemoPage() {
  const [activeBg, setActiveBg] = useState<'aurora' | 'beams'>('aurora')

  return (
    <div className="min-h-screen">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-white hover:text-white/80 transition-colors">
              ← 返回首页
            </Link>
            <h1 className="text-lg font-semibold text-white">背景效果演示</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveBg('aurora')}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                  activeBg === 'aurora'
                    ? 'bg-primary text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                )}
              >
                极光效果
              </button>
              <button
                onClick={() => setActiveBg('beams')}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                  activeBg === 'beams'
                    ? 'bg-primary text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                )}
              >
                光束效果
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 背景效果展示 */}
      {activeBg === 'aurora' ? (
        <AuroraBackground showRadialGradient={true} className="min-h-screen pt-16">
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/30 border border-primary/15 backdrop-blur-sm">
              <span className="text-primary text-sm font-semibold">Aurora Background</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-primary">
              极光背景效果
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              流动的极光渐变，柔和的动画效果，非常适合科技感的产品页面
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { title: '视觉效果', desc: '现代、高端的极光渐变' },
                { title: '性能优秀', desc: 'CSS 动画，流畅不卡顿' },
                { title: '易于集成', desc: '简单的组件 API' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-white/10"
                >
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AuroraBackground>
      ) : (
        <BackgroundBeamsWithCollision className="min-h-screen pt-16">
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/30 border border-primary/15 backdrop-blur-sm">
              <span className="text-primary text-sm font-semibold">Background Beams</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-primary">
              光束背景效果
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              垂直光束从上到下移动，碰撞底部时产生爆炸效果，科技感十足
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { title: '科技感强', desc: '垂直光束引导视线' },
                { title: '交互效果', desc: '碰撞检测和爆炸动画' },
                { title: '动态视觉', desc: '持续的运动效果' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-white/10"
                >
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      )}
    </div>
  )
}
