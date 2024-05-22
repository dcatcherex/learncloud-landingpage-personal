"use client";

import { useState } from "react";

import Image from "next/image";
import InfoCard from "./info-card";

const news = [
  {
    title: "TOEIC Test Changes for 2024",
    date: "2024-01-01",
    feature: true,
    image: "/home/news/toeic1.jpg",
    description:
      "ETS has announced some changes to the TOEIC test for 2024. Read more to find out.",
  },
  {
    title: "New TOEIC Preparation Material Released",
    date: "2024-02-01",
    feature: false,
    image: "/home/news/toeic2.jpg",
    description:
      "A new set of TOEIC preparation materials has been released. Check them out.",
  },
  {
    title: "TOEIC Test Centers Reopen After COVID-19",
    date: "2024-03-01",
    feature: false,
    image: "/home/news/toeic3.jpg",
    description:
      "TOEIC test centers are reopening after the COVID-19 lockdown. Find out more.",
  },
  {
    title: "TOEIC Scores Now Accepted by More Universities",
    date: "2024-04-01",
    feature: false,
    image: "/home/news/toeic4.jpg",
    description:
      "More universities are now accepting TOEIC scores for admission. Read more.",
  },
];

const edNews = [
  {
    title: "New EdTech Startup Raises Funding",
    date: "2022-01-01",
    feature: false,
    image: "/home/news/news1.jpg",
    description:
      "A new EdTech startup has raised significant funding to revolutionize online learning.",
  },
  {
    title: "Virtual Reality in Classroom",
    date: "2022-02-01",
    feature: false,
    image: "/home/news/news2.jpg",
    description:
      "More schools are adopting virtual reality technology to enhance the learning experience.",
  },
  {
    title: "AI in Education",
    date: "2022-03-01",
    feature: true,
    image: "/home/news/news3.jpg",
    description:
      "Artificial Intelligence is making a big impact in education. Find out how.",
  },
  {
    title: "EdTech Conference 2022",
    date: "2022-04-01",
    feature: false,
    image: "/home/news/news4.jpg",
    description: "The annual EdTech conference is back. Get your tickets now.",
  },
  {
    title: "Online Learning Trends",
    date: "2022-05-01",
    feature: false,
    image: "/home/news/news5.jpg",
    description:
      "Discover the latest trends in online learning and how they can benefit you.",
  },
];

const News = () => {
  const [showToeicNews, setShowToeicNews] = useState(true);
  return (
    <section className="lg:pb-10 bg-white lg:-mt-20 p-4 py-8 lg:py-0 lg:p-0">
      <div className="max-w-[1200px] lg:mx-auto">
        <h2 className="text-[32px] mb-2 lg:mb-8 text-gray-800 font-semibold">
          News
        </h2>
        <div className="flex gap-10 text-gray-400 text-xl lg:text-2xl font-medium mb-4">
          <div
            onClick={() => setShowToeicNews(false)}
            className={`${
              !showToeicNews && "text-indigo-500"
            } hover:cursor-pointer`}
          >
            General
          </div>
          <div
            onClick={() => setShowToeicNews(true)}
            className={`${showToeicNews && "text-indigo-500"}`}
          >
            TOEIC
          </div>
        </div>
        {showToeicNews && (
          <div className="flex  lg:gap-12">
            <article className=" ">
              {news
                .filter(({ feature }) => feature === true)
                .map(({ title, image }, index) => (
                  <div className="hidden lg:block" key={index}>
                    <div className=" lg:w-[768px] lg:h-[1036px] relative ">
                      <Image
                        className="rounded-[40px]"
                        src={image}
                        fill
                        style={{ objectFit: "cover" }}
                        alt="news {title}"
                      />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800 mt-4">
                      {title}
                    </h2>
                  </div>
                ))}
            </article>
            <div className="flex flex-col justify-between gap-2 lg:gap-6">
              {news
                .filter(({ feature }) => feature !== true)
                .map(({ title, image }, index) => (
                  <InfoCard key={index} title={title} image={image} />
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default News;
