"use client";

import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import MyProfile from "../assets/images/JuliusCecilia.jpeg";
import Adobe from "../assets/images/Adobe.png";
import IQAir from "../assets/images/IQAir.png";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Experience from "../components/Experience";

const spaceGrotesk = Space_Grotesk({
  preload: false,
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main
      className={`font-heading flex min-h-screen flex-row p-12 justify-between ${spaceGrotesk.className}`}
    >
      <section
        className={`pt-10 mr-10 w-1/5 font-heading flex min-h-screen flex-col ${spaceGrotesk.className}`}
      >
        <Image
          src={MyProfile}
          alt="My Profile>"
          width={155}
          height={155}
          className="aspect-square rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold">Hey, Im Julius!</h1>
      </section>
      <section
        className={`ml-10 bg-[#2E303E] p-10 rounded-lg w-4/5 font-heading flex min-h-screen flex-col ${spaceGrotesk.className}`}
      >
        <h1 className="text-2xl font-bold mb-8">Experience</h1>
        <Experience
          imageSrc={Adobe}
          imageAlt="Adobe"
          description={[
            "Crafted a dynamic email automation solution using Microsoft Outlookʼs Actionable Messages/Adaptive Cards feature and Googleʼs AMP feature for Gmail, optimizing product approval workflows and reducing errors by 30% for Adobeʼs business customers",
            "Integrated the email solution to Adobe's backend services while maintaining the secure architecture, using Python and Node.js, to guarantee data security and reliability",
            "Played a key role in the transition of Adobe's Console for Businesses from Angular.js to React.js which required using testing protocols like Jasmine.js and Jest.js to validate the integration and guarantee system performance",
          ]}
          positionName="Software Engineer Intern"
          companyName="Adobe"
          dateOfExperience="June 2023 - September 2023"
          programmingLanguages={[
            "Python",
            "Node.js",
            "Angular.js",
            "React.js",
            "Jasmine.js",
            "Jest.js",
          ]}
        />
        <Experience
          imageSrc={Adobe}
          imageAlt="Adobe"
          description={[
            "Implemented a read-only access mode on Adobeʼs Console for Businesses using React.js, Angular.js, and Java, which resolved customer concerns regarding security and support process by 40%",
            "Refined data and authentication logic to achieve role-based access control through token-based authentication and integrating with backend APIs to validate user permissions in real-time",
          ]}
          positionName="Software Engineer Intern"
          companyName="Adobe"
          dateOfExperience="June 2022 - September 2022"
          programmingLanguages={[
            "Java",
            "Angular.js",
            "React.js",
            "Jasmine.js",
            "Jest.js",
          ]}
        />
        <Experience
          imageSrc={IQAir}
          imageAlt="IQAir"
          description={[
            "Crafted a dynamic email automation solution using Microsoft Outlookʼs Actionable Messages/Adaptive Cards feature and Googleʼs AMP feature for Gmail, optimizing product approval workflows and reducing errors by 30% for Adobeʼs business customers",
            "Integrated the email solution to Adobe's backend services while maintaining the secure architecture, using Python and Node.js, to guarantee data security and reliability",
            "Played a key role in the transition of Adobe's Console for Businesses from Angular.js to React.js which required using testing protocols like Jasmine.js and Jest.js to validate the integration and guarantee system performance",
          ]}
          positionName="Software Engineer Intern"
          companyName="Adobe"
          dateOfExperience="June 2023 - September 2023"
          programmingLanguages={[
            "Python",
            "Node.js",
            "Angular.js",
            "React.js",
            "Jasmine.js",
            "Jest.js",
          ]}
        />
      </section>
    </main>
  );
}
