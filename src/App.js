import { useState } from "react";

// components
import Navbar from "./components/Navbar";
import Products from "./components/Products";

// data
import products from "./data.json";
import Product from "./components/Product";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //* input filter
  // const [query, setQuery] = useState("");

  // -------------input filter
  // const handleInputChange = (e) => {
  //   setQuery(e.target.value);
  // };

  // const filteredItems = products.filter((product) =>
  //   product.name.toLowerCase().indexOf(query.toLowerCase() !== -1)
  // );

  // -------------button filter
  // const handleClick = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  // -------------radio filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredData = (products, selected) => {
    // filtering input items
    // if (query) {
    //   filteredProducts = filteredItems;
    // }

    let filteredProducts = products;
    // selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, price, brand }) =>
          category === selected || price === selected || brand || selected
      );
    }

    return filteredProducts.map(({ name, price, category, brand, id }) => (
      <Product
        key={id}
        brand={brand}
        name={name}
        price={price}
        category={category}
      />
    ));
  };

  const result = filteredData(products, selectedCategory);

  return (
    <>
      <Navbar handleChange={handleChange} />
      <Products result={result} />
    </>
  );
}

export default App;
