"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Navbar } from "~/components/navbar";


export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-[#f8f9ff]">
      <Navbar />
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-purple-100 opacity-30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/2 rounded-full bg-blue-100 opacity-30 blur-3xl" />

      <div className="absolute left-20 top-40 hidden h-16 w-16 rounded-full bg-purple-500/10 lg:block" />
      <div className="absolute right-32 top-60 hidden h-8 w-8 rounded-full bg-blue-500/10 lg:block" />
      <div className="absolute bottom-40 right-20 hidden h-12 w-12 rounded-full bg-teal-500/10 lg:block" />
      <div className="absolute left-1/4 top-1/3 hidden h-4 w-4 rounded-full bg-yellow-500/20 lg:block" />

      <div className="absolute z-0 h-full w-full overflow-hidden opacity-10">
        <div className="bg-grid-pattern absolute left-0 top-0 h-full w-full"></div>
      </div>

      {/* Header section */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-24">
        <motion.div
          className="mb-12 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative mb-6 inline-block">
            <h1 className="text-6xl font-bold text-[#292652] md:text-7xl">
              关于我们
            </h1>
            <div className="absolute -bottom-3 left-0 h-3 w-full rounded-full bg-purple-500/20"></div>
          </div>
          <p className="max-w-3xl text-xl text-gray-600">
            明焰安全是中国领先的网络安全服务提供商，致力于为企业和组织提供全面的网络安全解决方案
          </p>
        </motion.div>
      </div>

      {/* Hero section with decorative elements */}
      <div className="relative mb-24 h-[60vh] overflow-hidden">
        <div className="absolute inset-0"></div>

        <div className="bg-dot-pattern absolute inset-0 opacity-40"></div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="h-96 w-96 rounded-full bg-[#6952b7] opacity-80 shadow-lg backdrop-blur-sm">
            <div className="absolute inset-0 flex h-96 w-96 items-center justify-center rounded-full border-8 border-white/20">
              <motion.div
                className="p-8 text-center text-3xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                保护您的
                <br />
                数字资产安全
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Floating shapes */}
        <motion.div
          className="absolute left-20 top-20 h-10 w-10 rounded-full bg-yellow-400 mix-blend-multiply"
          animate={{
            y: [0, 15, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-40 h-16 w-16 rounded-full bg-teal-400 mix-blend-multiply"
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Our Story Section */}
      <div className="relative z-10 mx-auto mb-20 max-w-7xl px-4 py-16">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <motion.div
            className="relative md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative z-10">
              <div className="absolute -left-5 -top-5 z-0 h-20 w-20 rounded-lg border-2 border-purple-300"></div>
              <h2 className="mb-6 text-3xl font-bold text-[#292652] md:text-4xl">
                我们的故事
              </h2>
              <div className="mb-6 h-1 w-20 bg-purple-500"></div>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                明焰安全成立于2018年，由一群拥有丰富网络安全经验的专业人士创立。自成立以来，我们一直致力于研发前沿的安全技术，
                并为客户提供全面的网络安全解决方案。
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                我们的专业团队提供定制化的安全测评方法，确定您业务中所需的安全防护措施。我们提供从漏洞评估到
                威胁情报的全方位服务，帮助企业建立坚实的安全防线。
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              <div className="absolute -bottom-5 -right-5 z-0 h-20 w-20 rounded-lg border-2 border-blue-300"></div>
              <Image
                src="/images/security-team.jpg"
                alt="Our security team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292652]/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-xl font-semibold">我们的团队</p>
                <p>由行业专家组成的精英安全团队</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values section */}
      <div className="relative z-10">
        <div className="mx-auto mb-20 max-w-7xl px-4 py-16">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-[#292652]">
              企业价值观
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 bg-purple-500"></div>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              我们坚持的核心价值观指引着我们的每一项决策和行动
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10 h-full rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#c7e84b] transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(0,0,0,0.5)"
                    strokeWidth="2"
                  >
                    <path d="M12 22c4-4 9-12 9-12s-5-8-9-12c-4 4-9 12-9 12s5 8 9 12z" />
                    <path d="M12 22V10" />
                    <path d="M5 10h14" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#292652]">
                  技术创新
                </h3>
                <p className="text-gray-600">
                  不断追求技术突破，以创新思维解决安全挑战，引领行业发展
                </p>
              </div>
              <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-xl bg-[#c7e84b]/10"></div>
            </motion.div>

            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10 h-full rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#dbc9ff] transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(0,0,0,0.5)"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#292652]">
                  安全防护
                </h3>
                <p className="text-gray-600">
                  提供全面的安全保障，构建坚固防线，守护客户数字资产
                </p>
              </div>
              <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-xl bg-[#dbc9ff]/10"></div>
            </motion.div>

            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10 h-full rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#ffce85] transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(0,0,0,0.5)"
                    strokeWidth="2"
                  >
                    <path d="M12 3v18M3 12h18M4.22 19.78l15.56-15.56M19.78 19.78L4.22 4.22" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#292652]">
                  平衡发展
                </h3>
                <p className="text-gray-600">
                  兼顾安全与效率，促进业务可持续发展，实现技术与商业的平衡
                </p>
              </div>
              <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-xl bg-[#ffce85]/10"></div>
            </motion.div>

            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10 h-full rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#8dd6e7] transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(0,0,0,0.5)"
                    strokeWidth="2"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#292652]">
                  行业影响
                </h3>
                <p className="text-gray-600">
                  积极推动网络安全行业发展，塑造安全新生态，引领网络安全发展方向
                </p>
              </div>
              <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-xl bg-[#8dd6e7]/10"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission & Vision section */}
      <div className="relative z-10 bg-gradient-to-b from-[#f8f9ff] to-[#eff1ff] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="grid grid-cols-1 gap-16 md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-purple-500/10"></div>
              <div className="relative z-10 rounded-xl border border-gray-100 bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold text-[#292652]">
                  我们的使命
                </h3>
                <div className="mb-6 h-1 w-16 bg-purple-500"></div>
                <p className="leading-relaxed text-gray-700">
                  明焰安全致力于为企业和组织提供全面的网络安全解决方案，帮助客户有效应对日益复杂的网络威胁环境，
                  保护其重要数据资产和业务连续性。
                </p>
                <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-lg border-2 border-purple-200"></div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-blue-500/10"></div>
              <div className="relative z-10 rounded-xl border border-gray-100 bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold text-[#292652]">
                  我们的愿景
                </h3>
                <div className="mb-6 h-1 w-16 bg-blue-500"></div>
                <p className="leading-relaxed text-gray-700">
                  成为网络安全领域值得信赖的合作伙伴，以卓越的技术和服务推动安全行业的发展，
                  为构建更加安全的数字世界贡献力量。
                </p>
                <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-lg border-2 border-blue-200"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact section */}
      <div className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="mb-2 text-3xl font-bold text-[#292652]">联系我们</h3>
            <div className="mx-auto mb-4 h-1 w-16 bg-purple-500"></div>
            <p className="mx-auto max-w-xl text-gray-600">
              无论您有任何问题或需求，我们都随时准备为您提供帮助和支持
            </p>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-10 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-500/5"></div>
            <div className="absolute bottom-0 left-0 h-40 w-40 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/5"></div>

            <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="group text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 transition-colors duration-300 group-hover:bg-purple-50">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6952b7"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <p className="mb-1 font-medium text-[#292652]">地址</p>
                <p className="text-gray-600">杭州市西湖区华星时代广场A座 710</p>
              </div>

              <div className="group text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 transition-colors duration-300 group-hover:bg-purple-50">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6952b7"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <p className="mb-1 font-medium text-[#292652]">邮箱</p>
                <p className="text-gray-600">yue.qian@magic-shield.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS for background patterns */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(
              to right,
              rgba(107, 70, 193, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(107, 70, 193, 0.05) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }

        .bg-dot-pattern {
          background-image: radial-gradient(
            rgba(255, 255, 255, 0.4) 1px,
            transparent 1px
          );
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}
