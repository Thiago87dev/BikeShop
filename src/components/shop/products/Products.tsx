"use client";
import React, { useEffect, useState } from "react";
import CardProducts from "./CardProducts";
import { ProductProp } from "@/types";
import { PiGridNineFill } from "react-icons/pi";
import { PiListBulletsBold } from "react-icons/pi";
import CardProductsHorizontal from "./CardProductsHorizontal";

const Products = () => {
  const [products, setProducts] = useState<ProductProp[]>([]);
  const [switchSelected, setSwitchSelected] = useState("grid");

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
    <div className="flex justify-center px-4">
      <div className="w-full max-w-[1240px] py-10">
        <div className="flex justify-between  py-10">
          <p>Showing 1–9 of 12 results</p>
          <div className="flex gap-[6px]">
            <select className="w-48 h-8 border-b-[1px]  border-solid font-bold border-black outline-none ">
              <option>teste</option>
              <option>teste</option>
              <option>teste</option>
            </select>
            <div
              onClick={() => setSwitchSelected("grid")}
              className={`flex items-center justify-center ${
                switchSelected === "grid"
                  ? "border-2 border-solid border-black"
                  : "border-[1px] border-solid border-gray-400 hover:border-black"
              }  cursor-pointer w-8 h-8`}
            >
              <PiGridNineFill size={20} />
            </div>
            <div
              onClick={() => setSwitchSelected("list")}
              className={`flex items-center justify-center ${
                switchSelected === "list"
                  ? "border-2 border-solid border-black"
                  : "border-[1px] border-solid border-gray-400 hover:border-black"
              }  cursor-pointer w-8 h-8`}
            >
              <PiListBulletsBold size={20} />
            </div>
          </div>
        </div>
        {switchSelected === "grid" ? (
          <div className="flex flex-wrap justify-between">
            {products.map((item) => (
              <div className="w-[387px]" key={item.id}>
                <CardProducts
                  img300x300={item.img300x300}
                  name={item.name}
                  price={item.price}
                  withoutDiscont={item.withoutDiscont}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            {products.map((item) => (
              <div key={item.id}>
                <CardProductsHorizontal
                  brief={item.brief}
                  img300x300={item.img300x300}
                  name={item.name}
                  price={item.price}
                  withoutDiscont={item.withoutDiscont}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
