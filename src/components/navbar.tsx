"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FreeTrial } from "./free-trial";
export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="明焰安全 Logo"
          width={32}
          height={32}
          className="h-8 w-8"
        />
        <span className="text-xl font-medium">明焰安全</span>
      </div>

      <div className="hidden items-center gap-8 md:flex">
        <Link
          href="/"
          className={`${pathname === "/" ? "text-purple-600" : ""}`}
        >
          首页
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className={`${pathname === "/products" ? "text-purple-600" : ""}`}
          >
            产品与服务
          </Link>
          <ChevronDown className="h-4 w-4" />
        </div>
        <Link
          href="/"
          className={`${pathname === "/research" ? "text-purple-600" : ""}`}
        >
          安全研究
        </Link>
        <Link
          href="/"
          className={`${pathname === "/solutions" ? "text-purple-600" : ""}`}
        >
          解决方案
        </Link>
        <Link
          href="/about"
          className={`${pathname === "/about" ? "text-purple-600" : ""}`}
        >
          关于我们
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <FreeTrial />
      </div>
    </nav>
  );
}
