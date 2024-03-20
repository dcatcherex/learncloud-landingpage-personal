import Image from "next/image";

const SectionFooter = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 items-center border-b border-gray-700 pb-10">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="mb-4 w-full px-4 lg:mb-0 lg:w-1/2">
                <a className="inline-block" href="#">
                  <Image
                    className="h-16"
                    src="/logo/logo-text-side.svg"
                    width={150}
                    height={60}
                    alt=""
                  />
                </a>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="-mb-4 items-center sm:flex lg:justify-end">
                  <span className="mb-4 mr-8 inline-block text-white">
                    ต้องการเพิ่มคะแนนโทอิค?
                  </span>
                  <a
                    className="group relative mb-4 inline-block w-full overflow-hidden rounded-md bg-primary px-5 py-3 text-center text-sm font-semibold text-orange-50 transition duration-300 hover:text-orange-900 sm:w-auto"
                    href="#"
                  >
                    <div className="absolute right-full top-0 size-full bg-white transition duration-500 group-hover:translate-x-full group-hover:scale-105"></div>
                    <span className="relative">Coming Soon!</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="-mx-4 mb-20 flex flex-wrap">
            <div className="mb-12 w-full px-4 lg:mb-0 lg:w-2/5">
              <div className="xs:max-w-xs">
                
                
              </div>
            </div>
            <div className="mb-8 w-full px-4 sm:mb-0 sm:w-1/3 lg:w-1/5">
              <h5 className="mb-4 text-lg font-semibold text-gray-50">
                Product
              </h5>
              
            </div>
            <div className="mb-8 w-full px-4 sm:mb-0 sm:w-1/3 lg:w-1/5">
              <h5 className="mb-3 text-lg font-semibold text-gray-50">About</h5>
              <ul>
                <li className="mb-4">
                  <a
                    className="inline-block text-gray-300 hover:text-gray-200"
                    href="#"
                  >
                    Our Story
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="inline-block text-gray-300 hover:text-gray-200"
                    href="#"
                  >
                    Benefits
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="inline-block text-gray-300 hover:text-gray-200"
                    href="#"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block text-gray-300 hover:text-gray-200"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 sm:w-1/3 lg:w-1/5">
              <h5 className="mb-4 text-lg font-semibold text-gray-50">Help</h5>
              <ul>
                <li className="mb-4">
                  <a
                    className="inline-block text-gray-300 hover:text-gray-200"
                    href="#"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block text-gray-300 hover:text-gray-200"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items-center justify-between sm:flex">
            <div className="mb-6 items-center sm:mb-0 sm:flex">
              <a
                className="mr-6 inline-block text-gray-300 hover:text-gray-200 sm:mr-12"
                href="#"
              >
                Terms & Conditions
              </a>
              <a
                className="inline-block text-gray-300 hover:text-gray-200"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
            <div className="flex items-center">
              <a
                className="mr-9 inline-block rounded-md p-1 hover:bg-gray-800"
                href="#"
              >
                <Image
                  src="/home/footers/outline-facebook.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </a>
              <a
                className="mr-9 inline-block rounded-md p-1 hover:bg-gray-800"
                href="#"
              >
                <Image
                  src="/home/footers/outline-socialmedia.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </a>
              <a
                className="inline-block rounded-md p-1 hover:bg-gray-800"
                href="#"
              >
                <Image
                  src="/home/footers/outline-linkedin.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionFooter;
