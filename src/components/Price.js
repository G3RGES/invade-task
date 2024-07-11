import React from "react";
import "../styles/Price.css";

const Price = () => {
  return (
    <div className="">
      <h2 className="price-title">Price</h2>
      <div className="lg:flex lg:flex-row gap-3 justify-around md:flex md:flex-col ">
        <label className="flex gap-1 items-center">
          <input value="" type="radio" name="test2" />
          <span className="">All</span>
        </label>
        <label className="flex gap-1 items-center">
          <input value="" type="radio" name="test2" />
          <span className="">$0 - $100</span>
        </label>
        <label className="flex gap-1 items-center">
          <input value="" type="radio" name="test2" />
          <span className="">$100 - $200</span>
        </label>
        <label className="flex gap-1 items-center">
          <input value="" type="radio" name="test2" />
          <span className="">$200 - $300</span>
        </label>
        <label className="flex gap-1 items-center">
          <input value="" type="radio" name="test2" />
          <span className="">$300 - $400</span>
        </label>
        <label className="flex gap-1 items-center">
          <input value="" type="radio" name="test2" />
          <span className="">Over $500</span>
        </label>
      </div>
    </div>
  );
};

export default Price;
