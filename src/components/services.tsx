'use client'

import { motion } from 'motion/react'
import { FadeIn } from './animations/fade-in'
import { Shield, Cloud, BarChart, Lock } from 'lucide-react'
import Image from 'next/image'

export function Services() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-12">
          产品矩阵
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top Row - Two Equal Cards */}
          <FadeIn>
            <motion.div 
              className="bg-white rounded-3xl p-8 h-full"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col h-full">
                <span className="text-sm text-gray-500 mb-4">#主机安全</span>
                <div className="flex justify-between items-start gap-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-medium">
                      明焰主机安全防护系统
                    </h3>
                    <p className="text-gray-600">
                      提供深度防护和全面检查的统一主机安全产品，通过强大的实时监控和深入剖析主机行为。
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Shield className="w-16 h-16 text-blue-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <motion.div 
              className="bg-white rounded-3xl p-8 h-full"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col h-full">
                <span className="text-sm text-gray-500 mb-4">#云原生</span>
                <div className="flex justify-between items-start gap-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-medium">
                      明焰云原生应用保护平台
                    </h3>
                    <p className="text-gray-600">
                      依托大数据和人工智能技术，为用户提供自适应、自学习的全栈式云原生应用安全防护。
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Cloud className="w-16 h-16 text-purple-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Bottom Row - Wide + Narrow Cards */}
          <FadeIn delay={0.2}>
            <motion.div 
              className="bg-white rounded-3xl p-8 h-full"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col h-full">
                <span className="text-sm text-gray-500 mb-4">#安全度量</span>
                <div className="flex justify-between items-start gap-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-medium">
                      明焰安全度量验证平台
                    </h3>
                    <p className="text-gray-600">
                      基于黑客组织和受害者情报为攻击库来源的安全验证度量平台，持续更新最新攻击手法。
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <BarChart className="w-16 h-16 text-green-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <motion.div 
              className="bg-white rounded-3xl p-8 h-full"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col h-full">
                <span className="text-sm text-gray-500 mb-4">#防勒索</span>
                <div className="flex justify-between items-start gap-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-medium">
                      明焰CDG防勒索系统
                    </h3>
                    <p className="text-gray-600">
                      针对勒索病毒提供有效的追踪和攻击路径展示，对系统和数据提供清洁的备份，并可以对已破坏的数据做清洁恢复。
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Lock className="w-16 h-16 text-orange-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

