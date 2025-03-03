import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "明焰安全-领先的全栈云原生安全",
  description:
    "明焰安全,为客户提供终端信息安全解决方案和服务,实时发现并防御各种已知未知的恶意信息攻击,划时代的终端信息安全防护方案",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
