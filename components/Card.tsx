// components/CardInterest.tsx
import React from "react";

type CardInterestProps = {
  title: string;
  icon: React.ReactNode;
};

const CardInterest = ({ title, icon }: CardInterestProps) => {
  return (
    <div className="bg-gray-900 w-28 h-28 sm:w-32 sm:h-32 rounded-lg flex flex-col items-center justify-center text-white hover:bg-yellow-600 transition duration-300 shadow-md">
      <div className="text-2xl sm:text-3xl mb-2">{icon}</div>
      <div className="text-xs sm:text-sm font-semibold">{title}</div>
    </div>
  );
};

export default CardInterest;
