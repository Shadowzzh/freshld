'use client'

import {
  Building2,
  Heart,
  Smartphone,
  CloudIcon,
  Briefcase,
  ShoppingCart,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'
import { Card } from '@/components/ui/card'

// 行业数据
const industries = [
  {
    id: 'finance',
    name: '金融行业',
    icon: Building2,
    description: '银行、证券、保险等金融机构的全方位安全防护',
    cases: 15,
    features: ['交易安全', '数据保护', '合规管理'],
  },
  {
    id: 'healthcare',
    name: '医疗行业',
    icon: Heart,
    description: '医院、诊所等医疗机构的信息系统安全保障',
    cases: 8,
    features: ['患者隐私', '系统稳定', '勒索防护'],
  },
  {
    id: 'telecom',
    name: '电信行业',
    icon: Smartphone,
    description: '运营商网络基础设施的安全防护',
    cases: 6,
    features: ['网络安全', '终端管理', '威胁检测'],
  },
  {
    id: 'cloud',
    name: '云服务',
    icon: CloudIcon,
    description: '云计算平台和SaaS服务的安全解决方案',
    cases: 10,
    features: ['云原生安全', '容器防护', 'API安全'],
  },
  {
    id: 'enterprise',
    name: '企业服务',
    icon: Briefcase,
    description: '各类企业的综合网络安全解决方案',
    cases: 7,
    features: ['端点防护', '数据安全', '安全运营'],
  },
  {
    id: 'retail',
    name: '零售电商',
    icon: ShoppingCart,
    description: '电商平台和零售企业的安全防护',
    cases: 4,
    features: ['支付安全', '用户隐私', '防欺诈'],
  },
]

export function IndustryGrid() {
  return (
    <section className='py-24 relative bg-gradient-to-b from-background via-primary/5 to-background'>
      <div className='container mx-auto px-4'>
        {/* 背景装饰 */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
          <div className='absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
        </div>

        <div className='relative z-10'>
          {/* 标题 */}
          <AnimatedSection className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold mb-4'>
              行业解决方案
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              深耕各行业安全需求，提供定制化的专业解决方案
            </p>
          </AnimatedSection>

          {/* 行业网格 */}
          <AnimatedList
            initialDelay={0.2}
            delayStep={0.1}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            {industries.map(industry => (
              <Card
                key={industry.id}
                className={cn(
                  'shadow-none',
                  'group relative overflow-hidden border-primary/15 ',
                  'hover:border-primary/30',
                  'transition-all duration-300 ',
                  'bg-card/50 backdrop-blur-sm ',
                )}
              >
                {/* 背景渐变 */}
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 to-primary/10' />

                <div className='relative p-6'>
                  {/* 头部 */}
                  <div className='flex items-start justify-between mb-4'>
                    <div className='flex items-center gap-3'>
                      <div className='w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/15 transition-transform duration-300 group-hover:scale-110'>
                        <industry.icon className='w-6 h-6 text-primary' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-foreground text-lg'>
                          {industry.name}
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                          {industry.cases} 个成功案例
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 描述 */}
                  <p className='text-sm text-muted-foreground mb-4'>
                    {industry.description}
                  </p>

                  {/* 特性标签 */}
                  <div className='flex flex-wrap gap-2'>
                    {industry.features.map((feature, index) => (
                      <span
                        key={index}
                        className='px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/15 text-primary font-medium transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/30'
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* 装饰元素 */}
                  <div className='absolute top-2 right-2'>
                    <div className='w-16 h-16 rounded-full opacity-10 bg-gradient-to-br from-primary/20 to-primary/30' />
                  </div>
                </div>
              </Card>
            ))}
          </AnimatedList>

          {/* 底部说明 */}
          <AnimatedSection delay={0.8} className='mt-12 text-center'>
            <p className='text-muted-foreground'>
              以上仅展示部分行业案例，更多行业解决方案请联系我们获取详细资料
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
