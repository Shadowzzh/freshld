'use client'

import Link from 'next/link'
import { Input } from "~/components/ui/input"
import { ArrowRight, Send, Twitter, Instagram, Linkedin } from 'lucide-react'
import { motion } from 'motion/react'
import { FadeIn } from './animations/fade-in'

export function Footer() {
  const random = false;

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <FadeIn>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex gap-1">
                  <div className="w-6 h-6 bg-white"></div>
                  <div className="w-6 h-6 bg-white"></div>
                </div>
              </motion.div>
              <p className="text-gray-400 max-w-xs">
                广州奇盾信息技术有限公司致力于以数据为驱动，利用大数据和人工智能技术为客户提供划时代的网络信息安全解决方案和服务。
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-8">
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">快速访问</h3>
                <ul className="space-y-3">
                  {['关于我们', '产品服务', '技术优势', '合作伙伴'].map((item) => (
                    <motion.li key={item} whileHover={{ x: 5 }}>
                      <Link href="/" className="text-gray-400 hover:text-white">
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">解决方案</h3>
                <ul className="space-y-3">
                  {['主机安全', '云原生安全', '安全度量', 'EDR'].map((item) => (
                    <motion.li key={item} whileHover={{ x: 5 }}>
                      <Link href="/" className="text-gray-400 hover:text-white">
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">
                联系我们，了解最新的网络安全动态和解决方案
              </h3>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="输入您的邮箱地址" 
                  className="bg-transparent border-gray-700"
                />
                <motion.button
                  className="bg-[#CCFF00] text-black px-4 py-2 rounded-md flex items-center gap-2 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  订阅 <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400">联系方式：</p>
                <div className="flex gap-4">
                  {[Send, Twitter, Instagram, Linkedin].map((Icon, index) => (
                    <motion.button
                      key={index}
                      className="p-2 rounded-full text-purple-400 hover:text-purple-300 hover:bg-purple-400/10"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="grid grid-cols-12 gap-1 mb-4">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div
                key={i}
                className={`h-4 ${random ? 'bg-white' : 'bg-transparent'}`}
                whileHover={{ backgroundColor: '#CCFF00' }}
              />
            ))}
          </div>

          <div className="text-center text-gray-400">
            <p>© 2024 广州奇盾信息技术有限公司. 保留所有权利.</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}

