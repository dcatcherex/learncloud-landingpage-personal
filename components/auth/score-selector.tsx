import React, { useState, useEffect, useRef } from 'react';

const ScoreSelector = () => {
  const minScore = 450;
  const maxScore = 990;
  const step = 10;
  const [selectedScore, setSelectedScore] = useState(750);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    if (event.deltaY < 0) {
      setSelectedScore((prev) => Math.max(prev - step, minScore));
    } else {
      setSelectedScore((prev) => Math.min(prev + step, maxScore));
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel as EventListener);
      return () => {
        container.removeEventListener('wheel', handleWheel as EventListener);
      };
    }
  }, [handleWheel]);

  const scores = [];
  for (let i = minScore; i <= maxScore; i += step) {
    scores.push(i);
  }

  return (
    <div 
      ref={containerRef} 
      style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100px', 
        overflow: 'hidden'
      }}
    >
      {scores.map((score) => (
        <div 
          key={score} 
          style={{
            margin: '0 10px', 
            color: selectedScore === score ? '#4a90e2' : '#ccc', 
            fontWeight: selectedScore === score ? 'bold' : 'normal',
            transition: 'color 0.3s'
          }}
        >
          {score}
        </div>
      ))}
    </div>
  );
};

export default ScoreSelector;