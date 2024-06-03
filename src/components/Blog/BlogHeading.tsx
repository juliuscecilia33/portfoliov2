type BlogHeadingProps = {
  date: string;
  title: string;
  timeReading: string;
  type: string;
};

const BlogHeading = ({ date, title, timeReading, type }: BlogHeadingProps) => {
  return (
    <>
      <p className="blogDate mb-1 pl-10">{date}</p>
      <h1 className="blogTitle px-10">{title} </h1>
      <div className="w-full border-b border-[#2E303E] my-8"></div>
      <div className="px-10 w-full flex items-center">
        <p className="blogDescription mr-8">Julius Cecilia</p>
        <p className="blogDescription mr-8">{timeReading}</p>
        <p className="blogType text-[#52E9CE]">• {type}</p>
      </div>
    </>
  );
};

export default BlogHeading;
