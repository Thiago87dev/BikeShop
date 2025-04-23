"use client";
import { useEffect, useState } from "react";

import { FaShoppingBasket } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  removeBike,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/cart/slice";

const ShopBasket = () => {
  const dispatch = useDispatch();
  const bikesInCart = useSelector((state: RootState) => state.Cart.bikes);

  const [showBasketContent, setShowBasketContent] = useState(false);
  const [subtotal, setSubtotal] = useState<number>(0);

  const handleBasketClick = () => {
    setShowBasketContent(true);
  };

  useEffect(() => {
    const total = bikesInCart.reduce((acc, item) => {
      return acc + item.price * (item.quantity ?? 1);
    }, 0);
    setSubtotal(total);
  }, [bikesInCart]);

  useEffect(() => {
    if (showBasketContent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showBasketContent]);
  return (
    <div>
      <div onClick={handleBasketClick}>
        <div className="fixed flex items-center justify-center bottom-10 right-10 w-16 h-16 bg-white rounded-full shadow-lg cursor-pointer hover:animate-wiggle origin-center">
          <FaShoppingBasket size={25} className="flex-shrink-0" />
        </div>
        <div className="fixed flex items-center justify-center text-sm px-1 min-w-5 min-h-5  bg-red-500 bottom-20 right-10 rounded-full text-white">
          {bikesInCart.reduce((acc, item) => acc + item.quantity!, 0)}
        </div>
      </div>
      <div>
        {showBasketContent && (
          <div className="flex justify-end">
            <div
              onClick={() => setShowBasketContent(false)}
              className="w-screen h-screen z-50 fixed bg-opacity-40 scr top-0 left-0 bg-black"
            ></div>
          </div>
        )}
        <div className="flex justify-end">
          <div
            className={`fixed flex flex-col bg-white  top-0 z-50 w-full md:w-[60%] lg:w-[30%] h-screen transition-transform duration-300 ease-in-out ${
              showBasketContent ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-1 flex-col">
              <div className="flex items-center">
                <div className="py-5 pl-5">
                  <div
                    onClick={() => setShowBasketContent(false)}
                    className="flex justify-center items-center text-gray-300 pb-1 text-2xl w-12 h-12 rounded-full bg-white border-2 border-gray-300 cursor-pointer hover:text-black hover:bg-gray-300 transition-all duration-300"
                  >
                    X
                  </div>
                </div>
                <div className="flex justify-center w-full mr-5">
                  <p className="text-2xl font-bold">Your Order</p>
                </div>
              </div>
              <hr className="border mx-5" />
              <div className="flex flex-col flex-1 justify-between">
                <div className="flex flex-col flex-1 p-5 justify-between">
                  <div className="overflow-y-auto max-h-[calc(100vh-300px)] pr-2">
                    {bikesInCart.map((item) => (
                      <div
                        className="flex flex-col gap-5 text-lg"
                        key={item.title}
                      >
                        <h2 className="font-bold ">{item.title}</h2>
                        <div className="flex justify-between">
                          <div className="flex gap-4">
                            <div className="flex gap-4  rounded-full border border-gray-500">
                              <button
                                onClick={() =>
                                  dispatch(decreaseQuantity(item.title))
                                }
                                className="text-gray-500 hover:text-black hover:bg-gray-500 py-1 px-2 rounded-l-full"
                              >
                                <FaMinus />
                              </button>
                              <p className="py-1">{item.quantity}</p>
                              <button
                                onClick={() =>
                                  dispatch(increaseQuantity(item.title))
                                }
                                className="text-gray-500 hover:text-black hover:bg-gray-500 py-1 px-2 rounded-r-full"
                              >
                                <FaPlus />
                              </button>
                            </div>
                            <p>x</p>
                            <p>
                              {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                              }).format(item.price)}
                            </p>
                          </div>
                          <div
                            onClick={() => dispatch(removeBike(item.title))}
                            className="text-gray-300 hover:text-gray-400 cursor-pointer"
                          >
                            <FaTrash />
                          </div>
                        </div>
                        <hr className="border" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4 w-full text-lg pt-4 border-t mt-4">
                    <div className="flex gap-2 justify-center w-full">
                      <p className="font-bold">Subtotal:</p>
                      <p>
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(subtotal)}
                      </p>
                    </div>
                    <button className="bg-black w-full text-white text-lg font-bold rounded-full mb-6 p-2">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBasket;
