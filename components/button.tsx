// components/button.tsx

import { ReactNode } from "react";

interface CustomButtonProps {
  text: string;
  bgColor: string;
  textColor: string;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // Add this line
  // ... any other existing props
}

const CustomButton = ({ text, bgColor, textColor, icon, onClick, type }: CustomButtonProps) => {
  return (
    <button
      type={type} // Make sure the button element also uses the type prop
      onClick={onClick}
      className={`${bgColor} ${textColor} flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl`}
    >
      {icon && <span className="text-xl">{icon}</span>}
      {text}
    </button>
  );
};

export default CustomButton;