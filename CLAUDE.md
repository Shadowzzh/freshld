# CLAUDE.md

基于 Next.js 15 的网络安全公司企业级官网项目

## 🔨 Commands

```bash
npm run dev         # 开发服务器 (Turbopack)
npm run build       # 构建生产版本
npm run check       # 类型检查 + lint
npm run format      # 代码格式化
```

## 🏗 Architecture

```
src/
├── app/(main)/           # 主站页面: home, about, cases, contact, products/*
├── app/(standalone)/     # 独立页面: example, lib
├── app/api/             # API routes (send-email)
├── components/
│   ├── {page}/          # 页面专用组件 (about/, cases/, home/, etc)
│   ├── ui/              # 通用UI原子组件 + Radix包装
│   └── Header.tsx       # 全局布局组件
├── assets/              # 静态资源 (合作伙伴logo等)
├── lib/                 # 工具函数 + 配置
└── utils/               # 动画工具函数
```

**路由架构**: 使用App Router + 路由组分离主站与独立功能

## 🧠 Patterns & Idioms

**组件命名**: `{PageName}{ComponentType}` - 如 `AboutHero`, `CasesMetrics`, `MeasureCTA`

**页面结构标准**:

```tsx
<main className='min-h-screen'>
  <Header />
  <div className='min-h-screen'>{/* PageHero + PageFeatures + PageCTA */}</div>
  <Footer />
</main>
```

**样式系统**: 严格使用 `cn()` 合并类名，优先使用 `components/ui/shared/*` 共享组件

**表单处理**: TanStack React Form + Zod验证，邮件通过Resend + React Email

**动画策略**: Framer Motion用于页面交互，优先使用 `utils/animations.ts` 预设

**路由组织**: 主站页面放在 `(main)` 组，独立功能页面放在 `(standalone)` 组

## 🛠 Tech Stack

- **Framework**: Next.js 15 + App Router + React 19
- **Styling**: Tailwind CSS 4.0 + Class Variance Authority
- **UI Components**: Radix UI primitives + 自定义封装
- **Animation**: Framer Motion 12
- **Forms**: TanStack React Form + Zod
- **Email**: Resend + React Email
- **Icons**: Lucide React

**关键配置**: `output: 'standalone'` 支持Docker部署，Turbopack开发环境
