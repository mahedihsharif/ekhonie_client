import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../../redux/reducers/cartReducer";

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const totalQuantity = cartItems.map((item) => item.quantity);
  console.log(totalQuantity);
  const {
    id,
    attributes: {
      title,
      sellingPrice,
      shortDescription,
      availability,
      tags,
      reviews,
      category: {
        data: {
          attributes: { title: catTitle },
        },
      },
      images: {
        data: {
          attributes: { alternativeText, url },
        },
      },
    },
  } = product;

  return (
    <div
      key={id}
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 transition-all duration-500"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-8 w-full max-w-3xl flex"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={url}
            alt={alternativeText}
            className="max-w-full max-h-72 object-contain"
          />
        </div>
        <div className="w-1/2 ml-6">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </span>
            <span className="text-gray-600 ml-2">reviews {reviews}</span>
          </div>
          <p className="text-blue-500 text-3xl font-bold mb-4">
            ${sellingPrice}
          </p>
          <p className="text-gray-600 list-disc mb-4">{shortDescription}</p>
          <div className="flex items-center gap-5">
            <div className="flex items-center mb-4">
              <button
                onClick={() => dispatch(decreaseQuantity(product))}
                className="px-3 py-1 border rounded-l-md"
              >
                -
              </button>
              <span className="px-3 py-1 border-t border-b">
                {totalQuantity.length === 0 ? 0 : totalQuantity}
              </span>
              <button
                onClick={() => dispatch(increaseQuantity(product))}
                className="px-3 py-1 border rounded-r-md"
              >
                +
              </button>
            </div>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-blue-500 text-white px-6 py-2 rounded-md mb-4 hover:bg-blue-600"
            >
              Add to Cart
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
    </div>
  );
};

export default ProductModal;
