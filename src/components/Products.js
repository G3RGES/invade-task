import React from "react";

// import data from "../data.json";
// import Product from "./Product";

const Products = ({ result }) => {
  return (
    <div>
      {/* {data.map((item) => (
        <Product
          key={item.id}
          brand={item.brand}
          name={item.name}
          price={item.price}
          category={item.category}
        />
      ))} */}
      <section className="">{result}</section>
    </div>
  );
};

export default Products;
