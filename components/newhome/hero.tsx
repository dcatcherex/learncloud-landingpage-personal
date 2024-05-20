import Image from "next/image"
import { Button } from "../ui/button"

const Hero = () => {
  return (
    <div className=" lg:pt-52 bg-[url('/home/bg-gradient-big.jpg')] bg-cover bg-left bg-no-repeat">
          <div className="lg:flex max-w-[1200px] mx-auto">
            <div className="flex-1 px-4 lg:px-20 pt-28 pb-20 ">
              <h2 className="text-gray-800 font-medium lg:font-semibold text-xl lg:text-4xl -mb-2 lg:mb-9">
                เตรียมสอบ{" "}
                <span className="text-indigo-400 text-2xl lg:text-5xl font-medium lg:font-semibold ">
                  TOEIC
                </span>{" "}
                กับ
              </h2>
              <h2 className="relative text-gray-800 font-medium lg:font-semibold text-xl lg:text-4xl mb-12">
                แอปพลิเคชัน{" "}
                <span className="text-[38px] lg:text-[80px] text-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-400">
                  aiLearn
                </span>
                <span className="hidden lg:block absolute right-40 lg:right-16 -top-7 lg:-top-7 text-indigo-500 text-xl font-medium">
                  (ไอเลิร์น)
                </span>
              </h2>

              <div className="block lg:hidden -mt-12">
              <Image
                className="rounded-[20px] "
                src={"/home/thaistartup2.jpg"}
                width={588}
                height={561}
                alt="hero pic"
              />
            </div>

              <h3 className="text-gray-500 text-sm lg:text-2xl font-normal lg:font-medium mb-6">
                ด้วยเทคโนโลยี AI ที่ส่งมอบประสบการณ์
                การเรียนรู้อย่างมีประสิทธิภาพในแบบที่คุณเป็น (Personalization)
              </h3>
              <Button className="rounded-full shadow h-[38x] lg:h-12 py-3 w-[173px] lg:w-[188px] text-sm lg:text-base font-medium mb-4 lg:mb-36">
                ดาวน์โหลดคำศัพท์
              </Button>
              <h2 className="text-gray-500 text-base lg:text-3xl font-medium lg:font-semibold mb-6">
                aiLearn unlock your potential.
              </h2>

              {/* social button */}
              <div className="block lg:hidden">
                <div className="flex gap-4 mb-8">
                  <Image
                    src={"/home/social/facebook.svg"}
                    width={32}
                    height={32}
                    alt="facebook"
                  />
                  <Image
                    src={"/home/social/instagram.svg"}
                    width={32}
                    height={32}
                    alt="facebook"
                  />
                  <Image
                    src={"/home/social/linkedin.svg"}
                    width={32}
                    height={32}
                    alt="facebook"
                  />
                  <Image
                    src={"/home/social/tiktok.svg"}
                    width={32}
                    height={32}
                    alt="facebook"
                  />
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="flex gap-10 mb-11">
                  <Image
                    src={"/home/social/facebook.svg"}
                    width={48}
                    height={48}
                    alt="facebook"
                  />
                  <Image
                    src={"/home/social/instagram.svg"}
                    width={48}
                    height={48}
                    alt="facebook"
                  />
                  <Image
                    src={"/home/social/linkedin.svg"}
                    width={48}
                    height={48}
                    alt="facebook"
                  />
                  <Image
                    src={"/home/social/tiktok.svg"}
                    width={48}
                    height={48}
                    alt="facebook"
                  />
                </div>
              </div>
            </div>
            <div className="hidden lg:block flex-1 ">
              <Image
              className="rounded-[40px]"
                src={"/home/thaistartup2.jpg"}
                width={588}
                height={806}
                alt="hero pic"
              />
            </div>
            
          </div>
        </div>
  )
}
export default Hero