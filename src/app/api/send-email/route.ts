import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import resend from '@/lib/resend'
import { EmailTemplate } from '@/components/email-template'

/**
 * 表单验证
 */
const emailSchema = z.object({
  name: z.string().min(1, '联系人姓名不能为空'),
  phone: z
    .string()
    .min(1, '联系人电话不能为空')
    .regex(/^\d{11}$/, '联系人电话必须是11位数字'),
  email: z.string().email('邮箱格式不正确'),
  address: z.string().optional(),
  company: z.string().min(1, '公司名称不能为空'),
  node: z.string().optional(),
})

export async function POST(request: NextRequest) {
  if (!process.env.RECEIVE_EMAIL) {
    return NextResponse.json({ error: '接收邮箱未配置' }, { status: 500 })
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'RESEND_API_KEY 未配置' },
      { status: 500 },
    )
  }

  try {
    const body = await request.json()

    // 验证请求数据
    const validatedData = emailSchema.parse(body)

    const email = await EmailTemplate({
      name: validatedData.name,
      phone: validatedData.phone,
      email: validatedData.email,
      address: validatedData.address || '',
      company: validatedData.company,
      node: validatedData.node || '',
    })

    // 发送邮件
    const { data, error } = await resend.emails.send({
      from: '官网渠道 <site@fyreshld.com>',
      to: [process.env.RECEIVE_EMAIL],
      subject: '官网新增客户登记',
      react: email,
    })

    if (error) {
      console.error('邮件发送错误:', error)
      return NextResponse.json({ error: '邮件发送失败' }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('API 错误:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: '数据验证失败', details: error.errors },
        { status: 400 },
      )
    }

    return NextResponse.json({ error: '服务器内部错误' }, { status: 500 })
  }
}
