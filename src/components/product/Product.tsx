import React, { useEffect, useState } from "react";
import { ProductDetailProps, ProductProp } from "@/types";
import ZoomImage from "./ZoomImage";
import Link from "next/link";

interface ProductIdProp {
  id: string;
}

const Product = ({ id }: ProductIdProp) => {
  const idNumber = Number(id);
  const [product, setProduct] = useState<ProductDetailProps | null>(null);
  const [qntCart, setQntCart] = useState(1);

  const handleQntCart = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (!isNaN(newValue)) {
      setQntCart(newValue);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/data/products.json`);
        const data: ProductProp[] = await response.json();
        const foundProduct = data.find((product) => product.id === idNumber);
        if (foundProduct) setProduct(foundProduct);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [idNumber]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-[#f7f7f7] flex flex-col ">
      {product?.category && (
        <p className="w-full max-w-[1240px] mx-auto pt-16 pb-4">
          <Link href={"/"}>Home</Link> / <Link href={"/shop"}>Shop</Link> /{" "}
          <Link href={`/shop?c=${encodeURIComponent(product.category)}`}>
            {product.category}
          </Link>{" "}
          / {product.name}
        </p>
      )}
      <div className="flex items-center gap-10 mx-auto bg-white w-full max-w-[1240px] p-6">
        <div className="w-[565.4px]">
          <div>{product?.img && <ZoomImage image={product.img} />}</div>
        </div>
        <div className="flex flex-col gap-8 w-[45%]">
          <h1 className="text-5xl font-bold">{product?.name}</h1>
          <p className="text-2xl">${product?.price}.00</p>
          <p className="text-lg">{product?.brief}</p>
          <div className="flex gap-2">
            <input
              className="w-16 border border-solid text-lg border-gray-400 py-1 pl-4 pr-2"
              type="number"
              value={qntCart}
              min={1}
              onChange={handleQntCart}
            />
            <button className="bg-red-600 text-white py-2 px-4 font-semibold hover:bg-red-700 transition-colors duration-200 uppercase">
              add to cart
            </button>
          </div>
          <p className="text-sm ">
            Category:{" "}
            {product?.category && (
              <span className="underline">
                <Link href={`/shop?c=${encodeURIComponent(product.category)}`}>
                  {product.category}
                </Link>
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
