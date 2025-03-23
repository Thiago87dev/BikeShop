import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import EmailForm from "./EmailForm";

const year = new Date().getFullYear();
const Footer = () => {


  const categories = [
    { label: "Mountain Bike", path: `/shop?c=${encodeURIComponent('Mountain')}` },
    { label: "Gravel Bikes", path: `/shop?c=${encodeURIComponent('Gravel')}` },
    { label: "Road Bike", path: `/shop?c=${encodeURIComponent('Road')}` },
    { label: "City & Hybrid", path: `/shop?c=${encodeURIComponent('City & Hybrid')}` },
    { label: "Kids’ Bikes", path: `/shop?c=${encodeURIComponent('Kids')}` },
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
    { label: "Cart", path: "/cart" },
    { label: "My account", path: "#" },
    { label: "Blog", path: "/blog" },
  ];

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
            <EmailForm  colorButton="bg-red-600" colorInput="" inputPlaceholder="Your Email Address" textButton="Submit"/>
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
