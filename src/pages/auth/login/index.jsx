import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "../../../hooks/useForm";
import { login_user } from "../../../redux/reducers/authReducer";

const init = {
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};
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

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { loader, errorMessage } = useSelector((state) => state.auth);

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
      if (!error.email) {
        toast.error(error.password);
      } else if (!error.password) {
        toast.error(error.email);
      } else {
        toast.error("Input Field is Empty!");
      }
    } else {
      try {
        dispatch(login_user(values)).then((value) => {
          // const from = location.state?.from?.pathname || "/";
          const { token } = value.payload;
          if (token) {
            navigate("/");
            toast.success("Account Login Successfully!");
          } else {
            toast.error(value.payload);
          }
        });
      } catch (err) {
        toast.error("Failed to login account. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="flex justify-center px-5 2xl:px-60 gap-5 py-44 bg-gray-100 ">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-center items-center gap-20 border-b-2 border-gray-200 pb-5">
            <p className="text-md font-medium text-center uppercase">Login</p>
            <p className="text-md font-medium text-center uppercase">
              <Link to={"/register"}>Register</Link>
            </p>
          </div>
          <form className="space-y-4" onSubmit={(e) => handleSubmit(e, submit)}>
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
              Login{" "}
              {loader && (
                <BeatLoader
                  color="#10e3d0"
                  cssOverride={{ marginLeft: "5%" }}
                  margin={3}
                  loading
                  size={10}
                  speedMultiplier={1}
                />
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
