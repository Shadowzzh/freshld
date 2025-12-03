import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')
  const url = request.nextUrl.clone()

  // 检测子域名 dl.fyreshld.com，只允许访问 /lib 页面
  if (['dl.fyreshld.com', 'dl.fyreshld.cn'].includes(hostname || '')) {
    // 如果不是 /lib 路径，重定向到 /lib
    if (url.pathname !== '/lib') {
      url.pathname = '/lib'
      return NextResponse.redirect(url)
    }
    // 如果已经是 /lib 路径，正常处理
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  // 匹配所有路径，除了 API、Next.js 内部文件和静态文件
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
