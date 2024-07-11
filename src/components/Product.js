import React from "react";

const Product = ({ name, price, category, brand }) => {
  //* COULD BE MADE INTO A GRID

  return (
    <div className="flex flex-row items-center gap-8 px-10 border border-gray-200">
      <p className="text-xl font-medium w-1/2">{name}</p>
      <div className="flex flex-row items-center justify-between gap-3">
        <div className="w-1/2 py-3 px-10">
          <p className="text-xl font-medium">{category}</p>
          <p className="text-xl font-medium">{brand}</p>
        </div>
        <p className="text-lg tracking-wide">${price}</p>
      </div>
    </div>
  );
};

export default Product;
