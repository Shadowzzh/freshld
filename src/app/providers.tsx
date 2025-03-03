// app/providers.tsx
"use client";
import { Toaster } from "sonner";
import { TRPCReactProvider } from "~/trpc/react";
import { HeroUIProvider } from "@heroui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <TRPCReactProvider>
        {children}
        <Toaster richColors position="top-center" />
      </TRPCReactProvider>
    </HeroUIProvider>
  );
}
