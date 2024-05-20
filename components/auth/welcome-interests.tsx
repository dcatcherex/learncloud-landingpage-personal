import { useCallback, useState } from "react";

type WelcomeInterestsProps = {
  interests: string[];
  hobbies: string[];
};

const interestsArray = [
  "🎲 Common Idioms and Phrases",
  "🏖️ Travel",
  "🏦 Business",
  "💸 Financial",
  "💰 Marketing",
  "💻 IT",
  "💊 Health",
];

const hobbiesArray = [
  "Cooking",
  "Reading",
  "Writing",
  "Traveling",
  "Playing Cricket",
  "Playing Football",
  "Playing Badminton",
];

const WelcomeInterests = ({ interests, hobbies }: WelcomeInterestsProps) => {
  ` `;

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);

  // toggleInterest is a callback function that takes in an interest string as an argument. Use callback in order to not render the component every time the user clicks on an interest.
  const toggleInterest = useCallback((interest: string) => {
    console.log("interest:" + interest);
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    } else {
      if (selectedInterests.length < 3) {
        setSelectedInterests([...selectedInterests, interest]);
      } else {
        console.log("You can only select up to 3 interests.");
      }
    }
    console.log("selectedInterests:" + selectedInterests);
  },[selectedInterests]);


  const toggleHobbies = useCallback((hobbies: string) => {
    console.log("hobbies:" + hobbies);
    if (selectedHobbies.includes(hobbies)) {
      setSelectedHobbies(
        selectedHobbies.filter((item) => item !== hobbies)
      );
    } else {
      if (selectedHobbies.length < 3) {
        setSelectedHobbies([...selectedHobbies, hobbies]);
      } else {
        console.log("You can only select up to 3 hobbies.");
      }
    }
    console.log("selectedHobbies:" + selectedHobbies);
  },[selectedHobbies]);

  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="text-gray-800 text-base font-medium my-6">
          What are your interests?
        </div>
        <div>{selectedInterests.length}/3</div>
      </div>
      <div>
        <div className="flex flex-wrap gap-2">
          {interestsArray.map((interest) => (
            <button
            
            // onClick={toggleInterest} will call toggleInterest on render so onClick={() => toggleInterest(interest)} will call toggleInterest only when the user clicks on the button.
              onClick={() => toggleInterest(interest)}
              key={interest}
              id={interest}
              className={`text-gray-800 h-12 px-4 py-3 bg-white/50 rounded-2xl text-left text-base border-2 font-normal ${
                selectedInterests.includes(interest)
                  ? "border-primary"
                  : "border-white"
              }`}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      {/* hobbies part */}
      <div className="flex items-center justify-between">
        <div className="text-gray-800 text-base font-medium my-6">
          What are your Hobbies?
        </div>
        <div>{selectedHobbies.length}/3</div>
      </div>
      <div>
        <div className="flex flex-wrap gap-2">
          {hobbiesArray.map((hobbies) => (
            <button
              onClick={() => toggleHobbies(hobbies)}
              key={hobbies}
              id={hobbies}
              className={`text-gray-800 h-12 px-4 py-3 bg-white/50 rounded-2xl text-left text-base border-2 font-normal ${
                selectedHobbies.includes(hobbies)
                  ? "border-primary"
                  : "border-white"
              }`}
            >
              {hobbies}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WelcomeInterests;
