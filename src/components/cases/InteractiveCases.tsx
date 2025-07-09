'use client'

import { useState } from 'react'
import { Building2, Shield, Server, Cloud, Filter } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { AnimatedSection } from '@/components/ui/animated-section'
import { motion, AnimatePresence } from 'framer-motion'

// 案例数据
const casesData = [
  {
    id: 'unionpay',
    company: '中国银联',
    industry: '金融',
    solution: 'NGEP',
    icon: Building2,
    description: '为中国银联信息总中心提供端点防护解决方案，保障支付系统安全。',
    tags: ['端点防护', '勒索防护', '资产清点'],
    results: '99.9%威胁拦截率',
  },
  {
    id: 'antgroup',
    company: '蚂蚁金服',
    industry: '金融科技',
    solution: 'NGEP',
    icon: Cloud,
    description: '云上主机安全防护，实时监控和威胁追踪。',
    tags: ['云安全', '威胁追踪', '基线检查'],
    results: '100%威胁可见性',
  },
  {
    id: 'xinjiang8',
    company: '新疆八院',
    industry: '医疗',
    solution: 'CDG',
    icon: Shield,
    description: '医疗系统勒索防护，保障医院信息系统安全稳定运行。',
    tags: ['勒索防护', '数据备份', '快速恢复'],
    results: '0数据丢失',
  },
  {
    id: 'zheshang',
    company: '浙商银行',
    industry: '金融',
    solution: 'CNAPP',
    icon: Server,
    description: '容器化应用全生命周期安全防护。',
    tags: ['容器安全', 'DevSecOps', '合规检查'],
    results: '提升80%部署效率',
  },
  {
    id: 'cmcc',
    company: '中国移动',
    industry: '电信',
    solution: 'NGEP',
    icon: Building2,
    description: '大规模终端安全管理和威胁防护。',
    tags: ['终端管理', '威胁情报', '自动响应'],
    results: '减少90%响应时间',
  },
  {
    id: 'alibaba',
    company: '阿里云',
    industry: '云服务',
    solution: 'CNAPP',
    icon: Cloud,
    description: '云原生应用安全防护平台。',
    tags: ['云原生', '镜像扫描', '运行时防护'],
    results: '100%镜像安全',
  },
]

// 行业筛选选项
const industries = ['全部', '金融', '金融科技', '医疗', '电信', '云服务']

// 解决方案筛选选项
const solutions = ['全部', 'NGEP', 'CDG', 'CNAPP']

export function InteractiveCases() {
  const [selectedIndustry, setSelectedIndustry] = useState('全部')
  const [selectedSolution, setSelectedSolution] = useState('全部')
  const [hoveredCase, setHoveredCase] = useState<string | null>(null)

  // 筛选案例
  const filteredCases = casesData.filter(
    case_ =>
      (selectedIndustry === '全部' || case_.industry === selectedIndustry) &&
      (selectedSolution === '全部' || case_.solution === selectedSolution),
  )

  return (
    <section className='py-24 relative bg-background'>
      <div className='container mx-auto px-4'>
        {/* 标题 */}
        <AnimatedSection className='text-center mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-4'>探索成功案例</h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            通过交互式界面，快速了解不同行业和解决方案的成功实践
          </p>
        </AnimatedSection>

        {/* 筛选器 */}
        <AnimatedSection className='mb-12'>
          <div className='flex flex-col lg:flex-row gap-6 p-6 rounded-2xl bg-card border border-primary/15 '>
            <div className='flex items-center gap-3'>
              <Filter className='w-5 h-5 text-primary' />
            </div>

            {/* 行业筛选 */}
            <div>
              <div className='flex  gap-2'>
                {industries.map(industry => (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={cn(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer',
                      selectedIndustry === industry
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background hover:bg-primary/10 text-foreground',
                    )}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            {/* 解决方案筛选 */}
            <div>
              <div className='flex flex-wrap gap-2'>
                {solutions.map(solution => (
                  <button
                    key={solution}
                    onClick={() => setSelectedSolution(solution)}
                    className={cn(
                      'cursor-pointer',
                      'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                      selectedSolution === solution
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background hover:bg-primary/10 text-foreground',
                    )}
                  >
                    {solution}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 案例网格 */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <AnimatePresence mode='popLayout'>
            {filteredCases.map(case_ => (
              <motion.div
                key={case_.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredCase(case_.id)}
                onMouseLeave={() => setHoveredCase(null)}
              >
                <Card
                  className={cn(
                    'shadow-none',
                    'relative p-6 h-full border-primary/15 ',
                    'hover:border-primary/30',
                    'transition-all duration-300',
                    'bg-card/50 backdrop-blur-sm',
                    hoveredCase === case_.id && 'scale-[1.02]',
                  )}
                >
                  {/* 头部 */}
                  <div className='flex items-start justify-between mb-4'>
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center'>
                        <case_.icon className='w-5 h-5 text-primary' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-foreground'>
                          {case_.company}
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                          {case_.industry}
                        </p>
                      </div>
                    </div>
                    <span className='px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary'>
                      {case_.solution}
                    </span>
                  </div>

                  {/* 描述 */}
                  <p className='text-sm text-muted-foreground mb-4 line-clamp-4'>
                    {case_.description}
                  </p>

                  {/* 标签 */}
                  <div className='flex flex-wrap gap-2'>
                    {case_.tags.map((tag, index) => (
                      <span
                        key={index}
                        className='px-2 py-1 text-xs rounded-full bg-background border border-primary/15 text-foreground'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 悬停效果 */}
                  <div
                    className={cn(
                      'absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300',
                      'bg-gradient-to-br from-primary/5 via-transparent to-primary/5',
                      'pointer-events-none',
                      hoveredCase === case_.id && 'opacity-100',
                    )}
                  />
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 空状态 */}
        {filteredCases.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-center py-12'
          >
            <p className='text-muted-foreground'>
              没有找到符合条件的案例，请尝试其他筛选条件。
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
