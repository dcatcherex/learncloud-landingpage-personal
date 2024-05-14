type WelcomeTargetProps = {
    targetScore: number;
}

const WelcomeTarget = ({targetScore}: WelcomeTargetProps) => {
  return (
    <div>target score = {targetScore}</div>
  )
}
export default WelcomeTarget