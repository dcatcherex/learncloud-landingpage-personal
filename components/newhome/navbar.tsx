import Image from "next/image";
import Link from "next/link";
import { MenuIcon, GlobeIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => (
  <div className="fixed top-8 left-0 w-full z-10">
    <nav className=" flex  justify-between items-center lg:max-w-[1200px] mx-4 lg:mx-auto h-10 lg:h-16  bg-white shadow-outter rounded-full px-4  lg:px-4">
      <div className="relative py-1 size-10 lg:size-16 w-10">
        <Image
          src="/logo/3d-logo-ailearn.png"
          // width={60}
          // height={60}
          fill
          alt="ailearn logo"
        />
      </div>
      <div className="hidden lg:flex">
        <ul className=" flex  gap-10 text-gray-400 text-base font-normal ">
          <li>
            <Link href="#home">หน้าหลัก</Link>
          </li>
          <li>
            <Link href="#feature">Features</Link>
          </li>
          <li>
            <Link href="#events">อีเวนท์</Link>
          </li>
          <li>
            <Link href="#news">ข่าวสาร</Link>
          </li>
          <li>
            <Link href="#testimonial">Testimonial</Link>
          </li>
          <li>ติดต่อเรา</li>
        </ul>
      </div>
      <div className="hidden lg:flex">
        <div className="flex space-x-4">
          <Button className="hidden lg:block rounded-full w-[104px]">
            ซื้อแพ็กเกจ
          </Button>
          <div className="hidden lg:block">
            <Button
              className="text-base text-gray-800 font-normal inline-flex gap-1 px-0"
              variant="ghost"
            >
              <GlobeIcon className="size-5 mr-1" />
              <div className="font-semibold text-base">TH</div>
            </Button>
          </div>
          <Button
            variant="ghost"
            className="hidden lg:block rounded-full px-0"
          >
            <UserIcon className="size-6 mr-1" />
          </Button>
        </div>
      </div>
      <MenuIcon className="lg:hidden text-gray-400 text-base font-normal" />
    </nav>
  </div>
);

export default NavBar;