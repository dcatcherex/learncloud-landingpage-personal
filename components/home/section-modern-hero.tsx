import Image from "next/image";

const SectionModernHero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-20 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-md lg:max-w-7xl">
          <div className="relative z-10 -mx-4 mb-14 flex flex-wrap items-center">
            <div className="mb-16 w-full px-4 lg:mb-0 lg:w-1/2">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <span className="mb-5 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-900 dark:text-slate-900 dark:bg-white">
                  👋 Coming Soon!!!
                </span>
                <h1 className="xs:text-6xl text-5xl font-medium xl:text-7xl dark:text-white ">
                  <span>Personalized</span>
                  <span className="block bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text font-serif  italic leading-snug text-transparent ">
                    TOEIC Practice
                  </span>
                  <span>with AiLearn</span>
                </h1>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex lg:justify-end">
                <div className="mr-5 pt-2">
                  <div className="xs:w-24 h-px w-12 bg-orange-500"></div>
                </div>
                <div>
                  <div className="mb-5 flex items-center">
                    <Image
                      className="mr-1.5"
                      width={16}
                      height={16}
                      src="/home/applications/star.svg"
                      alt=""
                    />
                    <Image
                      className="mr-1.5"
                      width={16}
                      height={16}
                      src="/home/applications/star.svg"
                      alt=""
                    />
                    <Image
                      className="mr-1.5"
                      width={16}
                      height={16}
                      src="/home/applications/star.svg"
                      alt=""
                    />
                    <Image
                      className="mr-1.5"
                      width={16}
                      height={16}
                      src="/home/applications/star.svg"
                      alt=""
                    />
                    <Image
                      className="mr-1.5"
                      width={16}
                      height={16}
                      src="/home/applications/star.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mx-4 mb-6 flex flex-wrap items-center">
                    <div className="w-full px-4 md:w-auto">
                      <div className="flex items-center">
                        <Image
                          src="/home/applications/avatar-photo1.png"
                          width={54}
                          height={54}
                          alt=""
                        />
                        <Image
                          className="-ml-3"
                          src="/home/applications/avatar-photo2.png"
                          width={54}
                          height={54}
                          alt=""
                        />
                        <Image
                          className="-ml-3"
                          src="/home/applications/avatar-photo3.png"
                          width={54}
                          height={54}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-auto">
                      <div>
                        <span className="block text-2xl font-bold text-gray-900 dark:text-white">
                          500+
                        </span>
                        <span className="text-sm text-gray-400">
                          Happy Learners
                        </span>
                      </div>
                    </div>
                  </div>
                  <a
                    className="group relative inline-block overflow-hidden rounded-full  bg-sky-500 px-6 py-4 text-center font-semibold text-orange-50"
                    href="#"
                  >
                    <div className="group-hover:scale-102 absolute right-full top-0 size-full bg-orange-500 transition duration-500 group-hover:translate-x-full"></div>
                    <span className="relative">Start 14-days Trial</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto max-w-2xl xl:max-w-4xl">
            <Image
              className="absolute left-0 top-1/2 -ml-40 -translate-y-1/2 lg:-ml-72 dark:opacity-30 dark:top-0"
              src="/home/applications/light-full-center-blue.png"
              width={687}
              height={649}
              alt=""
            />
            <Image
              className="absolute right-0 top-0 -mr-52 -mt-52 lg:-mr-80 lg:-mt-72"
              src="/home/applications/light-full-center-orange.png"
              width={726}
              height={791}
              alt=""
            />
            <Image
              className="relative block w-full"
              src="/home/applications/app-center-image.png"
              width={882}
              height={526}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionModernHero;
