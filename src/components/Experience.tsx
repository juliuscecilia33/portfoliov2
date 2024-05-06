import PropTypes from "prop-types";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

type ExperienceProps = {
  imageSrc: string;
  imageAlt: string;
  experiences: string[];
  description: string[];
};

const spaceGrotesk = Space_Grotesk({
  preload: false,
});

const Experience = ({ imageSrc, imageAlt }: ExperienceProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full px-10 pt-8 pb-5 bg-[#1C1E26] rounded-lg border border-[#E95278]">
      <div className="flex w-full">
        <div className="aspect-square flex p-8 bg-[#E95278] rounded">
          <Image
            src={Adobe}
            alt="Adobe"
            className="aspect-square rounded-lg items-center"
          />
        </div>
        <div className="w-full flex flex-col py-6 px-7 bg-[#2E303E] rounded ml-4">
          <div className="flex items-end mb-2">
            <h2 className="text-3xl font-bold mr-3">
              Software Engineer Intern
            </h2>
            <p className="text-[#E95278] font-bold">Adobe</p>
          </div>
          <h2 className="text-1xl mr-3 mb-3">June 2023 - September 2023</h2>
          <div className="flex">
            <div className="border border-[#569CD6] py-1 px-4 rounded-full mr-4">
              <h3 className="uppercase text-[#569CD6] text-xs font-bold text-center">
                Javascript
              </h3>
            </div>
            <div className="border border-[#569CD6] py-1 px-4 rounded-full mr-4">
              <h3 className="uppercase text-[#569CD6] text-xs font-bold text-center">
                Python
              </h3>
            </div>
            <div className="border border-[#569CD6] py-1 px-4 rounded-full mr-4">
              <h3 className="uppercase text-[#569CD6] text-xs font-bold text-center">
                Node.js
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mx-auto flex flex-col font-bold items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          <h3 className="mb-1">Read More</h3>
        </button>
        <button onClick={() => setIsOpen(!isOpen)} className="p-0 m-0">
          <FaChevronDown />
        </button>
      </div>
      <div
        className={`flex flex-col w-full opacity-0 transition-opacity duration-400 ${
          isOpen ? "opacity-100 h-full" : "h-0"
        }`}
      >
        <p className="text-[#E95278] font-bold mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.
        </p>
      </div>
    </div>
  );
};

export default Experience;
