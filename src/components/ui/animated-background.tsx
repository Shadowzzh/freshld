'use client'
import { cn } from '@/lib/utils'
import { AnimatePresence, Transition, motion } from 'framer-motion'
import {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useState,
  useId,
  useCallback,
} from 'react'

interface ChildProps {
  // 子元素的 data-id 属性
  'data-id': string
  // 子元素的 aria-selected 属性
  'aria-selected'?: boolean
  // 子元素的 data-checked 属性
  'data-checked'?: boolean
  // 子元素的 className 属性
  className?: string
}

// 定义 AnimatedBackground 组件的属性类型
type AnimatedBackgroundProps = {
  // 子元素，必须包含 data-id 属性
  children:
    | ReactElement<{ 'data-id': string }>[]
    | ReactElement<{ 'data-id': string }>
  // 默认激活的元素 ID
  defaultValue?: string
  // 当激活状态改变时的回调函数
  onValueChange?: (newActiveId: string | null) => void
  // 背景样式类名
  className?: string
  // 动画过渡配置
  transition?: Transition
  // 是否启用悬停效果
  enableHover?: boolean
}

/**
 * 动画背景组件
 * @param children 子元素
 * @param defaultValue 默认激活的元素 ID
 * @param onValueChange 当激活状态改变时的回调函数
 * @param className 背景样式类名
 * @param transition 动画过渡配置
 * @param enableHover 是否启用悬停效果
 * @returns 动画背景组件
 */
export const AnimatedBackground = ({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) => {
  // 当前激活元素的 ID 状态
  const [activeId, setActiveId] = useState<string | null>(defaultValue || null)
  // 生成唯一 ID，用于 layoutId
  const uniqueId = useId()

  const handleSetActiveId = useCallback(
    (id: string | null) => {
      setActiveId(prevId => {
        // 如果 ID 没有变化，直接返回之前的值
        if (prevId === id) return prevId

        // 如果提供了回调函数，则调用它
        onValueChange?.(id)
        return id
      })
    },
    [onValueChange],
  )

  // 当 defaultValue 改变时，更新激活状态
  useEffect(() => {
    if (defaultValue !== undefined) {
      setActiveId(defaultValue)
    }
  }, [defaultValue])

  // 遍历子元素并为每个元素添加交互功能
  return Children.map(children, (child: ReactElement<ChildProps>, index) => {
    // 获取子元素的 data-id 属性
    const id = child.props['data-id']

    // 根据 enableHover 决定交互方式
    const interactionProps = enableHover
      ? {
          // 悬停模式：鼠标进入时激活，离开时取消激活
          onMouseEnter: () => handleSetActiveId(id),
          onMouseLeave: () => handleSetActiveId(null),
        }
      : {
          // 点击模式：点击时激活
          onClick: () => handleSetActiveId(id),
        }

    const isActive = activeId === id

    // 克隆子元素并添加新的属性
    return (
      <div
        key={id || index} // 优先使用 id 作为 key
        className={cn('relative inline-flex', child.props.className)}
        {...interactionProps}
      >
        <AnimatePresence mode='wait'>
          {/* 只有当前元素被激活时才显示背景 */}
          {isActive && (
            <motion.div
              // 使用唯一的 layoutId 实现共享布局动画
              layoutId={`background-${uniqueId}`}
              // 背景样式：绝对定位覆盖整个元素
              className={cn('absolute inset-0', className)}
              // 动画过渡配置
              transition={transition}
              // 初始状态：透明
              initial={{ opacity: 0 }}
              // 进入动画：完全不透明
              animate={{ opacity: 1 }}
              // 退出动画：完全透明
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>

        {/* 内容层：相对定位确保在背景之上 */}
        {cloneElement(child, {
          // 设置 aria-selected 属性用于无障碍访问
          'aria-selected': isActive,
          // 设置 data-checked 属性表示选中状态
          'data-checked': isActive,
        })}
      </div>
    )
  })
}
