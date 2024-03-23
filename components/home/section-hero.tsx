import React, { useState } from 'react';

import Image from "next/image";
import { Button } from "../ui/button";
import ToeicSchedule from "../toeicinfo/toeic-schedule";
import ToeicReserve from "../toeicinfo/toeic-reserve";
import ToeicReportto from "../toeicinfo/toeic-reportto";
import ToeicProve from "../toeicinfo/toeic-prove";
import ToeicExpense from "../toeicinfo/toeic-expense";
import ToeicGetresult from "../toeicinfo/toeic-getresult";
import ToeicPrepare from "../toeicinfo/toeic-prepare";
import ToeicDirection from "../toeicinfo/toeic-direction";

const supportIconSize = 40;

const components = [
  { component: <ToeicSchedule />, name: 'ToeicSchedule' },
  { component: <ToeicReserve />, name: 'ToeicReserve' },
  { component: <ToeicReportto />, name: 'ToeicReportto' },
  { component: <ToeicProve />, name: 'ToeicProve' },
  { component: <ToeicExpense />, name: 'ToeicExpense' },
  { component: <ToeicGetresult />, name: 'ToeicGetresult' },
  { component: <ToeicPrepare />, name: 'ToeicPrepare' },
  { component: <ToeicDirection />, name: 'ToeicDirection' },
];

const SectionHero = () => {
  return (
    <section className=" bg-white pt-20 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-md lg:max-w-7xl">
          <div className=" -mx-4 mb-14 flex flex-wrap items-center">
            <div className="mb-16 w-full px-4 lg:mb-0 lg:w-1/2">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <span className="mb-5 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-900 dark:text-slate-900 dark:bg-white">
                  👋 Coming Soon!!!
                </span>
                <h1 className="xs:text-6xl text-5xl font-medium xl:text-7xl text-slate-700 dark:text-white ">
                  <span>ฝึกฝน เรียนรู้ โทอิค</span>
                  <span className="block text-primary leading-snug ">
                    ด้วยระบบวิเคราะห์<p>ผู้ใช้รายบุคคล</p>
                  </span>
                  <span>กับ ไอเลิร์น</span>
                </h1>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex lg:justify-end">
                <div className="mr-5 pt-2">
                </div>
                <div className="">

                  <div className="-mx-4 mb-6 flex flex-wrap items-center">


                  </div>
                  <Button
                    size={"lg"}
                    className="rounded-full  bg-primary  text-center font-semibold text-orange-50"

                  >
                    Coming soon!
                  </Button>
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
              src="/home/applications/ipad.png"
              width={882}
              height={526}
              alt=""
            />
            <div className="flex justify-center gap-10 mt-16">
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
            <div
              className="px-12 pt-20 h-[712px] "
              style={{
                backgroundImage: `url(/home/applications/ipad.png)`,
                backgroundSize: 'cover',
                // padding: '50px'
              }}>
                <ToeicSchedule />
                <ToeicReserve />
                <ToeicReportto />
                <ToeicProve />
                <ToeicExpense />
                <ToeicGetresult />
                <ToeicPrepare />
                <ToeicDirection />
              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionHero;
