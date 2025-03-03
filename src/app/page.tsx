import { Navbar } from '~/components/navbar'
import { Hero } from '~/components/hero'
import { Features } from '~/components/features'
import { CoreTechnologies } from '~/components/CoreTechnologies'
import { Services } from '~/components/services'
import { ProductCases } from '~/components/ProductCases'
import { FeaturesList } from '~/components/features-list'
import { Footer } from '~/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9FE]">
      <Navbar />
      <Hero />
      <Features />
      <CoreTechnologies />
      <Services />
      <ProductCases />
      <FeaturesList />
      <Footer />
    </main>
  )
}

