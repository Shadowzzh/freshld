'use client'

import { cn } from '@/lib/utils'
import { Shield, Building, Zap } from 'lucide-react'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'
import { MeteorsDynamic } from '@/components/ui/meteors-dynamic'

export function AboutHero() {
  return (
    <section
      className={cn(
        'relative h-[50vh] flex items-center justify-center overflow-hidden',
        'bg-gradient-to-br from-slate-50 to-primary/20',
      )}
    >
      <MeteorsDynamic number={15} minDelay={0.5} maxDelay={1.5} />

      <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative')}>
        <div className={cn('text-center max-w-4xl mx-auto')}>
          <AnimatedSection direction='up'>
            <h1
              className={cn(
                'text-4xl lg:text-6xl font-bold mb-6',
                'text-center leading-tight',
                'bg-gradient-to-r from-[#F6A834] to-[#F6A834]/70 bg-clip-text text-transparent',
              )}
            >
              顶尖技术团队
              <br />
              铸就明焰安全
            </h1>
          </AnimatedSection>

          <AnimatedSection direction='up'>
            <p className={cn('text-xl text-neutral-600 mb-8 leading-relaxed')}>
              明焰安全（FYRESHLD
              NGEP）是广州奇盾信息技术有限公司旗下的核心品牌。
              <br />
              奇盾信息与浙江大学实验室紧密合作，在产学研方面取得了丰硕成果。
              <br />
              并成功打造了明焰系列安全产品。
            </p>
          </AnimatedSection>

          <AnimatedList
            direction='up'
            className={cn(
              'flex flex-wrap justify-center gap-6 text-sm text-neutral-500',
            )}
          >
            {[
              <div key='tech-driven' className={cn('flex items-center gap-2')}>
                <Building className={cn('w-4 h-4 text-[#F6A834]')} />
                <span>技术驱动</span>
              </div>,
              <div key='defense' className={cn('flex items-center gap-2')}>
                <Shield className={cn('w-4 h-4 text-[#F6A834]')} />
                <span>实战纵深防御</span>
              </div>,
              <div
                key='nowhere-to-hide'
                className={cn('flex items-center gap-2')}
              >
                <Zap className={cn('w-4 h-4 text-[#F6A834]')} />
                <span>让黑客无所遁形</span>
              </div>,
            ]}
          </AnimatedList>
        </div>
      </div>
    </section>
  )
}
