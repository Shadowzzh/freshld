'use client'

import { Switch } from "~/components/ui/switch"
import { motion } from 'motion/react'
import { FadeIn } from './animations/fade-in'
import { useScrollFollow } from './animations/scroll-follow'

export function FeaturesList() {
  const { ref, rotate } = useScrollFollow()

  return (
    <section className="px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-8">
            <FadeIn>
              <div className="space-y-6">
                <motion.div
                  className="inline-flex items-center gap-3 bg-white rounded-full px-4 py-2 border"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm">从2012年至今</span>
                  <Switch />
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-medium leading-tight">
                  奇盾信息技术有限公司<span className="text-purple-500">发展历程</span>
                </h2>

                <p className="text-gray-600 max-w-xl">
                  广州奇盾信息技术有限公司是广州国资委重点扶持的高科技企业，公司总部位于广州，杭州、上海、无锡设有分支机构和研发中心。
                </p>
              </div>
            </FadeIn>

            <div className="space-y-4">
              {[
                { year: 2012, text: '浙江大学成立互联网安全实验室' },
                { year: 2015, text: '主机APT防御国家级科研课题启动' },
                { year: 2017, text: '杭州奇盾成立' },
                { year: 2021, text: '明焰NGEP产品发布' },
                { year: 2023, text: 'CNAPP商用产品云原生安全管理平台发布' },
                { year: 2025, text: '银联 10 万节点验收成功' },
              ].map((milestone, index) => (
                <FadeIn key={milestone.year} delay={0.1 * index}>
                  <motion.div
                    className="flex items-center gap-4"
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="w-16 h-8 rounded-full bg-[#CCFF00] flex items-center justify-center text-sm font-medium"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {milestone.year}
                    </motion.div>
                    <span className="text-lg">{milestone.text}</span>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>

          <motion.div
            className="relative"
            ref={ref}
            style={{ rotate, position: 'relative' }}
          >
            {/* You can add an illustration or image here */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

