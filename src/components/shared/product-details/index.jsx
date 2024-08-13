import React from "react";
import { GoEye } from "react-icons/go";
import { TiStarFullOutline } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === parseInt(id))
  );
  const {
    attributes: {
      title,
      shortDescription,
      description,
      mrp,
      sellingPrice,
      tags,
      quantity,
      soldQuantity,
      availability,
      offer,
      category: {
        data: {
          attributes: { title: catTitle },
        },
      },
      reviews,
      images: {
        data: {
          attributes: { alternativeText, url },
        },
      },
    },
  } = product;
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={url} alt={alternativeText} className="rounded-lg" />
        </div>
        <div className="md:w-1/2 md:ml-6 mt-2 md:mt-0 ">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <div className="flex items-center border-b-[1.5px] pb-2">
            <TiStarFullOutline className="text-[#FFC93D] text-lg font-bold" />
            <TiStarFullOutline className="text-[#FFC93D] text-lg font-bold" />
            <TiStarFullOutline className="text-[#FFC93D] text-lg font-bold" />
            <TiStarFullOutline className="text-[#FFC93D] text-lg font-bold" />
            <TiStarFullOutline className="text-[#FFC93D] text-lg font-bold" />
            <p className="ml-2 font-medium">{reviews} review</p>
          </div>
          <p className="text-2xl font-semibold mb-4 text-blue-700">
            ${sellingPrice}
            <span className="text-[#88898a] text-sm font-normal ml-2 line-through">
              ${mrp}
            </span>
          </p>
          <li className="text-gray-700 text-lg mb-4 mt-4">
            {shortDescription}
          </li>
          <p className="text-md mb-4 flex items-center gap-2">
            <GoEye className="bg-gray-800 text-white rounded-full w-[15px] h-[15px]" />
            {quantity} Products are available
          </p>
          <div className="mt-12 border-b-[1.5px] pb-5">
            <button className="px-10 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button className="px-10 ml-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
              Buy Now
            </button>
          </div>
          <div className="mt-5">
            <p className="text-[#515D66] font-medium">
              Availability:{" "}
              <span className="text-[#089608] font-normal text-md">
                {availability}
              </span>
            </p>
            <p className="text-[#515D66] font-medium py-2">
              Category: <span className="text-gray-800">{catTitle}</span>
            </p>
            <p className="text-[#515D66] font-medium">
              Tags: <span className="font-normal">{tags}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
        <p className="text-gray-700 text-lg mb-4">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
