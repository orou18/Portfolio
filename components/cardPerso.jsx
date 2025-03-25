import React from 'react';

const CardPerso = ({ number, text }) => {
  return (
    <div
      className="w-10 h-10 bg-gray-100 border-2 border-yellow-500 
      rounded-md flex flex-col justify-center items-center
    hover:bg-yellow-500 hover:border-yellow-700"
    >
      <span className="text-lg font-bold">{number}</span>
      <span className="text-sm text-gray-600">{text}</span>
    </div>
  );
};

export default CardPerso;