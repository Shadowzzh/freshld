'use client'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'

interface StatData {
  /** 值 */
  value: React.ReactNode
  /** 标签 */
  label: string
  /** 图标 */
  icon: LucideIcon
}

interface SectionTitleAreaProps {
  /** 徽章 */
  badge?: string
  /** 徽章图标 */
  badgeIcon?: LucideIcon
  /** 主标题 */
  title: string
  /** 副标题 */
  subtitle?: string
  /** 描述 */
  description: string | React.ReactNode
  /** 次要描述 */
  secondaryDescription?: string
  /** 统计数据 */
  stats?: StatData[]
  /** 装饰图标 */
  decorationIcon?: LucideIcon
  /** 类名 */
  className?: string
}

/**
 * 产品概述标题区域 包含徽章、主标题、描述、统计数据
 * @param props
 * @param props.badge 徽章
 * @param props.badgeIcon 徽章图标
 * @param props.title 主标题
 * @param props.subtitle 副标题
 * @param props.description 描述
 * @param props.secondaryDescription 次要描述
 * @param props.stats 统计数据
 * @returns
 */
export function SectionTitleArea(props: SectionTitleAreaProps) {
  const {
    badge,
    badgeIcon: BadgeIcon,
    title,
    subtitle,
    description,
    secondaryDescription,
    stats,
    decorationIcon: DecorationIcon,
    className,
  } = props

  return (
    <div className={cn('text-center mb-20 md:mb-24', className)}>
      {/* 徽章 */}
      {badge && (
        <AnimatedSection
          direction='up'
          distance={20}
          className={cn(
            'inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6',
            'bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-amber-500/15',
            'border border-amber-400/20 backdrop-blur-sm',
            'text-amber-700 dark:text-amber-300 font-semibold text-sm',
          )}
        >
          <div
            className={cn('w-2 h-2 rounded-full animate-pulse', 'bg-amber-500')}
          />
          {BadgeIcon && <BadgeIcon className='w-4 h-4' />}
          {badge}
        </AnimatedSection>
      )}

      {/* 主标题区域 */}
      <div className='relative'>
        <AnimatedSection
          direction='up'
          distance={30}
          className={cn(
            'text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold',
            'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700',
            'bg-clip-text text-transparent mb-8',
            'leading-tight tracking-tight',
          )}
        >
          {title}
          {subtitle && (
            <>
              <br />
              <span
                className={cn(
                  'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 dark:from-amber-400 dark:via-amber-300 dark:to-amber-500',
                  'bg-clip-text text-transparent',
                  'relative inline-block',
                )}
              >
                {subtitle}
                <AnimatedSection
                  direction='left'
                  distance={0}
                  className={cn(
                    'absolute -bottom-2 left-0 right-0 h-1 rounded-full origin-left',
                    'bg-gradient-to-r from-amber-600/60 to-amber-500/60',
                  )}
                >
                  <div></div>
                </AnimatedSection>
              </span>
            </>
          )}
        </AnimatedSection>

        {/* 装饰元素 */}
        {DecorationIcon && (
          <AnimatedSection
            direction='up'
            distance={20}
            className='absolute -top-4 -right-8 w-16 h-16 opacity-20 hidden lg:block'
          >
            <DecorationIcon
              className={cn('w-full h-full rotate-12', 'text-amber-500')}
            />
          </AnimatedSection>
        )}
      </div>

      {/* 描述文字 */}
      <AnimatedSection
        direction='up'
        distance={20}
        className='max-w-4xl mx-auto'
      >
        <div
          className={cn(
            'text-lg md:text-xl leading-relaxed mb-6',
            'text-gray-600',
            'font-light',
          )}
        >
          {description}
        </div>
        {secondaryDescription && (
          <div className='text-base text-gray-500 leading-relaxed'>
            {secondaryDescription}
          </div>
        )}
      </AnimatedSection>

      {/* 统计数据展示 */}
      {stats && stats.length > 0 && (
        <AnimatedSection
          direction='up'
          distance={30}
          className='mt-12 max-w-4xl mx-auto'
        >
          <AnimatedList
            direction='up'
            className='grid grid-cols-1 md:grid-cols-3 gap-6'
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={cn(
                  'group p-6 rounded-2xl',
                  'bg-white/60 backdrop-blur-sm border border-gray-200/60',
                  'hover:border-amber-500/30',
                  'hover:bg-white/80 hover:-translate-y-1',
                  'transition-all duration-300',
                )}
              >
                {/* 悬停效果边框 */}
                <div
                  className={cn(
                    'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100',
                    'transition-opacity duration-300',
                    'bg-gradient-to-br from-amber-500/10 via-transparent to-amber-500/5',
                    'pointer-events-none',
                  )}
                />

                <div
                  className={cn(
                    'w-12 h-12 mx-auto mb-3 rounded-xl',
                    'bg-gradient-to-br from-amber-500/20 to-amber-400/10',
                    'flex items-center justify-center',
                    'group-hover:scale-110 transition-transform duration-300',
                  )}
                >
                  <stat.icon className={cn('w-6 h-6', 'text-amber-600')} />
                </div>

                <div
                  className={cn('text-2xl font-bold mb-1', 'text-amber-600')}
                >
                  {stat.value}
                </div>

                <div className='text-sm text-gray-600 font-medium'>
                  {stat.label}
                </div>
              </div>
            ))}
          </AnimatedList>
        </AnimatedSection>
      )}
    </div>
  )
}
