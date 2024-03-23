'use client'


import SectionModernFooter from "@/components/home/section-footer"
import SectionModernHero from "@/components/home/section-hero"
import SectionModernMobile from "@/components/home/section-mobile"
import SectionSocials from "@/components/home/section-socialss"
import { Button } from "@/components/ui/button"


const HomePage = () => {
  return (
    <main className="justify-center">

      <div className='h-full'>
        <SectionModernHero />
        <SectionSocials />
        <SectionModernMobile />
        <SectionModernFooter />


      </div>
    </main>

  )
}
export default HomePage