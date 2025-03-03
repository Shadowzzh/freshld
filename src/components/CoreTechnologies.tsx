'use client'

import { motion } from 'motion/react'
import { FadeIn } from './animations/fade-in'
import { Shield, Cloud, BarChart, Zap, Users, Lock, Search, Fingerprint } from 'lucide-react'
import { Card } from '~/components/ui/card'

const technologies = [
  {
    icon: Shield,
    tag: "主机安全",
    title: "深度防护与检测",
    description: "基于攻击链的威胁检测技术，提供深度防护和全面检查的统一主机安全产品",
    metrics: [
      {
        label: "威胁检出率",
        value: "99.9%",
        trend: "+2.3%"
      },
      {
        label: "日均防护主机",
        value: "60,000+",
        trend: "+15%"
      }
    ]
  },
  {
    icon: Cloud,
    tag: "云原生安全",
    title: "全栈云安全防护",
    description: "依托大数据和人工智能技术，为用户提供自适应、自学习的全栈式云原生应用安全防护",
    metrics: [
      {
        label: "容器安全覆盖率",
        value: "98.5%",
        trend: "+12%"
      },
      {
        label: "微服务保护数",
        value: "45,000+",
        trend: "+28%"
      }
    ]
  }
]

export function CoreTechnologies() {
  return (
    <section className="px-4 py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16 max-w-2xl">
            <div className="inline-flex items-center rounded-full px-4 py-1 mb-4 bg-gray-100">
              <Search className="w-4 h-4 mr-2" />
              深度技术优势
            </div>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-4">
              让未知威胁无所遁形
            </h2>
            <p className="text-gray-600">
              利用领先的AI技术，监控操作系统里面所有进程行为，为企业构造从端到云的全栈安全。
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 auto-rows-fr">
          {technologies.map((tech, index) => (
            <FadeIn key={tech.title} delay={index * 0.1}>
              <Card className="p-8 hover:shadow-lg transition-shadow h-full">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <tech.icon className="w-5 h-5 text-[#CCFF00]" />
                    <span className="text-sm font-medium text-gray-600">{tech.tag}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-medium mb-2">{tech.title}</h3>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {tech.metrics.map((metric, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-2xl font-semibold">
                          {metric.value}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">{metric.label}</span>
                          <span className="text-xs text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">
                            {metric.trend}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-8 flex justify-center">
            <motion.button
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              获取产品演示
            </motion.button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

