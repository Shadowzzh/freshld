'use client'

import { useState } from 'react'
import { Building2, Shield, Server, Cloud } from 'lucide-react'
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
    description:
      '国家金融信息处理关键枢纽，拥有强大信息安全防护体系，保障支付系统业务连续性和数据安全。',
    tags: ['资产清点', '防御勒索软件', '实时监控', '统一化管理'],
    results: '几分钟内快速定位威胁',
  },
  {
    id: 'xinjiang8',
    company: '新疆八院',
    industry: '医疗',
    solution: 'CDG',
    icon: Shield,
    description:
      '乌鲁木齐地区最大医院，提供自动化资产梳理、勒索病毒防护和系统清洁备份恢复。',
    tags: ['自动化资产梳理', '勒索病毒告警', '威胁追踪', '清洁备份恢复'],
    results: '大幅减少人力资源投入',
  },
  {
    id: 'antgroup',
    company: '蚂蚁金服',
    industry: '金融科技',
    solution: 'NGEP',
    icon: Cloud,
    description:
      '世界领先的互联网开放平台，提供系统基线检查、恶意威胁防护和资产数据全量采集。',
    tags: ['系统基线检查', '恶意威胁告警', '威胁实时监控', '攻击溯源'],
    results: '大幅减少威胁分析时间',
  },
  {
    id: 'zhejiang_sports',
    company: '浙江省体育局',
    industry: '政府',
    solution: 'CNAPP',
    icon: Server,
    description:
      '政务云容器技术安全防护，提供运行时安全、容器行为监控和镜像安全扫描。',
    tags: ['运行时安全', '容器行为监控', '镜像安全扫描', '微服务访问控制'],
    results: '解决容器业务安全难题',
  },
  {
    id: 'hunan_chuangfa',
    company: '湖南创发集团',
    industry: '制造业',
    solution: 'CNAPP',
    icon: Building2,
    description: '解决云上资产管理无序问题，提供资产清点、基线合规和入侵检测。',
    tags: ['资产清点', '基线合规', '镜像扫描', '集群扫描', '入侵检测'],
    results: '让攻击入侵无所遁形',
  },
  {
    id: 'daoke_cloud',
    company: '道客云安全',
    industry: '云服务',
    solution: 'CNAPP',
    icon: Cloud,
    description:
      '云原生管理平台供应商，提供从镜像安全到容器运行时安全的全阶段赋能。',
    tags: ['安全扫描', '基线合规', '入侵检测', '攻击溯源'],
    results: '提高平台附加价值',
  },
  {
    id: 'zte',
    company: '中兴通讯',
    industry: '通信',
    solution: 'CNAPP',
    icon: Server,
    description:
      '频繁利用微服务架构的通信企业，实现微服务间访问控制策略自动化。',
    tags: ['微服务访问控制', '策略自动化', '静态分析', '服务网格'],
    results: '自动生成访问控制策略',
  },
]

export function InteractiveCases() {
  const [selectedIndustry] = useState('全部')
  const [selectedSolution] = useState('全部')
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
