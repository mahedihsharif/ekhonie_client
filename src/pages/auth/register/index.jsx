import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUser } from "../../../api";
import useForm from "../../../hooks/useForm";

const init = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "First Name is Required";
  } else if (values.firstName.length < 2) {
    errors.firstName = "First Name Must be upto 3 Characters";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name is Required";
  } else if (values.lastName.length < 2) {
    errors.lastName = "Last Name Must be upto 3 Characters";
  }

  if (!values.email) {
    errors.email = "Email is Required";
  }
  if (!values.password) {
    errors.password = "Password is Required";
  } else if (values.password.length < 5) {
    errors.password = "Password Must be upto 3 Characters";
  }
  return errors;
};

const Register = () => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const {
    formState,
    handleChange,
    handleBlur,
    handleFocus,
    handleSubmit,
    clear,
  } = useForm({ init, validate });

  const submit = ({ hasError, error: err, values }) => {
    if (hasError) {
      setError(err);
      toast.error("Input Field is Empty!");
    } else {
      try {
        const userData = createUser(values);
        userData.then((data) => setUsers(data));
        navigate("/login");
        toast.success("Your Account has been created Successfully");
      } catch (err) {
        console.log(err);
        toast.error("Failed to create account. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="flex justify-center px-5 2xl:px-60 items-center gap-5 py-28 bg-gray-100 ">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-center items-center gap-20 border-b-2 border-gray-200 pb-5">
            <p className="text-md font-medium text-center uppercase">
              <Link to={"/login"}>Login</Link>
            </p>
            <p className="text-md font-medium text-center uppercase">
              Register
            </p>
          </div>
          <form className="space-y-4" onSubmit={(e) => handleSubmit(e, submit)}>
            <div>
              <label className="block mb-1 text-md font-medium text-gray-700">
                First Name
              </label>
              <input
                type={"text"}
                value={formState.firstName.value}
                label={"First Name"}
                name={"firstName"}
                placeholder={"First Name"}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {formState.firstName.error && (
                <span className="text-red-700">
                  {formState.firstName.error}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 text-md font-medium text-gray-700">
                Last Name
              </label>
              <input
                type={"text"}
                value={formState.lastName.value}
                name={"lastName"}
                placeholder={"Last Name"}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {formState.lastName.error && (
                <span className="text-red-700">{formState.lastName.error}</span>
              )}
            </div>

            <div>
              <label className="block mb-1 text-md font-medium text-gray-700">
                Email
              </label>
              <input
                type={"text"}
                value={formState.email.value}
                label={"Email"}
                name={"email"}
                placeholder={"Email Address"}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {formState.email.error && (
                <span className="text-red-700">{formState.email.error}</span>
              )}
            </div>
            <div>
              <label className="block mb-1 text-md font-medium text-gray-700">
                Password
              </label>
              <input
                type={"password"}
                value={formState.password.value}
                name={"password"}
                placeholder={"*****"}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {formState.password.error && (
                <span className="text-red-700">{formState.password.error}</span>
              )}
            </div>
            <button
              type="submit"
              className="w-full font-normal px-4 py-2 text-white bg-blue-700 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Create an Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
