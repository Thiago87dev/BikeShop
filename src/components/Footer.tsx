import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const year = new Date().getFullYear()
const Footer = () => {

  const categories = [
    { label: "Mountain Bike", path: "/" },
    { label: "Gravel Bikes", path: "/" },
    { label: "Road Bike", path: "/" },
    { label: "Cyclocross", path: "/" },
    { label: "Kids’ Bikes", path: "/" },
  ];

  const companyInfo = [
    { label: "About Us", path: "/" },
    { label: "Contact Us", path: "/" },
    { label: "Privacy Policy", path: "/" },
    { label: "Terms & Conditions", path: "/" },
    { label: "Payment Methods", path: "/" },
  ];

  const shop = [
    { label: "Shop", path: "/" },
    { label: "Checkout", path: "/" },
    { label: "Cart", path: "/" },
    { label: "My account", path: "/" },
    { label: "Blog", path: "/" },
  ];

  return (
    <div className="flex justify-center bg-black text-white">
      <div className="flex flex-col items-center lg:items-stretch w-full max-w-[1160px] pt-20 pb-10 px-4">
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
            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Your Email Address..." className="bg-transparent border-[1px] border-solid border-gray-500 p-4 text-lg" />
              <button className="bg-red-600 py-3 px-9 font-semibold hover:bg-red-700 transition-colors duration-200 uppercase text-xl">
                submit
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between text-center lg:text-left gap-10 lg:w-[600px]">
            <div>
              <h2 className="font-bold text-2xl uppercase mb-4">Categories</h2>
                {categories.map((item, index)=>(
                  <ul key={index}>
                    <li className="mb-2 text-xl font-semibold">{item.label}</li>
                  </ul>
                ))}
            </div>
            <div>
              <h2 className="font-bold text-2xl uppercase mb-4">Company Info</h2>
                {companyInfo.map((item, index)=>(
                  <ul key={index}>
                    <li className="mb-2 text-xl font-semibold">{item.label}</li>
                  </ul>
                ))}
            </div>
            <div>
              <h2 className="font-bold text-2xl uppercase mb-4">Shop</h2>
                {shop.map((item, index)=>(
                  <ul key={index}>
                    <li className="mb-2 text-xl font-semibold">{item.label}</li>
                  </ul>
                ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-5 lg:gap-0 justify-between text-lg">
          <div>
            <p className="text-center lg:text-left">©{year} Bike Shop | Designed and coded by <span className="text-red-500 underline whitespace-nowrap">Thiago Alves</span></p>
          </div>
          <div className="flex gap-5">
          <FaFacebook className="hover:text-red-500 cursor-pointer" size={22}/>
          <FaXTwitter className="hover:text-red-500 cursor-pointer" size={22}/>
          <FaInstagram className="hover:text-red-500 cursor-pointer" size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
