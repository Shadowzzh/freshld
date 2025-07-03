import { Shield, Search, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedList, AnimatedSection } from '@/components/ui/animated-section'

export const HeroCoreCompetency = () => {
  /** 核心优势 */
  const coreAdvantages = [
    {
      title: '精准威胁检测',
      description:
        '基于先进的威胁检测技术，实现对攻击行为的精准捕获与实时拦截，及时发现潜伏威胁。',
      icon: Search,
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: '资产风险评估',
      description:
        '全面感知终端和云端资产的安全状态，识别潜在漏洞与风险，主动加强关键防护。',
      icon: Shield,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: '合规基线保障',
      description:
        '内置安全配置基线检查机制，确保系统和应用配置符合行业合规要求，提升整体安全水位。',
      icon: CheckCircle,
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section
      className={cn(
        'md:-translate-y-[110%] translate-y-0 ',
        'md:absolute  left-0 right-0 z-20',
        'md:bg-transparent bg-black',
        'md:pb-0 pb-6 md:rounded-none rounded-b-2xl',
      )}
    >
      {/* 背景图片或渐变 */}

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* 毛玻璃容器 */}
        <AnimatedSection
          className={cn(
            'relative',
            'backdrop-blur-md bg-neutral-900/70',
            'border border-white/20',
            'rounded-2xl',
            'p-4 md:p-8 md:pb-10',
            'shadow-2xl',
          )}
        >
          {/* 核心优势网格 */}
          <AnimatedList className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
            {coreAdvantages.map((advantage, index) => (
              <div key={index} className={cn('relative group', 'p-4')}>
                {/* 内容 */}
                <h3
                  className={cn(
                    'text-lg font-bold mb-3',
                    'text-primary',
                    'group-hover:text-blue-300 transition-colors duration-200',
                  )}
                >
                  {advantage.title}
                </h3>
                <p className={cn('leading-relaxed', 'text-gray-300')}>
                  {advantage.description}
                </p>
              </div>
            ))}
          </AnimatedList>
        </AnimatedSection>
      </div>
    </section>
  )
}
