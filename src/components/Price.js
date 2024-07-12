import React from "react";
import "../styles/Price.css";
import Input from "./Input";

const Price = ({ handleChange }) => {
  return (
    <div className="">
      <h2 className="price-title">Price</h2>
      <div className="lg:flex lg:flex-row gap-3 justify-around md:flex md:flex-col ">
        <label className="flex gap-1 items-center">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="">All</span>
        </label>
        <Input
          handleChange={handleChange}
          value={100}
          title="$0 - $100"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={200}
          title="$100 - $200"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={300}
          title="$200 - $300"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={400}
          title="$300 - $400"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={500}
          title="Over $500"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Price;
