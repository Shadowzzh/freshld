import { cn } from '@/lib/utils'
import { AnimatedList } from '@/components/ui/animated-section'
import { BackgroundPathsDynamic } from '@/components/ui/background-paths-dynamic'

export function ContactHero() {
  return (
    <section className='relative h-[50vh] flex items-center justify-center overflow-hidden'>
      {/* 背景渐变 */}
      <div className='absolute inset-0 size-full bg-gradient-to-br from-primary/20 via-background to-primary/10'>
        <BackgroundPathsDynamic
          position={1}
          className='opacity-20 text-primary'
        />
        <BackgroundPathsDynamic
          position={-1}
          className='opacity-20 text-primary'
        />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <AnimatedList className={cn('max-w-4xl mx-auto text-center')}>
          {/* 主标题 */}
          <div className='text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6'>
            联系我们
          </div>
          {/* 副标题 */}
          <div
            className={cn(
              'text-xl lg:text-2xl font-medium text-foreground/80 mb-8',
            )}
          >
            点亮安全，守护您的数字未来
          </div>

          {/* 描述文字 */}
          <div className={cn('max-w-3xl mx-auto')}>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              感谢您对明焰安全的关注！我们致力于为企业提供卓越的网络空间主机和终端安全防护，让黑客无所遁形。如果您有任何疑问、合作意向或需要技术支持，请随时通过以下方式与我们联系。
            </p>
          </div>
        </AnimatedList>
      </div>
    </section>
  )
}
