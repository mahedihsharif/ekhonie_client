import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useForm from "../../hooks/useForm";
import OrderSummery from "./order-summery";
import Payment from "./payment";
const init = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  cardNumber: "",
  date: "",
  securityCode: "",
  cardName: "",
  checked: false,
};

const validate = (values) => {
  const errors = {};

  if (!values.lastName) {
    errors.lastName = "Last Name is Required";
  }
  if (!values.phone) {
    errors.phone = "Phone Number is Required";
  }
  if (!values.address) {
    errors.address = "Address is Required";
  }
  if (!values.cardNumber) {
    errors.cardNumber = "Card Number is Required";
  }
  if (!values.date) {
    errors.date = "Date is Required";
  }
  if (!values.securityCode) {
    errors.securityCode = "Security Code is Required";
  }
  if (!values.cardName) {
    errors.cardName = "Card Name is Required";
  }
  return errors;
};

const Checkout = () => {
  const [orderInfo, setOrderInfo] = useState(null);
  const navigate = useNavigate();
  const {
    formState,
    handleChange,
    handleBlur,
    handleFocus,
    handleSubmit,
    clear,
  } = useForm({ init, validate });

  const submit = ({ hasError, error, values }) => {
    if (hasError) {
      toast.error("Input Field is Empty!");
    } else {
      try {
        setOrderInfo(values);
        toast.success("Your Account has been created Successfully");
        navigate("/orders");
      } catch (err) {
        console.log(err);
        toast.error("Failed to create account. Please try again.");
      }
    }
  };
  console.log(orderInfo);
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-grow">
        <h1 className="text-2xl font-semibold mb-4 text-center mt-5">
          Checkout
        </h1>
        <div className="px-5 2xl:px-60 mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="md:col-span-2">
            <form
              className="bg-white p-6 rounded shadow-sm"
              onSubmit={(e) => handleSubmit(e, submit)}
            >
              <h2 className="text-lg font-semibold mb-4">Contact</h2>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formState.email.value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="w-full p-2 border mb-4"
              />

              <h2 className="text-lg font-semibold mb-4">Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  value={formState.firstName.value}
                  placeholder="First name (optional)"
                  className="w-full p-2 border"
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />

                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formState.lastName.value}
                    placeholder="Last name"
                    className="w-full p-2 border"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  {formState.lastName.error && (
                    <span className="text-red-700">
                      {formState.lastName.error}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="number"
                  name="phone"
                  value={formState.phone.value}
                  placeholder="Phone Number"
                  className="w-full p-2 border mb-4"
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                {formState.phone.error && (
                  <span className="text-red-700">{formState.phone.error}</span>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  value={formState.address.value}
                  placeholder="Address"
                  className="w-full p-2 border mb-4"
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                {formState.address.error && (
                  <span className="text-red-700">
                    {formState.address.error}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  name="city"
                  value={formState.city.value}
                  placeholder="City"
                  className="w-full p-2 border"
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <input
                  type="text"
                  name="state"
                  value={formState.state.value}
                  placeholder="State"
                  className="w-full p-2 border"
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <input
                  type="text"
                  name="zip"
                  value={formState.zip.value}
                  placeholder="ZIP code"
                  className="w-full p-2 border"
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <Payment
                formState={formState}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleFocus={handleFocus}
              />
              <button
                type="submit"
                className="w-full bg-gray-800 text-white p-3 rounded"
              >
                Pay now
              </button>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <OrderSummery />
        </div>
      </main>
    </div>
  );
};

export default Checkout;
