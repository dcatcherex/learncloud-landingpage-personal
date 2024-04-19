"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icon/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";

interface TopNavProps {
  hasLogoText?: boolean;
}

const TopNav = ({ hasLogoText = false }: TopNavProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="fixed mx-auto z-40  flex w-full bg-white dark:bg-slate-800 p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="container flex items-center justify-between px-0 xl:px-8">
          <div className="flex lg:flex-1">
            <Link href={"/"} className="flex items-center space-x-3">
              <span className="sr-only">{siteConfig.name}</span>
              <Image
                src="/logo/logo-text-side.svg"
                width={100}
                height={60}
                alt="logo"
              />
              {hasLogoText && (
                <p className="font-bold text-[#125570]">{siteConfig.name}</p>
              )}
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm leading-6 text-gray-900 dark:text-gray-100"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <LanguageToggle />
            <ThemeToggle />
              <Button 
              variant={"ghost"}
              className="rounded-full font-normal ">Sign Up</Button>
              <Button className="rounded-full font-normal">Login</Button>
          </div>
          {/* login */}
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"outline"}>
                  <Icons.menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:w-[540px] ">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex w-full max-w-screen-lg flex-col   items-center justify-center gap-y-4 text-center">
                  <SheetClose asChild>
                    <Link href={"/"}>Home</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href={"/program"}>Program</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href={"/about"}>About Us</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href={"/contact"}>Contact</Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
