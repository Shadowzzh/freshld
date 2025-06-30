'use client'

import { cn } from '@/lib/utils'
import {
  AlertTriangle,
  Building,
  Factory,
  FileX,
  Landmark,
  Lock,
  Network,
  Search,
  Server,
  Shield,
  Users,
} from 'lucide-react'
import { motion } from 'motion/react'
import { AnimatedSection, AnimatedList } from '@/components/ui/animated-section'
import { ArchitectureHoverEffect } from '@/components/ui/architecture-hover-effect'
import { NumberTicker } from '@/components/ui/number-ticker'
import { OrbitingCircles } from '@/components/ui/orbiting-circles'

const scenarios = [
  {
    icon: Network,
    title: '防内网横向攻击',
    description: '监控内网流量，识别异常横向移动行为，阻断攻击扩散',
    benefits: [
      '实时监控内网通信',
      '异常行为识别',
      '自动阻断攻击',
      '攻击路径可视化',
    ],
    color: 'from-primary to-primary/80',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Lock,
    title: '主机隔离',
    description: '快速隔离受感染主机，防止威胁扩散到其他系统',
    benefits: ['一键隔离操作', '网络访问控制', '远程管理维护', '恢复连接管理'],
    color: 'from-primary to-primary/80',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Shield,
    title: '护网蓝队',
    description: '为护网演练提供专业的防护和检测能力支持',
    benefits: ['攻击检测告警', '威胁狩猎分析', '应急响应支持', '取证分析报告'],
    color: 'from-primary to-primary/80',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Search,
    title: '失陷主机定位',
    description: '快速识别和定位已被攻击者控制的主机设备',
    benefits: ['IOC指标检测', '行为异常分析', '失陷主机标记', '清理修复指导'],
    color: 'from-primary to-primary/80',
    bgColor: 'bg-primary/10',
  },
  {
    icon: FileX,
    title: '防勒索病毒',
    description: '专门针对勒索软件的防护，保护重要文件不被加密',
    benefits: ['文件行为监控', '加密行为阻断', '文件备份恢复', '勒索家族识别'],
    color: 'from-primary to-primary/80',
    bgColor: 'bg-primary/10',
  },
  {
    icon: AlertTriangle,
    title: '高级威胁检测',
    description: '检测APT攻击、零日漏洞利用等高级持续性威胁',
    benefits: ['APT攻击识别', '零日漏洞防护', '沙箱深度分析', '威胁情报匹配'],
    color: 'from-primary to-primary/80',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Users,
    title: '内部威胁监控',
    description: '监控内部用户异常行为，防范内部威胁和数据泄露',
    benefits: ['用户行为分析', '权限异常检测', '数据访问监控', '违规行为告警'],
    color: 'from-primary to-primary/80',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Server,
    title: '服务器安全防护',
    description: '为关键服务器提供专业的安全防护和监控',
    benefits: ['服务器加固', '进程行为监控', '系统完整性检查', '性能影响最小'],
    color: 'from-primary to-primary/80',
    bgColor: 'bg-primary/10',
  },
]

/* 双层环绕场景图 */
const Scenarios = () => {
  // 内层场景（核心防护）
  const innerScenarios = scenarios.slice(0, 4)
  // 外层场景（扩展防护）
  const outerScenarios = scenarios.slice(4, 8)

  return (
    <div className='flex-1 relative'>
      <div className='relative w-96 h-96 mx-auto flex items-center justify-center'>
        {/* 中心核心 */}
        <div className='relative flex flex-col items-center'>
          <div className='relative size-28 group flex items-center justify-center'>
            {/* 外层光环效果 */}
            <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full animate-pulse'></div>
            <div className='absolute inset-1 bg-gradient-to-br from-primary/30 to-primary/50 rounded-full blur-sm'></div>
            {/* 内部光泽效果 */}
            <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full'></div>

            {/* 内容 */}
            <div className='relative text-center text-white z-10'>
              <Shield className='size-7 mx-auto mb-1 drop-shadow-lg' />
              <div className='text-xs font-medium tracking-wide'>
                全场景防护
              </div>
            </div>
          </div>
          {/* 底部阴影 */}
          <div className='absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black/10 rounded-full blur-md'></div>
        </div>

        {/* 内层环绕 - 核心防护场景 */}
        <OrbitingCircles
          className='border-none bg-transparent'
          radius={110}
          duration={20}
          iconSize={80}
          path={true}
        >
          {innerScenarios.map((scenario, index) => (
            <motion.div
              key={`inner-${index}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className='group  relative'
            >
              <div
                className={cn(
                  'size-12 rounded-2xl border-3 border-white shadow-lg',
                  'flex items-center justify-center',
                  'group-hover:scale-110 transition-all duration-300',
                  'group-hover:border-primary/40 group-hover:bg-white/95',
                  'backdrop-blur-sm',
                  scenario.bgColor,
                )}
              >
                <scenario.icon
                  className={cn(
                    'w-6 h-6 transition-colors duration-300 text-primary',
                  )}
                />
              </div>
              <div
                className={cn(
                  'absolute -bottom-9 left-1/2 transform -translate-x-1/2 z-30',
                  'w-28 text-center opacity-0 group-hover:opacity-100',
                  'transition-all duration-300 group-hover:translate-y-1',
                  'pointer-events-none z-50',
                )}
              >
                <div
                  className={cn(
                    'text-xs font-medium text-gray-700 leading-tight z-20',
                    'bg-white/95 backdrop-blur-sm px-2 py-1.5 shadow-lg rounded overflow-hidden',
                    'border border-gray-200/50',
                  )}
                >
                  {scenario.title}
                </div>
              </div>
            </motion.div>
          ))}
        </OrbitingCircles>

        {/* 外层环绕 - 扩展防护场景 */}
        <OrbitingCircles
          className='border-none bg-transparent'
          radius={170}
          duration={50}
          iconSize={72}
          path={true}
          reverse={true}
        >
          {outerScenarios.map((scenario, index) => (
            <motion.div
              key={`outer-${index}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className='group  relative'
            >
              <div
                className={cn(
                  'size-15 rounded-2xl border-2 border-white/80 shadow-md',
                  'flex items-center justify-center',
                  'group-hover:scale-110 transition-all duration-300',
                  'group-hover:border-primary/30 group-hover:bg-white/90',
                  'backdrop-blur-sm',
                  scenario.bgColor,
                )}
              >
                <scenario.icon
                  className={cn(
                    'w-5 h-5 transition-colors duration-300 text-primary',
                  )}
                />
              </div>
              <div
                className={cn(
                  'absolute -bottom-10 left-1/2 transform -translate-x-1/2',
                  'w-28 text-center opacity-0 group-hover:opacity-100',
                  'transition-all duration-300 group-hover:translate-y-1',
                  'pointer-events-none z-50',
                )}
              >
                <div
                  className={cn(
                    'text-xs font-medium text-gray-700 leading-tight z-10',
                    'bg-white/95 backdrop-blur-sm px-2 py-1.5 shadow-lg rounded overflow-hidden',
                    'border border-gray-200/50',
                  )}
                >
                  {scenario.title}
                </div>
              </div>
            </motion.div>
          ))}
        </OrbitingCircles>
      </div>
    </div>
  )
}

export default function NGEPScenarios() {
  // 典型应用案例数据
  const typicalCases = [
    {
      title: '某大型企业护网演练',
      description:
        '在为期一周的护网演练中，成功检测并阻断了15次高级攻击尝试，零失陷记录。',
      subtitle: '行业：金融 | 规模：10000+终端',
      link: '#financial-case',
      icon: Building,
    },
    {
      title: '制造业勒索防护',
      description:
        '成功阻断WannaCry变种攻击，保护了关键生产数据，避免了生产线停机损失。',
      subtitle: '行业：制造 | 规模：5000+终端',
      link: '#manufacturing-case',
      icon: Factory,
    },
    {
      title: '政府机构APT防护',
      description:
        '发现并清除了潜伏6个月的APT攻击，完整还原了攻击路径，提供了详细的取证报告。',
      subtitle: '行业：政府 | 规模：3000+终端',
      link: '#government-case',
      icon: Landmark,
    },
  ]

  return (
    <section className={cn('py-24 bg-white', 'relative overflow-hidden')}>
      <div className={cn('mx-auto px-0 sm:px-6 lg:px-8')}>
        {/* 标题区域 */}
        <div className='max-w-7xl mx-auto'>
          <AnimatedSection className='text-center mb-16'>
            <div
              className={cn(
                'inline-flex items-center px-4 py-2 rounded-full',
                'bg-primary/10 text-primary font-semibold text-sm mb-4',
              )}
            >
              应用场景
            </div>

            <h2
              className={cn(
                'text-3xl md:text-4xl lg:text-5xl font-bold',
                'text-foreground mb-6',
              )}
            >
              全方位安全防护场景
            </h2>

            {/* 标题区域 */}
            <div className='relative mt-10'>
              <p className='text-xl text-muted-foreground leading-relaxed'>
                NGEP覆盖企业安全防护的
                <span className='text-primary font-semibold'>8大核心场景</span>
                ，从网络攻击防护到内部威胁监控， 构建
                <span className='text-foreground font-medium'>
                  全方位的安全防护体系
                </span>
                。
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* 场景展示 - 圆形中心布局 */}
        <div className='max-w-7xl mx-auto'>
          {/* 主要场景 - 圆形布局 */}
          <div className='relative mb-20'>
            <div className='flex flex-col lg:flex-row items-center gap-16'>
              <AnimatedSection>
                <Scenarios />
              </AnimatedSection>

              {/* 右侧详细说明 */}
              <div className={cn('flex-1', 'space-y-8')}>
                {/* 场景卡片列表 */}
                <AnimatedList direction='right' className={cn('space-y-3')}>
                  {scenarios.slice(0, 3).map((scenario, index) => (
                    <div
                      key={index}
                      className={cn(
                        'group relative ',
                        'p-5 rounded-xl',
                        'bg-white border border-gray-200/60',
                        'hover:border-primary/30 hover:bg-gradient-to-r hover:from-white hover:to-primary/5',
                        'hover:-translate-y-1',
                        'transition-all duration-300 ease-out',
                      )}
                    >
                      <div className={cn('flex items-start', 'space-x-4 ml-2')}>
                        {/* 图标容器 */}
                        <div className={cn('relative')}>
                          <div
                            className={cn(
                              'relative overflow-hidden flex-shrink-0',
                              'w-12 h-12 rounded-xl',
                              'flex items-center justify-center',
                              'group-hover:scale-110 group-hover:rotate-3',
                              'transition-all duration-300',
                              scenario.bgColor,
                            )}
                          >
                            {/* 图标光泽效果 */}
                            <div
                              className={cn(
                                'absolute inset-0',
                                'bg-gradient-to-br from-white/20 to-transparent',
                                'transition-opacity duration-300',
                              )}
                            ></div>

                            <scenario.icon
                              className={cn(
                                'relative z-10',
                                'w-6 h-6',
                                'text-gray-800',
                                'transition-colors duration-300',
                              )}
                            />
                          </div>

                          {/* 图标底部阴影 */}
                          <div
                            className={cn(
                              'opacity-0 group-hover:opacity-100',
                              'absolute  left-1/2 transform -translate-x-1/2',
                              'w-8 h-3 rounded-full blur-sm',
                              'bg-black/15',
                              'w-10 h-4',
                              'transition-all duration-300',
                            )}
                          ></div>
                        </div>

                        {/* 内容区域 */}
                        <div className={cn('flex-1 min-w-0')}>
                          <h4
                            className={cn(
                              'text-lg font-bold mb-2',
                              'text-foreground group-hover:text-primary',
                              'transition-all duration-300',
                            )}
                          >
                            {scenario.title}
                          </h4>

                          <p
                            className={cn(
                              'leading-relaxed',
                              'text-muted-foreground group-hover:text-foreground',
                              'transition-colors duration-300',
                            )}
                          >
                            {scenario.description}
                          </p>

                          {/* 特性标签 */}
                          <div
                            className={cn(
                              'flex flex-wrap gap-2 mt-3',
                              'transition-all duration-300 delay-75',
                            )}
                          >
                            {scenario.benefits
                              .slice(0, 2)
                              .map((benefit, benefitIndex) => (
                                <span
                                  key={benefitIndex}
                                  className={cn(
                                    'px-3 py-1 rounded-full',
                                    'bg-primary/5 text-primary/60',
                                    'text-xs font-medium',
                                    'hover:bg-primary/20 hover:border-primary/40',
                                    'hover:scale-105',
                                    'transition-all duration-200',
                                  )}
                                >
                                  {benefit}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>

                      {/* 右侧箭头指示器 */}
                      <div
                        className={cn(
                          'absolute right-4 top-1/2 transform -translate-y-1/2',
                          'opacity-0 group-hover:opacity-100',
                          'translate-x-2 group-hover:translate-x-0',
                          'transition-all duration-300',
                        )}
                      >
                        <div
                          className={cn(
                            'w-2 h-2 rounded-full',
                            'bg-primary',
                            'animate-pulse',
                          )}
                        ></div>
                      </div>
                    </div>
                  ))}
                </AnimatedList>
              </div>
            </div>
          </div>

          {/* 次要场景 - 网格布局 */}
          <AnimatedList className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-16'>
            {scenarios.slice(6).map((scenario, index) => (
              <div
                key={index + 6}
                className={cn(
                  'group p-6 rounded-xl',
                  'bg-white border border-gray-200',
                  'hover:border-primary/30 hover:bg-gradient-to-r hover:from-white hover:to-primary/5',
                  'transition-all duration-300',
                )}
              >
                <div className='flex items-start space-x-4'>
                  <div
                    className={cn(
                      'w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0',
                      scenario.bgColor,
                      'group-hover:scale-110 transition-transform',
                      'group-hover:rotate-3',
                    )}
                  >
                    {/* 图标底部阴影 */}
                    <div
                      className={cn(
                        'opacity-0 group-hover:opacity-100',
                        'absolute  left-1/2 transform -translate-x-1/2',
                        'w-8 h-3 rounded-full blur-sm',
                        'bg-black/15',
                        'w-10 h-4',
                        'transition-all duration-300',
                      )}
                    ></div>

                    <scenario.icon className='w-6 h-6 text-muted-foreground' />
                  </div>

                  <div className='flex-1'>
                    <h3 className='text-lg font-semibold text-foreground mb-2'>
                      {scenario.title}
                    </h3>
                    <p className='text-muted-foreground text-sm leading-relaxed mb-4'>
                      {scenario.description}
                    </p>

                    <div className='flex flex-wrap gap-2'>
                      {scenario.benefits
                        .slice(0, 2)
                        .map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-md'
                          >
                            {benefit}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedList>
        </div>

        {/* 场景统计 */}
        <div className='max-w-7xl mx-auto'>
          <AnimatedSection>
            <div
              className={cn(
                'bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/15',
                'rounded-3xl p-8 md:p-12',
              )}
            >
              <div className='text-center mb-12'>
                <h3
                  className={cn(
                    'text-2xl md:text-3xl font-bold text-foreground mb-4',
                  )}
                >
                  应用效果统计
                </h3>
                <p className='text-muted-foreground max-w-2xl mx-auto'>
                  在各种应用场景中的实际防护效果和客户反馈数据
                </p>
              </div>

              <AnimatedList
                className={cn('grid grid-cols-2 md:grid-cols-4 gap-8')}
              >
                {[
                  { value: 8, label: '核心应用场景', suffix: '' },
                  { value: 95, label: '威胁阻断率', suffix: '%' },
                  { value: 30, label: '平均响应时间', suffix: 's' },
                  { value: 1000, label: '成功案例', suffix: '+' },
                ].map((stat, index) => (
                  <div key={index} className='text-center'>
                    <div className='text-3xl font-bold text-primary mb-2'>
                      <NumberTicker
                        className='text-3xl font-bold text-primary'
                        value={stat.value}
                      />
                      {stat.suffix}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </AnimatedList>
            </div>
          </AnimatedSection>
        </div>

        {/* 典型案例 */}
        <div className='max-w-7xl mx-auto'>
          <AnimatedSection>
            <div
              className={cn(
                'mt-16 p-12 rounded-2xl',
                'bg-gradient-to-r from-gray-800 to-blue-700',
                'text-white',
              )}
            >
              <div className='text-center mb-12'>
                <h3 className='text-2xl font-bold mb-4'>典型应用案例</h3>
                <p className='text-blue-200'>真实客户环境中的成功防护案例</p>
              </div>

              <ArchitectureHoverEffect
                items={typicalCases}
                className='grid-cols-1 md:grid-cols-3 py-0'
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
