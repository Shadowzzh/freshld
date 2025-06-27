import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
  exactMatch?: boolean
  variant?: 'default' | 'header' | 'menu'
}

export function HeaderNavLink({
  href,
  children,
  className,
  activeClassName,
  exactMatch = false,
  variant = 'default',
}: NavLinkProps) {
  const pathname = usePathname()

  // 判断路径是否匹配
  const isActive = exactMatch
    ? pathname === href
    : href === '/'
      ? pathname === href
      : pathname.startsWith(href)

  const variantStyles = {
    default: 'font-medium text-base px-4 py-2 rounded-md transition-colors',
    header: 'font-bold text-base px-4 py-2 rounded-md transition-colors',
    menu: 'block p-3 rounded-md transition-colors',
  }

  const defaultActiveClassName = isActive
    ? 'text-primary'
    : variant === 'menu'
      ? 'text-black hover:text-primary'
      : 'text-gray-700 hover:text-primary'

  return (
    <Link
      href={href}
      className={cn(
        variantStyles[variant],
        activeClassName || defaultActiveClassName,
        className,
      )}
    >
      {children}
    </Link>
  )
}
