import { CheckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const Price = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-white py-8 lg:py-[112px] gap-4 lg:gap-12  lg:mx-0 px-4 lg:px-0">
          <h2 className="text-[38px] font-medium lg:font-semibold">
            <span className="text-indigo-500">Get started </span>today
          </h2>
          <p className="text-center lg:text-left text-gray500 text-lg lg:text-2xl font-normal">
            We offer three pricing plans for you to choose based on your need.
          </p>

          <div className=" lg:flex items-center text-center lg:text-left">
            <div className="lg:max-w-[426px] rounded-3xl lg:rounded-l-3xl lg:px-10 py-6 bg-gradient-to-r from-gray-100 to-gray-50">
              <h2 className="text-gray-800 text-[32px] font-semibold leading-10 mb-2 lg:mb-4">
                Starter
              </h2>
              <p className="text-gray-500 text-xs font-normal leading-tight mb-6 lg:mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
              <h1 className="text-gray-800 text-6xl lg:text-[80px] mb-6 lg:mb-12 font-medium ">
                399 <span className="text-2xl lg:text-[38px]">Baht</span>
              </h1>
              <div className="flex justify-center">
                <Button
                  variant={"outline"}
                  className="border-primary rounded-full shadow w-[286px] h-12 text-gray-800 text-base font-medium mb-6"
                >
                  Buy now
                </Button>
              </div>
              <ul className="hidden lg:block">
                <div className="flex gap-2 text-gray-500 text-base font-medium">
                  <CheckIcon />
                  <li>Lorem ipsum dolor sit amet</li>
                </div>
                <div className="flex gap-2 text-gray-500 text-base font-medium">
                  <CheckIcon />
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </li>
                </div>
                <div className="flex gap-2 text-gray-500 text-base font-medium">
                  <CheckIcon />
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </li>
                </div>
                <div className="flex gap-2 text-gray-500 text-base font-medium ">
                  <CheckIcon />
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </li>
                </div>
              </ul>
            </div>
            <div className="flex flex-col justify-center shadow-outter rounded-3xl px-10 py-6 bg-gradient-to-r from-indigo-500/40 to-purple-400/40 lg:h-[626px] max-w-[462px] lg:text-left text-center">
              <h2 className="text-gray-800 text-[32px] font-semibold leading-10 mb-4">
                Professional
              </h2>
              <p className="text-gray-500 text-xs font-normal leading-tight mb-6 lg:mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
              <h1 className="text-gray-800 text-6xl lg:text-[80px] font-medium mb-6 lg:mb-12">
                699 <span className="text-[38px]">Baht</span>
              </h1>
              <div className="flex justify-center">
                <Button className=" rounded-full shadow w-[286px] h-12 text-white text-base font-medium mb-6">
                  Buy now
                </Button>
              </div>
              <ul className="hidden lg:block">
                <div className="flex gap-2 text-gray-500 text-base font-medium">
                  <CheckIcon />
                  <li> Lorem ipsum dolor sit amet</li>
                </div>
                <div className="flex gap-2 text-gray-500 text-base font-medium ">
                  <CheckIcon />
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </li>
                </div>
                <div className="flex gap-2 text-gray-500 text-base font-medium">
                  <CheckIcon />
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </li>
                </div>
                <div className="flex gap-2 text-gray-500 text-base font-medium ">
                  <CheckIcon />
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </section>
  )
}
export default Price