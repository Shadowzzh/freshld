'use client'

import { useState } from 'react'
import {
  Shield,
  Network,
  Mail,
  Database,
  Bug,
  AlertTriangle,
  Globe,
  Cpu,
  Filter,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'
import { motion, AnimatePresence } from 'framer-motion'

// 应用场景数据
const scenariosData = [
  {
    id: 'ransomware',
    name: '勒索软件场景',
    icon: Shield,
    description: '模拟最新的勒索病毒攻击，检验防勒索系统的检测、阻断和恢复能力',
    tags: ['勒索防护', '文件加密', '数据恢复'],
    threat: '勒索软件变种',
    coverage: '检测、阻断、恢复',
    category: 'security',
  },
  {
    id: 'phishing',
    name: '钓鱼邮件场景',
    icon: Mail,
    description: '通过模拟钓鱼邮件攻击，验证邮件安全产品和员工的安全意识水平',
    tags: ['邮件安全', '社会工程', '意识培训'],
    threat: '钓鱼邮件攻击',
    coverage: '邮件过滤、用户培训',
    category: 'awareness',
  },
  {
    id: 'data-leak',
    name: '数据泄露场景',
    icon: Database,
    description: '模拟数据窃取和泄露行为，评估数据防泄露（DLP）策略的有效性',
    tags: ['数据保护', 'DLP策略', '权限控制'],
    threat: '数据窃取',
    coverage: '数据分类、访问控制',
    category: 'compliance',
  },
  {
    id: 'supply-chain',
    name: '软件供应链攻击',
    icon: Network,
    description: '模拟针对软件供应链的攻击，检测您的开发和部署流程中的安全漏洞',
    tags: ['供应链安全', '代码审计', 'CI/CD防护'],
    threat: '供应链投毒',
    coverage: '代码扫描、依赖检查',
    category: 'development',
  },
  {
    id: 'critical-vuln',
    name: '重大漏洞场景',
    icon: Bug,
    description:
      '针对最新披露的重大漏洞，进行模拟攻击，评估您的系统是否存在暴露面',
    tags: ['漏洞利用', '补丁管理', '风险评估'],
    threat: '0-day漏洞',
    coverage: '漏洞扫描、补丁验证',
    category: 'vulnerability',
  },
  {
    id: 'boundary',
    name: '边界验证场景',
    icon: Globe,
    description:
      '验证防火墙（FW）、入侵防御系统（IPS）、Web应用防火墙（WAF）和运行时应用自我保护（RASP）等边界安全产品的覆盖度和有效性',
    tags: ['边界防护', '入侵检测', 'WAF验证'],
    threat: '边界渗透',
    coverage: 'FW、IPS、WAF、RASP',
    category: 'network',
  },
  {
    id: 'exercise',
    name: '护网场景',
    icon: Cpu,
    description: '在护网行动前，全面模拟各类攻击，检验防御体系的实战效果',
    tags: ['实战演练', '攻防对抗', '应急响应'],
    threat: '多维度攻击',
    coverage: '全栈防护验证',
    category: 'exercise',
  },
  {
    id: 'owasp',
    name: 'OWASP Top 10 场景',
    icon: AlertTriangle,
    description:
      '覆盖OWASP Top 10等常见Web应用安全漏洞，全面检测应用层的安全风险',
    tags: ['Web安全', 'SQL注入', 'XSS防护'],
    threat: 'Web应用漏洞',
    coverage: '应用层安全检测',
    category: 'application',
  },
]

// 分类定义
const categories = [
  { id: 'all', name: '全部场景', color: 'primary' },
  { id: 'security', name: '安全防护', color: 'blue' },
  { id: 'network', name: '网络边界', color: 'green' },
  { id: 'application', name: '应用安全', color: 'orange' },
  { id: 'compliance', name: '合规管理', color: 'purple' },
  { id: 'exercise', name: '实战演练', color: 'red' },
]

export default function MeasureScenarios() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  // 过滤场景数据
  const filteredScenarios = scenariosData.filter(
    scenario =>
      selectedCategory === 'all' || scenario.category === selectedCategory,
  )

  return (
    <section className='py-24 relative bg-background'>
      <div className='container mx-auto px-4'>
        <div className='relative z-10'>
          {/* 标题区域 */}
          <AnimatedSection className='text-center mb-16'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6'>
              应用场景
            </div>
            <h2 className='text-3xl lg:text-4xl font-bold mb-4 text-primary'>
              全面覆盖企业安全防护薄弱环节
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              明焰安全度量验证平台针对企业面临的各类安全挑战，提供丰富的应用场景，
              帮助您全方位提升安全防护能力
            </p>
          </AnimatedSection>

          {/* 分类筛选 */}
          <AnimatedSection className='mb-12'>
            <div className='flex items-center justify-center mb-8'>
              <div className='flex items-center space-x-2 bg-card rounded-lg p-2 border border-primary/15'>
                <Filter className='w-4 h-4 text-muted-foreground ml-3' />
                <div className='flex space-x-1'>
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={cn(
                        'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                        'cursor-pointer',
                        selectedCategory === category.id
                          ? 'bg-primary text-white'
                          : 'text-muted-foreground hover:text-primary hover:bg-primary/5',
                      )}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 场景网格 */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatedList
                initialDelay={0.1}
                delayStep={0.1}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              >
                {filteredScenarios.map(scenario => (
                  <div
                    key={scenario.id}
                    className={cn(
                      'group relative p-6 rounded-2xl border border-primary/15',
                      'bg-card/50 backdrop-blur-sm',
                      'hover:border-primary/30 hover:bg-card/80 hover:scale-105',
                      'transition-all duration-300',
                      'h-full flex flex-col', // 添加 h-full 和 flex 布局
                    )}
                  >
                    {/* 内容 */}
                    <div className='relative'>
                      {/* 图标和标题 */}
                      <div className='flex items-start justify-between mb-4'>
                        <div className='flex items-center space-x-4'>
                          <div
                            className={cn(
                              'w-12 h-12 rounded-xl flex items-center justify-center',
                              'bg-primary/10 text-primary',
                              'group-hover:scale-110 transition-transform duration-300',
                            )}
                          >
                            <scenario.icon className='w-6 h-6' />
                          </div>
                          <div>
                            <h3 className='text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300'>
                              {scenario.name}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* 描述 */}
                      <p className='text-muted-foreground text-sm leading-relaxed mb-4'>
                        {scenario.description}
                      </p>

                      {/* 威胁类型和覆盖范围 */}
                      <div className='space-y-2 mb-4'>
                        <div className='flex items-center space-x-2'>
                          <span className='text-xs font-medium text-muted-foreground'>
                            威胁类型:
                          </span>
                          <span className='text-xs text-foreground'>
                            {scenario.threat}
                          </span>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <span className='text-xs font-medium text-muted-foreground'>
                            验证覆盖:
                          </span>
                          <span className='text-xs text-foreground'>
                            {scenario.coverage}
                          </span>
                        </div>
                      </div>

                      {/* 标签 */}
                      <div className='flex flex-wrap gap-2'>
                        {scenario.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={cn(
                              'px-2 py-1 rounded-md text-xs font-medium',
                              'bg-primary/5 text-primary/70',
                              'border border-primary/15',
                            )}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 悬停效果边框 */}
                    <div
                      className={cn(
                        'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100',
                        'transition-opacity duration-300',
                        'bg-gradient-to-br from-primary/10 via-transparent to-primary/5',
                        'pointer-events-none',
                      )}
                    />
                  </div>
                ))}
              </AnimatedList>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
