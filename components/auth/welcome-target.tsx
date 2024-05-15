import TargetScoreCarousel from "@/components/auth/target-score-carousel";
import TargetScoreSelector from "@/components/auth/target-score-selector";

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
      <TargetScoreSelector />
      <TargetScoreCarousel />
    </div>
  );
};
export default WelcomeTarget;
