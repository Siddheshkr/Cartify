import React from "react";
import cancel from "../assets/cancel.png";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="grid place-items-center w-full lg:h-screen h-full  ">
      <div className="max-w-5xl items-center rounded flex flex-col mt-20">
        <span className="text-red-600 text-2xl sm:text-5xl">
          Something went wrong!!
        </span>
        <span className="text-red-400 text-center mt-5 sm:text-2xl font-bold">
          Please retry after sometime
        </span>
        <div className="flex justify-end items-center mx-auto  w-96">
          <img src={cancel} alt="" />
        </div>
        <div className="my-10 mx-auto">
          <Link to="/" className="underline tex-xl underline-offset-4">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
