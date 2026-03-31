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
    title: '明焰下一代端点安全保护系统 (NGEP)',
    href: '/products/ngep',
    description:
      '把CWPP和EDR统一整合，提供端点全生命周期安全管理。具备低负载运行、资产清点与风险发现能力，并结合专利级的全路径溯源技术实现精准的攻击追踪与自动实时处理。',
  },
  {
    title: '明焰云原生安全 (CNAPP)', // 注：CNAPP缩写未在资料出现，这里保留您的原代码命名习惯
    href: '/products/cnapp',
    description:
      '提供覆盖云原生应用开发、交付、运维全生命周期的容器安全管理能力。支持容器与镜像扫描、漏洞与配置检测、容器逃逸检测，并通过服务依赖提取生成网络微隔离策略。',
  },
  {
    title: '明焰防勒索系统 (CDG)',
    href: '/products/cdg',
    description:
      '提供事前预防、事中阻断、事后溯源全方位的勒索攻击防护。内置行为分析引擎进行威胁检测，支持用户自定义类型的触发式文件备份，并对已破坏的数据提供清洁文件的极速恢复。',
  },
  {
    title: '明焰安全验证平台',
    href: '/products/measure',
    description:
      '明焰安全验证平台，基于顶尖攻防实战经验与前沿技术，提供全自动化、无害化的安全验证服务 。',
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
                {services.map(service => (
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
