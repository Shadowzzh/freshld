'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { FadeIn } from './animations/fade-in'
import { Card } from '~/components/ui/card'

export function Features() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Feature Card */}
          <Card className="lg:col-span-2 p-8 bg-gradient-to-br from-blue-50 to-purple-50">
            <FadeIn>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-medium leading-tight">
                  核心能力
                </h2>
                <p className="text-gray-600 max-w-xl">
                  奇盾信息技术有限公司致力于以数据为驱动，利用大数据和人工智能技术为客户提供划时代的网络信息安全解决方案和服务。
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                  了解更多 <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </FadeIn>
          </Card>

          {/* Stats Card */}
          <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50">
            <FadeIn delay={0.1}>
              <div className="space-y-2">
                <span className="text-6xl font-bold text-blue-600">60K+</span>
                <p className="text-gray-600">部署节点数量</p>
              </div>
            </FadeIn>
          </Card>

          {/* Feature Cards Grid */}
          {[
            {
              title: "精准检测",
              description: "利用因果关系实时还原数据链条，通过行为判断打标签，与Att&ck战术点碰撞。",
              color: "from-orange-50 to-red-50"
            },
            {
              title: "资产风险暴露面检测",
              description: "通过识别和评估组织所安装agent的主机资产发现其潜在漏洞和威胁。",
              color: "from-purple-50 to-pink-50"
            },
            {
              title: "合规基线",
              description: "设计系统和应用的基线检查项帮助用户随时检查主机系统和应用配置项。",
              color: "from-blue-50 to-indigo-50"
            }
          ].map((feature, index) => (
            <FadeIn key={feature.title} delay={0.2 + index * 0.1}>
              <Card className={`p-6 h-full bg-gradient-to-br ${feature.color}`}>
                <motion.div 
                  className="space-y-3"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="font-medium">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              </Card>
            </FadeIn>
          ))}

          {/* Large Stats Card */}
          <Card className="lg:col-span-2 p-8 bg-gradient-to-br from-indigo-50 to-cyan-50">
            <FadeIn delay={0.5}>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { number: "99.9%", label: "威胁检出率" },
                  { number: "100+", label: "合作伙伴" },
                  { number: "24/7", label: "全天候监控" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </Card>
        </div>
      </div>
    </section>
  )
}

