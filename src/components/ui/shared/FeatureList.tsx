import { cn } from '@/lib/utils'
import { CheckCircle, Sparkles } from 'lucide-react'

interface FeatureListProps {
  features: string[]
  title?: string
  icon?: React.ComponentType<{ className?: string }>
  maxVisible?: number
  variant?: 'default' | 'compact'
  iconStyle?: 'primary' | 'success' | 'custom'
  className?: string
}

export function FeatureList({
  features,
  title = '核心特性',
  icon: Icon = Sparkles,
  maxVisible = 4,
  variant = 'default',
  iconStyle = 'primary',
  className,
}: FeatureListProps) {
  const visibleFeatures = features.slice(0, maxVisible)
  const hiddenCount = features.length - maxVisible

  const iconStyleConfig = {
    primary: 'bg-primary/10 text-primary',
    success: 'bg-green-100 text-green-600',
    custom: 'bg-gray-100 text-gray-600',
  }

  const variantConfig = {
    default: {
      container: 'mb-8 ',
      title: 'text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2',
      grid: 'grid xl:grid-cols-2 gap-3',
      item: 'flex items-center space-x-3 group/feature',
      icon: 'w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0',
      text: 'text-sm font-medium text-gray-700 group-hover/feature:text-gray-900 transition-colors duration-300',
    },
    compact: {
      container: 'mb-6',
      title: 'text-xs font-semibold text-gray-700 mb-3 flex items-center gap-2',
      grid: 'grid grid-cols-1 gap-2',
      item: 'flex items-center space-x-2 group/feature',
      icon: 'w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0',
      text: 'text-xs font-medium text-gray-600 group-hover/feature:text-gray-800 transition-colors duration-300',
    },
  }

  const config = variantConfig[variant]

  return (
    <div className={cn(config.container, className)}>
      {/* 标题 */}
      <h4 className={config.title}>
        <Icon className='w-4 h-4 text-primary' />
        {title}
      </h4>

      {/* 特性列表 */}
      <div className={config.grid}>
        {visibleFeatures.map((feature, index) => (
          <div key={index} className={config.item}>
            <div
              className={cn(
                config.icon,
                'transition-all duration-300',
                iconStyleConfig[iconStyle],
                'group-hover/feature:scale-110 group-hover/feature:rotate-12',
              )}
            >
              <CheckCircle className='w-3 h-3' />
            </div>
            <span className={config.text}>{feature}</span>
          </div>
        ))}
      </div>

      {/* 更多特性提示 */}
      {hiddenCount > 0 && (
        <div className='mt-3 text-xs text-primary/70 font-medium'>
          +{hiddenCount} 更多特性
        </div>
      )}
    </div>
  )
}
