"use client";
import CheckoutMain from "@/components/checkout/CheckoutMain";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const bikesInCart = useSelector((state: RootState) => state.Cart.bikes);
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (bikesInCart.length < 1) {
      router.replace("/cart");
    } else {
      setIsReady(true);
    }
  }, [bikesInCart, router]);
  if (!isReady) return null;
  return (
    <div>
      <CheckoutMain />
    </div>
  );
};

export default Checkout;
