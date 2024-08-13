import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoIosHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/reducers/authReducer";
import Cart from "../../cart";
import Logo from "/assets/logo.png";

const TopBarSearch = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.jwt);
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItemsCount = useSelector((state) => state.cart.totalQuantity);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <div className="flex justify-between px-5 2xl:px-60 items-center border-b-[1px] gap-5 py-5">
        <div>
          <Link to={"/"}>
            {" "}
            <img src={Logo} alt="" className="md:w-36 w-24" />
          </Link>
        </div>
        <div className="">
          <form action="">
            <div className="flex items-center border-2 border-r-0 rounded-md">
              <select
                name="categories"
                className="w-40 hidden md:block md:py-2 py-1  px-3 outline-none"
              >
                <option>All Categories</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>

              <input
                type="text"
                name="search"
                className="lg:w-96 md:w-72 w-full md:py-2 py-1 outline-none md:pl-10 pl-5 pr-3"
                placeholder="Search product"
              />
              <button className="bg-blue-700 md:py-2 py-1 text-white md:px-8 px-4 rounded">
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-between items-center gap-5 2xl:gap-8">
          <div className="hidden lg:block">
            {token && user?.email ? (
              <div
                className="relative flex justify-between items-center gap-1 cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <CgProfile className="text-2xl" />
                <span className="text-base">{user?.firstName}</span>
                {isDropdownOpen && (
                  <ul className="flex flex-wrap items-center absolute left-0 top-0 mt-6 z-10 w-48 bg-white text-black shadow-lg py-5">
                    <Link
                      to={"/dashboard"}
                      className="text-base px-4 py-2 w-48 hover:bg-gray-200"
                    >
                      Dashboard
                    </Link>
                    <li
                      onClick={handleLogout}
                      className="text-base px-4 w-48 py-2 hover:bg-gray-200"
                    >
                      Logout
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <Link
                to={"/login"}
                className="flex justify-between items-center gap-1 cursor-pointer"
              >
                <CgProfile className="text-2xl" />
                <span className="text-base">Login</span>
              </Link>
            )}
          </div>
          <div className="hidden lg:block relative cursor-pointer">
            <div className="flex justify-center items-center absolute -top-1 -right-1 bg-[#DD3842] w-5 h-5 rounded-[50%]">
              <span className="text-white text-[12px]">0</span>
            </div>
            <IoIosHeartEmpty className="text-3xl" />
          </div>
          <div onClick={toggleCart} className="relative cursor-pointer">
            <div className="flex justify-center items-center absolute -top-1 -right-1 bg-[#DD3842] w-5 h-5 rounded-[50%]">
              <span className="text-white text-[12px]"> {cartItemsCount}</span>
            </div>

            <BsCart2 className="text-3xl" />
          </div>
          <div className="hidden lg:block">
            <p className="text-[13px] text-[#515D97]">Your Cart</p>
            <p className="mt-[-5px] font-[600]">$0.00</p>
          </div>
        </div>
      </div>
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
    </>
  );
};

export default TopBarSearch;
