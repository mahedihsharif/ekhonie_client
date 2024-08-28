// src/components/Cart.js
import { Transition } from "@headlessui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/reducers/cartReducer";

const Cart = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  const handleCheckout = () => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/order-summery");
    }

    onClose();
  };

  return (
    <Transition
      show={isOpen}
      enter="transition ease-in-out duration-300 transform"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
      className="fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-lg z-50"
    >
      <div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => {
                const { _id, title, file, cartQuantity, cartPrice } = item;
                return (
                  <li
                    key={_id}
                    className="flex justify-between items-center mb-4"
                  >
                    <div>
                      <img src={file} alt="" className="w-16" />
                      <h3 className="text-sm font-normal">{title}</h3>
                      <p className="text-gray-500 mt-4 ">
                        Qty:{" "}
                        <button
                          onClick={() => dispatch(decreaseQuantity(item))}
                          className="ml-2 cursor-pointer text-xl border rounded-sm px-2"
                        >
                          -
                        </button>
                        <button className="ml-2 px-4 text-md font-semibold rounded-sm bg-[#F1F5F6] border">
                          {cartQuantity}
                        </button>
                        <button
                          onClick={() => dispatch(increaseQuantity(item))}
                          className="ml-2 cursor-pointer text-xl border rounded-sm px-2"
                        >
                          +
                        </button>
                      </p>
                      <p>${cartPrice.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => dispatch(removeFromCart(item))}
                      className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
          <div className="p-4 border-t">
            <div className="flex justify-between">
              <span>Total:</span>
              <span className="font-semibold mb-10">${totalPrice}</span>
            </div>

            <button
              className="w-full mt-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          Close
        </button>
      </div>
    </Transition>
  );
};

export default Cart;
