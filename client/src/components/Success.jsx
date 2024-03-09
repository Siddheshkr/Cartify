import React from "react";
import success from "../assets/success.png";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div
      className="grid place-items-center w-full lg:h-screen h-full
     font-raleway "
    >
      <div className="max-w-5xl items-center rounded flex flex-col mt-24">
        <span className="text-green-600 text-2xl sm:text-5xl">
          Payment successful
        </span>
        <span className="text-yellow-600 text-center mt-5  sm:text-2xl font-bold">
          Your order is placed
        </span>
        <div className="flex justify-end items-center mx-auto my-10  w-60">
          <img src={success} alt="" />
        </div>
        <div className="my-10 mx-auto">
          <Link to="/" className="underline text-xl underline-offset-4">
            Back to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
