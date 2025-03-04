import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ProductCard2Props } from "@/types";
import Link from "next/link";

const CardProducts = ({ img300x300, name, price }: ProductCard2Props) => {
  return (
    <div className="relative group flex flex-col items-center w-full ">
      <div>
        <Link href={"#"}>
          <Image
            alt="teste"
            src={img300x300}
            width={400}
            height={400}
            className="w-[387px]"
          />
        </Link>
      </div>

      <div className="absolute px-5 pt-5 bg-white flex flex-col gap-2 -bottom-0 w-[368px] rounded-md group-hover:bottom-12 transform duration-300">
        <Link className="w-fit" href={"#"}>
          <h2 className="font-semibold w-fit text-2xl">{name}</h2>
        </Link>
        <p>${price}.00</p>
        <div className="flex items-center gap-2">
          <h2 className="font-bold uppercase cursor-pointer">add to cart</h2>
          <FaLongArrowAltRight className="cursor-pointer" size={22} />
        </div>
      </div>
      <div className="flex items-end w-full h-32 ">
        <div className=" w-full z-10 h-8 bg-white"></div>
      </div>
    </div>
  );
};

export default CardProducts;
