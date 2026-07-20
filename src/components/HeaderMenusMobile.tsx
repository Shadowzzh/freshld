'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { productNavigationItems } from '@/lib/product-navigation'

interface HeaderMenusMobileProps {
  className?: string
}

export const HeaderMenusMobile = ({ className }: HeaderMenusMobileProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  // 判断路径是否匹配
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  // 检查产品菜单是否应该高亮
  const isProductActive = productNavigationItems.some(service =>
    isActive(service.href),
  )

  return (
    <div className={cn('lg:hidden', className)}>
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className={cn(
          'p-2 rounded-lg',
          'text-gray-700 hover:text-primary hover:bg-gray-100',
          'transition-colors duration-200',
          'flex items-center justify-center',
        )}
        aria-label='Open menu'
      >
        <Menu className='w-6 h-6' />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className='fixed inset-0 z-[90]'>
            {/* Backdrop blur area */}
            <motion.div
              aria-label='Backdrop'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='h-[100vh] absolute inset-0 backdrop-blur-lg bg-black/20'
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              aria-label='Menu'
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.4,
              }}
              className={cn(
                'relative w-full z-[100]',
                'bg-white shadow-2xl',
                'max-h-[80vh] overflow-y-auto',
                'rounded-b-2xl',
              )}
            >
              {/* Menu Header */}
              <div className='flex items-center justify-between p-4 border-b border-gray-200'>
                <h2 className='text-lg font-semibold text-gray-900'>菜单</h2>
                <button
                  onClick={closeMenu}
                  className={cn(
                    'p-2 rounded-lg',
                    'text-gray-500 hover:text-gray-700 hover:bg-gray-100',
                    'transition-colors duration-200',
                  )}
                  aria-label='Close menu'
                >
                  <X className='w-5 h-5' />
                </button>
              </div>

              {/* Menu Items */}
              <div className='py-4'>
                {/* Home */}
                <Link href='/' onClick={closeMenu}>
                  <div
                    className={cn(
                      'px-4 py-3 text-base font-medium hover:bg-gray-50 transition-colors duration-200',
                      isActive('/')
                        ? 'text-primary bg-primary/5'
                        : 'text-gray-900',
                    )}
                  >
                    首页
                  </div>
                </Link>

                {/* Products */}
                <div>
                  <button
                    onClick={() => toggleSection('products')}
                    className={cn(
                      'w-full px-4 py-3 text-left',
                      'flex items-center justify-between',
                      'text-base font-medium',
                      'hover:bg-gray-50 transition-colors duration-200',
                      isProductActive
                        ? 'text-primary bg-primary/5'
                        : 'text-gray-900',
                    )}
                  >
                    <span>产品</span>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform duration-200',
                        expandedSection === 'products' && 'rotate-180',
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedSection === 'products' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className='overflow-hidden bg-gray-50'
                      >
                        {productNavigationItems.map(service => (
                          <Link
                            key={service.title}
                            href={service.href}
                            onClick={closeMenu}
                          >
                            <div
                              className={cn(
                                'px-6 py-3 border-l-2 hover:bg-white transition-all duration-200',
                                isActive(service.href)
                                  ? 'border-primary bg-primary/5'
                                  : 'border-transparent hover:border-primary',
                              )}
                            >
                              <div
                                className={cn(
                                  'text-sm font-medium',
                                  isActive(service.href)
                                    ? 'text-primary'
                                    : 'text-gray-900',
                                )}
                              >
                                {service.title}
                              </div>
                              <div className='text-xs text-gray-600 mt-1 line-clamp-2'>
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Customer Cases */}
                <Link href='/cases' onClick={closeMenu}>
                  <div
                    className={cn(
                      'px-4 py-3 text-base font-medium hover:bg-gray-50 transition-colors duration-200',
                      isActive('/cases')
                        ? 'text-primary bg-primary/5'
                        : 'text-gray-900',
                    )}
                  >
                    客户案例
                  </div>
                </Link>

                {/* About Us */}
                <Link href='/about' onClick={closeMenu}>
                  <div
                    className={cn(
                      'px-4 py-3 text-base font-medium hover:bg-gray-50 transition-colors duration-200',
                      isActive('/about')
                        ? 'text-primary bg-primary/5'
                        : 'text-gray-900',
                    )}
                  >
                    关于我们
                  </div>
                </Link>

                {/* Contact Us */}
                <Link href='/contact' onClick={closeMenu}>
                  <div
                    className={cn(
                      'px-4 py-3 text-base font-medium hover:bg-gray-50 transition-colors duration-200',
                      isActive('/contact')
                        ? 'text-primary bg-primary/5'
                        : 'text-gray-900',
                    )}
                  >
                    联系我们
                  </div>
                </Link>

                {/* Demo Button */}
                <div className='px-4 py-3 mt-4'>
                  <button
                    className={cn(
                      'w-full',
                      'text-white bg-primary hover:bg-primary/90',
                      'transition-colors duration-200',
                      'px-4 py-3 rounded-lg font-semibold',
                      'text-sm',
                    )}
                  >
                    预约演示
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
