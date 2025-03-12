"use client";
import NavDescriptionReview from "@/components/product/NavDescriptionReview";
import Product from "@/components/product/Product";
import RelatedProducts from "@/components/product/RelatedProducts";
import { useParams } from "next/navigation";

const ProductDetail = () => {
  const { id } = useParams();

  
  return (
    <div>
      <div>{id && <Product id={id as string} />}</div>
      <div>{id && <NavDescriptionReview id={id as string} />}</div>
      <div><RelatedProducts id={id as string}/></div>
    </div>
  );
};

export default ProductDetail;
