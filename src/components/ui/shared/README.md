# 共享组件库 (Shared Components)

这个目录包含了可重用的共享组件，用于统一项目中的重复逻辑和样式。

## 组件列表

### BaseCard

**功能**: 通用基础卡片组件 **用途**: 统一卡片样式和动画效果 **特性**:

- 多种变体 (default, hover, testimonial)
- 多种尺寸 (sm, md, lg)
- 可配置边框、阴影、悬停效果、背景光晕

```tsx
<BaseCard variant='hover' size='md' withBackgroundGlow={true}>
  <div>卡片内容</div>
</BaseCard>
```

### FeatureList

**功能**: 通用功能特性列表组件 **用途**: 避免重复的特性显示逻辑 **特性**:

- 支持最大显示数量控制
- 多种变体 (default, compact)
- 可自定义图标和样式

```tsx
<FeatureList
  features={['特性1', '特性2', '特性3']}
  maxVisible={4}
  title='核心特性'
/>
```

### ActionButton

**功能**: 通用行动按钮组件 **用途**: 统一按钮样式和主题配置 **特性**:

- 多种变体 (primary, secondary, outline)
- 多种尺寸 (sm, md, lg)
- 可配置图标和外部链接支持

```tsx
<ActionButton href='/contact' variant='primary'>
  联系我们
</ActionButton>
```

### SectionBackground

**功能**: 通用节区背景组件 **用途**: 统一背景样式和装饰元素 **特性**:

- 多种背景变体 (default, gradient, dots, radial)
- 可配置装饰点和光晕效果
- 自动处理容器和响应式布局

```tsx
<SectionBackground variant='default'>
  <div>节区内容</div>
</SectionBackground>
```

### NavLink

**功能**: 通用导航链接组件 **用途**: 统一导航链接样式和激活状态逻辑 **特性**:

- 自动激活状态检测
- 多种变体 (default, header, menu)
- 支持精确匹配和路径前缀匹配

```tsx
<NavLink href='/about' variant='header' exactMatch={false}>
  关于我们
</NavLink>
```

### TestimonialCard

**功能**: 通用评价卡片组件 **用途**: 统一客户评价展示样式 **特性**:

- 内置评分星级显示
- 行业标签和引号装饰
- 悬停动画效果

```tsx
<TestimonialCard
  content='这是一个很好的产品...'
  company='某公司'
  role='技术总监'
  rating={5}
  industry='科技'
/>
```

## 优化效果

### 代码重用性

- **产品卡片**: 从 150+ 行代码减少到 30+ 行
- **导航链接**: 统一激活状态逻辑，减少重复代码
- **节区背景**: 标准化背景装饰，提高一致性

### 维护性提升

- 样式变更只需修改一个组件
- 新功能可以通过 props 配置实现
- 类型安全和 IntelliSense 支持

### 性能优化

- 减少了重复的 CSS 类名
- 统一的动画配置
- 更好的 GPU 优化（避免昂贵的阴影效果）

## 使用建议

1. **优先使用共享组件**: 在创建新的卡片、按钮、背景时，首先考虑使用现有的共享组件
2. **通过 props 扩展**: 当需要新功能时，优先考虑通过 props 扩展而不是创建新组件
3. **保持一致性**: 使用统一的设计 token 和主题配置
4. **渐进式采用**: 可以逐步将现有组件迁移到共享组件

## 导入方式

```tsx
// 单个导入
import { BaseCard } from '@/components/ui/shared/BaseCard'

// 批量导入
import { BaseCard, FeatureList, ActionButton } from '@/components/ui/shared'
```
