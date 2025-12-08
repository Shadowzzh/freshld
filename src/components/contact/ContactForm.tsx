'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, Phone, Building, MapPin, Hash } from 'lucide-react'
import { toast } from 'sonner'
import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import { cn } from '@/lib/utils'
import { AnimatedList, AnimatedSlideIn } from '../ui/animated-section'
import { env } from '@/env'

const formSchema = z.object({
  company: z.string().min(1, '公司名称不能为空'),
  name: z.string().min(1, '联系人姓名不能为空'),
  phone: z
    .string()
    .min(1, '联系人电话不能为空')
    .regex(/^\d{11}$/, '联系人电话必须是11位数字'),
  email: z.string().email('邮箱格式不正确'),
  node: z.string().optional(),
  address: z.string().optional(),
})

const testData = {
  company: '测试公司',
  name: '测试',
  phone: '13800138000',
  email: 'test@example.com',
  node: '1000',
  address: '测试地址',
}

// 通用样式常量
const FIELD_STYLES = {
  input: cn(
    'w-full rounded-lg border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors placeholder:text-muted-foreground',
    'text-sm',
    'px-4 py-3',
  ),
  label: 'flex items-center text-sm font-medium text-foreground',
  error: 'text-sm text-red-500',
  container: 'space-y-2',
}

// 表单字段标签组件
function FieldLabel({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <label className={FIELD_STYLES.label}>
      <Icon className='w-4 h-4 mr-2 text-primary' />
      {children}
    </label>
  )
}

// 错误显示组件
function FieldError({ errors }: { errors: (string | null | undefined)[] }) {
  if (!errors || errors.length === 0) return null
  const error = errors.find(err => err !== null && err !== undefined)
  if (!error) return null
  return <p className={FIELD_STYLES.error}>{error}</p>
}

interface ContactFormProps {
  variant?: 'default' | 'dialog'
}

const defaultValues = {
  company: '',
  name: '',
  phone: '',
  email: '',
  node: '',
  address: '',
}

export function ContactForm({ variant = 'default' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm({
    defaultValues: env.NODE_ENV === 'development' ? testData : defaultValues,

    onSubmit: async ({ value, formApi }) => {
      setIsSubmitting(true)

      try {
        // 验证表单数据
        const validatedData = formSchema.parse(value)

        // 发送邮件
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(validatedData),
        })

        if (response.ok) {
          toast.success('提交成功！我们会尽快与您联系')
          formApi.reset()
        } else {
          const errorData = await response.json()
          toast.error(errorData.error || '提交失败，请稍后重试')
        }
      } catch (error) {
        if (error instanceof z.ZodError) {
          const firstError = error.errors[0]
          toast.error(firstError?.message || '请检查表单信息')
        } else {
          toast.error('提交失败，请稍后重试')
        }
      } finally {
        setIsSubmitting(false)
      }
    },
  })

  const isDialog = variant === 'dialog'

  return (
    <AnimatedSlideIn
      direction={isDialog ? 'up' : 'right'}
      className={cn(
        isDialog
          ? 'bg-transparent p-0'
          : 'bg-card p-8 rounded-2xl border border-primary/15',
      )}
    >
      <AnimatedList className={cn(isDialog ? 'mb-6' : 'mb-8')}>
        <h3 className={cn('font-bold mb-2', isDialog ? 'text-xl' : 'text-2xl')}>
          {isDialog ? '预约产品演示' : '立即联系我们'}
        </h3>
        <p className='text-muted-foreground text-sm'>
          请填写以下信息，我们的专业团队将在第一时间响应您的需求
        </p>
      </AnimatedList>

      <form
        onSubmit={e => {
          e.preventDefault()
          e.stopPropagation()
          void form.handleSubmit()
        }}
      >
        <AnimatedList className='space-y-6'>
          {/* 公司名称 */}
          <form.Field
            name='company'
            validators={{
              onChange: ({ value }) => {
                return value.length <= 0 ? '公司名称不能为空' : null
              },
            }}
          >
            {field => (
              <div className={FIELD_STYLES.container}>
                <FieldLabel icon={Building}>公司名称 *</FieldLabel>
                <input
                  type='text'
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  className={cn(
                    FIELD_STYLES.input,
                    field.state.meta.errors.length > 0 && 'border-red-500',
                  )}
                  placeholder='请输入您的公司名称'
                />
                <FieldError errors={field.state.meta.errors} />
              </div>
            )}
          </form.Field>

          {/* 联系人姓名 */}
          <form.Field
            name='name'
            validators={{
              onChange: ({ value }) => {
                return value.length <= 0 ? '联系人姓名不能为空' : null
              },
            }}
          >
            {field => (
              <div className={FIELD_STYLES.container}>
                <FieldLabel icon={User}>联系人姓名 *</FieldLabel>
                <input
                  type='text'
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  className={cn(
                    FIELD_STYLES.input,
                    field.state.meta.errors.length > 0 && 'border-red-500',
                  )}
                  placeholder='请输入联系人姓名'
                />
                <FieldError errors={field.state.meta.errors} />
              </div>
            )}
          </form.Field>

          {/* 联系人电话 */}
          <form.Field
            name='phone'
            validators={{
              onChange: ({ value }) => {
                if (value.length <= 0) {
                  return '联系人电话不能为空'
                }
                if (!/^\d+$/.test(value)) {
                  return '联系人电话必须是数字'
                }
                if (value.length !== 11) {
                  return '联系人电话必须是11位数字'
                }
                return null
              },
            }}
          >
            {field => (
              <div className={FIELD_STYLES.container}>
                <FieldLabel icon={Phone}>联系人电话 *</FieldLabel>
                <input
                  type='tel'
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  className={cn(
                    FIELD_STYLES.input,
                    field.state.meta.errors.length > 0 && 'border-red-500',
                  )}
                  placeholder='请输入联系人电话'
                />
                <FieldError errors={field.state.meta.errors} />
              </div>
            )}
          </form.Field>

          {/* 邮箱 */}
          <form.Field
            name='email'
            validators={{
              onChange: ({ value }) => {
                if (value.length <= 0) {
                  return '邮箱不能为空'
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                  return '邮箱格式不正确'
                }
                return null
              },
            }}
          >
            {field => (
              <div className={FIELD_STYLES.container}>
                <FieldLabel icon={Mail}>邮箱 *</FieldLabel>
                <input
                  type='email'
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  className={cn(
                    FIELD_STYLES.input,
                    field.state.meta.errors.length > 0 && 'border-red-500',
                  )}
                  placeholder='请输入邮箱地址'
                />
                <FieldError errors={field.state.meta.errors} />
              </div>
            )}
          </form.Field>

          {/* 预计采购点数 */}
          <form.Field name='node'>
            {field => (
              <div className={FIELD_STYLES.container}>
                <FieldLabel icon={Hash}>预计采购点数</FieldLabel>
                <input
                  type='number'
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  className={FIELD_STYLES.input}
                  placeholder='请输入预计采购点数，如：1000'
                />
              </div>
            )}
          </form.Field>

          {/* 地址（可选） */}
          <form.Field name='address'>
            {field => (
              <div className={FIELD_STYLES.container}>
                <FieldLabel icon={MapPin}>地址（可选）</FieldLabel>
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={3}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  className={cn(FIELD_STYLES.input, 'resize-none')}
                  placeholder='请输入详细地址（可选）'
                />
              </div>
            )}
          </form.Field>

          {/* 提交按钮 */}
          <motion.button
            type='submit'
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              'w-full py-4 px-6 rounded-lg font-medium',
              'bg-primary text-primary-foreground',
              'hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed',
              'transition-colors duration-200',
              'flex items-center justify-center space-x-2',
            )}
          >
            {isSubmitting ? (
              <>
                <div className='w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin' />
                <span>提交中...</span>
              </>
            ) : (
              <>
                <Send className='w-4 h-4' />
                <span>立即提交</span>
              </>
            )}
          </motion.button>

          {/* 提示文字 */}
          <p className='text-xs text-muted-foreground text-center'>
            我们重视您的隐私，提交的信息仅用于业务沟通，不会泄露给第三方
          </p>
        </AnimatedList>
      </form>
    </AnimatedSlideIn>
  )
}
