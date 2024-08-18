import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoIosHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/reducers/authReducer";
import { clearCart } from "../../../redux/reducers/cartReducer";
import Cart from "../../cart";
import Logo from "/assets/logo.png";

const TopBarSearch = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.jwt);
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const items = useSelector((state) => state.categories.items);
  const products = useSelector((state) => state.products.items);
  console.log(selectedCategory);
  const handleCartClick = () => {
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
    dispatch(clearCart());
    navigate("/login");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const {
      attributes: {
        title,
        category: {
          data: {
            attributes: { title: catTitle },
          },
        },
      },
    } = product;
    return (
      title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory ? catTitle === selectedCategory : false)
    );
  });

  return (
    <>
      <div className="flex justify-between relative px-5 2xl:px-60 items-center border-b-[1px] gap-5 py-5">
        <div>
          <Link to={"/"}>
            {" "}
            <img src={Logo} alt="" className="md:w-36 w-24" />
          </Link>
        </div>
        <div>
          <form action="">
            <div className="flex items-center border-2 border-r-0 rounded-md">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                name="categories"
                className="w-40 hidden md:block md:py-2 py-1  px-3 outline-none"
              >
                <option value="">All Categories</option>
                {items.length > 0 &&
                  items.map((cat) => {
                    const {
                      id,
                      attributes: { title },
                    } = cat;
                    return (
                      <option key={id} value={title}>
                        {title}
                      </option>
                    );
                  })}
              </select>

              <input
                type="text"
                name="search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="lg:w-96 md:w-72 w-full md:py-2 py-1 outline-none md:pl-10 pl-5 pr-3"
                placeholder="Search product"
              />
              <button className="bg-blue-700 md:py-2 py-1 text-white md:px-8 px-4 rounded">
                Search
              </button>
            </div>
          </form>
          <div className="2xl:w-[35%] xl:w-[51%] lg:w-[56%] max-md:w-full max-md:w-[80%]: max-md:left-0  z-50 absolute shadow-lg bg-[#F1F5F6]">
            {filteredProducts.length > 0 &&
              filteredProducts.map((product) => {
                const {
                  id,
                  attributes: {
                    title,

                    sellingPrice,

                    images: {
                      data: {
                        attributes: { alternativeText, url },
                      },
                    },
                  },
                } = product;

                return (
                  <div
                    key={id}
                    className="flex items-center justify-between p-4 border-b border-gray-200"
                  >
                    <img
                      src={url}
                      alt={alternativeText}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="ml-4 flex-1">
                      <h4 className="text-lg font-medium">{title}</h4>
                      <div className="flex items-center">
                        <span className="text-red-600 text-lg font-semibold">
                          {sellingPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
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
          <div onClick={handleCartClick} className="relative cursor-pointer">
            <div className="flex justify-center items-center absolute -top-1 -right-1 bg-[#DD3842] w-5 h-5 rounded-[50%]">
              <span className="text-white text-[12px]"> {totalQuantity}</span>
            </div>

            <BsCart2 className="text-3xl" />
          </div>
          <div className="hidden lg:block">
            <p className="text-[13px] text-[#515D97]">Your Cart</p>
            <p className="mt-[-5px] font-[600]">${totalPrice}</p>
          </div>
        </div>
      </div>
      <Cart isOpen={isCartOpen} onClose={handleCartClick} />
    </>
  );
};

export default TopBarSearch;
