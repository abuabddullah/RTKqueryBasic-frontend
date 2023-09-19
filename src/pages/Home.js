import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./../App.css"

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
    <header>
      <nav>
        <ul className="dGrid textCenter">
          <li className="activeToggle">All</li>
          <li>2 star</li>
          <li>3 star</li>
          <li>4 star</li>
          <li>5 star</li>
        </ul>
      </nav>
    </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {products.map((product) => (
          <ProductCard key={product.model} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
