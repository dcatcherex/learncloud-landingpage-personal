'use client'

import SectionModernFeatures from "@/components/home/section-modern-features"
import SectionModernFooter from "@/components/home/section-modern-footer"
import SectionModernHero from "@/components/home/section-modern-hero"
import SectionModernMobile from "@/components/home/section-modern-mobile"
import SectionModernPrices from "@/components/home/section-modern-prices"
import SectionModernTestimonials from "@/components/home/section-modern-testimonials"
import { Button } from "@/components/ui/button"


const HomePage = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div>
        <h1>
          Auth
        </h1>
      </div>
      <div>
        <Button variant={"secondary"} size={"lg"}>Sign in</Button>
      </div>
      <div className='h-full'>
        <SectionModernHero />
        <SectionModernMobile />
        <SectionModernFeatures />
        <SectionModernTestimonials />
        <SectionModernPrices />
        <SectionModernFooter />

    </div>
    </main>

  )
}
export default HomePage