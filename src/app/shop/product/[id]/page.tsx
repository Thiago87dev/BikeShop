'use client'
import Product from "@/components/product/Product";
import { useParams } from "next/navigation";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div>
      {id && (

      <Product id={id as string}/>
      )}
    </div>
  );
};

export default ProductDetail;
