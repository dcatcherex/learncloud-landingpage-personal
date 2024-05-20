
import { useState } from "react";

type WelcomeAgeProps = {
  age: string;
};

const ageRanges = [
  {
    id: 1,
    label: "👶🏻 6-15 Year",
    value: "6-15",
  },
  {
    id: 2,
    label: "👩🏻 16-25 Year",
    value: "16-25",
  },
  {
    id: 3,
    label: "🧑🏻 26-35 Year",
    value: "26-35",
  },
  {
    id: 4,
    label: "👱🏻‍♂️ 36-45 Year",
    value: "36-45",
  },
  {
    id: 5,
    label: "🧓🏻 46 Year ++",
    value: "46 Year ++"
  }
]

const WelcomeAge = ({ age }: WelcomeAgeProps) => {
  const [ageRange, setAgeRange] = useState("")
  return (
    <div>
      <div className="text-gray-800 text-base font-medium my-6">
        How old are you?
      </div>
      <div className="flex flex-col gap-4">
        {ageRanges.map(({id,label,value}) => (
            <button
              onClick={() => {
                setAgeRange(value)
                console.log("ageRange = " + ageRange)
                console.log("value = " + value)
              }}
              key={id}
              id={label}
              className={`w-full text-gray-800 h-12 px-4 py-3 bg-white/50 rounded-2xl border-2 text-left text-base font-normal ${
                ageRange === value
                 ? "border-primary"
                  : "border-white"
              }`}
            >{label}</button>
        ))}
         </div>
    </div>
  );
};
export default WelcomeAge;
