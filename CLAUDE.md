# 明焰安全

基于 Next.js 14 的网络安全公司企业级官网项目

## 核心脚本命令

- 测试: `npm test`
- 类型检查: `npm run type-check`
- 代码 linting: `npm run lint`
- 构建项目: `npm run build`

## 项目架构

- 使用 app router
- 组件存放在 `src/components/` 目录
- 页面存放在 `src/app/` 目录
- 样式使用 Tailwind CSS
- 使用 TypeScript

## 开发规范

- 使用 ESLint 和 Prettier 进行代码规范
- 遵循函数式编程
- 遵循组件化思想
- 样式使用 Tailwind CSS 原子类

## 代码质量

- 严格的类型检查和约束
- 代码格式化和规范
- 使用 TypeScript 进行类型安全

## 发布前检查流程

1. 运行 `npm run lint` 进行代码规范检查
2. 运行 `npm run type-check` 进行类型检查
3. 运行 `npm test` 进行单元测试
4. 运行 `npm run build` 进行构建检查是否成功

## 页面开发标准模式

基于现有 measure 和 cases 页面架构，页面开发遵循统一模式！

### 页面文件结构

```typescript
import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { cn } from '@/lib/utils'
import {
  // 按照页面组件命名规范：{PageName}{ComponentType}
  // 如：ProductHero, ProductFeatures, ProductCTA
} from '@/components/{pageName}'

export const metadata: Metadata = {
  title: '{页面标题} - {副标题} | 明焰安全',
  description: '{页面描述120-160字，需包含关键词描述核心功能}',
  keywords: [
    // 5-10个关键词
  ].join(','),
  authors: [{ name: '明焰安全' }],
  creator: '明焰安全',
  publisher: '明焰安全',
  category: '网络安全',

  openGraph: {
    title: '{页面标题} - {副标题}',
    description: '{简短页面描述适合分享}',
    type: 'website',
    locale: 'zh_CN',
    siteName: '明焰安全',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://www.mingyan.com/{pagePath}',
  },
}

export default function {PageName}Page() {
  return (
    <main className={cn('min-h-screen')}>
      <Header />
      <div className='min-h-screen'>
        {/* 页面组件按逻辑顺序排列 */}
        {/* 通常包含：Hero, Features/Capabilities, Scenarios/Cases, CTA */}
      </div>
      <Footer />
    </main>
  )
}
```

### 标准组件类型

- **Hero组件**: `{PageName}Hero` - 页面顶部英雄区域
- **功能组件**: `{PageName}Features` 或 `{PageName}Capabilities` - 核心功能展示
- **场景组件**: `{PageName}Scenarios` 或 `{PageName}Cases` - 应用场景和案例
- **数据组件**: `{PageName}Metrics` - 数据展示
- **CTA组件**: `{PageName}CTA` - 行动号召
- **特殊组件**: 根据需要添加 `{PageName}Timeline`, `{PageName}Grid` 等

### 样式规范要求

1. **布局结构**:

   - 使用 `main` 标签包裹整个页面，添加 `min-h-screen` 类
   - Header 和 Footer 独立于主要内容之外
   - 页面内容包裹在带有 `min-h-screen` 的 div 中

2. **样式**:

   - 使用 Tailwind CSS 进行样式设计
   - 使用 `cn()` 函数合并类名
   - 保持响应式设计
   - 统一的间距和颜色搭配

3. **SEO优化**:

   - 完整的 metadata 配置
   - 关键词优化
   - 完善 OpenGraph 配置
   - 设置 canonical URL

4. **组件组织**:
   - 页面组件统一存放在 `src/components/{pageName}/` 目录
   - 使用 index.ts 文件导出组件
   - 遵循清晰的命名规范

### 实际参考案例

1. 度量验证页面：`src/app/products/measure/page.tsx`
2. 客户案例页面：`src/app/cases/page.tsx`
3. 关于我们页面：`src/app/about/page.tsx`
4. 联系我们页面：`src/app/contact/page.tsx`

## 页面组件命名规范

### Measure 页面组件：

- `MeasureHero` - 英雄区域
- `MeasureCapabilities` - 能力展示
- `MeasureFeatures` - 功能特性
- `MeasureScenarios` - 应用场景
- `MeasureCTA` - 行动号召

### Cases 页面组件：

- `CasesHero` - 英雄区域
- `CasesMetrics` - 数据指标
- `InteractiveCases` - 交互式案例
- `IndustryGrid` - 行业网格
- `CasesTimeline` - 时间轴
- `CasesCTA` - 行动号召

### About 页面组件：

- `AboutHero` - 英雄区域
- `AboutInfo` - 基本信息（注意：实际文件名为 AbooutInfo.tsx，有拼写错误）
- `WhyChooseUs` - 选择我们的理由
- `AboutTimelineDynamic` - 动态时间轴

### Contact 页面组件：

- `ContactHero` - 英雄区域
- `ContactForm` - 联系表单
- `CompanyLocations` - 公司位置

## 布局模式分析

### Standard Layout（标准布局）：

- measure, cases, about 页面都采用：`Header > main > min-h-screen div > 组件序列 > Footer`

### Alternative Layout（替代布局）：

- contact 页面采用：`Header > main > ContactHero + 网格布局 > Footer`

推荐优先使用标准布局模式，特殊需求时可参考替代布局。

遵循以上规范，确保页面开发的一致性和质量！
