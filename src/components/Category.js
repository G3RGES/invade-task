import React from "react";
import "../styles/Category.css";
import Input from "./Input";

const Category = ({ handleChange }) => {
  return (
    <div>
      <h1 className="sidebar-title">Category</h1>
      <div
        className="lg:flex lg:flex-row lg:justify-around
       gap-3 md:flex md:flex-col sm:justify-around"
      >
        <label className="flex gap-1 items-center">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="">All</span>
        </label>

        <Input
          handleChange={handleChange}
          value="electronics"
          title="Electronics"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="appliances"
          title="Appliances"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sports"
          title="Sports"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="fashion"
          title="Fashion"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
