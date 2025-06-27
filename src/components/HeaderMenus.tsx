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

const services: { title: string; href: string; description: string }[] = [
  {
    title: '明焰 NGEP',
    href: '/products/ngep',
    description:
      '提供深度防护和全面检查的统一主机安全产品，通过强大的实时监控和深入剖析主机行为。',
  },
  {
    title: '明焰 CNAPP',
    href: '/products/cnapp',
    description:
      '依托大数据和人工智能技术，为用户提供自适应、自学习的全栈式云原生应用安全防护。',
  },
  {
    title: '明焰 CDG',
    href: '/products/cdg',
    description:
      '针对勒索病毒提供有效的追踪和攻击路径展示，对系统和数据提供清洁的备份，并可以对已破坏的数据做清洁恢复。',
  },
  {
    title: '明焰安全度量验证平台',
    href: '/products/measure',
    description:
      '明焰安全度量验证平台，基于顶尖攻防实战经验与前沿技术，提供全自动化、无害化的安全验证服务 。',
  },
]

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
        className={cn(isActive && 'bg-accent/20')}
      >
        <div
          className={cn(
            'text-lg font-medium',
            isActive ? 'text-primary' : 'text-black',
          )}
        >
          {title}
        </div>
        <p className='text-muted-foreground'>{children}</p>
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
            <ul className='grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
              <AnimatedBackground
                className='rounded-lg bg-zinc-100 dark:bg-zinc-800'
                transition={{
                  type: 'spring',
                  bounce: 0.2,
                  duration: 0.6,
                }}
                enableHover
              >
                {services.map(service => (
                  <ListItem
                    className='relative z-10 p-1'
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
