import React from "react";
import { GoEye } from "react-icons/go";
import { IoIosHeartEmpty, IoMdCheckmark } from "react-icons/io";
import { IoGitCompareOutline } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";

const ProductCard = ({ product }) => {
  const {
    attributes: {
      title,
      mrp,
      sellingPrice,
      quantity,
      soldQuantity,
      availability,
      offer,
      reviews,
      images: {
        data: {
          attributes: { alternativeText, url },
        },
      },
    },
  } = product;
  return (
    <div className=" relative group overflow-hidden card card-compact bg-base-100 shadow-sm cursor-pointer mt-2 md:mt-0 hover:scale-105 hover:shadow-md transition-all ease-in-out ml-2 max-sm:ml-0">
      <figure className="relative">
        {offer && (
          <div className="absolute bg-[#E24142] px-5 py-[1px] left-2 top-2">
            <span className="text-white text-[12px]">{offer}%</span>
          </div>
        )}
        <img src={url} alt={alternativeText} className="h-52" />
        <div className="absolute top-0 right-0 p-4  transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out">
          <div className="border-[1px] w-full h-full rounded-full p-[0.3rem]">
            <IoIosHeartEmpty className="text-md text-[#626363] " />
          </div>
          <div className="border-[1px] w-full h-full rounded-full p-[0.3rem] my-2">
            <IoGitCompareOutline className="text-md text-[#626363] " />
          </div>
          <div className="border-[1px] w-full h-full rounded-full p-[0.3rem]">
            <GoEye className="text-md text-[#626363] " />
          </div>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm font-semibold leading-5 hover:text-[#3945D4] transition-all duration-75">
          {title}
        </h2>
        <div className="card-actions">
          <TiStarFullOutline className="text-[#FFC93D] text-lg font-bold" />
          <TiStarFullOutline className="text-[#FFC93D] text-lg font-bold" />
          <TiStarFullOutline className="text-[#FFC93D] text-lg font-bold" />
          <TiStarFullOutline className="text-[#FFC93D] text-lg font-bold" />
          <TiStarFullOutline className="text-[#FFC93D] text-lg font-bold" />
          <p>{reviews} review</p>
        </div>
        <div>
          <p className="text-[#3945D4] font-semibold text-lg">
            ${sellingPrice}{" "}
            <span className="text-[#8d979e] text-sm font-normal line-through">
              ${mrp}
            </span>
          </p>
        </div>
        <div>
          <p>
            <span className="text-[#79819c] text-sm font-normal">Sold: </span>
            <span className="text-[#212529] font-semibold text-base">
              {`${soldQuantity}/${quantity}`}{" "}
            </span>
            <span className="text-[#79819c] text-sm font-normal">products</span>
          </p>
        </div>
        <p className="text-[#089608] font-medium text-sm flex items-center gap-2">
          <IoMdCheckmark /> {availability}
        </p>
        {/* Button and Icons (initially hidden, appear on hover) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
          <button className="w-full py-2 mb-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
