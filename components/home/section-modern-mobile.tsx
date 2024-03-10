import Image from "next/image";

const SectionModernMobile = () => {
  return (
    <section className="relative overflow-hidden pt-20 lg:pb-40 lg:pt-28 dark:bg-slate-900">
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
        <div className="mx-auto mb-24 max-w-3xl text-center ">
          <span className="mb-5 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-900 dark:text-black">
            👋 Coming Soon!!!
          </span>
          <h1 className="xs:text-6xl mb-5 text-5xl font-medium md:text-7xl dark:text-white">
            <span>Improve TOEIC Scores with </span>
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text font-serif italic text-transparent ">
              AI-powered Apps
            </span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-white/80">
            Nisi eu pellentesque felis volutpat aliquet pulvinar sed.
          </p>
        </div>
        <div className="mx-auto max-w-xs md:max-w-7xl">
          <div className="justify-between md:flex">
            <div className="mb-12 max-w-sm md:mb-0">
              <div className="mb-2 flex items-center">
                <Image
                  className="block size-8"
                  src="/home/applications/avatar-photo1.png"
                  width={54}
                  height={54}
                  alt=""
                />
                <Image
                  className="-ml-3 block size-8"
                  src="/home/applications/avatar-photo2.png"
                  width={54}
                  height={54}
                  alt=""
                />
                <Image
                  className="-ml-3 block size-8"
                  src="/home/applications/avatar-photo3.png"
                  width={54}
                  height={54}
                  alt=""
                />
              </div>
              <span className="mb-2 block text-sm font-semibold text-gray-800 dark:text-white">
                Trusted by 1M+ Customers
              </span>
              <div className="flex items-center">
                <div>
                  <div className="mb-16 flex items-center">
                    <div className="mr-2 flex items-center">
                      <Image
                        className="mr-1"
                        width={16}
                        height={16}
                        src="/home/applications/star.svg"
                        alt=""
                      />
                      <Image
                        className="mr-1"
                        width={16}
                        height={16}
                        src="/home/applications/star.svg"
                        alt=""
                      />
                      <Image
                        className="mr-1"
                        width={16}
                        height={16}
                        src="/home/applications/star.svg"
                        alt=""
                      />
                      <Image
                        className="mr-1"
                        width={16}
                        height={16}
                        src="/home/applications/star.svg"
                        alt=""
                      />
                      <Image
                        className="mr-1"
                        width={16}
                        height={16}
                        src="/home/applications/star.svg"
                        alt=""
                      />
                    </div>
                    <span className="mr-1 block text-sm font-semibold leading-none text-gray-800 dark:text-white">
                      4.9/5
                    </span>
                    <span className="text-sm leading-none text-gray-500 dark:text-white/70">
                      (20k Reviews)
                    </span>
                  </div>
                  <div className="mb-3">
                    <a
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
                    </a>
                  </div>
                  <div>
                    <a
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xs md:mt-32 lg:mt-52">
              <p className="mb-1 text-lg  text-gray-900 dark:text-white font-light">
                Nisi eu pellentesque felis volutpat aliquet pulvinar sed. Vitae
                fames vestibulum urna vel odio mauris urna orci est.
              </p>
              <a
                className="group relative inline-block overflow-hidden rounded-full bg-orange-500 px-6 py-4 text-center font-semibold text-white"
                href="#"
              >
                <div className="group-hover:scale-102 absolute right-full top-0 size-full bg-sky-500 transition duration-500 group-hover:translate-x-full"></div>
                <span className="relative">Start Free Trial</span>
              </a>
            </div>
          </div>
        </div>
        <Image
          className="mx-auto mt-12 block md:mt-0 lg:hidden"
          src="/home/applications/center-hand-phone.png"
          width={320}
          height={568}
          alt=""
        />
      </div>
    </section>
  );
};
export default SectionModernMobile;
