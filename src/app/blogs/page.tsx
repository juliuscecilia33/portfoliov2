import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Blogs() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className={`px-10 flex flex-col`}>
        <h1 className="mt-3">Blogs</h1>
        <Link
          href="blogs/adobetwo"
          className="my-10 inline-block py-4 px-10 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-lg focus:ring-1 focus:ring-rose-400 active focus:outline-none dark:bg-[#E95278] dark:text-white"
        >
          adobetwo
        </Link>
        <Link
          href="blogs/design_decisions_and_tradeoffs_of_software"
          className="inline-block py-4 px-10 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-lg focus:ring-1 focus:ring-rose-400 active focus:outline-none dark:bg-[#E95278] dark:text-white"
        >
          design_decisions_and_tradeoffs_of_software
        </Link>
      </div>
    </main>
  );
}
