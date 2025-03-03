"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { FadeIn } from "./animations/fade-in";
import dynamic from "next/dynamic";
import { LogoCarousel } from "./ui/logo-carousel";

const ServerScene = dynamic(
  () => import("./ServerScene").then((mod) => mod.ServerScene),
  { ssr: false },
);

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <FadeIn>
              <h1 className="text-5xl font-medium leading-tight md:text-6xl lg:text-7xl">
                网络空间的守护者
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="max-w-xl text-lg text-gray-600">
                奇盾信息技术有限公司致力于利用大数据和人工智能技术，为客户提供划时代的网络信息安全解决方案。我们实时监控并防御各种已知和未知的恶意威胁，让未知威胁无所遁形。
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <motion.button
                className="flex items-center gap-2 rounded-full bg-[#CCFF00] px-6 py-3 text-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                了解我们的安全方案
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </FadeIn>
          </div>

          <motion.div
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ServerScene />
          </motion.div>
        </div>

        <FadeIn delay={0.6}>
          <div className="flex flex-col items-center justify-center mt-10">
            <p className="text-center text-2xl font-bold">
              奇盾信息技术有限公司荣获多项荣誉，包括ISO/IEC27001质量管理体系认证、发明专利等。
            </p>
            <p className="text-center text-gray-600 mb-10 text-xl">
              受到以下客户和合作伙伴的信赖及认可
            </p>
            <LogoCarousel columnCount={4} />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
