"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import { setBlogCategory } from "@/redux/blogCategorySelected/slice";
import { RootState } from "@/redux/store";

const Navbar = () => {
    const bikesInCart = useSelector((state: RootState) => state.Cart.bikes);

  const [activeMenuItem, setActiveMenuItem] = useState("Home");
  const [activeSandwichMenu, setActiveSandwichMenu] = useState(false);

  const pathname = usePathname();

  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    setActiveSandwichMenu(!activeSandwichMenu);
  };

  const menuItens = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop?c=Shop" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    if (pathname.includes("/shop")) {
      setActiveMenuItem("Shop");
    } else if (pathname.includes("/about")) {
      setActiveMenuItem("About");
    } else if (pathname.includes("/contact")) {
      setActiveMenuItem("Contact");
    } else if (pathname.includes("/blog")) {
      setActiveMenuItem("Blog");
    } else {
      setActiveMenuItem("Home");
    }
  }, [pathname]);

  return (
    <nav className="bg-white px-6 relative z-30">
      <div className="flex items-center justify-between mx-auto w-full max-w-[1240px] py-5">
        <div>
          <Link href={"/"}>
            <Image
              alt="logo"
              src={"/img/hero/header-logo.png"}
              width={160}
              height={160}
              onClick={() => setActiveMenuItem("Home")}
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          {!activeSandwichMenu && (
            <FiMenu size={30} onClick={handleToggleMenu} />
          )}
        </div>

        <div
          className={`fixed top-0 right-0 w-[89%] bg-black h-full pt-5 text-white  transition-transform duration-300 ease-in-out ${
            activeSandwichMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end pr-6">
            <IoMdClose size={30} onClick={handleToggleMenu} />
          </div>
          <ul className="flex flex-col gap-8 mt-8 ml-10 text-xl font-semibold">
            {menuItens.map((item) => (
              <li
                className="flex flex-col gap-5"
                key={item.label}
                onClick={() => {
                  setActiveMenuItem(item.label);
                  setActiveSandwichMenu(false);
                }}
              >
                <Link
                  href={item.path}
                  className={`${
                    activeMenuItem === item.label
                      ? "text-red-500"
                      : "text-white"
                  } hover:text-red-500`}
                >
                  {item.label}
                </Link>

                <hr className="border-gray-700 opacity-70" />
              </li>
            ))}
          </ul>
          <div onClick={() => setActiveSandwichMenu(false)} className="flex p-9 items-center cursor-pointer">
            <Link className="flex items-center" href={"/cart"}>
              <FiShoppingCart size={22} />
              <div className="flex items-center justify-center bg-red-600 rounded-full min-w-5 min-h-5 text-white text-xs">
                {bikesInCart.reduce((acc, item) => acc + item.quantity!, 0)}
              </div>
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex gap-16">
          <div>
            <ul className="flex gap-10 font-semibold text-lg">
              {menuItens.map((item) => (
                <li
                  key={item.label}
                  onClick={() => {
                    setActiveMenuItem(item.label);
                  }}
                >
                  <Link
                    href={item.path}
                    onClick={() => {
                      if (item.label === "Blog") {
                        dispatch(setBlogCategory("all"));
                      }
                    }}
                    className={`${
                      activeMenuItem === item.label
                        ? "text-red-500"
                        : "text-black"
                    } hover:text-red-500`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center cursor-pointer">
            <Link className="flex items-center" href={"/cart"}>
              <FiShoppingCart size={22} />
              <div className="flex items-center justify-center bg-red-600 rounded-full min-w-5 min-h-5 text-white text-xs">
                {bikesInCart.reduce((acc, item) => acc + item.quantity!, 0)}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
