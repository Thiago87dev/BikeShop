import React, { useEffect, useState } from "react";
import { ProductDetailProps, ProductProp } from "@/types";
import Image from "next/image";

interface ProductIdProp {
  id: string;
}

const Product = ({ id }: ProductIdProp) => {
  const idNumber = Number(id);
  const [product, setProduct] = useState<ProductDetailProps | null>(null);
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
  return (
    <div>
      {product?.img && (
        <Image
          alt="bicicleta"
          src={product?.img}
          width={565}
          height={565}
        />
      )}
      <h1>{product?.name}</h1>
      <p>{product?.price}</p>
      <p>{product?.brief}</p>
      <p>{product?.category}</p>
    </div>
  );
};

export default Product;
