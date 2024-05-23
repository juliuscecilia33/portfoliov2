import Navbar from "@/components/Navbar";
import Image from "next/image";
import AdobeWiffleBall from "../../../assets/images/AdobeWiffleBall.png";

export default function AdobeTwo() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="flex flex-col mt-10 w-full px-[30%]">
        <p className="blogDate mb-1 pl-10">May 20, 2024</p>
        <h1 className="blogTitle px-10">
          My Experience at Adobe as a Software Engineer Intern
        </h1>
        <div className="w-full border-b border-[#2E303E] my-8"></div>
        <div className="px-10 w-full flex items-center">
          <p className="blogDescription mr-8">Julius Cecilia</p>
          <p className="blogDescription mr-8">3-4 min.</p>
          <p className="blogType text-[#52E9CE]">• Experience</p>
        </div>
        <Image
          src={AdobeWiffleBall}
          alt="AdobeTwo"
          className="rounded-md mt-16"
        />
        <p className="blogPictureDescription">
          Picture of me and my Wiffleball Team!
        </p>
        <p className="blogParagraph">
          Last summer, I had the incredible opportunity to intern as a Software
          Engineer on the Business Platform Team at Adobe. It was an experience
          filled with learning, innovation, and meaningful connections. Here’s a
          look back at my journey and the projects that defined my time at
          Adobe.
        </p>
        <h3 className="blogHeading">
          Building a Dynamic Email Automation Solution
        </h3>
        <p className="blogParagraph">
          One of the highlights of my internship was crafting a dynamic email
          automation solution. Leveraging Microsoft Outlook’s Actionable
          Messages and Adaptive Cards feature, along with Google’s AMP for
          Gmail, I developed a system to optimize product approval workflows for
          Adobe’s business customers. This project was instrumental in reducing
          errors by 30%, enhancing efficiency, and streamlining processes.
        </p>
        <p className="blogParagraph">
          To integrate this solution with Adobe's backend services securely, I
          utilized Python and Node.js. This integration not only ensured data
          security and reliability but also maintained the high standards of
          Adobe's architecture.
        </p>
        <h3 className="blogHeading">
          Transitioning Adobe's Console for Businesses
        </h3>
        <p className="blogParagraph">
          Another significant project I worked on was aiding the transition of
          Adobe's Console for Businesses from Angular.js to React.js. This
          transition was crucial for improving the user experience and system
          performance. I played a key role in this process, employing testing
          protocols like Jasmine.js and Jest.js to validate the integration and
          ensure the system's robustness.
        </p>
        <h3 className="blogHeading">The Adobe Intern Summit and Networking</h3>
        <p className="blogParagraph">
          One of the most exciting aspects of my internship was attending
          Adobe's Intern Summit in San Jose. It was here that I first heard
          about Adobe's Firefly AI Product release—a cutting-edge innovation
          that left everyone buzzing with excitement. The summit was not just
          about learning; it was also about connecting. I met numerous other
          interns and established employees, including Adobe’s CEO, Shantanu
          Narayen.
        </p>
        <h3 className="blogHeading">
          Team Camaraderie Building: Wiffle Ball Tournament
        </h3>
        <p className="blogParagraph">
          Adobe's culture of fostering a fun and collaborative environment was
          evident during the wiffleball tournament organized for interns. Teams
          from various departments competed against each other during lunch
          breaks, creating an atmosphere of camaraderie and friendly
          competition. It was a fantastic way to unwind and bond with
          colleagues.
        </p>
        <h3 className="blogHeading">
          Presenting My Project and Reflecting on My Experience
        </h3>
        <p className="blogParagraph">
          As my internship drew to a close, I had the chance to present my
          project to my team. The positive feedback and constructive insights I
          received were invaluable. This experience was not just about the
          technical skills I gained, but also about the amazing people I met and
          the professional growth I experienced.
        </p>
        <p className="blogParagraph">
          I was fortunate to have a wonderful mentor, Kellen, who guided me
          throughout my projects, and an amazing manager, James, who provided
          constant support and encouragement. Their mentorship was crucial in
          navigating the challenges and successes of my internship.
        </p>
        <h3 className="blogHeading">Conclusion</h3>
        <p className="blogParagraph">
          Overall, my internship at Adobe was a transformative experience. I
          learned so much, from advanced technical skills to the importance of
          teamwork and communication. Adobe’s supportive environment and
          innovative spirit made it the perfect place to grow both personally
          and professionally. I am grateful for the opportunity and look forward
          to applying what I’ve learned in my future endeavors.
        </p>
        <h3 className="blogHeading">Check out my Linkedin Post on it</h3>
        <iframe
          className="rounded mb-20"
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7198477470130446336"
          height="1762"
          width="504"
          frameBorder="0"
          allowFullScreen={false}
          title="Embedded post"
        ></iframe>
      </div>
    </main>
  );
}
