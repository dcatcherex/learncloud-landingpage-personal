import Hero from "@/components/newhome/hero";
import Feature from "@/components/newhome/feature";
import Price from "@/components/newhome/price";
import Partner from "@/components/newhome/partner";
import Footer from "@/components/newhome/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { MenuIcon } from "lucide-react";

const LandingPage = () => {
  return (
    <section className=" ">
      {/* ci-gradient1 is setuped in globals.css */}
      <div className=" ci-gradient1 pt-20">
        <nav className=" flex  justify-between items-center max-w-[1200px] mx-4 lg:mx-auto h-10 lg:h-16  bg-white shadow-outter rounded-full px-4 lg:px-10">
          <Image
            src="/logo/ailearnlogoblack.svg"
            width={74}
            height={74}
            alt="aileran logo"
          />

          <div className="hidden lg:flex">
            <ul className=" flex  gap-10 text-gray-400 text-base font-normal ">
              <li>Product</li>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="hidden lg:flex">
            <div className="flex space-x-4">
              <Button
                className="hidden lg:block text-gray-400 text-base font-normal"
                variant="ghost"
              >
                EN
              </Button>
              <Button className="hidden lg:block rounded-full w-[104px]">
                LOGIN
              </Button>
            </div>
          </div>
            <MenuIcon className="lg:hidden text-gray-400 text-base font-normal" />
        </nav>

        {/* hero section */}
        <Hero />

        {/* gradient seperation */}
        <div className="h-6 w-full  bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500"></div>

        {/* Feature1 section */}
        <Feature imageSrc="/home/feature1.png" />

        {/* Feature2 section */}
        <div className="-mt-44 lg:-mt-72">
          <Feature
            featureType="right"
            imageSrc="/home/feature2.png"
            title="Analyze the result of your practice and exams."
            subTitle="Precisely"
            description="Our program reviews your performance after every test you take and
            create a detailed report that is personalized to you."
          />
        </div>

        {/* Price section */}
        <div className="hidden lg:block -mt-16 lg:-mt-40">
          <Price />
        </div>

        {/* partner */}
        <Partner />

        {/* footer */}
        <Footer />
      </div>
    </section>
  );
};
export default LandingPage;
