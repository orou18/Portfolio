"use client";

import React from 'react';
import { useRef } from "react";
import { FaHome, FaAddressBook, FaProjectDiagram, FaPlane } from 'react-icons/fa';
import cardPerso from '../components/cardPerso';
import CircularProgress from '@/components/CircularProgress';
import Card from '@/components/Card';

export default function Principal() {
  return (
    <div className="bg-black, w-full , h-full p-7">

      <header className="w-full , h-full , flex justify-between ">
        <h2 className="text-amber-500 text-4xl font-bold">
          <span className=" text-gray-300">Leonce </span>
          OROU AWA
        </h2>
        <ul className="grid grid-cols-4 gap-6 ml-0">
          <li className=" flex ">
            <FaHome className='mt-3 mr-2' />
            <button>Home</button>
          </li>
          <li className="flex ">
            <FaProjectDiagram className='mt-3 mr-2' />
            <button>Skills</button>
          </li>
          <li className="flex ">
            <FaProjectDiagram className='mt-3 mr-2' />
            <button>Projects</button>
          </li>
          <li className="flex ">
            <FaAddressBook className='mt-3 mr-2' />
            <button>Contact</button>
          </li>
        </ul>

      </header>
      <div className='bg-gray-900 w-full h-full mt-16 p-6 '>

        <section id="Home" className='flex justify-between pt-20  pl-40 pr-40' >
          <div className='w-1/3 h-96 bg-gray-800 rounded-3xl   '>
            <div className=" w-96 h-96 bg-amber-500 rounded-full mt-12 ml-20">

            </div>
            <img src="" alt="" />

          </div>

          <div className='grid grid-rows-3 '>
            <h1 className='text-4xl font-bold'>
              <span className='text-amber-500 '>- I'm LEONCE OROU AWA K.</span>
              <br />
              WEB DEVELOPPEUR
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
              Neque, culpa sunt quo inventore consequuntur enim tempora vitae <br />
              perferendis natus architecto nemo nostrum vero cum

            </p>
            <button className='flex justify-center items-center  border-1 rounded-4xl p-2 w-40 h-8 mt-2 border-amber-500 cursor-pointer'>
              More about me
              <span className=' w-7 h-7 bg-amber-500 rounded-full '><FaPlane /></span>
            </button>

          </div>

        </section>



        <section id="About Me" className='grid grid-rows-2 mt-32 bg-gray-800 h-[600px]' >

          <div className="">
            <div className='flex justify-center'>
              <h1 className='text-7xl text-gray-700 font-extrabold shadow-md'>ABOUT ME</h1>
              <h2 className='text-4xl font-extrabold mt-4 -ml-72'>ABOUT <span className='text-amber-500'>ME</span></h2>
            </div>

            <div className='grid grid-cols-2 '>
              <div className='p-14'>
                <h2 className='text-2xl font-bold ml-28'>Personnals Infos</h2>
                <br />
                <div className='grid grid-cols-2'>
                  <ul>
                    <li>
                      <span className=' text-gray-700 text-lg'>First Name</span>
                    </li>
                    <br />
                    <li>
                      <span className=' text-gray-700 text-lg'>Age</span>
                    </li>
                    <br />
                    <li>
                      <span className=' text-gray-700 text-lg'>Freelance</span>
                    </li>
                    <br />
                    <li>
                      <span className=' text-gray-700 text-lg'>Phone </span>
                    </li>
                    <br />
                    <li>
                      <span className=' text-gray-700 text-lg'>Linkedin </span>
                    </li>
                    <br />

                  </ul>
                  <ul>
                    <li>
                      <span className=' text-gray-700 text-lg'>Last Name</span>
                    </li>
                    <br />
                    <li>
                      <span className=' text-gray-700 text-lg'>Nationality</span>
                    </li>
                    <br />
                    <li>
                      <span className=' text-gray-700 text-lg'>Adresse</span>
                    </li>
                    <br />
                    <li>
                      <span className=' text-gray-700 text-lg'>Email</span>
                    </li>
                    <br />
                    <li>
                      <span className=' text-gray-700 text-lg'>Langage </span>
                    </li>
                    <br />
                  </ul>
                </div>


              </div>
              <div className=' w-3xl h-3xs mt-14 grid grid-cols-3 gap-3 p-8 pt-4 pb-4' >
                <Card title="Hello" text="Description ici" />
                <Card title="Hello" text="Description ici" />
                <Card title="Hello" text="Description ici" />
                <Card title="Hello" text="Description ici" />
                <Card title="Hello" text="Description ici" />
                <Card title="Hello" text="Description ici" />


              </div>

            </div>
          </div>
        </section>

        <section id="Skills" >
          <div className='flex justify-center'>
            <h1 className='text-7xl text-gray-700 font-extrabold shadow-md '>SKILLS</h1>
            <h1 className='text-5xl font-extrabold mt-4 -ml-48 text-amber-500'>Skills</h1>
          </div>
          <div className=" mt-32 ml-32 p-24 gap-12 grid grid-cols-4 pb-6">
            <CircularProgress value={65} label="HTML" /> {/* 65% */}
            <CircularProgress value={68} label="CSS" /> {/* 65% */}
            <CircularProgress value={35} label="Tailwind" /> {/* 65% */}
            <CircularProgress value={25} label="React" /> {/* 65% */}
            <CircularProgress value={45} label="Django" /> {/* 65% */}
            <CircularProgress value={35} label="Java-NetBeans" /> {/* 65% */}
            <CircularProgress value={75} label="Canva" /> {/* 65% */}
            <CircularProgress value={27} label="NextJs" /> {/* 65% */}
          </div>

        </section>

        <section id="Experience" >
          <div className='flex justify-center mt-72 -ml-[250px]'>
            <h1 className='text-6xl text-gray-700 font-extrabold shadow-md '>EXPERIENCES & EDUCATION</h1>
            <h1 className='text-5xl font-extrabold mt-2 -ml-[750px]'> Expériences<span className=' text-amber-500'>Education</span></h1>
          </div>
          <div>

          </div>

        </section>

        <section id="Contact" >

        </section>

      </div>
      <footer>

      </footer>


    </div>
  );
}
