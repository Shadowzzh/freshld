# package.json 详解

本文档详细解释了项目中的 `package.json` 文件，帮助小学生也能理解这个重要的配置文件。

## 基本信息

- **项目名称**：`"fyreshld-site"` - 这是我们网站的名字
- **版本号**：`"0.1.0"` - 表示这是一个初始版本
- **私有项目**：`"private": true` - 这个设置表示该项目不会被发布到公共npm仓库
- **模块类型**：`"type": "module"` - 表示使用ES模块系统，这是现代JavaScript的标准

## 脚本命令

这些命令可以在终端中通过 `npm run 命令名` 或 `pnpm 命令名` 来运行：

- **构建项目**：`"build": "next build"` - 把代码转换成可以部署的格式
- **检查代码**：`"check": "next lint && tsc --noEmit"` - 运行代码检查和类型检查，确保没有错误
- **开发模式**：`"dev": "next dev --turbo"` - 启动开发服务器，还使用了turbo模式加速
- **检查代码格式**：`"format:check": "prettier --check \"**/*.{ts,tsx,js,jsx,mdx}\" --cache"` - 查看所有指定类型的文件格式是否正确
- **修复代码格式**：`"format:write": "prettier --write \"**/*.{ts,tsx,js,jsx,mdx}\" --cache"` - 自动修复所有指定类型文件的格式问题
- **代码检查**：`"lint": "next lint"` - 检查代码是否符合规则
- **修复代码问题**：`"lint:fix": "next lint --fix"` - 自动修复代码中的一些问题
- **预览模式**：`"preview": "next build && next start"` - 先构建项目，然后以生产模式启动
- **启动服务**：`"start": "next start"` - 以生产模式启动服务
- **类型检查**：`"typecheck": "tsc --noEmit"` - 检查TypeScript类型是否正确

## 项目依赖

项目依赖就像是积木，我们用这些积木来搭建我们的网站：

### UI和样式相关

- **`@heroui/react`** - UI组件库，提供漂亮的界面元素
- **`@radix-ui/react-slot`** 和 **`@radix-ui/react-switch`** - UI组件库，提供基础UI元素
- **`class-variance-authority`** - CSS工具，简化CSS类的管理
- **`clsx`** - CSS工具，合并CSS类名
- **`geist`** - Geist字体
- **`lucide-react`** - 图标库，提供各种漂亮的图标
- **`tailwind-merge`** - Tailwind合并，合并Tailwind CSS类
- **`tailwindcss-animate`** - Tailwind动画，为Tailwind添加动画功能

### 3D渲染相关

- **`@pmndrs/assets`** - 3D资源管理库，用于管理3D模型和资源
- **`@react-three/drei`** - 3D渲染助手，帮助在网页上显示3D模型
- **`@react-three/fiber`** - 3D渲染核心，React中渲染3D内容的主要库
- **`three`** - Three.js，强大的3D图形库

### 框架和核心库

- **`next`** - Next.js框架，React的全栈框架，用于构建网站
- **`react`** - React库，用于构建用户界面的JavaScript库
- **`react-dom`** - React DOM，React与浏览器DOM的桥梁
- **`motion`** - 动画库，让网页元素可以动起来

### 数据和API相关

- **`@t3-oss/env-nextjs`** - 环境变量处理，安全地管理环境变量
- **`@tanstack/react-form`** - 表单管理，处理表单数据和验证
- **`@tanstack/react-query`** - 数据获取和缓存，管理从服务器获取的数据
- **`@trpc/client`** - tRPC客户端，用于类型安全的API调用
- **`@trpc/react-query`** - tRPC与react-query集成，把tRPC和react-query结合使用
- **`@trpc/server`** - tRPC服务器，在服务器端处理API请求
- **`@trpc/tanstack-react-query`** - tRPC与Tanstack查询集成
- **`superjson`** - JSON序列化，处理复杂的JSON数据
- **`zod`** - 数据验证库，确保数据正确

### 邮件和通知相关

- **`@react-email/components`** - 邮件组件，用于创建漂亮的电子邮件模板
- **`resend`** - 发送邮件，用于发送电子邮件的服务
- **`sonner`** - 提示通知，显示漂亮的通知消息

### 其他工具

- **`react-intersection-observer`** - 交叉观察器，检测元素是否在视口中可见
- **`server-only`** - 服务器专用，标记只在服务器上运行的代码
- **`suspend-react`** - React暂停，用于控制React渲染流程

## 开发依赖

这些库只在开发时需要，不会包含在最终产品中：

### 类型定义

- **`@types/eslint`**, **`@types/node`**, **`@types/react`**, **`@types/react-dom`**, **`@types/three`** - 这些是类型定义文件，帮助编辑器理解各种库的类型

### 代码质量工具

- **`@typescript-eslint/eslint-plugin`** 和 **`@typescript-eslint/parser`** - ESLint插件，代码检查工具
- **`eslint`** - 代码质量检查工具
- **`eslint-config-next`** - Next.js的ESLint配置
- **`prettier`** - 代码格式化工具，让代码看起来漂亮整洁
- **`prettier-plugin-tailwindcss`** - Prettier的Tailwind插件，专门处理Tailwind CSS

### CSS和样式工具

- **`postcss`** - CSS处理工具
- **`tailwindcss`** - 实用工具优先的CSS框架

### 语言工具

- **`typescript`** - JavaScript的类型超集，增加类型安全

## 元数据

- **`ct3aMetadata`** - 记录使用的create-t3-app版本
- **`packageManager`** - 使用pnpm作为包管理器，版本是10.4.1

## 为什么需要package.json？

想象一下，package.json就像是一个食谱菜单。如果你想做一道菜，需要知道：

1. 菜的名字（项目名称）
2. 需要哪些食材（依赖）
3. 怎么烹饪（脚本命令）

当其他人想要运行你的项目时，他们可以通过查看package.json知道需要准备哪些"食材"（依赖）和如何"烹饪"（运行）你的项目。

这样，无论谁拿到你的代码，只要运行`npm install`或`pnpm install`命令，就会自动安装所有需要的依赖，然后就可以通过`npm run dev`或`pnpm dev`命令来启动项目了！