"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("Home");
  const [activeSandwichMenu, setActiveSandwichMenu] = useState(false);

  const handleToggleMenu = () => {
    setActiveSandwichMenu(!activeSandwichMenu);
  };

  const menuItens = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/" },
    { label: "About", path: "/" },
    { label: "Contact", path: "/" },
    { label: "Blog", path: "/" },
  ];
  return (
    <nav className="bg-gray-300 px-6 relative z-50">
      <div className="flex items-center justify-between mx-auto w-full max-w-[1160px] py-5">
        <div>
          <Link href={"/"}>
            <Image
              alt="logo"
              src={"/img/header-logo.png"}
              width={140}
              height={140}
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
                  setActiveSandwichMenu(false)
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
            <FiShoppingCart size={22} />
            <div className="flex items-center justify-center bg-red-600 rounded-full w-5 h-5 text-white text-xs">
              0
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
