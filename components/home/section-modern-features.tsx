import Image from "next/image";

const SectionModernFeatures = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-white dark:bg-slate-900
    ">
      <Image
        className="absolute right-0 top-0"
        width={401}
        height={804}
        src="/home/features/star-element-right.png"
        alt=""
      />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="-mx-4 mb-20 flex flex-wrap items-center">
            <div className="mb-12 w-full px-4 lg:mb-0 lg:w-2/3 xl:w-1/2">
              <div>
                <span className="mb-4 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-900 dark:text-black">
                  FEATURES
                </span>
                <h1 className="xs:text-6xl text-5xl font-medium text-gray-900 md:text-7xl dark:text-white">
                  <span>AiLearn: TOEIC</span>
                  <p className="font-serif italic bg-gradient-to-r from-blue-500 to-cyan-300 inline-block text-transparent bg-clip-text">Features</p>
                </h1>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/3 xl:w-1/2">
              <div className="max-w-sm lg:ml-auto">
                <p className="text-lg text-gray-500 dark:text-white/80">
                  We are a team of 20+ who are passionate about making the world
                  a better place.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="mb-8 w-full px-4 xl:mb-0 xl:w-1/2">
              <div className="h-[400px] md:h-125 relative">
                <Image
                  className="block size-full rounded-3xl object-cover"
                  src="/home/features/blue-photo.png"
                  width={500}
                  height={500}
                  alt=""
                />
                <div className="absolute left-0 top-0 size-full p-8 md:p-12">
                  <div className="flex h-full max-w-sm flex-col items-start justify-between">
                    <div>
                      <span className="mb-3 block text-sm font-semibold uppercase text-yellow-500">
                        Ready for future
                      </span>
                      <h3 className="text-3xl font-semibold text-white md:text-4xl">
                        Leveraging tech to drive a better IT experience
                      </h3>
                    </div>
                    <a
                      className="xs:w-auto group relative inline-block w-full overflow-hidden rounded-md bg-orange-50 px-6 py-4 font-semibold text-orange-500 transition duration-500 hover:text-white"
                      href="#"
                    >
                      <div className="absolute right-full top-0 size-full bg-gray-900 transition duration-500 group-hover:translate-x-full group-hover:scale-105"></div>
                      <div className="relative flex items-center justify-center">
                        <span className="mr-4">See Incredible Work</span>
                        <span>
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.92 0.62C12.8185 0.375651 12.6243 0.181475 12.38 0.0799999C12.2598 0.028759 12.1307 0.00157999 12 0H2C1.73478 0 1.48043 0.105357 1.29289 0.292893C1.10536 0.48043 1 0.734784 1 1C1 1.26522 1.10536 1.51957 1.29289 1.70711C1.48043 1.89464 1.73478 2 2 2H9.59L1.29 10.29C1.19627 10.383 1.12188 10.4936 1.07111 10.6154C1.02034 10.7373 0.994202 10.868 0.994202 11C0.994202 11.132 1.02034 11.2627 1.07111 11.3846C1.12188 11.5064 1.19627 11.617 1.29 11.71C1.38296 11.8037 1.49356 11.8781 1.61542 11.9289C1.73728 11.9797 1.86799 12.0058 2 12.0058C2.13201 12.0058 2.26272 11.9797 2.38458 11.9289C2.50644 11.8781 2.61704 11.8037 2.71 11.71L11 3.41V11C11 11.2652 11.1054 11.5196 11.2929 11.7071C11.4804 11.8946 11.7348 12 12 12C12.2652 12 12.5196 11.8946 12.7071 11.7071C12.8946 11.5196 13 11.2652 13 11V1C12.9984 0.869323 12.9712 0.740222 12.92 0.62Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 xl:w-1/2">
              <div className="-mx-4 flex h-full flex-wrap">
                <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
                  <div className="flex h-full flex-col">
                    <a
                      className="relative mb-7 block h-full rounded-3xl bg-green-50 px-8 pb-5 pt-8 transition duration-200 hover:bg-green-100"
                      href="#"
                    >
                      <div className="flex h-full max-w-sm flex-col justify-between pr-16">
                        <p className="mb-10 text-sm text-gray-900 md:mb-6">
                          We have share our journey and some story
                        </p>
                        <span className="text-3xl font-semibold text-gray-900">
                          Read our blog
                        </span>
                      </div>
                      <Image
                        className="absolute bottom-0 right-0 m-5"
                        src="/home/features/arrow.svg"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </a>
                    <a
                      className="relative block h-full rounded-3xl bg-red-50 px-8 pb-5 pt-8 transition duration-200 hover:bg-red-100"
                      href="#"
                    >
                      <div className="flex h-full max-w-sm flex-col justify-between pr-16">
                        <p className="mb-10 text-sm text-gray-900 md:mb-6">
                          It’s a must to that we would like to share our
                          workflow to believe you
                        </p>
                        <span className="text-3xl font-semibold text-gray-900">
                          See our workflow
                        </span>
                      </div>
                      <Image
                        className="absolute bottom-0 right-0 m-5"
                        src="/home/features/arrow.svg"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <a
                    className="relative block h-full rounded-3xl bg-orange-50 px-8 pb-5 pt-8 transition duration-200 hover:bg-orange-100"
                    href="#"
                  >
                    <div className="flex h-full max-w-sm flex-col items-start justify-between pr-16">
                      <p className="mb-10 text-sm text-gray-900 md:mb-6">
                        2,000+ our team members around the world who create
                        incredible and amazing projects
                      </p>
                      <span className="text-3xl font-semibold text-gray-900">
                        Meet Our Expert
                      </span>
                    </div>
                    <Image
                      className="absolute bottom-0 right-0 m-5"
                      src="/home/features/arrow.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionModernFeatures;
