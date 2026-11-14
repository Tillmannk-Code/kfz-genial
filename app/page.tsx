import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Alignment } from '@/components/alignment'
import { Benefits } from '@/components/benefits'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Alignment />
        <Benefits />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
