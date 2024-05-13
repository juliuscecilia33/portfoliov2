import { MdArrowOutward } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = ({}) => {
  return (
    <div className="w-full h-24 flex items-center justify-between px-10">
      <h3 className="text-lg font-bold uppercase">Julius Cecilia</h3>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Julius Cecilia
        </label>
        <select
          id="tabs"
          className="bg-[#2E303E] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-0"
        >
          <option>Experience</option>
          <option>Projects</option>
          <option>Blogs</option>
          <option>About</option>
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
      <div className="flex items-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nextjs.org"
          className="flex items-center transition-all duration-300 ease-in-out hover:underline mr-5"
        >
          <h3 className="text-md font-md uppercase mr-2">Resume</h3>
          <MdArrowOutward size={20} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nextjs.org"
          className="flex items-center transition-all duration-300 ease-in-out hover:underline mr-5"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nextjs.org"
          className="flex items-center transition-all duration-300 ease-in-out hover:underline mr-5"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
