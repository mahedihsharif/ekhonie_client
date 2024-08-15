import React from "react";
import { useSelector } from "react-redux";

const OrderSummery = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="bg-white p-6 rounded shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      {cartItems.map((product) => {
        const {
          attributes: {
            title,
            sellingPrice,
            images: {
              data: {
                attributes: { url, alternativeText },
              },
            },
          },
          quantity,
          price,
        } = product;
        return (
          <>
            <div className="flex items-center justify-between mb-4">
              <img
                src={url}
                alt={alternativeText}
                className="w-12 h-12 object-cover"
              />
              <div className="flex-grow ml-4">
                <h3 className="text-sm font-medium">{title}</h3>
                <p className="text-sm text-gray-600">
                  ${sellingPrice} x {quantity}
                </p>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm">Subtotal:</p>
              <p className="text-sm">${price}</p>
            </div>
            <hr className="my-4" />
          </>
        );
      })}
      <div className="flex items-center justify-between mb-4 font-bold">
        <p>Total</p>
        <p className="text-lg">${totalPrice}</p>
      </div>
    </div>
  );
};

export default OrderSummery;
