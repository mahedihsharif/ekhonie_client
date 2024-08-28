import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrders } from "../../api/index";
import { clearCart } from "../../redux/reducers/cartReducer";

const OrderSummery = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const token = useSelector((state) => state.auth.token);
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
  const dispatch = useDispatch();

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const orders = createOrders(cartItems, token);
      orders.then(async (res) => {
        if (res.id) {
          dispatch(clearCart());
          await stripe.redirectToCheckout({
            sessionId: res.id,
          });
        } else {
          console.log("stripe id is not found!");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Main content */}

      <h1 className="text-2xl font-semibold mb-4 text-center mt-5">
        Order Summery
      </h1>
      <div className="px-5 2xl:px-60 p-4">
        <div className="bg-white p-6 rounded shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {cartItems.map((product) => {
            const { _id, title, file, price, cartQuantity, cartPrice } =
              product;

            return (
              <div key={_id}>
                <div className="flex items-center justify-between mb-4">
                  <img src={file} alt="" className="w-12 h-12 object-cover" />
                  <div className="flex-grow ml-4">
                    <h3 className="text-sm font-medium">{title}</h3>
                    <p className="text-sm text-gray-600">
                      ${price} x {cartQuantity}
                    </p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm">Subtotal:</p>
                  <p className="text-sm">${cartPrice}</p>
                </div>
                <hr className="my-4" />
              </div>
            );
          })}
          <div className="flex items-center justify-between mb-4 font-bold">
            <p>Total</p>
            <p className="text-lg">${totalPrice}</p>
          </div>
          <div className="flex flex-col justify-end items-end mt-5">
            <button
              onClick={handlePayment}
              className="bg-black uppercase text-white py-2 px-5 rounded-md hover:bg-blue-700 transition-all duration-100 font-medium"
            >
              pay now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
