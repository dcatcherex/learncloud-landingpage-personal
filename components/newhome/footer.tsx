import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-indigo-200 to-purple-300 w-full pt-12 px-4 lg:px-0 lg:pt-14  lg:px-32">
      <div className="flex flex-col-reverse lg:flex-row max-w-[1200px] mx-auto lg:gap-44">
          <div>
            <Image
              className="mb-6"
              src={"/logo/ailearnnewlogo.svg"}
              width={74}
              height={74}
              alt="new logo"
            />
            <div className="flex gap-6 mb-6">
              <Image
                src={"/home/social/facebook.svg"}
                width={40}
                height={40}
                alt="facebook"
              />
              <Image
                src={"/home/social/instagram.svg"}
                width={40}
                height={40}
                alt="facebook"
              />
              <Image
                src={"/home/social/linkedin.svg"}
                width={40}
                height={40}
                alt="facebook"
              />
              <Image
                src={"/home/social/tiktok.svg"}
                width={40}
                height={40}
                alt="facebook"
              />
            </div>
            <div className="flex gap-6 mb-14">
              <Image
                src={"/home/mobile/appstore.svg"}
                width={110}
                height={40}
                alt="appstore"
              />
              <Image
                src={"/home/mobile/googleplay.svg"}
                width={110}
                height={40}
                alt="appstore"
              />
            </div>
            <p className="text-white pb-6">@ 2024 LearnCloud</p>
          </div>
          <div className="flex flex-wrap gap-10 justify-center lg:gap-20 text-xl">
            <div className="flex flex-col text-white">
              <h3 className="mb-4 text-xl font-medium">Product</h3>
              <div className="flex flex-col gap-2 ">
                <Link href={""}>Download</Link>
                <Link href={""}>Pricing</Link>
              </div>
            </div>
            <div className="flex flex-col text-white">
              <h3 className="mb-4 text-xl font-medium">Help</h3>
              <div className="flex flex-col gap-2">
                <Link href={""}>Contact us</Link>
                <Link href={""}>Terms</Link>
                <Link href={""}>Privacy</Link>
              </div>
            </div>
            <div className="flex flex-col text-white">
              <h3 className="mb-4 text-xl font-medium">Company</h3>
              <div className="flex flex-col gap-2">
                <Link href={""}>Our team</Link>
                <Link href={""}>esLearn</Link>
                <Link href={""}>euLearn</Link>
                <Link href={""}>LearnCloud</Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
export default Footer;
