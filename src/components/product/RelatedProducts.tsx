import { useEffect, useState } from "react";
import { ProductProp, ProductCardProps } from "@/types";
import CardProducts from "../shop/products/CardProducts";

interface ProductIdProp {
  id: string;
}

interface RelatedProductsProps {
  category: string;
}

const RelatedProducts = ({ id }: ProductIdProp) => {
  const idNumber = Number(id);
  const [product, setProduct] = useState<RelatedProductsProps | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<
    ProductCardProps[] | null
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      const respose = await fetch("/data/products.json");
      const data: ProductProp[] = await respose.json();
      const foundProduct = data.find((product) => product.id === idNumber);
      if (foundProduct) setProduct(foundProduct);
    };
    fetchData();
  }, [idNumber]);

  const productCategory = product?.category;

  useEffect(() => {
    const fetchData = async () => {
      const respose = await fetch("/data/products.json");
      const data: ProductProp[] = await respose.json();
      const foundProduct = data.filter(
        (product) =>
          product.category === productCategory && product.id !== idNumber
      );
      if (foundProduct) setRelatedProducts(foundProduct);
    };
    fetchData();
  }, [productCategory, idNumber]);

  return (
    <div className="flex flex-col items-center bg-[#f7f7f7] ">
      <div className="bg-white flex flex-col gap-8 w-full max-w-[1240px] px-4 mb-20">
        <h2 className="font-bold text-4xl">Related Products</h2>
        <div className="flex gap-10 mb-10">
          {relatedProducts?.map((item) => (
            <div key={item.id}>
              <div className="w-[387px]">
                <CardProducts
                  id={item.id}
                  img300x300={item.img300x300}
                  name={item.name}
                  price={item.price}
                  withoutDiscont={item.withoutDiscont}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
