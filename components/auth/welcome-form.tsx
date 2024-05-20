import { useState } from "react";
import WelcomeName from "@/components/auth/welcome-name";
import WelcomeTarget from "@/components/auth/welcome-target";
import WelcomeAge from "@/components/auth/welcome-age";
import WelcomeInterests from "@/components/auth/welcome-interests";
import { Button } from "../ui/button";
import Image from "next/image";

const welcomePageArray = [
  {
    title: "Let's Start...",
    component: WelcomeName,
    props: { name: "" },
  },
  {
    title: "Two More...",
    component: WelcomeTarget,
    props: { targetScore: 0 },
  },
  {
    title: "One More...",
    component: WelcomeAge,
    props: { age: "" },
  },
  {
    title: "And we are done...",
    component: WelcomeInterests,
    props: { interests: [""], hobbies: [""] },
  },
];

const defaultProps = {
  name: "",
  targetScore: 0,
  age: 0,
  interests: [],
  hobbies: [],
};

const WelcomeForm = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [targetScore, setTargetScore] = useState(0);
  const [interests, setInterests] = useState([""]);
  const [hobbies, setHobbies] = useState([""]);

  const CurrentComponent = welcomePageArray[currentPage].component;
  const currentProps = {
    ...defaultProps,
    ...welcomePageArray[currentPage].props,
  };

  const handlePreviousClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    console.log("CurrentPage = " + (currentPage - 1));
  };

  const handleNextClick = () => {
    if (currentPage < welcomePageArray.length - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
    console.log("CurrentPage = " + (currentPage + 1));
  };

  return (
    <div className="min-w-[300px] max-w-96 h-[800px] rounded-lg p-4 bg-gradient-to-tr from-blue-500/30 to-purple-400/20 ">
      {/* header */}
      <h1 className="text-xl font-semibold">
        {welcomePageArray[currentPage].title}
      </h1>

      {/* page indicator */}
      <div className="flex justify-end">
        <div className="pr-1">{currentPage + 1} </div>
        <div>of {welcomePageArray.length}</div>
      </div>

      {/* bar indicator */}
      <div className="flex gap-2">
        {welcomePageArray.map((_, index) => (
          <div
            key={index}
            className={`  ${
              currentPage >= index
                ? "w-1/4 h-1 bg-primary rounded-full"
                : "w-1/4 h-1 bg-black opacity-25 rounded-full"
            }`}
          ></div>
        ))}
      </div>

      {/* form */}
      <CurrentComponent {...currentProps} />

      {/* navigation  */}
      <div className="flex justify-between">
        <div>
          {currentPage !== 0 && (
            <Button className="shadow-outter size-12 rounded-2xl p-0" onClick={handlePreviousClick}>
              <Image
              className="transform rotate-180"
                src={"/arrow-right.svg"}
                width={24}
                height={24}
                alt="prev button"
              />
            </Button>
          )}
        </div>
        <Button
          className="shadow-outter size-12 rounded-2xl p-0"
          onClick={handleNextClick}
        >
          <Image
            src={"/arrow-right.svg"}
            width={24}
            height={24}
            alt="next button"
          />
        </Button>
      </div>
    </div>
  );
};
export default WelcomeForm;
