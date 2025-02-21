"use client";
import { useEffect, useState } from "react";
import { ProductProp } from "@/types";
import ProductCard from "./ProductCard";

const OurProducts = () => {
  const [products, setProducts] = useState<ProductProp[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="relative  bg-[url('/img/tireBike.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative text-red-500 z-10">
        {products[0] && (
          <ProductCard
            img={products[0].img}
            name={products[0].name}
            price={products[0].price}
            withoutDiscont={products[0].withoutDiscont}
          />
        )}
      </div>
    </div>
  );
};

export default OurProducts;
