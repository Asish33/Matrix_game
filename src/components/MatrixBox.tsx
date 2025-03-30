
import React from 'react';
import { cn } from '@/lib/utils';

interface MatrixBoxProps {
  id: number;
  isClicked: boolean;
  isReplaying: boolean;
  onClick: () => void;
}

const MatrixBox: React.FC<MatrixBoxProps> = ({ 
  id, 
  isClicked, 
  isReplaying, 
  onClick 
}) => {
  return (
    <div
      className={cn(
        "w-full h-24 rounded-lg shadow-md cursor-pointer transition-all duration-300 flex items-center justify-center",
        isClicked && !isReplaying && "bg-green-500",
        isClicked && isReplaying && "bg-orange-500",
        !isClicked && "bg-white hover:bg-gray-200"
      )}
      onClick={onClick}
    >
      <span className="text-xs text-gray-400">{id + 1}</span>
    </div>
  );
};

export default MatrixBox;
