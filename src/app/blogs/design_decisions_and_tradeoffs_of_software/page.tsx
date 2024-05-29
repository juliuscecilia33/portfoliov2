/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function DesignDecisionsAndTradeOffsOfSoftware() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="flex flex-col mt-10 w-full px-[30%]">
        <p className="blogDate mb-1 pl-10">May 28, 2024</p>
        <h1 className="blogTitle px-10">
          Designs and Decisions and trade-offs of Software
        </h1>
        <div className="w-full border-b border-[#2E303E] my-8"></div>
        <div className="px-10 w-full flex items-center">
          <p className="blogDescription mr-8">Julius Cecilia</p>
          <p className="blogDescription mr-8">3-4 min.</p>
          <p className="blogType text-[#52E9CE]">• Knowledge</p>
        </div>
        <p className="blogParagraph">
          As a newly grad, aspiring Software Engineer, I’ve been eager to learn
          from industry veterans and pioneers who have shaped the way we
          approach Software Development. From Adam Gordon Bell CoRecursive
          Podcast, I recently learned about Greg Wilson who was an advocate for
          elevating software design to the level of an art form.
        </p>
        <p className="blogParagraph">
          His mission has been to create a language and vocabulary for
          discussing software design and architecture, much like how architects
          and designers can critique and appreciate the aesthetics of their
          creations. His work, through books like "Beautiful Code" and "The
          Architecture of Open Source Applications," aims to bridge the gap
          between theory and practice in software development. Greg found that
          most textbooks lacked real-world examples, prompting him to focus on
          teaching through actual case studies and practical applications.
        </p>
        <p className="blogParagraph">
          As a result, I've learned that understanding what makes code
          "beautiful" involves seeing the elegance and efficiency in real-world
          solutions.
        </p>
        <p className="blogParagraph">
          Greg Wilson emphasizes the importance of learning from real-world
          software systems. Instead of focusing solely on theoretical aspects
          like UML and design patterns, he suggests studying actual software
          designs (open-source projects) to understand decision-making and
          trade-offs.
        </p>
        <p className="blogParagraph">
          One Actual Software Design I use a lot and helped me to understand
          decision-making and trade-offs was React.js (Javascript Library for
          building user interfaces)
        </p>
        <h3 className="blogHeading">Check out my Linkedin Post on it</h3>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7201338391227977728"
          height="1237"
          width="504"
          frameBorder="0"
          allowFullScreen={false}
          title="Embedded post"
        ></iframe>
      </div>
    </main>
  );
}
