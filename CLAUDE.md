# 明焰安全

基于 Next.js 15 的网络安全公司企业级官网项目

## 核心脚本命令

- 开发服务器: `npm run dev`
- 构建项目: `npm run build`
- 启动生产服务器: `npm start`
- 代码 linting: `npm run lint`
- 代码格式化: `npm run format`
- 类型检查与 linting: `npm run check`
- 依赖分析: `npm run knip`

## 项目架构

- **Next.js 版本**: 15.3.4
- **React 版本**: 19.0.0
- **TypeScript**: 严格类型检查
- **路由**: App Router (Next.js 13+)
- **样式**: Tailwind CSS 4.0
- **组件库**: 自定义 UI 组件基于 Radix UI
- **动画**: Framer Motion
- **图标**: Lucide React
- **表单**: Tanstack React Form + Zod 验证
- **邮件**: Resend + React Email
- **构建**: Turbopack (开发环境)

## 项目目录结构

```
src/
├── app/                    # App Router 页面
│   ├── about/             # 关于我们页面
│   ├── cases/             # 客户案例页面
│   ├── contact/           # 联系我们页面
│   ├── products/          # 产品页面
│   │   ├── cdg/          # CDG 防勒索系统
│   │   ├── cnapp/        # CNAPP 云原生安全
│   │   ├── measure/      # 度量验证平台
│   │   └── ngep/         # NGEP 端点防护
│   ├── api/              # API 路由
│   ├── globals.css       # 全局样式
│   ├── layout.tsx        # 根布局
│   └── page.tsx          # 首页
├── components/            # 组件目录
│   ├── about/            # 关于页面组件
│   ├── cases/            # 案例页面组件
│   ├── cdg/              # CDG 产品组件
│   ├── cnapp/            # CNAPP 产品组件
│   ├── contact/          # 联系页面组件
│   ├── home/             # 首页组件
│   ├── measure/          # 度量验证组件
│   ├── ngep/             # NGEP 产品组件
│   ├── ui/               # 通用 UI 组件
│   ├── Footer.tsx        # 全局页脚
│   ├── Header.tsx        # 全局头部
│   └── ...              # 其他全局组件
├── assets/               # 静态资源
├── hooks/                # 自定义 hooks
├── lib/                  # 工具函数和配置
├── styles/               # 样式文件
└── utils/                # 实用工具
```

## 开发规范

### 代码规范

- 使用 ESLint 和 Prettier 进行代码规范
- 严格的 TypeScript 类型检查
- 遵循函数式编程原则
- 遵循组件化开发思想

### 样式规范

- 使用 Tailwind CSS 4.0 原子类
- 使用 `cn()` 函数合并类名（来自 `clsx` 和 `tailwind-merge`）
- 响应式设计优先
- 统一的设计系统和组件规范

### 组件规范

- 组件使用 TypeScript 严格类型定义
- 使用 Radix UI 作为无障碍组件基础
- 动画使用 Framer Motion
- 图标使用 Lucide React

## 页面开发标准模式

基于现有页面架构，所有页面开发遵循统一的标准模式：

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

### 页面组件命名规范

#### 标准组件类型

- **Hero组件**: `{PageName}Hero` - 页面顶部英雄区域
- **功能组件**: `{PageName}Features` 或 `{PageName}Capabilities` - 核心功能展示
- **场景组件**: `{PageName}Scenarios` 或 `{PageName}Cases` - 应用场景和案例
- **数据组件**: `{PageName}Metrics` - 数据展示
- **CTA组件**: `{PageName}CTA` - 行动号召
- **特殊组件**: 根据需要添加 `{PageName}Timeline`, `{PageName}Grid`, `{PageName}Overview` 等

#### 各页面组件命名示例

**首页 (Home) 组件**:

- `HeroSection` - 英雄区域
- `HeroCoreCompetency` - 核心竞争力
- `ProductOverviewSection` - 产品概览
- `TestimonialsSection` - 客户证言

**关于页面 (About) 组件**:

- `AboutHero` - 英雄区域
- `AboutInfo` - 基本信息（注意：实际文件名为 AbooutInfo.tsx，存在拼写错误）
- `WhyChooseUs` - 选择我们的理由
- `AboutTimelineDynamic` - 动态时间轴

**案例页面 (Cases) 组件**:

- `CasesHero` - 英雄区域
- `CasesMetrics` - 数据指标
- `InteractiveCases` - 交互式案例
- `IndustryGrid` - 行业网格
- `CasesTimeline` - 时间轴
- `CasesCTA` - 行动号召

**联系页面 (Contact) 组件**:

- `ContactHero` - 英雄区域
- `ContactForm` - 联系表单
- `CompanyLocations` - 公司位置

**产品页面组件**:

- `MeasureHero`, `MeasureCapabilities`, `MeasureFeatures`, `MeasureScenarios`, `MeasureCTA` (度量验证)
- `CDGHero`, `CDGOverview`, `CDGArchitecture`, `CDGFeatures`, `CDGTechnology`, `CDGScenarios` (CDG防勒索)
- `CNAPPHero`, `CNAPPOverview`, `CNAPPCapabilities`, `CNAPPAdvantages`, `CNAPPScenarios`, `CNAPPArchitecture` (CNAPP)
- `NGEPHero`, `NGEPOverview`, `NGEPCapabilities`, `NGEPAdvantages`, `NGEPScenarios`, `NGEPArchitecture` (NGEP)

### 布局模式

#### 标准布局（推荐）

```typescript
<main className={cn('min-h-screen')}>
  <Header />
  <div className='min-h-screen'>
    {/* 页面组件序列 */}
  </div>
  <Footer />
</main>
```

#### 替代布局

```typescript
<div className={cn('min-h-screen bg-background')}>
  <Header />
  <main className={cn('relative')}>
    {/* 页面组件序列 */}
  </main>
  <Footer />
</div>
```

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

## 技术栈详情

### 核心依赖

- **Next.js 15.3.4**: React 框架，使用 App Router
- **React 19.0.0**: UI 库
- **TypeScript 5**: 类型安全
- **Tailwind CSS 4**: 样式框架
- **Framer Motion 12**: 动画库

### UI 组件

- **Radix UI**: 无障碍组件基础
  - `@radix-ui/react-dialog`
  - `@radix-ui/react-navigation-menu`
  - `@radix-ui/react-slot`
  - `@radix-ui/react-tabs`
- **Lucide React**: 图标库
- **Class Variance Authority**: 组件变体管理
- **Tailwind Merge**: 类名合并工具

### 表单和验证

- **Tanstack React Form**: 表单管理
- **Zod**: 数据验证

### 邮件服务

- **Resend**: 邮件发送服务
- **React Email**: 邮件模板

### 开发工具

- **ESLint**: 代码检查
- **Prettier**: 代码格式化
- **Knip**: 依赖分析

## 发布前检查流程

1. 运行 `npm run lint` 进行代码规范检查
2. 运行 `npm run check` 进行类型检查和 linting
3. 运行 `npm run format` 进行代码格式化
4. 运行 `npm run build` 进行构建检查
5. 运行 `npm run knip` 检查未使用的依赖

## 部署说明

### Docker 部署 (推荐)

项目支持 Docker 部署，配置了：

- `Dockerfile`: 多阶段构建，优化镜像大小
- `docker-compose.yml`: 简化部署流程
- `next.config.ts`: 配置了 `output: 'standalone'` 支持 Docker 部署

### 部署命令

```bash
# 使用 Docker Compose
docker-compose up -d

# 或手动构建
docker build -t freshld-app .
docker run -p 3000:3000 freshld-app
```

## 重要提醒

1. **代码质量**: 严格遵循 TypeScript 类型检查和 ESLint 规范
2. **组件复用**: 优先使用现有组件，避免重复开发
3. **性能优化**: 使用 Turbopack 开发环境，优化构建性能
4. **SEO 优化**: 所有页面必须配置完整的 metadata
5. **响应式设计**: 确保所有页面在不同设备上正常显示
6. **无障碍访问**: 使用 Radix UI 确保组件的无障碍访问性

## 实际参考案例

- 首页：`src/app/page.tsx`
- 关于页面：`src/app/about/page.tsx`
- 客户案例：`src/app/cases/page.tsx`
- 联系我们：`src/app/contact/page.tsx`
- 产品页面：`src/app/products/*/page.tsx`

遵循以上规范，确保项目开发的一致性和高质量！
