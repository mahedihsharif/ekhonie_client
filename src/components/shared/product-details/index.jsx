import React from "react";
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
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={url} alt={alternativeText} className="rounded-lg" />
        </div>
        <div className="md:w-1/2 md:ml-6 pt-10 md:mt-0">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-gray-700 text-lg mb-4">{shortDescription}</p>
          <div className="text-xl font-semibold mb-4">${sellingPrice}</div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
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
