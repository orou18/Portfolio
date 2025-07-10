// app/Principal.tsx
"use client";

import React, { useState, useEffect, ReactNode } from "react";
import {
  FaPaperPlane,
  FaDownload,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaMask,
  FaMusic,
  FaFutbol,
  FaApple,
  FaVideo,
  FaBookOpen,
  FaCar,
  FaCode,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaDiscord,
  FaMobileAlt,
  FaPaintBrush,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaJava,
  FaLaravel,
} from "react-icons/fa";

import { useInView } from "react-intersection-observer";

// Updated CircularProgress component for dynamic fill effect, icon support, and larger size
const CircularProgress = ({ value, label, icon, isLightOn }: { value: number; label: string; icon?: ReactNode; isLightOn: boolean }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      let startValue = 0;
      const duration = 1000;
      const startTime = Date.now();

      const animateValue = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(startValue + (value - startValue) * progress);
        setDisplayValue(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animateValue);
        }
      };

      requestAnimationFrame(animateValue);
    } else {
      setDisplayValue(0);
    }
  }, [inView, value]);

  // Increased radius for larger circles
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (displayValue / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-4">
      {icon && <div className={`text-5xl ${isLightOn ? 'text-gray-900' : 'text-white'} mb-3`}>{icon}</div>}
      <svg className="w-36 h-36 transform -rotate-90">
        <circle
          className={`${isLightOn ? 'text-gray-300' : 'text-gray-700'}`}
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50%"
          cy="50%"
        />
        <circle
          className="text-amber-500 transition-all duration-1000 ease-out"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50%"
          cy="50%"
        />
      </svg>
      <div className={`relative bottom-20 ${isLightOn ? 'text-gray-900' : 'text-white'} text-xl font-bold`}>
        {displayValue}%
      </div>
      <p className={`mt-2 text-center text-lg ${isLightOn ? 'text-gray-700' : 'text-gray-300'}`}>{label}</p>
    </div>
  );
};

import Header from "@/components/header";
import CustomButton from "@/components/button"; // Assuming CustomButton component is defined here or imported
import AboutPopover from "@/components/AboutPopover";

// Temporary interface for CustomButtonProps to resolve type error
// You should ensure your actual components/button.tsx file's props interface matches this.
interface CustomButtonProps {
  text: string;
  bgColor: string;
  textColor: string;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // Added the 'type' property
}

const CardInterest = ({
  title,
  icon, isLightOn
}: {
  title: string;
  icon: React.ReactNode;
  isLightOn: boolean;
}) => (
  <div className={`${isLightOn ? 'bg-gray-100' : 'bg-gray-900'} w-28 h-28 sm:w-32 sm:h-32 rounded-lg flex flex-col items-center justify-center ${isLightOn ? 'text-gray-900' : 'text-white'} hover:bg-yellow-600 transition duration-300 shadow-md`}>
    <div className="text-2xl sm:text-3xl mb-2">{icon}</div>
    <div className="text-xs sm:text-sm font-semibold text-center">{title}</div>
  </div>
);

interface AnimatedSectionProps {
  children?: ReactNode;
  className?: string;
  threshold?: number;
  id?: string;
}

const AnimatedSection = ({ children, className = '', threshold = 0.2, id }: AnimatedSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: threshold,
  });

  return (
    <div
      ref={ref}
      id={id}
      className={`${className} transition-all duration-1000 ease-out ${inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
    >
      {children}
    </div>
  );
};

// New component for Experience/Education cards
interface ExperienceCardProps {
  timeframe: string;
  title: string;
  subtitle: string;
  description: string | ReactNode;
  isExperience?: boolean; // Optional prop to differentiate styling if needed later
  isLightOn: boolean;
}

const ExperienceCard = ({ timeframe, title, subtitle, description, isExperience, isLightOn }: ExperienceCardProps) => (
  <div className={`${isLightOn ? 'bg-gray-200' : 'bg-gray-800'} rounded-lg p-6 shadow-lg ${isLightOn ? 'text-gray-900' : 'text-white'} relative group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl`}>
    {/* Timeframe on top-left corner */}
    <div className="absolute top-0 left-0 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-br-lg rounded-tl-lg">
      {timeframe}
    </div>
    <div className="mt-8"> {/* Adjusted margin to account for timeframe */}
      <h3 className="text-xl font-bold text-amber-500 mb-1">{title}</h3>
      <p className={`${isLightOn ? 'text-gray-700' : 'text-gray-300'} text-sm mb-4`}>{subtitle}</p>
      {typeof description === 'string' ? (
        <p className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} text-sm leading-relaxed`}>{description}</p>
      ) : (
        <div className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} text-sm leading-relaxed`}>{description}</div>
      )}
    </div>
  </div>
);

export default function Principal() {
  const [showPopover, setShowPopover] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false); // État du thème, géré ici
  const toggleTheme = () => setIsLightOn(!isLightOn); // Fonction pour basculer le thème

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { // Explicitly typed 'e'
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Explicitly typed 'e'
    e.preventDefault();

    const { name, email, message } = formData;

    // Encode les données pour l'URL mailto
    const subject = encodeURIComponent(`Message de votre Portfolio par ${name}`);
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    // Crée l'URL mailto
    const mailtoLink = `mailto:orouleonce@gmail.com?subject=${subject}&body=${body}`;

    // Ouvre le client de messagerie de l'utilisateur
    window.location.href = mailtoLink;

    // Informer l'utilisateur que son client de messagerie va s'ouvrir
    alert("Votre client de messagerie va s'ouvrir avec le message pré-rempli. Veuillez l'envoyer pour que je puisse le recevoir.");

    // Effacer les champs du formulaire après la tentative d'ouverture du client mail
    setFormData({ name: '', email: '', message: '' });
  };

  // Définition de la description complète pour le popover
  const fullAboutMeDescriptionContent = (
    <>
      <p className={`text-sm sm:text-base ${isLightOn ? 'text-gray-700' : 'text-gray-300'} mb-4`}>
        Je suis un jeune développeur en fin de formation en Génie Logiciel, passionné par la création de solutions web et mobiles utiles
        et accessibles. J’ai l’habitude de travailler avec des technologies comme Laravel, Next.js et Flutter, en structurant toujours
        mes projets par une réflexion préalable : cahier des charges, modélisation, logique métier claire.
        Au fil de mes expériences, j’ai appris à valoriser la rigueur, l’autonomie et la curiosité.
      </p>
      <ul className={`list-disc list-inside ${isLightOn ? 'text-gray-700' : 'text-gray-300'} space-y-2 mb-4`}>
        <li>Comment mieux structurer mon temps pour apprendre efficacement sans me disperser ?</li>
        <li>Quelle méthodologie d’apprentissage pourrait m’aider à mieux retenir ce que j’explore ?</li>
        <li>Comment collaborer plus efficacement sur des projets open-source ?</li>
        <li>Quels réflexes dois-je renforcer pour devenir un développeur plus fiable et plus structuré ?</li>
      </ul>
      <p className={`text-sm sm:text-base ${isLightOn ? 'text-gray-700' : 'text-gray-300'}`}>Je me pose souvent ce type de questions...</p>
    </>
  );

  return (
    <div className={`${isLightOn ? 'bg-white' : 'bg-black'} w-full min-h-screen p-4 sm:p-7 overflow-auto`}>
      <Header isLightOn={isLightOn} toggleTheme={toggleTheme} /> {/* Passage des props */}

      <div className={`${isLightOn ? 'bg-gray-100' : 'bg-gray-900'} w-full pt-[64px] p-4 sm:p-6`}> {/* Adjusted padding-top */}
        {/* SECTION: Home */}
        <section id="home-section" className="flex flex-col lg:flex-row justify-between items-center pt-20 px-4 sm:px-12 lg:px-40 gap-10">
          <div className={`w-80 h-80 sm:w-96 sm:h-96 ${isLightOn ? 'bg-gray-200' : 'bg-gray-800'} rounded-3xl flex items-end justify-end relative overflow-visible`}>
            <div className="w-60 h-60 sm:w-88 sm:h-88 bg-amber-500 rounded-full transform translate-x-5 translate-y-8" />
          </div>

          <div className="grid gap-4 max-w-xl">
            <h1 className={`text-3xl sm:text-4xl font-bold ${isLightOn ? 'text-gray-900' : 'text-white'}`}>
              <span className="text-amber-500">- I'm LEONCE OROU AWA K.</span>
              <br />WEB DEVELOPPEUR
            </h1>
            <p className={`text-sm sm:text-base ${isLightOn ? 'text-gray-700' : 'text-gray-300'}`}>
              Je suis un jeune développeur en fin de formation en Génie Logiciel, passionné par la création de solutions web et mobiles utiles
              et accessibles. J’ai l’habitude de travailler avec des technologies comme Laravel, Next.js et Flutter, en structurant toujours
              mes projets par une réflexion préalable : cahier des charges, modélisation, logique métier claire.
              Au fil de mes expériences, j’ai appris à valoriser la rigueur, l’autonomie et la curiosité.
            </p>
            {/* Buttons for Home section - Adjusted width and added download button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-fit"> {/* Wrap to control width */}
                <CustomButton
                  text="More about me"
                  bgColor="bg-amber-500"
                  textColor="text-white"
                  icon={<FaPaperPlane />}
                  onClick={() => setShowPopover(true)}
                />
              </div>
              <a href="/Leonce_OROU_AWA_CV.pdf" download="Leonce_OROU_AWA_CV.pdf" className="w-fit">
                <CustomButton
                  text="Download My CV"
                  bgColor={isLightOn ? 'bg-gray-300' : 'bg-gray-700'} // Dynamic color
                  textColor={isLightOn ? 'text-gray-900' : 'text-white'} // Dynamic color
                  icon={<FaDownload />}
                />
              </a>
            </div>

            {showPopover && (
              <AboutPopover onClose={() => setShowPopover(false)}>
                {fullAboutMeDescriptionContent} {/* Utilisation de la variable ici */}
              </AboutPopover>
            )}
          </div>
        </section>

        {/* Social Icons (Centered using flexbox) */}
        <AnimatedSection className="w-full flex justify-center mt-10 mb-8">
          <div className={`flex items-center justify-center gap-6 text-3xl ${isLightOn ? 'text-gray-800' : 'text-white'}`}>
            <a
              href="https://github.com/tonprofil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/tonprofil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/tonprofil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-all duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://discord.com/users/tonid"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-all duration-300"
            >
              <FaDiscord />
            </a>
          </div>
        </AnimatedSection>

        {/* SECTION: About Me */}
        <AnimatedSection className={`mt-16 sm:mt-24 ${isLightOn ? 'bg-gray-200' : 'bg-gray-800'} p-6 w-full`}>
          <div className="flex flex-col items-center">
            <h1 className={`text-4xl sm:text-7xl ${isLightOn ? 'text-gray-300' : 'text-gray-700'} font-extrabold shadow-md`}>
              ABOUT ME
            </h1>
            <h2 className={`text-2xl sm:text-4xl font-extrabold -mt-14 ${isLightOn ? 'text-gray-900' : 'text-white'}`}>
              ABOUT <span className="text-amber-500">ME</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 px-4 sm:px-12">
            {/* Infos Perso - MODIFIED FOR RESPONSIVENESS */}
            <div>
              <h2 className={`text-3xl sm:text-4xl font-bold mb-10 text-center ${isLightOn ? 'text-gray-900' : 'text-white'}`}>
                Personal Infos
              </h2>
              {/* Changed from ul/li to divs for better centering control */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-8 ${isLightOn ? 'text-gray-700' : 'text-gray-300'} text-base px-6 sm:px-12`}>
                {/* First column data */}
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col items-center text-center">
                    <span className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} font-semibold mb-1`}>First Name:</span>
                    <span className={`${isLightOn ? 'text-gray-900' : 'text-white'}`}>Leonce</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} font-semibold mb-1`}>Date de naissance:</span>
                    <span className={`${isLightOn ? 'text-gray-900' : 'text-white'}`}>17 Juillet 2003</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} font-semibold mb-1`}>Freelance:</span>
                    <span className={`${isLightOn ? 'text-gray-900' : 'text-white'}`}>Leonce_AWA</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} font-semibold mb-1`}>Phone:</span>
                    <span className={`${isLightOn ? 'text-gray-900' : 'text-white'}`}>+229 0159000180 </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} font-semibold mb-1`}>Linkedin:</span>
                    <span className={`${isLightOn ? 'text-gray-900' : 'text-white'}`}>Leonce OROU AWA</span>
                  </div>
                </div>

                {/* Second column data */}
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col items-center text-center">
                    <span className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} font-semibold mb-1`}>Last Name:</span>
                    <span className={`${isLightOn ? 'text-gray-900' : 'text-white'}`}>OROU AWA </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} font-semibold mb-1`}>Nationality:</span>
                    <span className={`${isLightOn ? 'text-gray-900' : 'text-white'}`}>Béninoise</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} font-semibold mb-1`}>Adresse:</span>
                    <span className={`${isLightOn ? 'text-gray-900' : 'text-white'}`}>Bénin, Golo-Djigbe</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} font-semibold mb-1`}>Email:</span>
                    <span className={`${isLightOn ? 'text-gray-900' : 'text-white'}`}>orouleonce@gmail.com</span>
                  </div>
                  {/* Language section - Adjusted for centering */}
                  <div className="flex flex-col items-center">
                    <span className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} font-semibold mb-1`}>Langage:</span>
                    <div className="flex flex-col space-y-2 items-center"> {/* Centered content */}
                      {[
                        { name: "Français", level: 4 },
                        { name: "Anglais", level: 1 },
                        { name: "Fongbe", level: 3 },
                        { name: "Boo", level: 4 },
                        { name: "Bariba", level: 4 },
                      ].map((lang, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className={`${isLightOn ? 'text-gray-900' : 'text-white'} text-sm w-20 text-right`}>{lang.name}</span> {/* Aligned right to align progress */}
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <div
                                key={i}
                                className={`w-3 h-3 rounded-full ${i < lang.level ? "bg-amber-500" : (isLightOn ? "bg-gray-400/30" : "bg-gray-500/30")}`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mes Intérêts */}
            <div className="flex flex-col px-6 sm:px-12 mt-16 lg:mt-0"> {/* Adjusted margin-top for mobile/tablet */}
              <h2 className={`text-3xl sm:text-4xl font-bold mb-10 text-center ${isLightOn ? 'text-gray-900' : 'text-white'}`}>
                My Interests
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
                <CardInterest title="Animes Asiatiques" icon={<FaMask />} isLightOn={isLightOn} />
                <CardInterest title="Music" icon={<FaMusic />} isLightOn={isLightOn} />
                <CardInterest title="Football" icon={<FaFutbol />} isLightOn={isLightOn} />
                <CardInterest title="Mac OS" icon={<FaApple />} isLightOn={isLightOn} />
                <CardInterest title="Cinema" icon={<FaVideo />} isLightOn={isLightOn} />
                <CardInterest title="Documentaire" icon={<FaBookOpen />} isLightOn={isLightOn} />
                <CardInterest title="Cars" icon={<FaCar />} isLightOn={isLightOn} />
                <CardInterest title="Technologie" icon={<FaCode />} isLightOn={isLightOn} />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* SECTION: Skills */}
        <AnimatedSection id="skills-section" className="mt-16 sm:mt-24"> {/* Adjusted margin-top */}
          <div className="flex flex-col items-center">
            <h1 className={`text-4xl sm:text-7xl ${isLightOn ? 'text-gray-300' : 'text-gray-700'} font-extrabold shadow-md`}>SKILLS</h1>
            <h2 className={`text-2xl sm:text-5xl font-extrabold -mt-14 ${isLightOn ? 'text-gray-900' : 'text-amber-500'}`}>Skills</h2>
          </div>

          <div className="mt-20 px-4 sm:px-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-6 mx-auto max-w-7xl">
            <CircularProgress value={65} label="HTML" icon={<FaHtml5 />} isLightOn={isLightOn} />
            <CircularProgress value={68} label="CSS" icon={<FaCss3Alt />} isLightOn={isLightOn} />
            <CircularProgress value={35} label="Tailwind" icon={<FaCode />} isLightOn={isLightOn} />
            <CircularProgress value={25} label="React" icon={<FaReact />} isLightOn={isLightOn} />
            <CircularProgress value={45} label="Django" icon={<FaPython />} isLightOn={isLightOn} />
            <CircularProgress value={35} label="Java-NetBeans" icon={<FaJava />} isLightOn={isLightOn} />
            <CircularProgress value={75} label="Canva" icon={<FaPaintBrush />} isLightOn={isLightOn} />
            <CircularProgress value={27} label="NextJs" icon={<FaReact />} isLightOn={isLightOn} />
            <CircularProgress value={60} label="Laravel" icon={<FaLaravel />} isLightOn={isLightOn} />
            <CircularProgress value={50} label="Flutter" icon={<FaMobileAlt />} isLightOn={isLightOn} />
          </div>
        </AnimatedSection>

        {/* SECTION: Experience & Education */}
        <AnimatedSection id="projects-section" className="mt-16 sm:mt-24 px-4 sm:px-12" threshold={0.01}> {/* **MODIFIÉ ICI : threshold={0.01}** */}
          <div className="flex flex-col items-center mb-16">
            <h1 className={`text-4xl sm:text-6xl ${isLightOn ? 'text-gray-300' : 'text-gray-700'} font-extrabold shadow-md`}>
              EXPERIENCES & EDUCATION
            </h1>
            <h2 className={`2xl sm:text-5xl font-extrabold mt-2 ${isLightOn ? 'text-gray-900' : 'text-white'}`}>
              Expériences &<span className="text-amber-500">Education</span>
            </h2>
          </div>

          {/* NEW: Professional Experience Section - MODIFIED GRID */}
          <h3 className={`text-3xl font-bold ${isLightOn ? 'text-gray-900' : 'text-white'} text-center mb-8`}>Expériences Professionnelles</h3>
          <div className="grid grid-cols-1 gap-8 mb-16"> {/* Always single column */}
            <ExperienceCard
              timeframe="Août 2024 - Septembre 2024"
              title="DEVELOPPEUR WEB JUNIOR"
              subtitle="Holding Bourjon: Benin-Gbegamey"
              description={
                <ul className="list-disc list-inside space-y-1">
                  <li>Realisation de l'interface graphique d'une plateforme de mentorat et d'apprentissage dans plusieurs domaines.</li>
                  <li>Realisation d'interface de ChatBot avec NextJs et JavaScript.</li>
                  <li>Participation aux programme TechSeed: programme d'immersion de jeunes finissant a la vie en entreprise.</li>
                </ul>
              }
              isExperience
              isLightOn={isLightOn}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1: Projets Collaboratifs */}
            <div>
              <h3 className={`text-3xl font-bold ${isLightOn ? 'text-gray-900' : 'text-white'} text-center mb-8`}>Projets Collaboratifs</h3>
              <div className="space-y-8">
                <ExperienceCard
                  timeframe="Décembre 2023 - Juillet 2024"
                  title="GESTION DE BASES DE DONNÉES & PROJETS COLLABORATIFS"
                  subtitle="IFRI-Calavi, Benin"
                  description={
                    <ul className="list-disc list-inside space-y-1">
                      <li>Gestion des bases de donnée avec Oracle et SqlDevelopper pour projet de gestionnaire de bibliothèque.</li>
                      <li>Gestion en collaboration en equipe de base de donnée SQI pour projet de gestion d'emploie du temps dynamique avec Django.</li>
                      <li>Collaboration en equipe pour la conception de platform de gestion de bibliothèque et connexion a une base donnée Oracle.</li>
                    </ul>
                  }
                  isExperience
                  isLightOn={isLightOn}
                />
                <ExperienceCard
                  timeframe="Avril 2024"
                  title="PROJETS COLLABORATIFS: INTERFACES & GESTION NOTES"
                  subtitle="Développement d'interfaces et applications C/C++/Java"
                  description={
                    <ul className="list-disc list-inside space-y-1">
                      <li>Collaboration avec les équipes de conception pour créer des interfaces utilisateur intuitives en Java et C++.</li>
                      <li>Collaboration en equipe pour la conception de platform de gestion de notes d'éleves en C.</li>
                    </ul>
                  }
                  isExperience
                  isLightOn={isLightOn}
                />
              </div>
            </div>

            {/* Column 2: Projets Personnels - Adjusted margin-top for mobile/tablet */}
            <div className="mt-16 lg:mt-0">
              <h3 className={`text-3xl font-bold ${isLightOn ? 'text-gray-900' : 'text-white'} text-center mb-8`}>Projets Personnels</h3>
              <div className="space-y-8">
                <ExperienceCard
                  timeframe="Février 2025"
                  title="APPLICATION MOBILE DE RÉSERVATION"
                  subtitle="Conception d'application mobile"
                  description="Conception d'application mobile de reservation de tickets de bus."
                  isExperience
                  isLightOn={isLightOn}
                />
                <ExperienceCard
                  timeframe="Avril 2024"
                  title="GESTION DES EMPLOIS DU TEMPS"
                  subtitle="Projet personnel de gestion scolaire"
                  description="Création de maquette et réalisation d'interface utilisateur intuitive pour la gestion des emplois du temps dans une école avec connexion a une base de donnée SQL."
                  isExperience
                  isLightOn={isLightOn}
                />
                <ExperienceCard
                  timeframe="2023 - À nos jours"
                  title="CONCEPTION DE PORTFOLIO"
                  subtitle="Développement de portfolio professionnel"
                  description="Conception de Portfolio énumérant différentes compétences."
                  isExperience
                  isLightOn={isLightOn}
                />
                <ExperienceCard
                  timeframe="Mars 2025"
                  title="PLATEFORME DE GESTION DE PATIENTS"
                  subtitle="Application pour patients malades chroniques"
                  description="Conception de plateforme de gestion des patients atteint de maladie chronique."
                  isExperience
                  isLightOn={isLightOn}
                />
              </div>
            </div>

            {/* Column 3: Formation Académique - Adjusted margin-top for mobile/tablet */}
            <div className="mt-16 lg:mt-0">
              <h3 className={`text-3xl font-bold ${isLightOn ? 'text-gray-900' : 'text-white'} text-center mb-8`}>Formation Académique</h3>
              <div className="space-y-8">
                <ExperienceCard
                  timeframe="2022 - 2025"
                  title="LICENCE EN GÉNIE LOGICIEL"
                  subtitle="Institut de Formation et de recherche en Informatique (IFRI-Calavi, Bénin)"
                  description={
                    <ul className="list-disc list-inside space-y-1">
                      <li>Licence 3 Génie Logiciel (2024 - 2025)</li>
                      <li>Licence 2 Génie Logiciel (2023 - 2024)</li>
                      <li>Licence 1 Génie Logiciel (2022 - 2023)</li>
                    </ul>
                  }
                  isLightOn={isLightOn}
                />
                <ExperienceCard
                  timeframe="2016 - 2021"
                  title="ENSEIGNEMENT SECONDAIRE"
                  subtitle="CEG1 GOLO-DJIGBE"
                  description={
                    <ul className="list-disc list-inside space-y-1">
                      <li>Baccalauréat BAC C (Obtention en 2021)</li>
                      <li>Brevet d'Étude de Premier Cycle (BEPC) (Obtention en 2018)</li>
                    </ul>
                  }
                  isLightOn={isLightOn}
                />
                <ExperienceCard
                  timeframe="2008 - 2014"
                  title="CERTIFICAT D'ÉTUDE PRIMAIRE (CEP)"
                  subtitle="EPP-FINAGNON"
                  description="Obtention du Certificat d'Étude Primaire en 2014."
                  isLightOn={isLightOn}
                />
              </div>
            </div>

          </div>
          {/* Download CV button after experiences, centered */}
          <div className="flex justify-center mt-10">
            <a href="/Leonce_OROU_AWA_CV.pdf" download="Leonce_OROU_AWA_CV.pdf">
              <CustomButton
                text="Download My CV"
                bgColor="bg-amber-500"
                textColor="text-white"
                icon={<FaDownload />}
              />
            </a>
          </div>
        </AnimatedSection>

        {/* SECTION: Contact */}
        <AnimatedSection id="Contact" className="mt-16 sm:mt-24 px-4 sm:px-12"> {/* Adjusted margin-top */}
          <div className="flex flex-col items-center mb-16">
            <h1 className={`text-4xl sm:text-6xl ${isLightOn ? 'text-gray-300' : 'text-gray-700'} font-extrabold shadow-md`}>
              CONTACT ME
            </h1>
            <h2 className={`text-2xl sm:text-5xl font-extrabold -mt-12 ${isLightOn ? 'text-gray-900' : 'text-white'}`}>
              Contact <span className="text-amber-500">Me</span>
            </h2>
          </div>

          {/* New: Send Me a Message Form */}
          <div className={`${isLightOn ? 'bg-gray-200' : 'bg-gray-800'} rounded-lg p-6 shadow-lg ${isLightOn ? 'text-gray-900' : 'text-white'} mb-8`}>
            <h3 className={`text-3xl font-bold ${isLightOn ? 'text-gray-900' : 'text-white'} mb-8 text-center`}>Send Me a Message</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block ${isLightOn ? 'text-gray-700' : 'text-white'} text-sm font-bold mb-2`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 ${isLightOn ? 'text-gray-900 bg-gray-300 border-gray-400' : 'text-white bg-gray-700 border-gray-600'} leading-tight focus:outline-none focus:shadow-outline`}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className={`block ${isLightOn ? 'text-gray-700' : 'text-white'} text-sm font-bold mb-2`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 ${isLightOn ? 'text-gray-900 bg-gray-300 border-gray-400' : 'text-white bg-gray-700 border-gray-600'} leading-tight focus:outline-none focus:shadow-outline`}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className={`block ${isLightOn ? 'text-gray-700' : 'text-gray-300'} text-sm font-bold mb-2`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={5}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 ${isLightOn ? 'text-gray-900 bg-gray-300 border-gray-400' : 'text-white bg-gray-700 border-gray-600'} leading-tight focus:outline-none focus:shadow-outline`}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <CustomButton
                  text="Send Message"
                  bgColor="bg-amber-500"
                  textColor="text-white"
                  icon={<FaPaperPlane />}
                  type="submit" // Set type to submit for form submission
                />
              </div>
            </form>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
            {/* Contact Details */}
            <div>
              <h3 className={`text-3xl font-bold ${isLightOn ? 'text-gray-900' : 'text-white'} mb-8 text-center`}>Contact Details</h3>
              <div className={`${isLightOn ? 'bg-gray-200' : 'bg-gray-800'} rounded-lg p-6 shadow-lg ${isLightOn ? 'text-gray-900' : 'text-white'} space-y-6`}>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-amber-500 text-2xl" />
                  <div>
                    <p className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} text-sm`}>Email Me</p>
                    <p className="text-lg font-semibold">orouleonce@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhone className="text-amber-500 text-2xl" />
                  <div>
                    <p className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} text-sm`}>Call Me</p>
                    <p className="text-lg font-semibold">+229 0159000180 / 0155449773</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-amber-500 text-2xl" />
                  <div>
                    <p className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} text-sm`}>My Current Location</p>
                    <p className="text-lg font-semibold">Golo-Djigbe Agongbe , Bénin</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaGithub className="text-amber-500 text-2xl" />
                  <div>
                    <p className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} text-sm`}>GitHub</p>
                    <a href="https://github.com/Orou18" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline">Orou18</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaPaperPlane className="text-amber-500 text-2xl" />
                  <div>
                    <p className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} text-sm`}>Portfolio</p>
                    <a href="https://awaportfolio.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline">awaportfolio.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="mt-16 lg:mt-0"> {/* Adjusted margin-top for mobile/tablet */}
              <h3 className={`text-3xl font-bold ${isLightOn ? 'text-gray-900' : 'text-white'} mb-8 text-center`}>Locations I've Worked/Studied</h3>
              <div className={`${isLightOn ? 'bg-gray-200' : 'bg-gray-800'} rounded-lg p-6 shadow-lg ${isLightOn ? 'text-gray-900' : 'text-white'} space-y-6`}>
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-amber-500 text-2xl mt-1" />
                  <div>
                    <p className="text-lg font-semibold">Holding Bourjon</p>
                    <p className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} text-sm`}>Benin-Gbegamey</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-amber-500 text-2xl mt-1" />
                  <div>
                    <p className="text-lg font-semibold">Institut de Formation et de recherche en Informatique (IFRI)</p>
                    <p className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} text-sm`}>Bénin Abomey-Calavi : Université d'Abomey Calavi</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-amber-500 text-2xl mt-1" />
                  <div>
                    <p className="text-lg font-semibold">CEG1 GOLO-DJIGBE</p>
                    <p className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} text-sm`}>Golo-Djigbe, Bénin</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-amber-500 text-2xl mt-1" />
                  <div>
                    <p className="text-lg font-semibold">EPP-FINAGNON</p>
                    <p className={`${isLightOn ? 'text-gray-600' : 'text-gray-400'} text-sm`}>Bénin : Cotonou-GBEDEGBE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <footer className={`mt-32 p-4 text-center ${isLightOn ? 'text-gray-600' : 'text-gray-500'} text-sm`}>
          © {new Date().getFullYear()} Leonce OROU AWA — Tous droits réservés.
        </footer>
      </div>
    </div>
  );
}