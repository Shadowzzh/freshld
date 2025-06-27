import { Download, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { HeroBackground } from '@/components/home/HeroBackground'
import { AnimatedList } from '@/components/ui/animated-section'

export const HeroSection = () => {
  return (
    <section className='relative md:h-[calc(100vh)] h-auto overflow-hidden'>
      {/* Background with gradient */}
      <HeroBackground />

      {/* Content */}
      <div className={cn('w-full h-full')}>
        {/* 内容 */}
        <div
          className={cn(
            'relative z-30',
            'max-w-screen-2xl mx-auto h-full',
            'px-8 lg:px-8',
            'flex flex-col md:flex-row md:items-center',
          )}
        >
          <AnimatedList
            delayStep={0.2}
            className={cn(
              'space-y-6 text-white',
              'max-w-3xl',
              'md:w-full',
              'mt-12 md:mt-0',
              'mb-[10%]',
            )}
          >
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
              网络空间的守护者
            </h1>
            <h2 className='text-lg sm:text-xl lg:text-2xl font-medium opacity-90'>
              网络空间主机与容器的贴身保镖。
            </h2>
            <p className='text-base sm:text-lg lg:text-xl opacity-80 max-w-2xl leading-relaxed'>
              奇盾信息技术有限公司致力于利用大数据和人工智能技术，为客户提供划时代的网络信息安全解决方案。我们实时监控并防御各种已知和未知的恶意威胁，让未知威胁无所遁形。
            </p>
            <div className='flex flex-col sm:flex-row lg:flex-row gap-4 pt-4'>
              <button
                className={cn(
                  'cursor-pointer',
                  'text-white bg-primary hover:bg-white hover:text-black ',
                  'transition-colors duration-200',
                  'px-8 py-4 rounded-lg font-semibold space-x-2',
                  'flex items-center justify-center',
                  'border-2 border-white',
                )}
              >
                <Download className='w-5 h-5' />
                <span>获取演示</span>
              </button>

              <button
                className={cn(
                  'cursor-pointer',
                  'border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 flex items-center justify-center space-x-2',
                )}
              >
                <span>了解更多</span>
                <ArrowRight className='w-5 h-5' />
              </button>
            </div>
          </AnimatedList>
        </div>
      </div>
    </section>
  )
}
