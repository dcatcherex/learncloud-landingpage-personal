import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const SectionMobile = () => {
  return (
    <section className="relative overflow-hidden pt-20 lg:pb-40 lg:pt-28 bg-white dark:bg-slate-900 h-screen">
      <Image
        className="absolute bottom-0 left-1/2 mx-auto hidden w-full max-w-4xl -translate-x-1/2 lg:block xl:max-w-5xl"
        src="/home/applications/center-hand-phone.png"
        width={1176}
        height={863}
        alt=""
      />
      <Image
        className="absolute right-0 top-0"
        src="/home/applications/star-right-circle.png"
        width={274}
        height={540}
        alt=""
      />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-24  text-center ">
          <span className="mb-5 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-900 dark:text-black">
            👋 Coming Soon!!!
          </span>
          <h1 className="xs:text-6xl mb-5 text-5xl font-medium md:text-7xl dark:text-white">
            <span>เพิ่มคะแนนโทอิคให้มากขึ้นด้วย</span>
            <p className=" text-primary ">
              ไอเลิร์น
            </p>
          </h1>

        </div>
        <div className="mx-auto max-w-xs md:max-w-7xl">
          <div className="justify-between md:flex">
            <div className="mb-12 max-w-sm md:mb-0">

              <div className="flex items-center">
                <div className="flex gap-4">
                  <div className="mb-3">
                    <Link
                      className="hover:scale-102 inline-block transition duration-200"
                      href="#"
                    >
                      <Image
                        className="block h-12"
                        src="/home/applications/button-logo1.png"
                        width={160}
                        height={9486}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="hover:scale-102 inline-block transition duration-200"
                      href="#"
                    >
                      <Image
                        className="block h-12"
                        src="/home/applications/button-logo2.png"
                        width={160}
                        height={48}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xs">

              <Button
                className=" rounded-full px-6 py-4 text-center font-semibold text-white"

              >

                <span className="">Coming soon!</span>
              </Button>
            </div>
          </div>
        </div>
        <Image
          className="mx-auto mt-100 block md:mt-0 lg:hidden"
          src="/home/applications/center-hand-phone.png"
          width={320}
          height={568}
          alt=""
        />


    </div>
    </section>
  );
};
export default SectionMobile;
