import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { Products } from "@/components/site/products"
import { CoreTech } from "@/components/site/core-tech"
import { Solutions } from "@/components/site/solutions"
import { Partners } from "@/components/site/partners"
import { News } from "@/components/site/news"
import { ContactCta } from "@/components/site/contact-cta"
import { Footer } from "@/components/site/footer"
import { SideTools } from "@/components/site/side-tools"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Solutions />
      <Products />
      <CoreTech />
      <Partners />
      <News />
      <ContactCta />
      <Footer />
      <SideTools />
    </main>
  )
}
