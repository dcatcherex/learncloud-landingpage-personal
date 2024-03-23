import Image from "next/image";

const SectionPrices = () => {
  return (
    <section className="relative overflow-hidden py-20 dark:bg-slate-900">
      <Image
        className="absolute right-0 top-0 -mr-32 md:-mr-0"
        src="/home/pricing/circle-star.png"
        width={274}
        height={540}
        alt=""
      />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-20 max-w-2xl text-center lg:max-w-5xl">
          <h1 className="mb-10 text-5xl font-medium text-gray-900 sm:text-6xl lg:text-7xl dark:text-white">
            <span>Select a plan for a </span>
            <p className="font-serif italic bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300 text-transparent">Guarantee TOEIC Pass  </p>

          </h1>
          <div className="mb-10 flex flex-col items-center justify-center sm:flex-row">
            <div className="mb-3 flex items-center sm:mb-0 sm:mr-12">
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6996 0.613392C18.5757 0.488421 18.4282 0.389228 18.2657 0.321536C18.1032 0.253845 17.929 0.218994 17.7529 0.218994C17.5769 0.218994 17.4027 0.253845 17.2402 0.321536C17.0777 0.389228 16.9302 0.488421 16.8063 0.613392L6.87294 10.5601L2.69961 6.37339C2.57092 6.24907 2.41899 6.15132 2.25252 6.08572C2.08605 6.02011 1.90828 5.98794 1.72937 5.99103C1.55047 5.99413 1.37392 6.03243 1.20982 6.10376C1.04571 6.17508 0.897262 6.27803 0.772944 6.40673C0.648626 6.53542 0.550874 6.68734 0.485269 6.85382C0.419663 7.02029 0.387489 7.19805 0.390585 7.37696C0.39368 7.55587 0.431984 7.73242 0.503308 7.89652C0.574633 8.06062 0.677582 8.20907 0.806277 8.33339L5.92628 13.4534C6.05023 13.5784 6.1977 13.6776 6.36018 13.7452C6.52265 13.8129 6.69693 13.8478 6.87294 13.8478C7.04896 13.8478 7.22323 13.8129 7.38571 13.7452C7.54819 13.6776 7.69566 13.5784 7.81961 13.4534L18.6996 2.57339C18.8349 2.44854 18.943 2.297 19.0168 2.12833C19.0907 1.95967 19.1289 1.77753 19.1289 1.59339C19.1289 1.40926 19.0907 1.22712 19.0168 1.05845C18.943 0.889784 18.8349 0.738248 18.6996 0.613392V0.613392Z"
                  fill="#0BB678"
                ></path>
              </svg>
              <span className="ml-2 text-lg font-semibold">Cancel Anytime</span>
            </div>
            <div className="flex items-center">
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6996 0.613392C18.5757 0.488421 18.4282 0.389228 18.2657 0.321536C18.1032 0.253845 17.929 0.218994 17.7529 0.218994C17.5769 0.218994 17.4027 0.253845 17.2402 0.321536C17.0777 0.389228 16.9302 0.488421 16.8063 0.613392L6.87294 10.5601L2.69961 6.37339C2.57092 6.24907 2.41899 6.15132 2.25252 6.08572C2.08605 6.02011 1.90828 5.98794 1.72937 5.99103C1.55047 5.99413 1.37392 6.03243 1.20982 6.10376C1.04571 6.17508 0.897262 6.27803 0.772944 6.40673C0.648626 6.53542 0.550874 6.68734 0.485269 6.85382C0.419663 7.02029 0.387489 7.19805 0.390585 7.37696C0.39368 7.55587 0.431984 7.73242 0.503308 7.89652C0.574633 8.06062 0.677582 8.20907 0.806277 8.33339L5.92628 13.4534C6.05023 13.5784 6.1977 13.6776 6.36018 13.7452C6.52265 13.8129 6.69693 13.8478 6.87294 13.8478C7.04896 13.8478 7.22323 13.8129 7.38571 13.7452C7.54819 13.6776 7.69566 13.5784 7.81961 13.4534L18.6996 2.57339C18.8349 2.44854 18.943 2.297 19.0168 2.12833C19.0907 1.95967 19.1289 1.77753 19.1289 1.59339C19.1289 1.40926 19.0907 1.22712 19.0168 1.05845C18.943 0.889784 18.8349 0.738248 18.6996 0.613392V0.613392Z"
                  fill="#0BB678"
                ></path>
              </svg>
              <span className="ml-2 text-lg font-semibold">
                Free 14-day trial
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-900 sm:text-xl">
              Billed Monthly
            </span>
            <div className="mx-3 inline-flex items-center justify-end rounded-full bg-gray-100 p-1">
              <button className="size-5 rounded-full bg-transparent"></button>
              <button className="size-5 rounded-full bg-orange-500"></button>
            </div>
            <span className="text-sm text-gray-900 sm:text-xl">
              Billed Yearly
            </span>
          </div>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="-mx-4 flex flex-wrap">
            <div className="mb-8 w-full px-4 lg:mb-0 lg:w-1/3">
              <div className="mx-auto max-w-sm rounded-3xl border border-gray-100 bg-white px-10 pb-8 pt-10 lg:max-w-none">
                <div className="mb-6 text-center">
                  <h5 className="mb-3 text-2xl font-semibold text-gray-900">
                    Free
                  </h5>
                  <span className="mb-3 block text-5xl font-bold text-gray-900">
                    $0
                  </span>
                  <span className="mb-6 block font-medium text-gray-500">
                    per user, per month
                  </span>
                  <a
                    className="inline-block w-full rounded-full border border-gray-200 px-6 py-4 text-center font-semibold text-orange-500 transition duration-200 hover:border-orange-500"
                    href="#"
                  >
                    Start 7-days Trial
                  </a>
                </div>
                <ul>
                  <li className="mb-4 flex items-center">
                    <Image
                      src="/home/pricing/green-check.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="ml-2 font-medium text-gray-900">
                      Unlimited Upload
                    </span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <Image
                      src="/home/pricing/green-check.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="ml-2 font-medium text-gray-900">
                      Advanced Statistic
                    </span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <Image
                      src="/home/pricing/green-check.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="ml-2 font-medium text-gray-900">
                      Profile Badge
                    </span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <Image
                      src="/home/pricing/green-check.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="ml-2 font-medium text-gray-900">
                      Access to the community
                    </span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <Image
                      src="/home/pricing/check-circle-grey.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="ml-2 font-medium text-gray-500 line-through">
                      History of all Liked Photos
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Image
                      src="/home/pricing/check-circle-grey.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="ml-2 font-medium text-gray-500 line-through">
                      Directory Listing
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-8 w-full px-4 lg:mb-0 lg:w-1/3">
              <div className="mx-auto max-w-sm rounded-3xl bg-slate-800  px-10 pb-8 pt-10 lg:max-w-none">
                <div className="mb-6 text-center">
                  <h5 className="mb-3 text-2xl font-semibold text-white">
                    Smart
                  </h5>
                  <span className="mb-3 block text-5xl font-bold text-white">
                    $10
                  </span>
                  <span className="mb-6 block font-medium text-gray-300">
                    per user, per month
                  </span>
                  <a
                    className="group relative inline-block w-full overflow-hidden rounded-full bg-orange-500 px-6 py-4 text-center font-semibold text-orange-50 transition duration-200 hover:text-orange-900"
                    href="#"
                  >
                    <div className="group-hover:scale-102 absolute right-full top-0 size-full bg-white transition duration-500 group-hover:translate-x-full"></div>
                    <span className="relative">Start 7-days Trial</span>
                  </a>
                </div>
                <ul>
                  <li className="mb-4 flex items-center">
                    <Image
                      src="/home/pricing/green-check.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="ml-2 text-white">Unlimited Upload</span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <Image
                      src="/home/pricing/green-check.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="ml-2 text-white">Advanced Statistic</span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <Image
                      src="/home/pricing/green-check.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="ml-2 text-white">Profile Badge</span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <Image
                      src="/home/pricing/green-check.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="ml-2 text-white">
                      Access to the community
                    </span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <Image
                      src="/home/pricing/check-circle-grey.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="ml-2 text-gray-500 line-through">
                      History of all Liked Photos
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Image
                      src="/home/pricing/green-check.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="ml-2 text-white">Directory Listing</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/3">
              <div className="mx-auto max-w-sm rounded-3xl border border-gray-100 bg-white px-10 pb-8 pt-10 lg:max-w-none">
                <div className="mb-6 text-center">
                  <h5
                    className="mb-3 text-2xl font-semibold text-gray-900"
                    data-last-active-input=""
                  >
                    Premium
                  </h5>
                  <span className="mb-3 block text-5xl font-bold text-gray-900">
                    $100
                  </span>
                  <span className="mb-6 block font-medium text-gray-500">
                    per user, per month
                  </span>
                  <a
                    className="inline-block w-full rounded-full border border-gray-200 px-6 py-4 text-center font-semibold text-orange-900 transition duration-200 hover:border-orange-900"
                    href="#"
                  >
                    Start 7-days Trial
                  </a>
                </div>
                <ul>
                  <li className="mb-4 flex items-center">
                    <Image
                      src="/home/pricing/green-check.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="ml-2 font-medium text-gray-900">
                      Unlimited Upload
                    </span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <Image
                      src="/home/pricing/green-check.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="ml-2 font-medium text-gray-900">
                      Advanced Statistic
                    </span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <Image
                      src="/home/pricing/green-check.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="ml-2 font-medium text-gray-900">
                      Profile Badge
                    </span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <Image
                      src="/home/pricing/green-check.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="ml-2 font-medium text-gray-900">
                      Access to the community
                    </span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <Image
                      src="/home/pricing/green-check.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="ml-2 font-medium text-gray-900">
                      History of all Liked Photos
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Image
                      src="/home/pricing/green-check.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="ml-2 font-medium text-gray-900">
                      Directory Listing
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionPrices;
