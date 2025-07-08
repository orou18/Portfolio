"use client";
import React, { useState } from "react";
import {
  FaHome,
  FaAddressBook,
  FaProjectDiagram,
  FaTools,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full flex justify-between items-center py-4 px-4 sm:px-8 bg-transparent">
      {/* Logo */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gray-300 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
        <span className="">Leonce </span>OROU AWA
      </h2>

      {/* Desktop Menu */}
      <ul className="hidden md:grid grid-cols-4 gap-6 text-white font-medium">
        <li className="flex items-center transition-all duration-300 hover:text-yellow-500 cursor-pointer">
          <FaHome className="mr-2" />
          <button>Home</button>
        </li>
        <li className="flex items-center transition-all duration-300 hover:text-yellow-500 cursor-pointer">
          <FaTools className="mr-2" />
          <button>Skills</button>
        </li>
        <li className="flex items-center transition-all duration-300 hover:text-yellow-500 cursor-pointer">
          <FaProjectDiagram className="mr-2" />
          <button>Projects</button>
        </li>
        <li className="flex items-center transition-all duration-300 hover:text-yellow-500 cursor-pointer">
          <FaAddressBook className="mr-2" />
          <button>Contact</button>
        </li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-4 w-48 bg-gray-900 shadow-md rounded-lg py-4 px-6 z-50">
          <ul className="flex flex-col gap-4 text-white font-medium">
            <li className="flex items-center transition-all duration-300 hover:text-yellow-500 cursor-pointer">
              <FaHome className="mr-2" />
              <button onClick={toggleMenu}>Home</button>
            </li>
            <li className="flex items-center transition-all duration-300 hover:text-yellow-500 cursor-pointer">
              <FaTools className="mr-2" />
              <button onClick={toggleMenu}>Skills</button>
            </li>
            <li className="flex items-center transition-all duration-300 hover:text-yellow-500 cursor-pointer">
              <FaProjectDiagram className="mr-2" />
              <button onClick={toggleMenu}>Projects</button>
            </li>
            <li className="flex items-center transition-all duration-300 hover:text-yellow-500 cursor-pointer">
              <FaAddressBook className="mr-2" />
              <button onClick={toggleMenu}>Contact</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
