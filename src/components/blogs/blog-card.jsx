import React from "react";

const BlogCard = ({ blog }) => {
  const {
    attributes: {
      title,
      description,
      blogDate,
      images: {
        data: {
          attributes: { alternativeText, url },
        },
      },
    },
  } = blog;
  return (
    <div className="card bg-base-100 shadow-sm cursor-pointer md:mt-0 mt-3 hover:scale-105 hover:shadow-md transition-all ease-in-out ml-3 max-sm:ml-0">
      <figure>
        <img src={url} alt={alternativeText} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base font-semibold hover:text-[#3945D4] transition-all duration-75">
          {title}
        </h2>
        <p className="text-[12px] text-[#8d979e] font-normal">
          POST BY MAHEDI H SHARIF
        </p>
        <p className="text-sm font-medium text-[#515d66]">
          {description.slice(0, 50)}
        </p>
        <span className="border-b-[1px]"></span>
        <div className="flex justify-between items-center md:gap-28 gap-16">
          <button className="uppercase text-[12px] font-bold cursor-pointer hover:text-[#3945D4]">
            read more
          </button>
          <p className="text-[12px] font-medium text-[#8d979e]">{blogDate}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
