import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import MyProfile from "../assets/images/JuliusCecilia.jpeg";

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
          width={185}
          height={185}
          className="rounded-lg mb-8"
        />
        <h1 className="text-3xl">Julius Cecilia</h1>
        <hr className="border-b-2 border-gray-300 my-8 rounded-full" />
      </section>
      <section
        className={`ml-10 bg-[#2E303E] p-10 rounded-lg w-4/5 bg-gray-300 font-heading flex min-h-screen flex-col ${spaceGrotesk.className}`}
      >
        <h1 className="text-3xl">Experience</h1>
      </section>
    </main>
  );
}
