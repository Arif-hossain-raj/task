"use client";
import ImgBox from "@/components/ImgBox";

const Blog = ({ title, data }) => {
  return (
    <section className=" pb-[100px] bg-white">
      <div className="wrapper max-w-full ">
        <div className="header flex justify-between items-center mb-[25px]">
          <div className="text">
            <h3>{title}</h3>
          </div>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-[15px]">
          {data?.map((sliderData, idx) => (
            <div key={idx}>
              <ImgBox image={sliderData?.image} text={sliderData?.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
