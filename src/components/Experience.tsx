import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

import { FaChevronRight } from "react-icons/fa";

type ExperienceProps = {
  imageSrc: StaticImageData;
  imageAlt: string;
  description: string[];
  positionName: string;
  companyName: string;
  programmingLanguages: string[];
  dateOfExperience: string;
};

const inter = Inter({ subsets: ["latin"] });

const Experience = ({
  imageSrc,
  imageAlt,
  description,
  positionName,
  companyName,
  programmingLanguages,
  dateOfExperience,
}: ExperienceProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full px-10 pt-8 pb-5 bg-[#41445A] rounded-lg border border-[#E95278] mb-4 transition-all duration-400 items-center justify-center">
        <div className="flex w-full">
          <div className="w-28 h-28 aspect-square flex p-4 bg-[#2E303E] rounded items-center justify-center">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="w-auto h-auto rounded-lg items-center"
            />
          </div>
          <div className="w-full flex flex-col rounded ml-6 mb-5">
            <div className="flex items-end mb-2">
              <h2 className="text-3xl font-bold mr-3">{positionName}</h2>
              <p className="text-[#E95278] font-bold mb-px">{companyName}</p>
            </div>
            <h2 className="text-1xl mr-3 mb-3">{dateOfExperience}</h2>
            <div className="flex">
              {programmingLanguages.map((language) => (
                <div
                  key={language}
                  className="border border-[#569CD6] py-1 px-4 rounded-full mr-4"
                >
                  <h3 className="uppercase text-[#569CD6] text-xs font-bold text-center">
                    {language}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Link
        href="/blogs/adobetwo"
        className={`flex justify-center items-center mb-10 px-4 py-1.5 bg-[#E95278] text-xs font-inter font-medium rounded-sm ${inter.className}`}
      >
        Read More
        <FaChevronRight className="ml-1" />
      </Link>
    </div>
  );
};

export default Experience;
