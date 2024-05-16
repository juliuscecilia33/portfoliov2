import { TbSchool } from "react-icons/tb";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  preload: false,
});

const Education = () => {
  return (
    <div className="mt-20 flex flex-col">
      <h3
        className={`flex flex-row items-center font-bold text-2xl text-white ${spaceGrotesk.className}`}
      >
        <TbSchool className="text-[#E95278] mr-3" size={40} />
        Education
      </h3>
      <p className={`mt-6 text-md font-semibold text-white ${inter.className}`}>
        University of Washington (2020-2024)
      </p>
      <div className="flex flex-row mt-3">
        <p
          className={`text-md font-semibold text-[#E95278] ${inter.className}`}
        >
          <span className="text-[#96979A]">Major:</span> Information Technology
        </p>
      </div>
      <div className="flex flex-row mt-3">
        <p
          className={`text-md font-semibold text-[#E95278] ${inter.className}`}
        >
          <span className="text-[#96979A]">Minor:</span> Business Administration
        </p>
      </div>
    </div>
  );
};

export default Education;
