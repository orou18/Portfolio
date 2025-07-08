"use client";

import React from "react";

type CustomButtonProps = {
  text: string;
  bgColor?: string;     // ex: "bg-amber-500"
  textColor?: string;   // ex: "text-white"
  onClick?: () => void;
  icon?: React.ReactNode;
};

export default function CustomButton({
  text,
  bgColor = "bg-amber-500",
  textColor = "text-white",
  onClick,
  icon,
}: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        ${bgColor} ${textColor}
        font-semibold 
        px-6 py-2 
        rounded-3xl 
        transition-all duration-300 
        hover:bg-gray-300 hover:text-black
        text-sm sm:text-base
        flex items-center justify-center
      `}
    >
      {text}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}
