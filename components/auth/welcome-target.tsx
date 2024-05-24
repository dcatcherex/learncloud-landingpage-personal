import TargetScoreCarousel from "@/components/auth/target-score-carousel";
import TargetScoreSelector from "@/components/auth/target-score-selector";
import ScoreSelector from "./score-selector";

type WelcomeTargetProps = {
  targetScore: number;
};

const WelcomeTarget = ({ targetScore }: WelcomeTargetProps) => {
  return (
    <div>
      <div className="text-gray-800 text-base font-medium my-6">
      What you 🎯 target score ?
      </div>
      {/* score selector */}
      {/* <TargetScoreSelector /> */}
      <TargetScoreCarousel />
      {/* <ScoreSelector /> */}
    </div>
  );
};
export default WelcomeTarget;
