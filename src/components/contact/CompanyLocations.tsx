'use client'

import { MapPin, Building, Mail, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  AnimatedList,
  AnimatedSection,
  AnimatedSlideIn,
} from '@/components/ui/animated-section'
import Link from 'next/link'

// 联系方式常量
const CONTACT_EMAIL = 'yue.qian@magic-shield.com'

const locations = [
  {
    type: '公司总部',
    company: '广州奇盾信息技术有限公司',
    address: '广州高新技术产业开发区科学城开源大道11号B9栋601室',
    city: '广州',
    icon: Building,
    highlight: true,
  },
  {
    type: '杭州研发中心',
    address: '浙江省杭州市西湖区文三路华星时代广场A座710室',
    city: '杭州',
    icon: MapPin,
    highlight: false,
  },
]

const contactMethods = [
  {
    icon: Mail,
    title: '商务邮箱',
    value: CONTACT_EMAIL,
    description: '商务合作/产品咨询',
    action: `mailto:${CONTACT_EMAIL}`,
  },

  // {
  //   icon: Phone,
  //   title: '电话咨询',
  //   value: '400-XXX-XXXX',
  //   description: '工作日 9:00-18:00',
  //   action: 'tel:400-XXX-XXXX',
  // },
]

/**
 * 公司地址和联系方式组件
 * @returns
 */
export function CompanyLocations() {
  return (
    <AnimatedSlideIn delay={0.2} direction='left' className='space-y-8'>
      {/* 办公地址 */}
      <div className='bg-card p-8 rounded-2xl border border-primary/15'>
        <AnimatedSection delay={0.2}>
          <h3 className='text-2xl font-bold mb-6 flex items-center'>
            <MapPin className='w-6 h-6 text-primary mr-3' />
            办公地址
          </h3>
        </AnimatedSection>

        <AnimatedList initialDelay={0.2} className='space-y-6'>
          {locations.map((location, index) => (
            <div
              key={index}
              className={cn(
                'flex items-start space-x-4',
                'p-4 rounded-xl border transition-all duration-300',
                location.highlight
                  ? 'border-primary/15 bg-primary/5'
                  : 'border-input hover:border-primary/15',
              )}
            >
              <div
                className={cn(
                  'p-2 rounded-lg flex-shrink-0',
                  location.highlight
                    ? 'bg-primary/20 text-primary'
                    : 'bg-muted text-muted-foreground',
                )}
              >
                <location.icon className='w-5 h-5' />
              </div>
              <div className='flex-1'>
                <div className='flex items-center justify-between mb-2'>
                  <h4 className='font-semibold text-foreground'>
                    {location.type}
                  </h4>
                  <span
                    className={cn(
                      'px-2 py-1 text-xs rounded-full',
                      location.highlight
                        ? 'bg-primary/20 text-primary'
                        : 'bg-muted text-muted-foreground',
                    )}
                  >
                    {location.city}
                  </span>
                </div>
                {location.company && (
                  <p className='text-sm font-medium text-foreground mb-1'>
                    {location.company}
                  </p>
                )}
                <p className='text-sm text-muted-foreground'>
                  {location.address}
                </p>
              </div>
            </div>
          ))}
        </AnimatedList>
      </div>

      {/* 联系方式 */}
      <div className='bg-card p-8 rounded-2xl border border-primary/15'>
        <AnimatedSection
          delay={0.2}
          className='text-2xl font-bold mb-6 flex items-center'
        >
          <MessageCircle className='w-6 h-6 text-primary mr-3' />
          联系方式
        </AnimatedSection>

        <AnimatedList initialDelay={0.3} className='grid sm:grid-cols-1 gap-4'>
          {contactMethods.map((method, index) => (
            <Link
              key={index}
              href={method.action}
              className={cn(
                'p-4 rounded-xl border border-input bg-background',
                'hover:border-primary/15 hover:bg-primary/5',
                'transition-all duration-300 group cursor-pointer',
                'block no-underline',
              )}
            >
              <div className='flex items-center space-x-3'>
                <div className='p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors'>
                  <method.icon className='w-5 h-5' />
                </div>

                <div className='flex-1'>
                  <h4 className='font-medium text-foreground group-hover:text-primary transition-colors'>
                    {method.title}
                  </h4>
                  <p className='text-sm text-primary font-medium'>
                    {method.value}
                  </p>
                  <p className='text-xs text-muted-foreground'>
                    {method.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </AnimatedList>
      </div>

      {/* 服务承诺 */}
      <AnimatedSection
        delay={0.5}
        className='bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/15'
      >
        <h4 className='font-semibold text-primary mb-2'>服务承诺</h4>
        <p className='text-sm text-muted-foreground leading-relaxed'>
          我们承诺在收到您的咨询后
          <span className='text-primary font-medium'>24小时内</span> 给予回复，
          并根据您的需求安排专业的技术顾问为您提供详细的产品演示和解决方案。
          我们的专业团队将竭诚为您服务，确保您获得最优质的服务体验。
        </p>
      </AnimatedSection>
    </AnimatedSlideIn>
  )
}
