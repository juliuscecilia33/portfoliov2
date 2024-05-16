import Adobe from "../assets/images/Adobe.png";
import IQAir from "../assets/images/IQAir.png";
import ChimerocyteWhite from "../assets/images/ChimerocyteWhite.png";

import Experience from "../components/Experience";

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  preload: false,
});

const Experiences = () => {
  return (
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
  );
};

export default Experiences;
