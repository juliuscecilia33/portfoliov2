type BlogHeadingProps = {
  date: string;
  title: string;
  timeReading: string;
  type: string;
};

const BlogHeading = () => {
  return (
    <>
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
    </>
  );
};
