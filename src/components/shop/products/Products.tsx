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
  const [selectedOption, setSelectedOption] = useState("default");

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

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-[1240px] py-10">
        <div className="flex justify-between  py-10">
          <p>Showing 1–9 of 12 results</p>
          <div className="flex gap-[6px]">
            <select
              value={selectedOption}
              onChange={handleOptionChange}
              className="w-52 h-8 border-b-[1px]  border-solid font-semibold border-black outline-none "
            >
              <option value="default">Default sorting</option>
              <option value="popularity">Sort by popularity</option>
              <option value="latest">Sort by latest</option>
              <option value="lowToHigh">Sort by price:low to high</option>
              <option value="highToLow">Sort by price:high to low</option>
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
        <div className={`${switchSelected === 'grid' ?'flex flex-wrap justify-between':'flex flex-col gap-10'}`}>
          {products
            .sort((a, b) => {
              if (selectedOption === "popularity") {
                return b.qntSold - a.qntSold;
              }
              if (selectedOption === "latest") {
                return b.manufactureDate - a.manufactureDate;
              }
              if (selectedOption === "lowToHigh") {
                return a.price - b.price;
              }
              if (selectedOption === "highToLow") {
                return b.price - a.price;
              }
              if (selectedOption === "default") {
                return a.name.localeCompare(b.name);
              }
              return 0;
            })
            .map((item) => {
              return (
                <div key={item.id}>
                  {switchSelected === "grid" ? (
                    <div className="w-[387px]">
                      <CardProducts
                        img300x300={item.img300x300}
                        name={item.name}
                        price={item.price}
                        withoutDiscont={item.withoutDiscont}
                      />
                    </div>
                  ) : (
                    <div>
                      <CardProductsHorizontal
                        brief={item.brief}
                        img300x300={item.img300x300}
                        name={item.name}
                        price={item.price}
                        withoutDiscont={item.withoutDiscont}
                      />
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;
