import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar px-5 2xl:px-60 border-b-[1px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>Shop</li>
            <li>
              <a>Pages</a>
            </li>
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>Blogs</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <div className="flex justify-center items-center gap-3 cursor-pointer ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <a className="text-base">Browse All Categories</a>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-sm font-medium">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <a>Shop</a>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
          <li>
            <a>Pages</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-fadeInOut"
          >
            <path
              d="M3.08737 14.2867L1.48898 12.6883C0.837006 12.0363 0.837006 10.9637 1.48898 10.3117L3.08737 8.71331C3.36078 8.4399 3.58161 7.90359 3.58161 7.52502V5.26411C3.58161 4.33872 4.33875 3.58161 5.26414 3.58161H7.52502C7.90359 3.58161 8.4399 3.36081 8.71331 3.0874L10.3117 1.48898C10.9637 0.837006 12.0363 0.837006 12.6883 1.48898L14.2867 3.0874C14.5601 3.36081 15.0964 3.58161 15.4749 3.58161H17.7359C18.6612 3.58161 19.4184 4.33872 19.4184 5.26411V7.52502C19.4184 7.90359 19.6392 8.4399 19.9126 8.71331L21.511 10.3117C22.163 10.9637 22.163 12.0363 21.511 12.6883L19.9126 14.2867C19.6392 14.5601 19.4184 15.0964 19.4184 15.475V17.7358C19.4184 18.6612 18.6612 19.4184 17.7359 19.4184H15.4749C15.0964 19.4184 14.5601 19.6392 14.2867 19.9126L12.6883 21.511C12.0363 22.163 10.9637 22.163 10.3117 21.511L8.71331 19.9126C8.4399 19.6392 7.90359 19.4184 7.52502 19.4184H5.26414C4.33875 19.4184 3.58161 18.6612 3.58161 17.7358V15.475C3.58161 15.0859 3.36078 14.5496 3.08737 14.2867Z"
              fill="#DD3842"
            ></path>
            <path
              d="M3.08737 14.2867L1.48898 12.6883C0.837006 12.0363 0.837006 10.9637 1.48898 10.3117L3.08737 8.71331C3.36078 8.4399 3.58161 7.90359 3.58161 7.52502V5.26411C3.58161 4.33872 4.33875 3.58161 5.26414 3.58161H7.52502C7.90359 3.58161 8.4399 3.36081 8.71331 3.0874L10.3117 1.48898C10.9637 0.837006 12.0363 0.837006 12.6883 1.48898L14.2867 3.0874C14.5601 3.36081 15.0964 3.58161 15.4749 3.58161H17.7359C18.6612 3.58161 19.4184 4.33872 19.4184 5.26411V7.52502C19.4184 7.90359 19.6392 8.4399 19.9126 8.71331L21.511 10.3117C22.163 10.9637 22.163 12.0363 21.511 12.6883L19.9126 14.2867C19.6392 14.5601 19.4184 15.0964 19.4184 15.475V17.7358C19.4184 18.6612 18.6612 19.4184 17.7359 19.4184H15.4749C15.0964 19.4184 14.5601 19.6392 14.2867 19.9126L12.6883 21.511C12.0363 22.163 10.9637 22.163 10.3117 21.511L8.71331 19.9126C8.4399 19.6392 7.90359 19.4184 7.52502 19.4184H5.26414C4.33875 19.4184 3.58161 18.6612 3.58161 17.7358V15.475C3.58161 15.0859 3.36078 14.5496 3.08737 14.2867Z"
              fill="#DD3842"
              stroke="#DD3842"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M8 15.0909L15.0909 8"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M14.4937 14.5H14.5043"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M8.58442 8.59091H8.59503"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <div>
          <p className="ml-2 font-[600] text-sm leading-3 whitespace-nowrap cursor-pointer hover:text-blue-700">
            Sale $20 Off Your First Order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
