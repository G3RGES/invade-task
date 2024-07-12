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
          value={"Electronics"}
          title="Electronics"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value={"Appliances"}
          title="Appliances"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value={"Sports"}
          title="Sports"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value={"Fashion"}
          title="Fashion"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
