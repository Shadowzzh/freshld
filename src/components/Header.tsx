import Image from 'next/image'
import { cn } from '@/lib/utils'
import { HeaderMenus } from './HeaderMenus'
import { HeaderMenusMobile } from './HeaderMenusMobile'
import { ContactButton } from './ContactButton'

export function Header() {
  return (
    <header
      className={cn(
        'sticky top-0 left-0 z-50',
        'h-14 xl:h-16',
        'lg:backdrop-blur-sm lg:bg-white/80 bg-white',
        'flex items-center',
        'shadow-xs',
      )}
    >
      <div
        className={cn(
          'max-w-screen-2xl w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-full',
          'flex items-center',
          'relative z-30',
        )}
      >
        <div className='flex items-center flex-1 h-full'>
          {/* Logo */}
          <div className='flex-shrink-0 -ml-1 sm:-ml-2'>
            <div className='flex items-center'>
              <Image
                src='/logo-800.png'
                alt='明焰安全'
                width={32}
                height={32}
                className='w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10'
              />
              <span
                className={cn(
                  'ml-1.5 sm:ml-2 font-bold text-gray-900',
                  'text-base sm:text-lg lg:text-xl xl:text-2xl',
                )}
              >
                明焰安全
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <HeaderMenus
            className={cn(
              'h-full *:h-full lg:block hidden',
              'flex-1 ml-8 sm:ml-12 lg:ml-16 mr-auto',
            )}
          />

          {/* Mobile Navigation */}
          <HeaderMenusMobile />

          {/* 预约演示 */}
          <ContactButton />
        </div>
      </div>
    </header>
  )
}
