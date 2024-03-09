import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiMiniHome } from "react-icons/hi2";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.Items);

  return (
    <>
      <div className="navbar bg-white mb-96 shadow-lg shadow-neutral-300 z-20 fixed ">
        <div className="flex-1 gap-96 ">
          <Link
            to="/"
            className="btn px-0  sm:px-3  shadow-none border-none  text-lg sm:text-2xl font-bold active:border-none"
          >
            Shopkart🛍️
          </Link>
        </div>
        <SearchBar />
        <div className="flex-none  sm:gap-3  ">
          <Link to="/">
            <h1 className=" btn p-0 sm:ml-3   shadow-none border-none active:border-none ">
              <HiMiniHome className=" sm:w-8 sm:h-8 w-7 h-7" />
            </h1>
          </Link>
          <div className="dropdown dropdown-end">
            <Link to="/Cart">
              <div
                tabIndex={0}
                role="button"
                className="btn pr-1 p-0 shadow-none border-none active:border-none  rounded-full  md:mr-5  "
              >
                <div className="indicator ">
                  <FaCartShopping className="   sm:w-7 sm:h-7 w-6 h-6" />
                  <span className="badge badge-sm indicator-item text-white bg-red-500 border-0">
                    {cartItems.length}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
