'use client'

import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Award, Star, Quote } from 'lucide-react'
import { AnimatedList, AnimatedSection } from '@/components/ui/animated-section'
import { MarqueeDynamic } from '@/components/ui/marquee-dynamic'

// 导入合作伙伴 logo
import unionpayLogo from '@/assets/cooperation-logo/unionpay.svg'
import antGroupLogo from '@/assets/cooperation-logo/ant-group.svg'
import aliyunLogo from '@/assets/cooperation-logo/aliyun.svg'
import huaweiLogo from '@/assets/cooperation-logo/huawei.png'
import chinaMobileLogo from '@/assets/cooperation-logo/china-mobile.png'
import zheshangLogo from '@/assets/cooperation-logo/zheshang.png'
import czbLogo from '@/assets/cooperation-logo/czb.svg'
import fubonLogo from '@/assets/cooperation-logo/fubon.svg'
import shaoxingBankLogo from '@/assets/cooperation-logo/shaoxing-bank.png'
import chsLogo from '@/assets/cooperation-logo/chs.jpg'
import daocloudLogo from '@/assets/cooperation-logo/daocloud.svg'
import shuziyunguLogo from '@/assets/cooperation-logo/shuziyungu.png'
import xinxigongchengLogo from '@/assets/cooperation-logo/xinxigongcheng.png'
import sportsLogo from '@/assets/cooperation-logo/sports.png'
import chuangweiLogo from '@/assets/cooperation-logo/chuangwei.png'
import dongbeiLogo from '@/assets/cooperation-logo/dongbei.png'
import yunnanLogo from '@/assets/cooperation-logo/yunnan.png'
import chegnduguidaoLogo from '@/assets/cooperation-logo/chegnduguidao.png'
import jikeLogo from '@/assets/cooperation-logo/jike.png'
import qingcloudLogo from '@/assets/cooperation-logo/qingcloud.svg'
import lianruanLogo from '@/assets/cooperation-logo/lianruan.png'
import nanjingligongLogo from '@/assets/cooperation-logo/nanjingligong.png'
import guotouxinjiangLogo from '@/assets/cooperation-logo/guotouxinjiang.png'
import shaoxingjiaotongLogo from '@/assets/cooperation-logo/shaoxingjiaotong.png'
import shaoxingtonjiLogo from '@/assets/cooperation-logo/shaoxingtongji.png'
import jiaxingnanhuLogo from '@/assets/cooperation-logo/jiaxingnanhu.png'
import xinjiangweiwuerLogo from '@/assets/cooperation-logo/xinjiangweiwuer.png'
import Image from 'next/image'

const partnerLogos = [
  // 金融行业
  { name: '中国银联', industry: '金融支付', logo: unionpayLogo },
  { name: '蚂蚁金服', industry: '金融科技', logo: antGroupLogo },
  { name: '浙商证券', industry: '证券投资', logo: zheshangLogo },
  { name: '浙商银行', industry: '商业银行', logo: czbLogo },
  { name: '富邦华一银行', industry: '商业银行', logo: fubonLogo },
  { name: '绍兴银行', industry: '地方银行', logo: shaoxingBankLogo },

  // 通信运营商与国防
  { name: '中国移动', industry: '电信运营', logo: chinaMobileLogo },
  { name: '中船重工', industry: '国防军工', logo: chsLogo },

  // 云计算与科技企业
  { name: '数字云谷', industry: '云计算服务', logo: shuziyunguLogo },
  { name: '华为', industry: '通信科技', logo: huaweiLogo },
  { name: '阿里云', industry: '云计算平台', logo: aliyunLogo },
  { name: '道客云安全', industry: '云安全服务', logo: daocloudLogo },
  { name: '青云科技', industry: '云计算', logo: qingcloudLogo },
  { name: '联软科技', industry: '软件开发', logo: lianruanLogo },

  // 政府机构与科研院所
  { name: '中科院信工所', industry: '科研院所', logo: xinxigongchengLogo },
  { name: '浙江省体育局', industry: '政府机构', logo: sportsLogo },
  { name: '南京理工大学', industry: '教育科研', logo: nanjingligongLogo },
  {
    name: '新疆维吾尔自治区',
    industry: '政府机构',
    logo: xinjiangweiwuerLogo,
  },

  // 能源与交通
  { name: '国投新疆', industry: '能源投资', logo: guotouxinjiangLogo },
  { name: '成都轨道交通', industry: '轨道交通', logo: chegnduguidaoLogo },
  { name: '绍兴交通', industry: '交通运输', logo: shaoxingjiaotongLogo },

  // 其他企业客户
  { name: '湖南创发集团', industry: '投资集团', logo: chuangweiLogo },
  { name: '东北新闻网', industry: '新闻媒体', logo: dongbeiLogo },
  { name: '云南集团', industry: '多元化集团', logo: yunnanLogo },
  { name: '极客邦科技', industry: '技术服务', logo: jikeLogo },
  { name: '绍兴统计', industry: '政府统计', logo: shaoxingtonjiLogo },
  { name: '嘉兴南湖', industry: '地方政府', logo: jiaxingnanhuLogo },
]

/**
 * 合作伙伴Logo卡片
 * @param props
 * @returns
 */
function ClientCard(props: { name: string; industry: string; logo: string }) {
  return (
    <div
      className={cn(
        'flex items-center space-x-4 p-4 rounded-xl',
        'bg-card border border-border/50 hover:border-primary/15',
        'transition-all duration-300 min-w-[300px]',
      )}
    >
      <div
        className={cn(
          'flex-shrink-0 size-14 relative overflow-hidden rounded-lg bg-background border border-border/50 p-1 px-2',
          'group-hover:scale-105 transition-transform duration-300',
        )}
      >
        <Image
          src={props.logo}
          alt={`${props.name} logo`}
          width={100}
          height={100}
          className={cn(
            'object-contain group-hover:scale-105 transition-transform duration-300',
            'size-14 px-2 absolute top-0 left-0 ',
          )}
        />
      </div>
      <div className='flex-1 min-w-0'>
        <h4 className='font-semibold text-foreground transition-colors duration-300 truncate'>
          {props.name}
        </h4>
        <p className='text-sm text-muted-foreground truncate'>
          {props.industry}
        </p>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  // 客户评价
  const testimonials = [
    {
      content:
        '明焰安全帮助我们全面掌控内网黑客攻击行为，并能快速追踪定位问题根源，大大提升了我们的安全防护能力。',
      company: '中国银联',
      role: '信息安全部门负责人',
      rating: 5,
      industry: '金融',
    },
    {
      content:
        '通过明焰产品，我们彻底解决了勒索软件困扰，系统稳定性显著提升，大大减少了人力资源投入。',
      company: '新疆八院',
      role: 'IT部门主管',
      rating: 5,
      industry: '医疗',
    },
    {
      content:
        'NGEP的威胁检测能力非常出色，帮助我们及时发现和阻断APT攻击，保障了交易系统的安全运行。',
      company: '浙商证券',
      role: '网络安全部经理',
      rating: 5,
      industry: '金融',
    },
  ]

  return (
    <section
      className={cn(
        'py-16 sm:py-20  relative overflow-hidden',
        'bg-gradient-to-b from-white via-gray-50/30 to-white',
      )}
    >
      {/* 背景装饰 */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(246,168,52,0.04),transparent_50%)]' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* 节区标题 */}
        <AnimatedSection className='mb-12 sm:mb-16'>
          <SectionHeader
            title='客户信赖，实力见证'
            description='众多知名企业选择明焰安全，共同构建安全防护体系'
            className='text-center'
          />
        </AnimatedSection>

        {/* 客户评价 */}
        <div className='mb-16 sm:mb-20'>
          <AnimatedList className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  'group relative p-6 sm:p-8 rounded-xl bg-white/80 backdrop-blur-sm',
                  'border border-gray-200/60 shadow shadow-black/5',
                  'hover:shadow-primary/5 hover:border-primary/15',
                  'transition-all duration-300 hover:-translate-y-1',
                )}
              >
                {/* 背景光晕效果 */}
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                {/* 引号装饰 */}
                <div className='absolute -top-3 -left-3 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shadow-md'>
                  <Quote className='w-4 h-4 text-primary' />
                </div>

                {/* 行业标签 */}
                <div className='flex items-center justify-between mb-4'>
                  <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary'>
                    {testimonial.industry}
                  </span>

                  {/* 评分 */}
                  <div className='flex items-center gap-1'>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className='w-4 h-4 text-yellow-400 fill-current'
                      />
                    ))}
                  </div>
                </div>

                {/* 评价内容 */}
                <blockquote className='text-gray-700 mb-6 leading-relaxed text-sm sm:text-base relative z-10'>
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* 客户信息 */}
                <div className='border-t border-gray-100 pt-4 relative z-10'>
                  <div className='font-semibold text-gray-900 mb-1'>
                    {testimonial.company}
                  </div>
                  <div className='text-sm text-gray-500'>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </AnimatedList>
        </div>

        {/* 合作伙伴Logo墙 */}
        <div className='space-y-8 sm:space-y-12'>
          <AnimatedList className='text-center'>
            <div className='mb-6'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/15 text-primary text-sm font-medium'>
                <Award className='w-4 h-4' />
                信赖伙伴·共筑安全
              </span>
            </div>
            <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-3'>
              <span className='bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent'>
                信赖我们的企业客户
              </span>
            </h3>
            <p className='text-gray-600 text-base sm:text-lg max-w-2xl mx-auto'>
              覆盖金融、医疗、运营商、云计算等多个行业领域，为各行业提供专业的安全解决方案
            </p>
          </AnimatedList>

          {/* Logo轮播 */}
          <AnimatedSection className='relative'>
            <MarqueeDynamic pauseOnHover className='[--duration:100s]'>
              {partnerLogos.map((partner, index) => (
                <ClientCard key={index} {...partner} />
              ))}
            </MarqueeDynamic>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
