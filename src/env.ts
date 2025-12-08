import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  /**
   * 服务端环境变量
   * 只在服务端可用，不会暴露给客户端
   */
  server: {
    /** 邮件服务配置 */
    RESEND_API_KEY: z.string().min(1),
    /** 邮件接收地址 (需要在 API 路由中配置) */
    RECEIVE_EMAIL: z.string().email(),
    /** 部署模式配置 (服务端) */
    DEPLOY_MODE: z.enum(['full', 'download']).default('full'),
  },

  /**
   * 客户端环境变量
   * 会暴露给浏览器，需要 NEXT_PUBLIC_ 前缀
   */
  client: {
    // Google Analytics 配置
    NEXT_PUBLIC_GA_ID: z.string().optional(),
  },

  /**
   * 共享环境变量
   * 在服务端和客户端都可以使用
   */
  shared: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  },

  /**
   * 运行时环境变量映射
   * 必须显式指定所有环境变量
   */
  runtimeEnv: {
    // 服务端
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RECEIVE_EMAIL: process.env.RECEIVE_EMAIL,
    DEPLOY_MODE: process.env.DEPLOY_MODE,

    // 客户端
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,

    // 共享
    NODE_ENV: process.env.NODE_ENV,
  },
})

// 导出类型定义，供其他文件使用
export type Env = typeof env