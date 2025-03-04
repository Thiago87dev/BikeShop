"use client";
import React, { useEffect, useState } from "react";
import CardProducts from "./CardProducts";
import { ProductProp } from "@/types";

const Products = () => {
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
    <div className="flex justify-center">
      <div className="w-full max-w-[1240px] ">
       <div className="grid grid-cols-3">
        {products.map((item) => (
          <div className="w-[387px]" key={item.id}>
            <CardProducts img300x300={item.img300x300} name={item.name} price={item.price}/>
          </div>
        ))}
       </div>
      </div>
    </div>
  );
};

export default Products;
