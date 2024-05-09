"use client";

// Image Assets
import Image from "next/image";
import MyProfile from "../assets/images/JuliusCecilia.jpeg";
import Adobe from "../assets/images/Adobe.png";
import IQAir from "../assets/images/IQAir.png";
import Chimerocyte from "../assets/images/chimerocyte.png";

// Components
import Experience from "../components/Experience";

// Font
import { Space_Grotesk } from "next/font/google";
const spaceGrotesk = Space_Grotesk({
  preload: false,
});

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="w-full h-24 flex items-center justify-between px-10">
        <h3 className="text-lg font-bold uppercase">Julius Cecilia</h3>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select your country
          </label>
          <select
            id="tabs"
            className="bg-[#2E303E] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-0"
          >
            <option>Profile</option>
            <option>Dashboard</option>
            <option>setting</option>
            <option>Invoioce</option>
          </select>
        </div>
        <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
          <li className="w-full focus-within:z-10">
            <a
              href="#"
              className="inline-block w-full py-4 px-10 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-1 focus:ring-rose-400 active focus:outline-none dark:bg-[#E95278] dark:text-white"
              aria-current="page"
            >
              Experience
            </a>
          </li>
          <li className="w-full focus-within:z-10">
            <a
              href="#"
              className="inline-block w-full py-4 px-10 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-1 focus:ring-rose-400 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Projects
            </a>
          </li>
          <li className="w-full focus-within:z-10">
            <a
              href="#"
              className="inline-block w-full py-4 px-10 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-1 focus:ring-rose-400 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Blogs
            </a>
          </li>
          <li className="w-full focus-within:z-10">
            <a
              href="#"
              className="inline-block w-full py-4 px-10 bg-white border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-1 focus:outline-none focus:ring-rose-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              About
            </a>
          </li>
        </ul>
        <h3 className="text-md font-md uppercase">Resume</h3>
      </div>
      <div
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
            imageSrc={Chimerocyte}
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
