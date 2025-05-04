"use client";
import { useState } from "react";
import CheckoutFormAndOrderList from "./CheckoutFormAndOrderList";

const CheckoutContent = () => {
  const [couponOpen, setCouponOpen] = useState(false);

  const handleSwitchCoupon = () => {
    setCouponOpen(!couponOpen);
  };

  return (
    <div className="flex justify-center bg-[#f7f7f7] text-lg">
      <div className="w-full max-w-[1240px] bg-white shadow-md my-10 lg:my-20 p-6">
        <div className="bg-[#f7edf1] p-7 border-l-4 border-l-red-600">
          <p>
            Have a coupon?{" "}
            <span
              onClick={handleSwitchCoupon}
              className="text-red-600 underline cursor-pointer"
            >
              Click here to enter your code
            </span>
          </p>
        </div>
        
        <div
          className={`flex flex-col sm:flex-row items-center gap-5 sm:gap-10 w-full border border-gray-500 rounded-md  overflow-hidden transition-all duration-700 ${
            couponOpen ? "max-h-40 opacity-100 p-6 mt-10" : "max-h-0 opacity-0"
          }`}
        >
          <input
            className="p-2 border-2 border-gray-400 rounded-md w-4/5 sm:w-1/2"
            placeholder="Coupon code"
            type="text"
          />
          <button className="bg-red-600 text-white h-10 text-base py-2 px-3 font-semibold uppercase w-max  hover:bg-red-700 transition-colors duration-200 tracking-widest">
            Apply coupon
          </button>
        </div>
        <CheckoutFormAndOrderList/>
      </div>
    </div>
  );
};

export default CheckoutContent;
