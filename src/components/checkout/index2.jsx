import React from "react";
import OrderSummery from "./order-summery";
import Payment from "./payment";

const index2 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-grow">
        <div className="px-5 2xl:px-60 mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="md:col-span-2">
            <form
              className="bg-white p-6 rounded shadow-sm"
              onSubmit={handleSubmit}
            >
              <h2 className="text-lg font-semibold mb-4">Contact</h2>
              <input
                type="email"
                placeholder="Email or mobile phone number"
                className="w-full p-2 border mb-4"
              />
              <div className="flex items-center mb-4">
                <input type="checkbox" id="news" className="mr-2" />
                <label htmlFor="news">Email me with news and offers</label>
              </div>

              <h2 className="text-lg font-semibold mb-4">Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="w-full p-2 border"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full p-2 border"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-2 border mb-4"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full p-2 border mb-4"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-2 border"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="w-full p-2 border"
                />
                <input
                  type="text"
                  placeholder="ZIP code"
                  className="w-full p-2 border"
                />
              </div>
              {/* <div className="flex items-center mb-4">
                <input type="checkbox" id="saveInfo" className="mr-2" />
                <label htmlFor="saveInfo">
                  Save this information for next time
                </label>
              </div> */}

              {/* <h2 className="text-lg font-semibold mb-4">Shipping method</h2>
              <input
                type="text"
                placeholder="Enter your shipping address to view available shipping methods."
                className="w-full p-2 border mb-4"
              /> */}
              <Payment />
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <OrderSummery />
        </div>
      </main>
    </div>
  );
};

export default index2;
