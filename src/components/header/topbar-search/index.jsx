import React from "react";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "/assets/logo.png";

const TopBarSearch = () => {
  return (
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
          <div className="flex justify-between items-center gap-1 cursor-pointer">
            <CgProfile className="text-2xl" />
            <Link to={"/login"}>
              <span className="text-base">Login</span>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block relative cursor-pointer">
          <div className="flex justify-center items-center absolute -top-1 -right-1 bg-[#DD3842] w-5 h-5 rounded-[50%]">
            <span className="text-white text-[12px]">0</span>
          </div>
          <IoIosHeartEmpty className="text-3xl" />
        </div>
        <div className="relative cursor-pointer">
          <div className="flex justify-center items-center absolute -top-1 -right-1 bg-[#DD3842] w-5 h-5 rounded-[50%]">
            <span className="text-white text-[12px]">0</span>
          </div>

          <BsCart2 className="text-3xl" />
        </div>
        <div className="hidden lg:block">
          <p className="text-[13px] text-[#515D97]">Your Cart</p>
          <p className="mt-[-5px] font-[600]">$0.00</p>
        </div>
      </div>
    </div>
  );
};

export default TopBarSearch;
