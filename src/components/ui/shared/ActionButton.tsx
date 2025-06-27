import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ActionButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  withIcon?: boolean
  icon?: React.ComponentType<{ className?: string }>
  className?: string
  external?: boolean
}

export function ActionButton({
  href,
  children,
  variant = 'outline',
  size = 'md',
  withIcon = true,
  icon: Icon = ArrowRight,
  className,
  external = false,
}: ActionButtonProps) {
  const sizeConfig = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
  }

  const variantConfig = {
    primary: {
      base: 'bg-primary text-white font-semibold shadow-md hover:shadow-lg',
      hover: 'hover:bg-primary/90 hover:scale-105',
      focus: 'focus:ring-primary/50',
    },
    secondary: {
      base: 'bg-white border-2 border-gray-200 text-gray-700 font-semibold',
      hover: 'hover:bg-primary hover:border-primary hover:text-white',
      focus: 'focus:ring-primary/50',
    },
    outline: {
      base: 'border-2 border-primary/30 text-primary font-semibold',
      hover: 'hover:border-primary hover:bg-primary/5',
      focus: 'focus:ring-primary/50',
    },
  }

  const config = variantConfig[variant]

  const buttonClasses = cn(
    'inline-flex items-center justify-center gap-2',
    'transition-all duration-300 group/button',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    sizeConfig[size],
    config.base,
    config.hover,
    config.focus,
    className,
  )

  const iconClasses =
    'w-4 h-4 transition-transform group-hover/button:translate-x-1'

  const content = (
    <>
      <span>{children}</span>
      {withIcon && <Icon className={iconClasses} />}
    </>
  )

  if (external) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={buttonClasses}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={buttonClasses}>
      {content}
    </Link>
  )
}
