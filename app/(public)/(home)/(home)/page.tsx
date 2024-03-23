'use client'

import SectionModernFooter from "@/components/home/section-footer"
import SectionModernHero from "@/components/home/section-hero"
import SectionModernMobile from "@/components/home/section-mobile"
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
        <SectionModernFooter />

      </div>
    </main>

  )
}
export default HomePage