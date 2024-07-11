import React from "react";
import Category from "./Category";
import Price from "./Price";
import Brand from "./Brand";

const Navbar = () => {
  return (
    <div className=" text-lg font-medium bg-gray-400">
      <section className="flex flex-col p-4 justify-around">
        <Category />
        <hr />
        <Price />
        <hr />
        <Brand />
      </section>
    </div>
  );
};

export default Navbar;
