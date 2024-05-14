"use client";

import { useFormStatus } from "react-dom";
import { useRef, useState } from "react";

// validation
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { validateOtpSchema } from "@/schemas/auth-schemas";

// components
import WelcomeName from "@/components/auth/welcome-name";
import WelcomeTarget from "@/components/auth/welcome-target";
import WelcomeAge from "@/components/auth/welcome-age";
import WelcomeInterests from "@/components/auth/welcome-interests";

const welcomePageArray = [
  {
    pageId: 1,
    title: "Let's Start...",
  },
  {
    pageId: 2,
    title: "Two More...",
  },
  {
    pageId: 3,
    title: "One More...",
  },
  {
    pageId: 4,
    title: "And we are done...",
  },
];

const WelcomeForm = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [targetScore, setTargetScore] = useState(0);
  const [interests, setInterests] = useState([""]);
  const [hobbies, setHobbies] = useState([""]);

  const { pending } = useFormStatus();


  const form = useForm<z.infer<typeof validateOtpSchema>>({
    resolver: zodResolver(validateOtpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof validateOtpSchema>) => {
    console.log("name value = " + values.otp);
  };

  return (
    <div className="max-w-96 h-[800px] rounded-lg p-4 bg-gradient-to-tr from-blue-500/30 via-purple-400/20 to-white">
      {/* header */}
      <h1>{welcomePageArray[currentPage].title}</h1>

      {/* bar indicator */}
      <div className="flex gap-2">
        {welcomePageArray.map((page, index) => (
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
            if (currentPage === 0) {
                <WelcomeName name={name}    />
                
            }else if(currentPage === 1){
                <WelcomeTarget targetScore={targetScore} />
            }else if(currentPage === 2){
                <WelcomeAge age={age}/>
            }else if(currentPage === 3){
                <WelcomeInterests interests={interests} hobbies={hobbies} />
            }
      {/* navigation  */}
    </div>
  );
};
export default WelcomeForm;
