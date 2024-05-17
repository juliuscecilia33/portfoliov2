"use client";

// Image Assets
import Image from "next/image";
import MyProfile from "../assets/images/JuliusCecilia.jpeg";

// Components
import Navbar from "../components/Navbar";

// Containers
import Skills from "../containers/Skills";
import Education from "@/containers/Education";

// Font
import { Space_Grotesk } from "next/font/google";
import { Inter } from "next/font/google";

import Experiences from "@/containers/Experiences";

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
          <Education />
          <Skills />
          <button
            className={`flex justify-center items-center mt-10 px-4 py-1.5 bg-[#E95278] text-xs font-inter font-medium rounded-sm ${inter.className}`}
          >
            Download Resume
          </button>
        </section>
        <Experiences />
      </div>
    </main>
  );
}
