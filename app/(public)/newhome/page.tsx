import Hero from "@/components/newhome/hero";
import Feature from "@/components/newhome/feature";
import Price from "@/components/newhome/price";
import Partner from "@/components/newhome/partner";
import Footer from "@/components/newhome/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { MenuIcon, GlobeIcon, UserIcon } from "lucide-react";
import News from "@/components/newhome/news";
import Events from "@/components/newhome/events";
import Testimonial from "@/components/newhome/testimonial";

const LandingPage = () => {
  return (
    <section className="relative ">
      {/* ci-gradient1 is setuped in globals.css */}
      <div className="">
        <div className="fixed top-10 left-0 w-full z-10">
          <nav className="w-full flex  justify-between items-center max-w-[1200px] mx-4 lg:mx-auto h-10 lg:h-16  bg-white shadow-outter rounded-full px-4 lg:px-4">
            <Image
              src="/logo/3d-logo-ailearn.png"
              width={60}
              height={60}
              alt="aileran logo"
            />
            <div className="hidden lg:flex">
              <ul className=" flex  gap-10 text-gray-400 text-base font-normal ">
                <li>หน้าหลัก</li>
                <li>Features</li>
                <li>อีเวนท์</li>
                <li>ข่าวสาร</li>
                <li>Testimonial</li>
                <li>ติดต่อเรา</li>
              </ul>
            </div>
            <div className="hidden lg:flex">
              <div className="flex space-x-4">
                <Button className="hidden lg:block rounded-full w-[104px]">
                  ซื้อแพ็กเกจ
                </Button>
                <div className="hidden lg:block">
                  <Button
                    className="text-base text-gray-800 font-normal inline-flex gap-1 px-0"
                    variant="ghost"
                  >
                    <GlobeIcon className="size-5 mr-1" />
                    <div className="font-semibold text-base">TH</div>
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  className="hidden lg:block rounded-full px-0"
                >
                  <UserIcon className="size-6 mr-1" />
                </Button>
              </div>
            </div>
            <MenuIcon className="lg:hidden text-gray-400 text-base font-normal" />
          </nav>
        </div>

        {/* hero section */}
        <div>
          <Hero />
        </div>

        {/* gradient seperator */}
        <div className="h-6 w-full  bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500"></div>

        {/* Feature1 section */}
        <Feature
          featureType="left"
          imageSrc="/home/feature1.png"
          title="Automatically"
          subTitle="Generate Personalized Exams with AI."
          description="We use artificial intelligence to generate exams that is unique to you by focusing on patching your weakness to improve your score."
        />

        {/* Feature2 section */}
        <div className="-mt-44 lg:-mt-72">
          <Feature
            featureType="right"
            imageSrc="/home/feature2.png"
            title="Precisely"
            subTitle="Analyze the result of your practice and exams."
            description="Our program reviews your performance after every test you take and
            create a detailed report that is personalized to you."
          />
        </div>
        {/* News section */}
        <News />

        {/* Events section */}
        <Events />

        {/* Price section */}
        {/* <div className="hidden lg:block -mt-16 lg:-mt-40"> */}
        <div>
          <Price />
        </div>

        {/* testimonials section */}
        <Testimonial />

        {/* partner */}
        <Partner />

        {/* footer */}
        <Footer />
      </div>
    </section>
  );
};
export default LandingPage;
