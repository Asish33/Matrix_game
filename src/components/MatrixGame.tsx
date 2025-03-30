
import React, { useState, useEffect } from 'react';
import MatrixBox from './MatrixBox';

const MatrixGame = () => {
  
  const [clickedBoxes, setClickedBoxes] = useState<number[]>([]);
 
  const [isReplaying, setIsReplaying] = useState(false);
  
  const totalBoxes = 9;

  
  const handleBoxClick = (boxId: number) => {
    
    if (isReplaying) return;
    
   
    if (clickedBoxes.includes(boxId)) return;
    
    
    const newClickedBoxes = [...clickedBoxes, boxId];
    setClickedBoxes(newClickedBoxes);
    
    
    if (newClickedBoxes.length === totalBoxes) {
      startReplaySequence(newClickedBoxes);
    }
  };
  
 
  const startReplaySequence = (boxes: number[]) => {
    setIsReplaying(true);
    
    
    setClickedBoxes([]);
    
    
    boxes.forEach((boxId, index) => {
      setTimeout(() => {
        setClickedBoxes(prev => [...prev, boxId]);
        
        
        if (index === boxes.length - 1) {
          setTimeout(() => {
            setIsReplaying(false);
            setClickedBoxes([]);
          }, 1000);
        }
      }, index * 500);
    });
  };
  
  return (
    <div className="w-full max-w-md">
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: totalBoxes }).map((_, index) => (
          <MatrixBox
            key={index}
            id={index}
            isClicked={clickedBoxes.includes(index)}
            isReplaying={isReplaying}
            onClick={() => handleBoxClick(index)}
          />
        ))}
      </div>
      
      
      <div className="mt-6 text-center text-gray-500">
        {clickedBoxes.length < totalBoxes ? (
          <p>{`Boxes clicked: ${clickedBoxes.length}/${totalBoxes}`}</p>
        ) : (
          <p>Replaying sequence...</p>
        )}
      </div>
    </div>
  );
};

export default MatrixGame;
