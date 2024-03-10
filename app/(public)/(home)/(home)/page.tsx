'use client'

import { LoginButton } from "@/components/auth/login-button"
import { SectionCost } from "@/components/home/section-cost"
import { SectionFeature } from "@/components/home/section-feature"
import { SectionFooter } from "@/components/home/section-footer"
import { SectionHero } from "@/components/home/section-hero"
import SectionModernFeatures from "@/components/home/section-modern-features"
import SectionModernFooter from "@/components/home/section-modern-footer"
import SectionModernHero from "@/components/home/section-modern-hero"
import SectionModernMobile from "@/components/home/section-modern-mobile"
import SectionModernPrices from "@/components/home/section-modern-prices"
import SectionModernTestimonials from "@/components/home/section-modern-testimonials"
import { SectionTestimonial } from "@/components/home/section-testimonial"
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
        <LoginButton>
        <Button variant={"secondary"} size={"lg"}>Sign in</Button>
        </LoginButton>
      </div>
      <div className='h-full'>
        <SectionModernHero />
        <SectionModernMobile />
        <SectionModernFeatures />
        <SectionModernTestimonials />
        <SectionModernPrices />
        <SectionModernFooter />

        <SectionHero />
        
    </div>
    </main>

  )
}
export default HomePage