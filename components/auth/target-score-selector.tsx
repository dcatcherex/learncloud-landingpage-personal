import React, { useState } from 'react';

const TargetScoreSelector = () => {
  const [selectedScore, setSelectedScore] = useState(450);
  const scores = Array.from({length: 55}, (_, i) => 450 + (i * 10));

  const handleWheel = (event: React.WheelEvent) => {
    if (event.deltaY < 0 && selectedScore < 990) {
      setSelectedScore(prevScore => prevScore + 10);
    } else if (event.deltaY > 0 && selectedScore > 450) {
      setSelectedScore(prevScore => prevScore - 10);
    }
  };

  return (
    <div 
    className='flex items-center gap-4'
    onWheel={handleWheel} >
      {scores.map((score, index) => (
        <div
          key={index}
          style={{
            opacity: score === selectedScore ? 1 : 0.5,
            fontSize: score === selectedScore ? '2em' : '1em',
          }}
        >
          {score}
        </div>
      ))}
    </div>
  );
};

export default TargetScoreSelector;