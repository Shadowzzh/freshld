'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { AnimatedBackground } from './ui/animated-background'
import { HeaderNavLink } from '@/components/HeaderNavLink'
import { productNavigationItems } from '@/lib/product-navigation'

interface NavigationMenuProps {
  className?: string
}

function ListItem({
  title,
  children,
  href,
  isActive,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & {
  href: string
  isActive?: boolean
}) {
  return (
    <li {...props}>
      <HeaderNavLink
        href={href}
        variant='menu'
        className={cn('block rounded-lg p-4', isActive && 'bg-accent/20')}
      >
        <div
          className={cn(
            'text-base font-medium leading-tight',
            isActive ? 'text-primary' : 'text-foreground',
          )}
        >
          {title}
        </div>
        <p
          className='mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground'
          title={typeof children === 'string' ? children : undefined}
        >
          {children}
        </p>
      </HeaderNavLink>
    </li>
  )
}

export const HeaderMenus = (props: NavigationMenuProps) => {
  const { className } = props
  const pathname = usePathname()

  // 判断路径是否匹配
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <NavigationMenu
      delayDuration={0}
      viewport={false}
      className={cn('h-full', className)}
    >
      <NavigationMenuList className={cn('gap-4', 'h-full')}>
        <NavigationMenuItem>
          <HeaderNavLink href='/' variant='header' exactMatch={true}>
            首页
          </HeaderNavLink>
        </NavigationMenuItem>

        <NavigationMenuItem className='bg-transparent'>
          <NavigationMenuTrigger
            className={cn('text-base', isActive('/products') && 'text-primary')}
          >
            产品
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className='grid w-[90vw] max-w-[600px] gap-3 p-2 md:w-[500px] md:grid-cols-1 lg:w-[600px]'>
              <AnimatedBackground
                className='rounded-lg bg-zinc-100 dark:bg-zinc-800'
                transition={{
                  type: 'spring',
                  bounce: 0.2,
                  duration: 0.6,
                }}
                enableHover
              >
                {productNavigationItems.map(service => (
                  <ListItem
                    className='relative z-10'
                    data-id={service.title}
                    key={service.title}
                    title={service.title}
                    href={service.href}
                    isActive={isActive(service.href)}
                  >
                    {service.description}
                  </ListItem>
                ))}
              </AnimatedBackground>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <HeaderNavLink href='/cases' variant='default'>
            客户案例
          </HeaderNavLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <HeaderNavLink href='/about' variant='default'>
            关于我们
          </HeaderNavLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <HeaderNavLink href='/contact' variant='default'>
            联系我们
          </HeaderNavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
