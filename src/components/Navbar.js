import React from "react";
import Category from "./Category";
import Price from "./Price";
import Brand from "./Brand";

const Navbar = ({ handleChange }) => {
  return (
    <div className=" text-lg font-medium bg-blue-500">
      <section className="flex flex-col p-4 justify-around">
        <Category handleChange={handleChange} />
        <hr />
        <Price handleChange={handleChange} />
        <hr />
        <Brand handleChange={handleChange} />
      </section>
    </div>
  );
};

export default Navbar;
