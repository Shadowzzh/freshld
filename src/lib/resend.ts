import { env } from '@/env'
import { Resend } from 'resend'

if (!env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined')
}

const resend = new Resend(env.RESEND_API_KEY)

export default resend
