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
    <div className="relative flex flex-col bg-[url('/img/products/tireBike.jpg')] bg-cover bg-center ">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative flex flex-col items-center mt-20 mb-10 text-white">
        <h2 className="text-red-500 font-bold text-xl">Our Products</h2>
        <h1 className="text-center text-4xl font-bold w-full sm:w-[360px] px-4 sm:px-0 pt-3 pb-5">
          Best seller products this week
        </h1>
        <p className="w-full sm:w-[360px] px-4 sm:px-0 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
      </div>
      <div className="relative flex flex-wrap justify-center text-black z-10 w-full max-w-[1160px] mx-auto gap-8 px-4 lg:px-0">
        {products
          .filter((item) => item.img300x300)
          .sort((a, b) => b.qntSold - a.qntSold)
          .map((item) => (
            <div key={item.id}>
              <ProductCard
                name={item.name}
                price={item.price}
                withoutDiscont={item.withoutDiscont}
                img300x300={item.img300x300}
                qntSold={item.qntSold}
              />
            </div>
          ))}
      </div>
      <div className="flex justify-center pt-12">
        <button className="relative bg-red-500 text-white font-semibold uppercase w-max px-8 mb-16 py-5 hover:bg-red-700 transition-colors duration-200">
          Show More
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
