'use client'

import { motion } from 'motion/react'
import { FadeIn } from './animations/fade-in'
import { Card } from '~/components/ui/card'
import { BanknoteIcon as Bank, Server, Hospital, ShoppingBag, ArrowRight, Building2, Cloud } from 'lucide-react'

export function ProductCases() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Card */}
        <FadeIn>
          <Card className="p-8 md:p-12 bg-[#CCFF00]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full px-4 py-1 mb-4 bg-black/10">
                <Server className="w-4 h-4 mr-2" />
                成功案例
              </div>
              <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-4">
                值得信赖的
                <br />
                安全解决方案
              </h2>
              <p className="text-gray-700">
                奇盾信息技术有限公司是广州国资委重点扶持的高科技企业，致力于以数据为驱动，利用大数据和人工智能技术为客户提供划时代的网络信息安全解决方案和服务。我们的产品已在金融、医疗、互联网等重点行业广泛应用，为众多企业提供可靠的安全保障。
              </p>
            </div>
          </Card>
        </FadeIn>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Large Case Study - 中国银联 */}
          <FadeIn>
            <Card className="p-8 md:p-12 col-span-2 bg-black text-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-full">
                      <Bank className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-medium">中国银联</h3>
                  </div>
                  <p className="text-gray-400">
                    完成了详细的资产梳理，解决了勒索软件问题，实现了全面掌控内网黑客攻击行为，并能在几分钟内快速追踪定位问题根源。
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-3xl font-bold mb-2">60,000+</div>
                      <div className="text-gray-400">部署节点数量</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">100%</div>
                      <div className="text-gray-400">问题解决率</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Medium Case Study - 新疆八院 */}
          <FadeIn delay={0.1}>
            <Card className="p-8 h-full bg-gradient-to-br from-purple-50 to-blue-50">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Hospital className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-medium">新疆八院</h3>
                </div>
                <p className="text-gray-600">
                  为医院提供全面的主机安全防护，包括资产梳理、病毒防护、勒索软件防御和数据备份恢复。
                </p>
                <ul className="space-y-2">
                  {[
                    "自动化资产管理",
                    "有效防御勒索病毒",
                    "实现数据安全备份",
                    "提供大屏可视化安全态势"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </FadeIn>

          {/* Medium Case Study - 蚂蚁金服 */}
          <FadeIn delay={0.2}>
            <Card className="p-8 h-full bg-gradient-to-br from-green-50 to-blue-50">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <ShoppingBag className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-medium">蚂蚁金服</h3>
                </div>
                <p className="text-gray-600">
                  为蚂蚁金服的云服务提供主机安全解决方案，实现了全面的风险检测、威胁追踪和资产审核。
                </p>
                <ul className="space-y-2">
                  {[
                    "系统基线和风险检查",
                    "实时监控恶意威胁",
                    "全量资产数据采集",
                    "横向数据传递可视化"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </FadeIn>

          {/* Additional Cases */}
          <FadeIn delay={0.3}>
            <Card className="p-8 h-full bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-medium">某大型企业</h3>
                </div>
                <p className="text-gray-600">
                  部署明焰主机安全防护系统，实现了全面的终端安全管理和威胁防护。
                </p>
                <ul className="space-y-2">
                  {[
                    "病毒防护和实时查杀",
                    "合规基线检测",
                    "资产风险暴露面检测",
                    "主动威胁狩猎"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Card className="p-8 h-full bg-gradient-to-br from-orange-50 to-red-50">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Cloud className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-medium">某机构</h3>
                </div>
                <p className="text-gray-600">
                  部署明焰云原生应用保护平台，为客户的云原生应用提供全方位安全防护。
                </p>
                <ul className="space-y-2">
                  {[
                    "容器安全检测",
                    "微服务安全防护",
                    "云原生安全态势感知",
                    "东西向流量防火墙"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-orange-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </FadeIn>
        </div>

        {/* Action Card */}
        <FadeIn delay={0.6}>
          <Card className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-medium mb-2">探索我们的全面安全解决方案</h3>
                <p className="text-gray-400">
                  从明焰主机安全防护系统到云原生应用保护平台，我们提供全方位的网络安全保障。立即了解如何保护您的数字资产。
                </p>
              </div>
              <div className="flex gap-4">
                <motion.button
                  className="bg-[#CCFF00] text-black px-6 py-3 rounded-full font-medium whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  查看产品详情
                </motion.button>
                <motion.button
                  className="border border-[#CCFF00] text-[#CCFF00] px-6 py-3 rounded-full font-medium whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  联系我们
                </motion.button>
              </div>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}

