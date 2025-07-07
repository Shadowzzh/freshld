'use client'

import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/animated-section'
import { cn } from '@/lib/utils'
import { CheckCircle } from 'lucide-react'

export function CasesCTA() {
  return (
    <section className='relative bg-background pb-20'>
      <div className='container mx-auto px-4'>
        <div className='relative z-10 max-w-4xl mx-auto'>
          <AnimatedSection className='text-center'>
            <div className='relative p-8 rounded-2xl border border-primary/15 bg-card/50 backdrop-blur-sm'>
              <CheckCircle className='w-12 h-12 text-primary mx-auto mb-4' />
              <h3 className='text-2xl font-bold text-foreground mb-4'>
                成为我们的下一个成功案例
              </h3>
              <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
                加入众多知名企业的行列，选择明焰安全的专业网络安全解决方案。
                <br />
                为您的业务提供全方位的安全防护。
              </p>

              <Link href={`/contact`}>
                <button
                  className={cn(
                    'cursor-pointer',
                    'px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300',
                  )}
                >
                  立即联系我们
                </button>
              </Link>

              {/* 背景装饰 */}
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none' />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
