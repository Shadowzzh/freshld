# 关于本项目

这是一个使用 [T3 Stack](https://create.t3.gg/) 创建的项目，通过 `create-t3-app` 启动。

### 如何开始

这个项目的目标是尽可能简单，提供了基本的框架，之后可以根据需求添加其他功能。以下是项目中使用的技术栈：

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

如果你对这些技术不熟悉，可以查阅各自的文档，或加入 [Discord](https://t3.gg/discord) 寻求帮助。

### 学习资源

如果你想深入了解 [T3 Stack](https://create.t3.gg/)，可以参考以下资源：

- [T3 Stack 文档](https://create.t3.gg/)
- [学习 T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — 查阅这些精彩的教程
- 查看 [create-t3-app GitHub 仓库](https://github.com/t3-oss/create-t3-app) — 欢迎你的反馈和贡献！


### 项目配置文件

1. [package.json](./package.json) - [详细注释文档](./docs/package.json详解.md)
2. [tsconfig.json](./tsconfig.json) \*
3. [next.config.js](./next.config.js) \*
4. [tailwind.config.ts](./tailwind.config.ts) \*
5. [postcss.config.js](./postcss.config.js) \*
6. [.eslintrc.cjs](./.eslintrc.cjs) \*

### 应用入口与布局

1. [src/app/layout.tsx](./src/app/layout.tsx) \*
2. [src/app/providers.tsx](./src/app/providers.tsx) \*
3. [src/app/page.tsx](./src/app/page.tsx) \*

### 环境配置

1. [src/env.js](./src/env.js) \*

### 核心组件

1. [src/components/hero.tsx](./src/components/hero.tsx) \*
2. [src/components/navbar.tsx](./src/components/navbar.tsx) \*
3. [src/components/features.tsx](./src/components/features.tsx) \*
4. [src/components/features-list.tsx](./src/components/features-list.tsx) \*
5. [src/components/services.tsx](./src/components/services.tsx) \*
6. [src/components/free-trial.tsx](./src/components/free-trial.tsx) \*
7. [src/components/footer.tsx](./src/components/footer.tsx) \*

### 3D模型与动画组件

1. [src/components/DiamondScene.tsx](./src/components/DiamondScene.tsx) \*
2. [src/components/PrismaticDiamond.tsx](./src/components/PrismaticDiamond.tsx) \*
3. [src/components/ServerModel.tsx](./src/components/ServerModel.tsx) \*
4. [src/components/ServerScene.tsx](./src/components/ServerScene.tsx) \*
5. [src/components/ProtectiveNetwork.tsx](./src/components/ProtectiveNetwork.tsx) \*
6. [src/components/CoreTechnologies.tsx](./src/components/CoreTechnologies.tsx) \*
7. [src/components/ProductCases.tsx](./src/components/ProductCases.tsx) \*

### 邮件功能

1. [src/components/email-template.tsx](./src/components/email-template.tsx) \*
2. [src/lib/resend.ts](./src/lib/resend.ts) \*
3. [src/server/api/routers/email.ts](./src/server/api/routers/email.ts) \*

### tRPC配置

1. [src/server/api/trpc.ts](./src/server/api/trpc.ts) \*
2. [src/server/api/root.ts](./src/server/api/root.ts) \*
3. [src/trpc/server.ts](./src/trpc/server.ts) \*
4. [src/trpc/react.tsx](./src/trpc/react.tsx) \*
5. [src/trpc/query-client.ts](./src/trpc/query-client.ts) \*

### 工具函数

1. [src/lib/utils.ts](./src/lib/utils.ts) \*

### 样式

1. [src/styles/globals.css](./src/styles/globals.css) \*
