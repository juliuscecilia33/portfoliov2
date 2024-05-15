"use client";

// Image Assets
import Image from "next/image";
import MyProfile from "../assets/images/JuliusCecilia.jpeg";
import Adobe from "../assets/images/Adobe.png";
import IQAir from "../assets/images/IQAir.png";
import ChimerocyteWhite from "../assets/images/ChimerocyteWhite.png";

// Components
import Experience from "../components/Experience";
import Navbar from "../components/Navbar";

// Font
import { Space_Grotesk } from "next/font/google";
import { Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  preload: false,
});
const inter = Inter({ subsets: ["latin"] });

// Icons
import { TbSchool } from "react-icons/tb";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { FaReact } from "react-icons/fa";

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
              className={`flex flex-row items-center font-bold text-3xl text-white ${spaceGrotesk.className}`}
            >
              <TbSchool className="text-[#E95278] mr-3" size={40} />
              Education
            </h3>
            <p
              className={`mt-6 text-lg font-semibold text-white ${inter.className}`}
            >
              University of Washington (2020-2024)
            </p>
            <div className="flex flex-row mt-3">
              <p
                className={`text-lg font-semibold text-[#E95278] ${inter.className}`}
              >
                <span className="text-[#96979A]">Major:</span> Information
                Technology
              </p>
            </div>
            <div className="flex flex-row mt-3">
              <p
                className={`text-lg font-semibold text-[#E95278] ${inter.className}`}
              >
                <span className="text-[#96979A]">Minor:</span> Business
                Administration
              </p>
            </div>
          </div>
          <div className="mt-20 flex flex-col">
            <h3
              className={`mb-6 flex flex-row items-center font-bold text-3xl text-white ${spaceGrotesk.className}`}
            >
              <PiBracketsCurlyBold className="text-[#E95278] mr-3" size={40} />
              Skills
            </h3>
            <div className="flex flex-row">
              <div className="flex flex-col text-center">
                <div className="w-20 h-20 aspect-square flex bg-[#2E303E] rounded items-center justify-center">
                  <FaReact className="text-[#E95278]" size={50} />
                </div>
                <p
                  className={`mt-1 text-sm font-medium uppercase ${inter.className}`}
                >
                  React.js
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`ml-10 bg-[#2E303E] p-10 rounded-lg w-4/6 font-heading flex min-h-screen flex-col ${spaceGrotesk.className}`}
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
              "Made real-time changes through 40+ tickets with Angular.js, React.js, Redux that reflected on 70+ translated versions of the site to enhance user experience and usability",
              "Deployed a regional site using Drupal CMS and its content delivery network (CDN) feature, allowing over 1.5 million users to view the site in their native language while keeping the current services uninterrupted",
              "Developed automated migration scripts to transition existing content and consolidate global stores through Shopify/PHP which reduced overall company excess",
              "Used Macros and Google Apps Scripts to formulate a script providing each webpage performance and analytics using Googleʼs PageSpeed API which automated Marketing teamʼs tasks",
            ]}
            positionName="Software Engineer Intern"
            companyName="IQAir"
            dateOfExperience="June 2021 - September 2021"
            programmingLanguages={["React.js", "Angular.js", "Drupal", "PHP"]}
          />
          <Experience
            imageSrc={ChimerocyteWhite}
            imageAlt="Chimerocyte"
            description={[
              "Built a completely functional website for all employees, including the CEO, managers, and lab technicians, by using React.js and AWS (Amplify, Cognito, Route 53, EC2, Lambda, S3) to create a laboratory management system",
              "Used Python to combine existing extraction scripts which resulted in a single process of uploading patient/donor documents directly to AWSʼ S3 Bucket",
            ]}
            positionName="Software Engineer Intern"
            companyName="Chimerocyte"
            dateOfExperience="March 2021 - August 2021"
            programmingLanguages={["React.js", "Python", "AWS"]}
          />
        </section>
      </div>
    </main>
  );
}
