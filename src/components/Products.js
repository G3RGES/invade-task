import React, { useEffect, useState } from "react";

import data from "../data.json";
import Product from "./Product";

const Products = () => {
  //* FILTER FUNCTION HERE

  return (
    <div>
      {data.map((item) => (
        <Product
          key={item.id}
          brand={item.brand}
          name={item.name}
          price={item.price}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default Products;
