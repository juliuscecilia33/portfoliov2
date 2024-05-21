"use client";

// Image Assets
import Image from "next/image";
import MyProfile from "../assets/images/JuliusCecilia.jpeg";

// Components
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";

// Font
import { Space_Grotesk, Inter } from "next/font/google";

// Icons
import {
  FaReact,
  FaAngular,
  FaPython,
  FaJava,
  FaNode,
  FaAws,
} from "react-icons/fa";
import { RiFlutterFill, RiJavascriptFill } from "react-icons/ri";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbSchool } from "react-icons/tb";
import { IoDownloadOutline } from "react-icons/io5";
import Experiences from "@/components/Experiences";

const spaceGrotesk = Space_Grotesk({
  preload: false,
});
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div
        className={`font-heading flex min-h-screen flex-row p-12 justify-between ${spaceGrotesk.className}`}
      >
        <section
          className={`pt-10 mr-10 w-2/6 font-heading flex min-h-screen flex-col ${spaceGrotesk.className}`}
        >
          <Image
            src={MyProfile}
            alt="My Profile>"
            width={175}
            height={175}
            className="aspect-square rounded-lg mb-5"
          />
          <h1 className="text-5xl font-bold text-white">Hey, Im Julius!</h1>
          <div className="mt-20 flex flex-col">
            <h3
              className={`flex flex-row items-center font-bold text-2xl text-white ${spaceGrotesk.className}`}
            >
              <TbSchool className="text-[#E95278] mr-3" size={40} />
              Education
            </h3>
            <p
              className={`mt-6 text-md font-semibold text-white ${inter.className}`}
            >
              University of Washington (2020-2024)
            </p>
            <div className="flex flex-row mt-3">
              <p
                className={`text-md font-semibold text-[#E95278] ${inter.className}`}
              >
                <span className="text-[#96979A]">Major:</span> Information
                Technology
              </p>
            </div>
            <div className="flex flex-row mt-3">
              <p
                className={`text-md font-semibold text-[#E95278] ${inter.className}`}
              >
                <span className="text-[#96979A]">Minor:</span> Business
                Administration
              </p>
            </div>
          </div>
          <div className="mt-20 flex flex-col">
            <h3
              className={`mb-6 flex flex-row items-center font-bold text-2xl text-white ${spaceGrotesk.className}`}
            >
              <PiBracketsCurlyBold className="text-[#E95278] mr-3" size={40} />
              Skills
            </h3>
            <div className="flex flex-row flex-wrap">
              <div className="flex flex-col text-center mr-5 mb-5">
                <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center text-[#E95278] hover:text-white hover:bg-[#E95278] transition">
                  <RiJavascriptFill size={30} />
                </div>
                <p
                  className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
                >
                  Javascript
                </p>
              </div>
              <div className="flex flex-col text-center mr-5 mb-5">
                <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center text-[#E95278] hover:text-white hover:bg-[#E95278] transition">
                  <FaPython size={30} />
                </div>
                <p
                  className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
                >
                  Python
                </p>
              </div>
              <div className="flex flex-col text-center mr-5 mb-5">
                <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center text-[#E95278] hover:text-white hover:bg-[#E95278] transition">
                  <FaJava size={30} />
                </div>
                <p
                  className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
                >
                  Java
                </p>
              </div>
              <div className="flex flex-col text-center mr-5 mb-5">
                <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center text-[#E95278] hover:text-white hover:bg-[#E95278] transition">
                  <SiTypescript size={30} />
                </div>
                <p
                  className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
                >
                  Typescript
                </p>
              </div>
              <div className="flex flex-col text-center mr-5 mb-5">
                <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center text-[#E95278] hover:text-white hover:bg-[#E95278] transition">
                  <RiFlutterFill size={30} />
                </div>
                <p
                  className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
                >
                  Flutter
                </p>
              </div>
              <div className="flex flex-col text-center mr-5 mb-5">
                <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center text-[#E95278] hover:text-white hover:bg-[#E95278] transition">
                  <FaReact size={30} />
                </div>
                <p
                  className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
                >
                  React.js
                </p>
              </div>
              <div className="flex flex-col text-center mr-5 mb-5">
                <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center text-[#E95278] hover:text-white hover:bg-[#E95278] transition">
                  <FaAngular size={30} />
                </div>
                <p
                  className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
                >
                  Angular.js
                </p>
              </div>
              <div className="flex flex-col text-center mr-5 mb-5">
                <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center text-[#E95278] hover:text-white hover:bg-[#E95278] transition">
                  <FaNode size={30} />
                </div>
                <p
                  className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
                >
                  Node.js
                </p>
              </div>
              <div className="flex flex-col text-center mr-5 mb-5">
                <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center text-[#E95278] hover:text-white hover:bg-[#E95278] transition">
                  <BiLogoPostgresql size={30} />
                </div>
                <p
                  className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
                >
                  PostgreSQL
                </p>
              </div>
              <div className="flex flex-col text-center mr-5 mb-5">
                <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center text-[#E95278] hover:text-white hover:bg-[#E95278] transition">
                  <FaAws size={30} />
                </div>
                <p
                  className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
                >
                  AWS
                </p>
              </div>
            </div>
          </div>
          <button
            className={`mr-auto flex justify-center items-center mt-10 px-10 py-3 border-2 border-[#E95278] text-lg text-[#E95278] font-inter font-medium rounded hover:text-white hover:bg-[#E95278] transition ${inter.className}`}
          >
            Download Resume
            <IoDownloadOutline className="ml-3" size={20} />
          </button>
        </section>
        <Experiences />
      </div>
    </main>
  );
}
