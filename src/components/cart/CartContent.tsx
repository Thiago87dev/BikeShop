"use client";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeBike } from "@/redux/cart/slice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useEffect, useState } from "react";

const CartContent = () => {
  const dispatch = useDispatch();
  const bikesInCart = useSelector((state: RootState) => state.Cart.bikes);

  const [subtotal, setSubtotal] = useState<number>(0);
  const [errorCoupn, setErrorCoupn] = useState("");
  const [couponInput, setCouponInput] = useState("");

  useEffect(() => {
    const total = bikesInCart.reduce((acc, item) => {
      return acc + item.price * (item.quantity ?? 1);
    }, 0);
    setSubtotal(total);
  }, [bikesInCart]);

  const handleApplyCouponBtnClick = () => {
    if (!couponInput) {
      setErrorCoupn("Please enter a coupon code!");
    } else {
      setErrorCoupn(`Coupon "${couponInput}" does not exist!`);
    }
  };

  return (
    <div className="flex justify-center bg-[#f7f7f7]">
      <div className="w-full max-w-[1240px] h-full min-h-[250px] bg-white shadow-md my-20 p-6">
        {bikesInCart.length < 1 ? (
          <div className="flex flex-col gap-8 items-center justify-center w-full h-[250px] pt-16">
            <h1 className="font-bold text-4xl text-gray-600 text-center">
              Your cart is currently empty.
            </h1>
            <Link href={"/shop"}>
              <button className="bg-red-700 py-4 px-9 font-semibold text-white hover:bg-red-800 transition-colors duration-200 uppercase">
                return to shop
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 justify-between ">
            <div className="w-full lg:w-[65%]">
              <h2 className="font-bold text-4xl mb-10 md:mb-0">Cart Summary</h2>
              <table className="w-full border-separate border-spacing-y-2 hidden md:table">
                <thead>
                  <tr>
                    <th className="text-left border-b-2 pb-2">Product</th>
                    <th className="text-left border-b-2 pb-2">Price</th>
                    <th className="text-left border-b-2 pb-2">Quantity</th>
                    <th className="text-left border-b-2 pb-2">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="">
                  {bikesInCart.map((item) => (
                    <tr key={item.title}>
                      <td className="border-b-2 pb-2">
                        <div className="flex flex-col md:flex-row items-center gap-5">
                          <div
                            onClick={() => dispatch(removeBike(item.title))}
                            className="flex items-center justify-center w-6 h-6 rounded-full font-bold text-xs text-red-500 cursor-pointer hover:text-white hover:bg-red-500"
                          >
                            X
                          </div>
                          <Image
                            alt="bike"
                            src={item.image}
                            width={50}
                            height={50}
                          />
                          <p className="text-lg">{item.title}</p>
                        </div>
                      </td>
                      <td className="border-b-2 pb-2">
                        <p className="text-lg">${item.price.toFixed(2)}</p>
                      </td>
                      <td className="border-b-2 pb-2">
                        <div>
                          <input
                            className="w-14 h-10 border pl-2 text-lg "
                            type="number"
                            min={1}
                            value={item.quantity}
                            onChange={(e) =>
                              dispatch(
                                updateQuantity({
                                  title: item.title,
                                  quantity: Number(e.target.value),
                                })
                              )
                            }
                          />
                        </div>
                      </td>
                      <td className="border-b-2 pb-2">
                        <p className="text-lg">
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(item.quantity! * item.price)}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex flex-col  gap-10 md:hidden">
                {bikesInCart.map((item, index) => (
                  <div
                    className={`${index % 2 === 0 ? "bg-gray-100" : ""} p-2`}
                    key={index}
                  >
                    <div className="flex items-center gap-5 mb-5">
                      <div
                        onClick={() => dispatch(removeBike(item.title))}
                        className="flex items-center justify-center w-6 h-6 rounded-full font-bold text-xs text-red-500 cursor-pointer hover:text-white hover:bg-red-500"
                      >
                        X
                      </div>
                      <Image
                        alt="bike"
                        src={item.image}
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex justify-between items-center  gap-2">
                      <p className="font-bold">Product</p>
                      <p className="text-lg">{item.title}</p>
                    </div>
                    <hr className="border my-1" />
                    <div className="flex justify-between gap-2">
                      <p className="font-bold">Price</p>
                      <p className="text-lg">${item.price.toFixed(2)}</p>
                    </div>
                    <hr className="border my-1" />
                    <div className="flex justify-between gap-2">
                      <p className="font-bold">Quantity</p>
                      <div>
                        <input
                          className="w-14 h-10 border pl-2 text-lg "
                          type="number"
                          min={1}
                          value={item.quantity}
                          onChange={(e) =>
                            dispatch(
                              updateQuantity({
                                title: item.title,
                                quantity: Number(e.target.value),
                              })
                            )
                          }
                        />
                      </div>
                    </div>
                    <hr className="border my-1" />
                    <div className="flex justify-between gap-2">
                      <p className="font-bold">Subtotal</p>
                      <p className="text-lg">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(item.quantity! * item.price)}
                      </p>
                    </div>
                    <hr className="border my-1" />
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row md:ml-4  gap-1 sm:items-center mt-10 md:mt-0">
                <input
                  type="text"
                  className="border border-gray-400 rounded-sm p-2"
                  placeholder="Coupon code"
                  value={couponInput}
                  onChange={(e) => {
                    setCouponInput(e.target.value);
                    setErrorCoupn("");
                  }}
                />
                <button
                  onClick={handleApplyCouponBtnClick}
                  className="uppercase bg-red-100 p-2 font-bold text-gray-500 
                hover:bg-red-700 hover:text-white transition-colors duration-200"
                >
                  apply coupon
                </button>
              </div>
              {errorCoupn && (
                <div className="md:ml-4">
                  <p>{errorCoupn}</p>
                </div>
              )}
            </div>
            <div className=" flex flex-col gap-5 w-full lg:w-[390px] lg:max-w-[390px]">
              <h2 className="font-bold text-4xl">Cart totals</h2>
              <div>
                <div className="flex">
                  <p className="font-bold w-[200px] lg:w-[100px]">Subtotal</p>
                  <p className="text-lg">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(subtotal)}
                  </p>
                </div>
                <hr className="border my-2" />
                <div className="flex">
                  <p className="font-bold w-[200px] lg:w-[100px]">Total</p>
                  <p className="text-lg font-bold">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(subtotal)}
                  </p>
                </div>
              </div>
              <div>
                <Link href={'/checkout'}>
                  <button className="relative bg-red-600 text-white font-semibold uppercase w-full px-8 mb-16 py-2 hover:bg-red-700 transition-colors duration-200">
                    proceed to checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartContent;
