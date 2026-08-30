import { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import NGEPHero from '@/components/ngep/NGEPHero'
import NGEPOverview from '@/components/ngep/NGEPOverview'
import NGEPCapabilities from '@/components/ngep/NGEPCapabilities'
import NGEPAdvantages from '@/components/ngep/NGEPAdvantages'
import NGEPScenarios from '@/components/ngep/NGEPScenarios'
import NGEPArchitecture from '@/components/ngep/NGEPArchitecture'
import { ngepMetadata } from '@/lib/metadata'

export const metadata: Metadata = ngepMetadata

export default function NGEPPage() {
  return (
    <main className={cn('min-h-screen')}>
      <Header />
      <div className='min-h-screen'>
        <NGEPHero />
        <NGEPOverview />
        <NGEPCapabilities />
        <NGEPAdvantages />
        <NGEPScenarios />
        <NGEPArchitecture />
      </div>
      <Footer />
    </main>
  )
}
