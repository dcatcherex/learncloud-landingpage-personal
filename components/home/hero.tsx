import Image from "next/image";
import { Button } from "../ui/button";

import SocialButton from "@/components/home/social-button";

// can change contents here
const HeroImage = () => (
  <Image
    className="rounded-[40px]"
    src={"/home/thaistartup2.jpg"}
    width={588}
    height={806}
    alt="hero pic"
  />
);

const Socials = [
  {
    src: "/home/social/facebook.svg",
    alt: "facebook",
    href: " https://www.facebook.com/ailearnbylearncloud/",
  },
  {
    src: "/home/social/instagram.svg",
    alt: "instagram",
    href: "https://www.instagram.com/ailearn_learncloud/",
  },

  {
    src: "/home/social/tiktok.svg",
    alt: "tiktok",
    href: "https://www.tiktok.com/@ailearn_learncloud",
  },
];

const text1_1 = "เตรียมสอบ ";
const text1_2 = "TOEIC ";
const text1_3 = "กับ";

const text2_1 = "แอปพลิเคชั่น ";
const text2_2 = "ailearn";
const text2_3 = "(ไอเลิร์น)";

const text3 =
  "ด้วยเทคโนโลยี AI ที่ส่งมอบประสบการณ์การเรียนรู้อย่างมีประสิทธิภาพในแบบที่คุณเป็น (Personalization)";

const textButton = "เริ่มเรียนกับ aiLearn เลยวันนี้";

const Hero = () => {
  return (
    <div className=" lg:pt-52 bg-[url('/home/bg-gradient-big.jpg')] bg-cover bg-left bg-no-repeat">
      <div className="lg:flex max-w-[1200px] mx-auto">
        <div className="flex-1 px-4 lg:px-20 pt-28 pb-6 ">

          {/* Hero title1 */}
          <div className="flex  items-center gap-2">
            <h2 className="text-gray-800 font-medium lg:font-semibold text-xl lg:text-4xl ">
              {text1_1}
            </h2>
            <h2 className="text-indigo-400 text-2xl lg:text-5xl font-medium lg:font-semibold ">
              {text1_2}
            </h2>
            <h2 className="text-gray-800 font-medium lg:font-semibold text-xl lg:text-4xl ">
              {text1_3}
            </h2>
          </div>

          {/* Hero title2  */}
          <div className="flex  items-center mb-6 gap-2 -mt-2 lg:mt-0">
            <h2 className="relative text-gray-800 font-medium lg:font-semibold text-xl lg:text-4xl ">
              {text2_1}
            </h2>
            <h2 className="relative text-[38px] lg:text-[80px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-400">
              {text2_2}
              <span className="hidden lg:block absolute lg:right-0  lg:top-2 text-indigo-500 text-xl font-medium">
                {text2_3}
              </span>
            </h2>
          </div>

          {/* Hero image for mobile */}
          <div className="block lg:hidden -mt-6 mb-4 ">
            <HeroImage />
          </div>

          {/* Hero Description Text */}
          <h3 className="text-gray-500 text-sm lg:text-base font-normal lg:font-medium mb-6">
            {text3}
          </h3>
          <Button className="rounded-full h-[38x] lg:h-12 px-6 text-sm lg:text-base font-medium mb-4 lg:mb-36 shadow-lg">
            {textButton}
          </Button>
          <h2 className="text-gray-500 text-base lg:text-3xl font-medium lg:font-semibold mb-6">
            aiLearn unlock your potential.
          </h2>

          {/* social button has two sets for mobile and desktop view which is different in size  */}
          <div className="block lg:hidden">
            <div className="flex gap-4 mb-8">
              {Socials.map(({ src, alt, href }, index) => (
                <SocialButton
                  key={index}
                  href={href}
                  src={src}
                  size={32}
                  alt={alt}
                />
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex gap-10 mb-11">
              {Socials.map(({ src, alt, href }, index) => (
                <SocialButton
                  key={index}
                  href={href}
                  src={src}
                  size={48}
                  alt={alt}
                />
              ))}
            </div>
          </div>
        </div>

        {/* hero image for desktop */}
        <div className="hidden lg:block flex-1 -mt-14 ">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};
export default Hero;
