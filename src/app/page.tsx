import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import MyProfile from "../assets/images/JuliusCecilia.jpeg";
import Adobe from "../assets/images/Adobe.png";
import { Container } from "postcss";

const spaceGrotesk = Space_Grotesk({
  preload: false,
});

export default function Home() {
  return (
    <main
      className={`font-heading flex min-h-screen flex-row p-12 justify-between ${spaceGrotesk.className}`}
    >
      <section
        className={`mr-10 w-1/5 font-heading flex min-h-screen flex-col ${spaceGrotesk.className}`}
      >
        <Image
          src={MyProfile}
          alt="My Profile>"
          width={155}
          height={155}
          className="rounded-lg mb-4"
        />
        <h1 className="text-3xl">Hey, Im Julius!</h1>
      </section>
      <section
        className={`ml-10 bg-[#2e303e] p-10 rounded-lg w-4/5 bg-gray-300 font-heading flex min-h-screen flex-col ${spaceGrotesk.className}`}
      >
        <h1 className="text-2xl font-bold mb-8">Experience</h1>
        <div className="flex flex-col w-full p-4 bg-[#1C1E26] rounded-lg border border-[#E95278]">
          <div className="flex w-full">
            <div className="aspect-square w-2/12 h-2/12 flex p-6 bg-[#E95278] rounded">
              <Image
                src={Adobe}
                alt="Adobe"
                className="aspect-square rounded-lg"
              />
            </div>
            <div className="w-full flex flex-col p-5 bg-[#2E303E] rounded ml-4">
              <div className="flex items-end">
                <h2 className="text-3xl font-bold mr-2">
                  Software Engineer Intern
                </h2>
                <p className="text-[#E95278] font-bold">Adobe</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
