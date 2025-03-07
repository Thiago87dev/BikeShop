"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { PulseLoader } from "react-spinners";

const year = new Date().getFullYear();
const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, seterror] = useState("");
  const [loading, setLoading] = useState(false);

  const categories = [
    { label: "Mountain Bike", path: "#" },
    { label: "Gravel Bikes", path: "#" },
    { label: "Road Bike", path: "#" },
    { label: "City & Hybrid", path: "#" },
    { label: "Kids’ Bikes", path: "#" },
  ];

  const companyInfo = [
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
    { label: "Privacy Policy", path: "#" },
    { label: "Terms & Conditions", path: "#" },
    { label: "Payment Methods", path: "#" },
  ];

  const shop = [
    { label: "Shop", path: "/shop" },
    { label: "Checkout", path: "#" },
    { label: "Cart", path: "#" },
    { label: "My account", path: "#" },
    { label: "Blog", path: "/blog" },
  ];

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      seterror("Email is Required");
    } else {
      setLoading(true)
      setTimeout(() => {
          seterror("Submission Failed");
          setLoading(false);
      }, 1800);
    }

  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) {
      seterror("");
    }
  };

  return (
    <div className="flex justify-center bg-black text-white">
      <div className="flex flex-col items-center lg:items-stretch w-full max-w-[1240px] pt-20 pb-10 px-4">
        <div className="flex flex-col lg:flex-row gap-20 mb-20">
          <div className="flex flex-col gap-5 w-[90vw] sm:w-[60vw] lg:w-[400px]">
            <div className="mx-auto lg:mx-0">
              <Link href={"/"}>
                <Image
                  alt="logo"
                  src={"/img/footer/footer-logo-1.png"}
                  width={160}
                  height={160}
                />
              </Link>
            </div>
            <h2 className="font-semibold mx-auto lg:mx-0 text-2xl mb-3 text-center lg:text-left">
              Sign-up For Special Offers!
            </h2>
            <form
              onSubmit={handleEmailSubmit}
              className="relative flex flex-col gap-4"
            >
              {loading && (
                <div className="absolute flex items-center bg-black/70 backdrop-blur-sm justify-center inset-0">
                  <PulseLoader size={20} color="#bababa" />
                </div>
              )}
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Your Email Address..."
                className="bg-transparent border-[1px] border-solid border-gray-500 p-4 text-lg"
              />
              {error && (
                <p className="text-red-500 text-lg font-bold bg-white border-[1px] border-solid border-red-500 p-2">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="bg-red-600 py-3 px-9 font-semibold hover:bg-red-700 transition-colors duration-200 uppercase text-xl"
              >
                submit
              </button>
            </form>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between text-center lg:text-left gap-10 lg:w-[600px]">
            <div>
              <h2 className="font-bold text-2xl uppercase mb-4">Categories</h2>
              {categories.map((item, index) => (
                <ul key={index}>
                  <Link href={item.path}>
                    <li className="mb-2 text-xl font-semibold hover:text-red-600">
                      {item.label}
                    </li>
                  </Link>
                </ul>
              ))}
            </div>
            <div>
              <h2 className="font-bold text-2xl uppercase mb-4">
                Company Info
              </h2>
              {companyInfo.map((item, index) => (
                <ul key={index}>
                  <Link href={item.path}>
                    <li className="mb-2 text-xl font-semibold hover:text-red-600">
                      {item.label}
                    </li>
                  </Link>
                </ul>
              ))}
            </div>
            <div>
              <h2 className="font-bold text-2xl uppercase mb-4">Shop</h2>
              {shop.map((item, index) => (
                <ul key={index}>
                  <Link href={item.path}>
                    <li className="mb-2 text-xl font-semibold hover:text-red-600">
                      {item.label}
                    </li>
                  </Link>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-5 lg:gap-0 justify-between text-lg">
          <div>
            <p className="text-center lg:text-left">
              ©{year} Bike Shop | Designed and coded by{" "}
              <Link href={'#'}>
              <span className="text-red-500 underline whitespace-nowrap">
                Thiago Alves
              </span>
              </Link>
            </p>
          </div>
          <div className="flex gap-5">
            <FaFacebook
              className="hover:text-red-500 cursor-pointer"
              size={22}
            />
            <FaXTwitter
              className="hover:text-red-500 cursor-pointer"
              size={22}
            />
            <FaInstagram
              className="hover:text-red-500 cursor-pointer"
              size={22}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
