import { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import {
  CNAPPHero,
  CNAPPOverview,
  CNAPPCapabilities,
  CNAPPAdvantages,
  CNAPPScenarios,
  CNAPPArchitecture,
} from '@/components/cnapp'
import { cnappMetadata } from '@/lib/metadata'

export const metadata: Metadata = cnappMetadata

export default function CNAPPPage() {
  return (
    <div className={cn('min-h-screen bg-background')}>
      <Header />
      <main className={cn('relative')}>
        <CNAPPHero />
        <CNAPPOverview />
        <CNAPPCapabilities />
        <CNAPPAdvantages />
        <CNAPPScenarios />
        <CNAPPArchitecture />
      </main>
      <Footer />
    </div>
  )
}
