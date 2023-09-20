import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./../App.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isSlected, setIsSelected] = useState(false);
  const [selectedKey, setSelectedKey] = useState("");

  const style4selected = {
    backgroundColor: "#85a5fc",
    color: "#fff",
  };

  const handleSelected = (keyValue) => {
    if (keyValue === selectedKey) {
      setIsSelected(false);
      setSelectedKey("");
    } else {
      setIsSelected(true);
      setSelectedKey(keyValue);
    }
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  let products2Show = products;
  if (isSlected) {
    if (selectedKey === "AMD") {
      products2Show = products.filter((product) => product.brand === "AMD");
    } else if (selectedKey === "Intel") {
      products2Show = products.filter((product) => product.brand === "Intel");
    } else if (selectedKey === "ALL") {
      products2Show = products;
    }
  }

  return (
    <>
      <header>
        <nav>
          <ul className="dGrid textCenter">
            <li
              style={isSlected && selectedKey === "ALL" ? style4selected : {}}
              onClick={() => handleSelected("ALL")}
            >
              ALL
            </li>
            <li
              style={isSlected && selectedKey === "AMD" ? style4selected : {}}
              onClick={() => handleSelected("AMD")}
            >
              AMD
            </li>
            <li
              style={isSlected && selectedKey === "Intel" ? style4selected : {}}
              onClick={() => handleSelected("Intel")}
            >
              Intel
            </li>
          </ul>
        </nav>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {products2Show.map((product) => (
          <ProductCard key={product.model} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
