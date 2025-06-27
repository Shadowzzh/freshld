// types/env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    /** 邮件发送 */
    RESEND_API_KEY: string
    /** 邮件接收地址 */
    RECEIVE_EMAIL: string
  }
}
