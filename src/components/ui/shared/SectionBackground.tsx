import { cn } from '@/lib/utils'

interface SectionBackgroundProps {
  children: React.ReactNode
  variant?: 'default' | 'gradient' | 'dots' | 'radial'
  className?: string
  withDecorations?: boolean
}

export function SectionBackground({
  children,
  variant = 'default',
  className,
  withDecorations = true,
}: SectionBackgroundProps) {
  const variantStyles = {
    default: 'bg-gradient-to-b from-white via-gray-50/30 to-white',
    gradient: 'bg-gradient-to-br from-gray-50 via-white to-gray-50/50',
    dots: 'bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]',
    radial: 'bg-gradient-to-b from-white via-primary/5 to-white',
  }

  return (
    <section
      className={cn(
        'py-16 sm:py-20 relative overflow-hidden',
        variantStyles[variant],
        className,
      )}
    >
      {/* 背景装饰 */}
      {withDecorations && (
        <>
          {/* 渐变光晕 */}
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(246,168,52,0.04),transparent_50%)]' />
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(246,168,52,0.03),transparent_50%)]' />

          {/* 装饰点 */}
          <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full' />
          <div className='absolute top-3/4 right-1/3 w-1 h-1 bg-primary/30 rounded-full' />
          <div className='absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/15 rounded-full' />
        </>
      )}

      {/* 内容区域 */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {children}
      </div>
    </section>
  )
}
