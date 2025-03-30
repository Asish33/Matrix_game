
import React from 'react';
import MatrixGame from '@/components/MatrixGame';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Matrix Color Game</h1>
      <p className="text-lg text-gray-600 mb-8">
        Click on the boxes to change their color. <br />
        When all boxes are clicked, watch the replay!
      </p>
      <MatrixGame />
    </div>
  );
};

export default Index;
