"use client";
import React, { useEffect, useState } from "react";
import CardProducts from "./CardProducts";
import { ProductProp } from "@/types";
import { PiGridNineFill } from "react-icons/pi";
import { PiListBulletsBold } from "react-icons/pi";
import CardProductsHorizontal from "./CardProductsHorizontal";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Products = () => {
  const [products, setProducts] = useState<ProductProp[]>([]);
  const [switchSelected, setSwitchSelected] = useState("grid");
  const [selectedOption, setSelectedOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

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

  const sortedProducts = [...products].sort((a, b) => {
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
  });

  // pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-[1240px] py-10">
        <div className="flex justify-between  py-10">
          <p className="text-lg">
            Showing {(currentPage - 1) * itemsPerPage + 1}-
            {Math.min(currentPage * itemsPerPage, sortedProducts.length)} of{" "}
            {sortedProducts.length} results
          </p>
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
        <div
          className={`${
            switchSelected === "grid"
              ? "flex flex-wrap justify-between"
              : "flex flex-col gap-10"
          }`}
        >
          {paginatedProducts.map((item) => {
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
        {/* pagination */}
        <div className="mt-8 flex gap-2 text-lg">
          <button
            onClick={() => {
              setCurrentPage((prev) => Math.max(prev - 1, 1));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`${
              currentPage === 1
                ? "hidden"
                : "px-4 py-2  rounded border-2 border-transparent hover:border-2 hover:border-red-500"
            }`}
          >
            <HiOutlineArrowNarrowLeft />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-disabled={currentPage === index + 1}
              style={{
                pointerEvents: currentPage === index + 1 ? "none" : "auto",
              }}
              className={`px-4 py-2 rounded border-2 border-transparent hover:border-2 hover:border-red-500 ${
                currentPage === index + 1 ? "bg-red-600 text-white" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => {
              setCurrentPage((prev) => Math.min(prev + 1, totalPages));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`${
              currentPage === totalPages
                ? "hidden"
                : "px-4 py-2 rounded border-2 border-transparent hover:border-2 hover:border-red-500"
            }`}
          >
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
