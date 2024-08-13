// src/components/Cart.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/reducers/cartReducer";

const Cart = ({ isOpen, toggleCart }) => {
  const cartItems = useSelector((state) => state.cart.items);
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
                    <p className="text-gray-500 mt-4 ">
                      Qty:{" "}
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="ml-2 cursor-pointer text-xl border rounded-sm px-2"
                      >
                        -
                      </button>
                      <button className="ml-2 px-4 text-md font-semibold rounded-sm bg-[#F1F5F6] border">
                        {quantity}
                      </button>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="ml-2 cursor-pointer text-xl border rounded-sm px-2"
                      >
                        +
                      </button>
                    </p>
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
      <Link to={"/checkout"}>
        <div className="ml-14">
          <button className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-8 rounded">
            Checkout
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
