import React from "react";
import "../styles/Category.css";

const Category = () => {
  return (
    <div>
      <h1 className="sidebar-title">Category</h1>
      <div
        className="lg:flex lg:flex-row lg:justify-around
       gap-3 md:flex md:flex-col sm:justify-around"
      >
        <label className="flex gap-1 items-center">
          <input value="" type="radio" name="test" />
          <span className="">All</span>
        </label>
        <label className="flex gap-1">
          <input
            value="electronics"
            title="Electronics"
            type="radio"
            name="test"
          />
          <span className="">Electronics</span>
        </label>
        <label className="flex gap-1">
          <input
            value="appliances"
            title="Appliances"
            type="radio"
            name="test"
          />
          <span className="">Appliances</span>
        </label>
        <label className="flex gap-1">
          <input value="sports" title="Sports" type="radio" name="test" />
          <span className="">Sports</span>
        </label>
        <label className="flex gap-1">
          <input value="fashion" title="Fashion" type="radio" name="test" />
          <span className="">Fashion</span>
        </label>
      </div>
    </div>
  );
};

export default Category;
