"use client";

import React from "react";
import {
  FaPaperPlane,
  FaGamepad,
  FaMusic,
  FaPlane,
  FaApple,
  FaVideo,
  FaCoffee,
  FaCar,
  FaMoneyBillWave,
} from "react-icons/fa";

import CircularProgress from "@/components/CircularProgress";
import Card from "@/components/Card";
import Header from "@/components/header";
import CustomButton from "@/components/button";

// Nouveau composant CardInterest intégré ici directement
const CardInterest = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => (
  <div className="bg-gray-900 w-28 h-28 sm:w-32 sm:h-32 rounded-lg flex flex-col items-center justify-center text-white hover:bg-yellow-600 transition duration-300 shadow-md">
    <div className="text-2xl sm:text-3xl mb-2">{icon}</div>
    <div className="text-xs sm:text-sm font-semibold">{title}</div>
  </div>
);

export default function Principal() {
  return (
    <div className="bg-black w-full min-h-screen p-4 sm:p-7">
      <Header />

      <div className="bg-gray-900 w-full mt-16 p-4 sm:p-6">
        {/* SECTION: Home */}
        <section className="flex flex-col lg:flex-row justify-between items-center pt-20 px-4 sm:px-12 lg:px-40 gap-10">
          <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gray-800 rounded-3xl flex items-center justify-center">
            <div className="w-48 h-48 sm:w-72 sm:h-72 bg-amber-500 rounded-full" />
          </div>

          <div className="grid gap-4 max-w-xl">
            <h1 className="text-3xl sm:text-4xl font-bold">
              <span className="text-amber-500">- I'm LEONCE OROU AWA K.</span>
              <br />WEB DEVELOPPEUR
            </h1>
            <p className="text-sm sm:text-base text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
              Neque, culpa sunt quo inventore consequuntur enim tempora vitae{" "}
              <br />
              perferendis natus architecto nemo nostrum vero cum
            </p>
            <CustomButton
              text="More about me"
              bgColor="bg-amber-500"
              textColor="text-white"
              icon={<FaPaperPlane />}
              onClick={() => console.log("Clicked!")}
            />
          </div>
        </section>

        {/* SECTION: About Me */}
        <section className="grid gap-10 mt-32 bg-gray-800 p-6">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl sm:text-7xl text-gray-700 font-extrabold shadow-md">
              ABOUT ME
            </h1>
            <h2 className="text-2xl sm:text-4xl font-extrabold -mt-14">
              ABOUT <span className="text-amber-500">ME</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white">
                Personal Infos
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-8 text-gray-300 text-base px-6 sm:px-12">
                <ul className="space-y-6">
                  <li>
                    <span className="text-gray-400 font-semibold">First Name:</span>
                    <span className="ml-3">Leonce Ichame Séro</span>
                  </li>
                  <li>
                    <span className="text-gray-400 font-semibold">Date de naissance:</span>
                    <span className="ml-3">17 Juillet 2003</span>
                  </li>
                  <li>
                    <span className="text-gray-400 font-semibold">Freelance:</span>
                    <span className="ml-3">KISOUMARE _Ichame</span>
                  </li>
                  <li>
                    <span className="text-gray-400 font-semibold">Phone:</span>
                    <span className="ml-3">+229 0159000180</span>
                  </li>
                  <li>
                    <span className="text-gray-400 font-semibold">Linkedin:</span>
                    <span className="ml-3">Leonce AWA</span>
                  </li>
                </ul>

                <ul className="space-y-6">
                  <li>
                    <span className="text-gray-400 font-semibold">Last Name:</span>
                    <span className="ml-3">OROU AWA K.</span>
                  </li>
                  <li>
                    <span className="text-gray-400 font-semibold">Nationality:</span>
                    <span className="ml-3">Béninoise</span>
                  </li>
                  <li>
                    <span className="text-gray-400 font-semibold">Adresse:</span>
                    <span className="ml-3">Bénin, Calavi-Zogbadjè</span>
                  </li>
                  <li>
                    <span className="text-gray-400 font-semibold">Email:</span>
                    <span className="ml-3">orouleonce@gmail.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 font-semibold min-w-[90px]">Langage:</span>
                    <div className="flex flex-col space-y-2 ml-3">
                      {[
                        { name: "Français", level: 5 },
                        { name: "Anglais", level: 4 },
                        { name: "Espagnol", level: 4 },
                        { name: "Allemand", level: 3 },
                        { name: "Japonais", level: 2 },
                      ].map((lang, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-white text-sm w-20">{lang.name}</span>
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <div
                                key={i}
                                className={`w-3 h-3 rounded-full ${i < lang.level ? "bg-amber-500" : "bg-gray-500/30"
                                  }`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </li>

                </ul>
              </div>
            </div>

            {/* MY INTERESTS */}
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">My Interests</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
                <CardInterest title="Games" icon={<FaGamepad />} />
                <CardInterest title="Music" icon={<FaMusic />} />
                <CardInterest title="Travel" icon={<FaPlane />} />
                <CardInterest title="Mac OS" icon={<FaApple />} />
                <CardInterest title="Cinema" icon={<FaVideo />} />
                <CardInterest title="Coffee" icon={<FaCoffee />} />
                <CardInterest title="Cars" icon={<FaCar />} />
                <CardInterest title="Money" icon={<FaMoneyBillWave />} />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Skills */}
        <section className="mt-32">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl sm:text-7xl text-gray-700 font-extrabold shadow-md">SKILLS</h1>
            <h2 className="text-2xl sm:text-5xl font-extrabold -mt-14 text-amber-500">Skills</h2>
          </div>

          <div className="mt-20 px-4 sm:px-24 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <CircularProgress value={65} label="HTML" />
            <CircularProgress value={68} label="CSS" />
            <CircularProgress value={35} label="Tailwind" />
            <CircularProgress value={25} label="React" />
            <CircularProgress value={45} label="Django" />
            <CircularProgress value={35} label="Java-NetBeans" />
            <CircularProgress value={75} label="Canva" />
            <CircularProgress value={27} label="NextJs" />
          </div>
        </section>

        {/* SECTION: Experience */}
        <section className="mt-32">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl sm:text-6xl text-gray-700 font-extrabold shadow-md">
              EXPERIENCES & EDUCATION
            </h1>
            <h2 className="text-2xl sm:text-5xl font-extrabold mt-2">
              Expériences <span className="text-amber-500">Education</span>
            </h2>
          </div>
        </section>

        {/* SECTION: Contact */}
        <section id="Contact" className="mt-32"></section>
      </div>

      <footer className="mt-32 p-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Leonce OROU AWA — Tous droits réservés.
      </footer>
    </div>
  );
}
