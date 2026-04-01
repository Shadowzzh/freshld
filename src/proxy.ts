import { NextRequest, NextResponse } from 'next/server'
import { env } from '@/env'

export function proxy(request: NextRequest) {
  const hostname = request.headers.get('host')
  const url = request.nextUrl.clone()

  // 获取部署模式和域名配置
  const deployMode = env.DEPLOY_MODE
  const downloadDomains = [
    'dl.fyreshld.cn', // 备用域名
    'dl.fyreshld.com', // 备用域名
  ]

  // 检测下载中心子域名，只允许访问 /lib 页面
  if (downloadDomains.includes(hostname || '')) {
    // 如果不是 /lib 路径，重定向到 /lib
    if (url.pathname !== '/lib') {
      url.pathname = '/lib'
      return NextResponse.redirect(url)
    }
    // 如果已经是 /lib 路径，正常处理
    return NextResponse.next()
  }

  // 新增：环境变量控制的部署模式路由限制
  if (deployMode === 'download') {
    const allowedPaths = ['/lib', '/api', '/_next', '/favicon.ico']
    const isAllowed =
      allowedPaths.some(path => url.pathname.startsWith(path)) ||
      url.pathname === '/'

    if (!isAllowed) {
      // 重定向到病毒库页面
      url.pathname = '/lib'
      return NextResponse.redirect(url)
    }

    // 如果是首页访问，也重定向到 /lib
    if (url.pathname === '/') {
      url.pathname = '/lib'
      return NextResponse.redirect(url)
    }
  }

  // full模式下禁止访问 /lib 页面
  if (deployMode === 'full' && url.pathname.startsWith('/lib')) {
    // 重定向到首页
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  // 匹配所有路径，除了 API、Next.js 内部文件和静态文件
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
