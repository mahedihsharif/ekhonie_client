import React from "react";
import { useNavigate } from "react-router-dom";

const Cat = ({ cat }) => {
  const navigate = useNavigate();
  const {
    id,
    attributes: {
      title,
      products,
      images: {
        data: {
          attributes: { alternativeText, url },
        },
      },
    },
  } = cat;

  const handleCategory = () => {
    navigate(`/category/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center cursor-pointer">
      <div className="bg-gray-100 w-[60%] h-auto rounded-full p-3 hover:border-[2px] hover:border-blue-700 transition-all duration-100 ease-linear">
        <img
          src={url}
          alt={alternativeText}
          className="w-full"
          onClick={handleCategory}
        />
      </div>
      <h1 onClick={handleCategory} className="font-semibold text-sm leading-5">
        {title}
      </h1>
      <p className="font-normal text-[13px] leading-5 text-[#515d66]">
        {products} Products
      </p>
    </div>
  );
};

export default Cat;
