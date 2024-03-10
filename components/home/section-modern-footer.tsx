import Image from "next/image";

const SectionModernFooter = () => {
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
                    Ready to get collaborate?
                  </span>
                  <a
                    className="group relative mb-4 inline-block w-full overflow-hidden rounded-md bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-orange-50 transition duration-300 hover:text-orange-900 sm:w-auto"
                    href="#"
                  >
                    <div className="absolute right-full top-0 size-full bg-white transition duration-500 group-hover:translate-x-full group-hover:scale-105"></div>
                    <span className="relative">Get Started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="-mx-4 mb-20 flex flex-wrap">
            <div className="mb-12 w-full px-4 lg:mb-0 lg:w-2/5">
              <div className="xs:max-w-xs">
                <h4 className=" mb-4 text-2xl font-semibold text-gray-50">
                  Subscribe to our newsletter
                </h4>
                <form action="">
                  <label className="mb-1.5 block text-sm font-semibold text-white">
                    Email
                  </label>
                  <div className="xs:flex items-center">
                    <div className="xs:mb-0 xs:mr-4 relative mb-4">
                      <span className="absolute left-0 top-1/2 ml-4 -translate-y-1/2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM18.59 6L12.71 11.88C12.617 11.9737 12.5064 12.0481 12.3846 12.0989C12.2627 12.1497 12.132 12.1758 12 12.1758C11.868 12.1758 11.7373 12.1497 11.6154 12.0989C11.4936 12.0481 11.383 11.9737 11.29 11.88L5.41 6H18.59ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7.41L9.88 13.29C10.4425 13.8518 11.205 14.1674 12 14.1674C12.795 14.1674 13.5575 13.8518 14.12 13.29L20 7.41V17Z"
                            fill="#80818C"
                          ></path>
                        </svg>
                      </span>
                      <input
                        className="w-full rounded-lg border border-gray-700 bg-gray-800 p-12 py-4 pr-4 text-sm text-gray-300 outline-none placeholder:text-gray-400"
                        type="email"
                        placeholder="pat@shuffle.dev"
                      />
                    </div>
                    <button
                      className="xs:ml-0 ml-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-orange-50 transition duration-200 hover:bg-white hover:text-orange-900"
                      type="submit"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.3398 9.32L6.33976 2.32C5.78725 2.04501 5.16338 1.94711 4.55319 2.03965C3.94301 2.13219 3.37622 2.41067 2.93009 2.83711C2.48396 3.26356 2.18021 3.81722 2.06025 4.42261C1.94029 5.028 2.00996 5.65565 2.25976 6.22L4.65976 11.59C4.71422 11.7198 4.74226 11.8592 4.74226 12C4.74226 12.1408 4.71422 12.2802 4.65976 12.41L2.25976 17.78C2.05646 18.2367 1.97051 18.737 2.00974 19.2354C2.04896 19.7337 2.2121 20.2144 2.48434 20.6337C2.75658 21.053 3.12928 21.3976 3.56858 21.6362C4.00788 21.8748 4.49984 21.9999 4.99976 22C5.46799 21.9953 5.92925 21.886 6.34976 21.68L20.3498 14.68C20.8464 14.4302 21.2638 14.0473 21.5555 13.5741C21.8471 13.1009 22.0016 12.5559 22.0016 12C22.0016 11.4441 21.8471 10.8991 21.5555 10.4259C21.2638 9.95269 20.8464 9.56981 20.3498 9.32H20.3398ZM19.4498 12.89L5.44976 19.89C5.26592 19.9783 5.05949 20.0082 4.85815 19.9758C4.6568 19.9435 4.47017 19.8503 4.32327 19.7089C4.17638 19.5674 4.07624 19.3844 4.03629 19.1844C3.99634 18.9844 4.01849 18.777 4.09976 18.59L6.48976 13.22C6.5207 13.1483 6.54741 13.0748 6.56976 13H13.4598C13.725 13 13.9793 12.8946 14.1669 12.7071C14.3544 12.5196 14.4598 12.2652 14.4598 12C14.4598 11.7348 14.3544 11.4804 14.1669 11.2929C13.9793 11.1054 13.725 11 13.4598 11H6.56976C6.54741 10.9252 6.5207 10.8517 6.48976 10.78L4.09976 5.41C4.01849 5.22296 3.99634 5.01555 4.03629 4.81557C4.07624 4.61559 4.17638 4.4326 4.32327 4.29115C4.47017 4.14969 4.6568 4.05653 4.85815 4.02415C5.05949 3.99177 5.26592 4.02173 5.44976 4.11L19.4498 11.11C19.6136 11.1939 19.751 11.3214 19.847 11.4784C19.943 11.6355 19.9938 11.816 19.9938 12C19.9938 12.184 19.943 12.3645 19.847 12.5216C19.751 12.6786 19.6136 12.8061 19.4498 12.89V12.89Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="mb-8 w-full px-4 sm:mb-0 sm:w-1/3 lg:w-1/5">
              <h5 className="mb-4 text-lg font-semibold text-gray-50">
                Services
              </h5>
              <ul>
                <li className="mb-4">
                  <a
                    className="inline-block text-gray-300 hover:text-gray-200"
                    href="#"
                  >
                    Email Marketing
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="inline-block text-gray-300 hover:text-gray-200"
                    href="#"
                  >
                    Campaigns
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="inline-block text-gray-300 hover:text-gray-200"
                    href="#"
                  >
                    Branding
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block text-gray-300 hover:text-gray-200"
                    href="#"
                  >
                    Offline
                  </a>
                </li>
              </ul>
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
export default SectionModernFooter;
