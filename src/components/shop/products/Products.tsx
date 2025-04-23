"use client";
import { useEffect, useState } from "react";
import { ProductProp } from "@/types";
import { PiGridNineFill } from "react-icons/pi";
import { PiListBulletsBold } from "react-icons/pi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import CardProducts from "./CardProducts";
import CardProductsHorizontal from "./CardProductsHorizontal";
import { useRouter, useSearchParams } from "next/navigation";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ShopBasket from "@/components/ShopBasket";

const Products = () => {
  const bikesInCart = useSelector((state: RootState) => state.Cart.bikes);

  const [products, setProducts] = useState<ProductProp[]>([]);
  const [switchSelected, setSwitchSelected] = useState("grid");
  const [selectedSort, setSelectedSort] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("Shop");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("c");

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

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
    const newUrl = "/shop";
    router.replace(newUrl);
  }, [categoryFromUrl, router]);

  const selectedCategoriesProducts = [...products].filter((item) => {
    if (selectedCategory === "Mountain") {
      return item.category === "Mountain";
    }
    if (selectedCategory === "Gravel") {
      return item.category === "Gravel";
    }
    if (selectedCategory === "Road") {
      return item.category === "Road";
    }
    if (selectedCategory === "City & Hybrid") {
      return item.category === "City & Hybrid";
    }
    if (selectedCategory === "Kids") {
      return item.category === "Kids";
    }
    if (selectedCategory === "Shop") {
      return item.id;
    }
  });

  const sortedProducts = selectedCategoriesProducts.sort((a, b) => {
    if (selectedSort === "popularity") {
      return b.qntSold - a.qntSold;
    }
    if (selectedSort === "latest") {
      return b.manufactureDate - a.manufactureDate;
    }
    if (selectedSort === "lowToHigh") {
      return a.price - b.price;
    }
    if (selectedSort === "highToLow") {
      return b.price - a.price;
    }
    if (selectedSort === "default") {
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

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSort(e.target.value);
    setCurrentPage(1);
  };

  const handleCategorychange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center bg-[#3c3638]">
        <div className="flex flex-col items-center justify-center gap-4 h-[200px] text-white">
          <h1 className="text-[50px] font-bold">{selectedCategory}</h1>
          {selectedCategory === "Shop" ? (
            <p>
              <Link href={"/"}>
                <span className="underline">Home</span>
              </Link>{" "}
              / Shop
            </p>
          ) : (
            <p>
              <Link href={"/"}>
                <span className="underline">Home</span>
              </Link>{" "}
              /{" "}
              <Link onClick={() => setSelectedCategory("Shop")} href={"/shop"}>
                <span className="underline">Shop</span>
              </Link>{" "}
              / {selectedCategory}
            </p>
          )}
        </div>
      </div>
      {bikesInCart.length > 0 && (
        <div className="relative z-50">
          <ShopBasket />
        </div>
      )}
      <div className="flex justify-center px-4">
        <div className="w-full max-w-[1240px] py-4 md:py-10">
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between py-10">
            {sortedProducts.length <= 0 ? (
              <p className="text-lg">Showing 0 of 0 results</p>
            ) : (
              <p className="text-lg">
                Showing {(currentPage - 1) * itemsPerPage + 1}-
                {Math.min(currentPage * itemsPerPage, sortedProducts.length)} of{" "}
                {sortedProducts.length} results
              </p>
            )}

            <div className="flex flex-col md:flex-row  gap-[6px]">
              <select
                value={selectedCategory}
                onChange={handleCategorychange}
                className="w-52 h-8 border-b border-r border-solid font-semibold border-black outline-none "
              >
                <option value="Shop">All categories</option>
                <option value="Mountain">Mountain bike</option>
                <option value="Gravel">Gravel bikes</option>
                <option value="Road">Road bike</option>
                <option value="City & Hybrid">City & Hybrid</option>
                <option value="Kids">Kids’ bikes</option>
              </select>
              <select
                value={selectedSort}
                onChange={handleOrderChange}
                className="w-52 h-8 border-b border-r  border-solid font-semibold border-black outline-none "
              >
                <option value="default">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="latest">Sort by latest</option>
                <option value="lowToHigh">Sort by price:low to high</option>
                <option value="highToLow">Sort by price:high to low</option>
              </select>
              <div className="hidden sm:flex gap-1">
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
          </div>
          <div
            className={`${
              switchSelected === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-11"
                : "flex flex-col gap-10"
            }`}
          >
            {paginatedProducts.map((item) => {
              return (
                <div key={item.id}>
                  {switchSelected === "grid" ? (
                    <div className="w-full">
                      <CardProducts
                        img300x300={item.img300x300}
                        name={item.name}
                        price={item.price}
                        withoutDiscont={item.withoutDiscont}
                        id={item.id}
                      />
                    </div>
                  ) : (
                    <div>
                      <div className="hidden sm:flex">
                        <CardProductsHorizontal
                          brief={item.brief}
                          img300x300={item.img300x300}
                          name={item.name}
                          price={item.price}
                          withoutDiscont={item.withoutDiscont}
                          id={item.id}
                        />
                      </div>
                      <div className="flex sm:hidden w-full">
                        <CardProducts
                          img300x300={item.img300x300}
                          name={item.name}
                          price={item.price}
                          withoutDiscont={item.withoutDiscont}
                          id={item.id}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            {sortedProducts.length <= 0 && (
              <h2 className="text-4xl font-bold mx-auto py-20">
                Sorry, but this category does not have any items.
              </h2>
            )}
          </div>
          {/* pagination */}
          <div
            className={`${
              sortedProducts.length <= 0 ? "hidden" : "mt-8 flex gap-2 text-lg"
            }`}
          >
            <button
              onClick={() => {
                setCurrentPage((prev) => Math.max(prev - 1, 1));
                window.scrollTo({ top: 300, behavior: "instant" });
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
                  window.scrollTo({ top: 300, behavior: "instant" });
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
                window.scrollTo({ top: 300, behavior: "instant" });
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
    </div>
  );
};

export default Products;
