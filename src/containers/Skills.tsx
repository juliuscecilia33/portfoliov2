// Fonts
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";

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

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  preload: false,
});

const Skills = () => {
  return (
    <div className="mt-20 flex flex-col">
      <h3
        className={`mb-6 flex flex-row items-center font-bold text-2xl text-white ${spaceGrotesk.className}`}
      >
        <PiBracketsCurlyBold className="text-[#E95278] mr-3" size={40} />
        Skills
      </h3>
      <div className="flex flex-row flex-wrap">
        <div className="flex flex-col text-center mr-5 mb-5">
          <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center">
            <RiJavascriptFill className="text-[#E95278]" size={30} />
          </div>
          <p
            className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
          >
            Javascript
          </p>
        </div>
        <div className="flex flex-col text-center mr-5 mb-5">
          <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center">
            <FaPython className="text-[#E95278]" size={30} />
          </div>
          <p
            className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
          >
            Python
          </p>
        </div>
        <div className="flex flex-col text-center mr-5 mb-5">
          <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center">
            <FaJava className="text-[#E95278]" size={30} />
          </div>
          <p
            className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
          >
            Java
          </p>
        </div>
        <div className="flex flex-col text-center mr-5 mb-5">
          <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center">
            <SiTypescript className="text-[#E95278]" size={30} />
          </div>
          <p
            className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
          >
            Typescript
          </p>
        </div>
        <div className="flex flex-col text-center mr-5 mb-5">
          <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center">
            <RiFlutterFill className="text-[#E95278]" size={30} />
          </div>
          <p
            className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
          >
            Flutter
          </p>
        </div>
        <div className="flex flex-col text-center mr-5 mb-5">
          <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center">
            <FaReact className="text-[#E95278]" size={30} />
          </div>
          <p
            className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
          >
            React.js
          </p>
        </div>
        <div className="flex flex-col text-center mr-5 mb-5">
          <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center">
            <FaAngular className="text-[#E95278]" size={30} />
          </div>
          <p
            className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
          >
            Angular.js
          </p>
        </div>
        <div className="flex flex-col text-center mr-5 mb-5">
          <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center">
            <FaNode className="text-[#E95278]" size={30} />
          </div>
          <p
            className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
          >
            Node.js
          </p>
        </div>
        <div className="flex flex-col text-center mr-5 mb-5">
          <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center">
            <BiLogoPostgresql className="text-[#E95278]" size={30} />
          </div>
          <p
            className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
          >
            PostgreSQL
          </p>
        </div>
        <div className="flex flex-col text-center mr-5 mb-5">
          <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center">
            <FaAws className="text-[#E95278]" size={30} />
          </div>
          <p
            className={`mt-2 text-xs font-medium uppercase ${inter.className}`}
          >
            AWS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
