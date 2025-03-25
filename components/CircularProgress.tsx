"use client";

import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CircularProgressProps {
  value: number; // Pourcentage (0-100)
  label?: string; // Texte sous le cercle
}

const CircularProgress: React.FC<CircularProgressProps> = ({ value, label }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimatedValue(value), 500); // Animation au chargement
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="flex flex-col items-center w-32">
      <CircularProgressbar 
        value={animatedValue}
        text={`${animatedValue}%`}
        styles={buildStyles({
          pathColor: "#f59e0b", // Jaune (tailwind: yellow-400)
          textColor: "ffffff", // Gris foncé (tailwind: gray-800)
          trailColor: "#e5e7eb", // Gris clair (tailwind: gray-200)
          textSize: "18px",
          pathTransitionDuration: 1.5, // Animation douce
        })}
      />
      {label && <span className="mt-2 text-white font-bold  text-[24px]">{label}</span>}
    </div>
  );
};

export default CircularProgress;
