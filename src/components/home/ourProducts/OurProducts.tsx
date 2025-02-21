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
      <div className="relative grid grid-cols-4 text-black z-10 w-full max-w-[1160px] mx-auto gap-y-8">
        {products
          .filter((item) => item.img300x300)
          .map((item) => (
            <div key={item.id}>
              <ProductCard
                name={item.name}
                price={item.price}
                withoutDiscont={item.withoutDiscont}
                img300x300={item.img300x300}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default OurProducts;
