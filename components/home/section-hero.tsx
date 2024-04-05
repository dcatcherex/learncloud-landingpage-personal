import React, { useState } from 'react';

import Image from "next/image";
import { Button } from "../ui/button";
import Link from 'next/link';

const supportIconSize = 40;

const socialIconSize = 60

const socialIconSizeMobile = 40




const SectionHero = () => {

  return (
    <section className=" bg-gradient-to-r from-cyan-50 to-purple-100 pt-20 dark:bg-gradient-to-r dark:from-slate-900 dark:to-[#0958D9]/50">

      <div className="relative max-w-[1400px] mx-auto px-4 mt-20 ">
        <div className="mb-16 w-full px-4 lg:mb-0 ">
          <div className="mx-auto">
            {/* mobile */}
            <Image
              className='block md:hidden absolute -top-56 right-6 opacity- md:opacity-100 md:z-50'
              src={"/home/landing/circle.png"}
              width={200}
              height={100}
              alt=""
            />

            {/* desktop */}
            <Image
              className='hidden md:block absolute md:right-10 md:-top-28 opacity- md:opacity-100 md:z-50'
              src={"/home/landing/circle.png"}
              width={400}
              height={400}
              alt=""
            />
            <div className="font-semibold text-primary tracking-wide text-center md:text-left md:z-20  ">
              <p className='mb-4 text-3xl md:text-7xl z-30 '>เตรียมสอบ TOEIC กับ</p>
              <p className='relative mb-4 text-3xl md:text-7xl w-full md:max-w-4xl leading-relaxed'>
                แอปพลิเคชั่น <span className='text-7xl md:text-9xl'>aiLearn</span>
                <span className='absolute bottom-[54px] right-7 md:right-14 md:-top-2 text-lg md:text-3xl'>(ไอเลิร์น)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <div className="flex lg:justify-end">
            <div className="mr-5 pt-2">
            </div>
            <div className="">

              <div className="-mx-4 mb-6 flex flex-wrap items-center">


              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4">




        {/* display Toeic Stat */}
        <div className='grid grid-cols-1 lg:grid-cols-2  -mt-16 md:mt-0 '>
          <div className='flex flex-col md:ml-20 mx-4 md:mx-0  '>
            <Image
              className="dark:bg-white shadow-outter  rounded-2xl mb-8"
              src={"/home/landing/Predict.png"}
              width={400}
              height={300}
              alt=""
            />
            <Image
              className="dark:bg-white shadow-outter rounded-2xl mb-8"
              src={"/home/landing/Overall.png"}
              width={400}
              height={300}
              alt=""
            />
            <Image
              className="dark:bg-white shadow-outter rounded-2xl"
              src={"/home/landing/Performance.png"}
              width={400}
              height={300}
              alt=""
            />
          </div>
          <div className='text-primary md:-ml-32 mt-8 md:mt-44 text-center md:text-left '>
            <div className='mb-6 md:text-4xl md:space-y-10 text-justify max-w-[580px]'>
              <h2 className=' text-center md:text-left text-2xl md:text-5xl tracking-wide '>ด้วยเทคโนโลยี AI ที่ส่งมอบ</h2>
              <h2 className=' text-center md:text-left text-2xl md:text-5xl tracking-widest'>ประสบการณ์การเรียนรู้</h2>
              <h2 className=' text-center md:text-left text-2xl md:text-5xl tracking-wide'>อย่างมีประสิทธิภาพในแบบ</h2>
              <h2 className=' text-center md:text-left text-2xl md:text-5xl '>ที่คุณเป็น (Personalization)</h2>
            </div>
            <h2 className=' text-2xl md:text-5xl mt-14 md:mt-44'>aiLearn unlocks your potential.</h2>
            
            {/* mobile social */}
            <div className='block md:hidden'>
              <div className="flex justify-center gap-8 mt-10">
                <Link
                  href={"https://www.facebook.com/learncloudofficial"}
                >
                  <Image
                    src={"/logo/fb_logo.svg"}
                    width={socialIconSizeMobile}
                    height={socialIconSizeMobile}
                    alt=""
                  />
                </Link>
                <Link
                  href={"https://www.instagram.com/learncloud.official"}
                >
                  <Image
                    src={"/logo/ig_logo.svg"}
                    width={socialIconSizeMobile}
                    height={socialIconSizeMobile}
                    alt=""
                  />
                </Link>
                <Link
                  href={"https://www.linkedin.com/company/learncloudcoltd"}
                >
                  <Image
                    src={"/logo/linkedin_logo.svg"}
                    width={socialIconSizeMobile}
                    height={socialIconSizeMobile}
                    alt=""
                  />
                </Link>
                <Link
                  href={"https://www.tiktok.com/@learncloudofficial"}
                >
                  <Image
                    src={"/logo/tiktok_logo.svg"}
                    width={socialIconSizeMobile}
                    height={socialIconSizeMobile}
                    alt=""
                  />
                </Link>
              </div>
            </div>

            {/* desktop social */}
            <div className='hidden md:block'>
              <div className="flex justify-center gap-16 mt-20 -ml-36">
                <Link
                  href={"https://www.facebook.com/learncloudofficial"}
                >
                  <Image
                    src={"/logo/fb_logo.svg"}
                    width={socialIconSize}
                    height={socialIconSize}
                    alt=""
                  />
                </Link>
                <Link
                  href={"https://www.instagram.com/learncloud.official"}
                >
                  <Image
                    src={"/logo/ig_logo.svg"}
                    width={socialIconSize}
                    height={socialIconSize}
                    alt=""
                  />
                </Link>
                <Link
                  href={"https://www.linkedin.com/company/learncloudcoltd"}
                >
                  <Image
                    src={"/logo/linkedin_logo.svg"}
                    width={socialIconSize}
                    height={socialIconSize}
                    alt=""
                  />
                </Link>
                <Link
                  href={"https://www.tiktok.com/@learncloudofficial"}
                >
                  <Image
                    src={"/logo/tiktok_logo.svg"}
                    width={socialIconSize}
                    height={socialIconSize}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className='flex justify-center text-right md:-ml-36'>
              <Button
                size={"lg"}
                className="w-[270px] md:w-[450px] mt-12 md:mt-28 rounded-full py-8 md:py-12  bg-[#FD0448] hover:bg-primary text-2xl md:text-4xl text-orange-50 "
              >
                <Link 
                href={"/home/download/toeic-words.pdf"}
                >ดาวน์โหลดคำศัพท์ฟรี</Link>
              </Button>
            </div>
           
          </div>

          {/* mobile image */}
          <Image
            className='block md:hidden absolute -left-16 bottom-44 opacity-70'
            src={"/home/landing/circle.png"}
            width={150}
            height={100}
            alt=""
          />

          {/* desktop image */}
          <Image
            className='hidden md:block absolute -left-36 bottom-32 '
            src={"/home/landing/circle.png"}
            width={250}
            height={100}
            alt=""
          />
        </div>


        <div className="flex justify-center gap-10 mt-16 pb-16 flex-wrap">
          <Image
            src={"/logo/partner/sharktank.svg"}
            width={supportIconSize}
            height={supportIconSize}
            alt=""
          />
          <Image
            src={"/logo/partner/mwithme.svg"}
            width={45}
            height={supportIconSize}
            alt=""
          />
          <Image
            src={"/logo/partner/triam.svg"}
            width={220}
            height={supportIconSize}
            alt=""
          />
          <Image
            src={"/logo/partner/slimup.svg"}
            width={150}
            height={supportIconSize}
            alt=""
          />
          <Image
            src={"/logo/partner/bebetters.svg"}
            width={45}
            height={supportIconSize}
            alt=""
          />
          <Image
            src={"/logo/partner/chemsaman.svg"}
            width={35}
            height={supportIconSize}
            alt=""
          />
        </div>


      </div>



    </section>
  );
};
export default SectionHero;
