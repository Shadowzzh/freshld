'use client'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between py-6 px-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <Image 
          src="/logo.png"
          alt="明焰安全 Logo"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <span className="text-xl font-medium">明焰安全</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className={`${pathname === '/' ? 'text-purple-600' : ''}`}>首页</Link>
        <div className="flex items-center gap-1">
          <Link href="/" className={`${pathname === '/products' ? 'text-purple-600' : ''}`}>产品与服务</Link>
          <ChevronDown className="w-4 h-4" />
        </div>
        <Link href="/" className={`${pathname === '/research' ? 'text-purple-600' : ''}`}>安全研究</Link>
        <Link href="/" className={`${pathname === '/solutions' ? 'text-purple-600' : ''}`}>解决方案</Link>
        <Link href="/about" className={`${pathname === '/about' ? 'text-purple-600' : ''}`}>关于我们</Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-[#CCFF00] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#b8e600] transition-colors">
          获取演示
        </button>
      </div>
    </nav>
  )
}

