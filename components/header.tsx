// components/header.tsx
"use client";
import React, { useState } from "react";
import {
  FaHome,
  FaAddressBook,
  FaProjectDiagram,
  FaTools,
  FaBars,
  FaTimes,
  FaLightbulb,
} from "react-icons/fa";

// Définition de l'interface des props pour le composant Header
interface HeaderProps {
  isLightOn: boolean;
  toggleTheme: () => void;
}

export default function Header({ isLightOn, toggleTheme }: HeaderProps) { // Accepte les props
  const [menuOpen, setMenuOpen] = useState(false);
  // isLightOn et toggleTheme sont maintenant des props, plus besoin de les déclarer ici.

  const toggleMenu = () => setMenuOpen(!menuOpen);
  // toggleTheme est maintenant une prop, utilisée directement.

  // Fonction pour faire défiler vers une section spécifique
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Fermer le menu mobile après la navigation
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full flex justify-between items-center py-4 px-4 sm:px-8 ${isLightOn ? 'bg-gray-100' : 'bg-gray-900'} bg-opacity-90 backdrop-blur-sm z-50`}>
      {/* Logo */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gray-300 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
        <span>Leonce </span>OROU AWA
      </h2>

      {/* Ampoule (Gestion du thème) */}
      <div
        onClick={toggleTheme} // Utilisation de la prop toggleTheme
        className="cursor-pointer mx-4 relative group"
        title="Changer le thème"
      >
        <FaLightbulb
          className={`text-2xl sm:text-3xl transition-all duration-300 
            ${
              isLightOn
                ? "text-yellow-400 drop-shadow-[0_0_10px_rgba(255,221,0,0.8)] scale-110"
                : "text-gray-500"
            }`}
        />
        {isLightOn && (
          <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-300 rounded-full animate-ping" />
        )}
      </div>

      {/* Desktop Menu */}
      <ul className={`hidden md:grid grid-cols-4 gap-6 ${isLightOn ? 'text-gray-800' : 'text-white'} font-medium`}>
        <li className="flex items-center transition-all duration-300 hover:text-amber-500 cursor-pointer">
          <FaHome className="mr-2" />
          <button onClick={() => scrollToSection("home-section")}>Home</button>
        </li>
        <li className="flex items-center transition-all duration-300 hover:text-amber-500 cursor-pointer">
          <FaTools className="mr-2" />
          <button onClick={() => scrollToSection("skills-section")}>Skills</button>
        </li>
        <li className="flex items-center transition-all duration-300 hover:text-amber-500 cursor-pointer">
          <FaProjectDiagram className="mr-2" />
          <button onClick={() => scrollToSection("projects-section")}>Projects</button>
        </li>
        <li className="flex items-center transition-all duration-300 hover:text-amber-500 cursor-pointer">
          <FaAddressBook className="mr-2" />
          <button onClick={() => scrollToSection("Contact")}>Contact</button>
        </li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className={`md:hidden ${isLightOn ? 'text-gray-800' : 'text-white'} text-2xl cursor-pointer`} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`absolute top-20 right-4 w-48 ${isLightOn ? 'bg-gray-100' : 'bg-gray-900'} shadow-md rounded-lg py-4 px-6 z-50`}>
          <ul className={`flex flex-col gap-4 ${isLightOn ? 'text-gray-800' : 'text-white'} font-medium`}>
            <li className="flex items-center transition-all duration-300 hover:text-amber-500 cursor-pointer">
              <FaHome className="mr-2" />
              <button onClick={() => scrollToSection("home-section")}>Home</button>
            </li>
            <li className="flex items-center transition-all duration-300 hover:text-amber-500 cursor-pointer">
              <FaTools className="mr-2" />
              <button onClick={() => scrollToSection("skills-section")}>Skills</button>
            </li>
            <li className="flex items-center transition-all duration-300 hover:text-amber-500 cursor-pointer">
              <FaProjectDiagram className="mr-2" />
              <button onClick={() => scrollToSection("projects-section")}>Projects</button>
            </li>
            <li className="flex items-center transition-all duration-300 hover:text-amber-500 cursor-pointer">
              <FaAddressBook className="mr-2" />
              <button onClick={() => scrollToSection("Contact")}>Contact</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}