// src/components/Cart.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/reducers/cartReducer";

const Cart = ({ isOpen, toggleCart }) => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed z-10 top-0 right-0 w-72 h-full bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => {
              const {
                attributes: {
                  title,
                  images: {
                    data: {
                      attributes: { url, alternativeText },
                    },
                  },
                },
                quantity,
              } = item;
              return (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-4"
                >
                  <div>
                    <img src={url} alt={alternativeText} className="w-16" />
                    <h3 className="text-sm font-normal">{title}</h3>
                    <p className="text-gray-500">Qty: {quantity}</p>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <button
        onClick={toggleCart}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
      >
        Close
      </button>
    </div>
  );
};

export default Cart;
