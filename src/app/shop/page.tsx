import Products from "@/components/shop/products/Products";
import { Suspense } from "react";

const Shop = () => {
  return (
    <div>
      <Suspense fallback={<div>Carregando produtos...</div>}>
        <Products />
      </Suspense>
    </div>
  );
};

export default Shop;
