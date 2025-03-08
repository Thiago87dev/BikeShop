import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ProductCardProps } from "@/types";
import Link from "next/link";

const CardProducts = ({
  img300x300,
  name,
  price,
  withoutDiscont,
}: ProductCardProps) => {
  return (
    <div className="group flex flex-col items-center h-full w-full ">
      <div className="relative w-full pb-28">
        <Link href={"#"}>
          <Image
            alt="Bicicleta"
            src={img300x300}
            width={400}
            height={400}
            className="w-full max-w-[600px] sm:max-w-[468px] lg:max-w-[387px]"
          />
          {withoutDiscont > 0 && (
            <div className="absolute top-1 right-1 bg-red-600 text-white uppercase py-1 px-3 font-semibold rounded-[4px]">
              sale!
            </div>
          )}
        </Link>
        <div className="absolute px-5 pt-5 flex flex-col bg-white gap-2 left-1/2 -translate-x-1/2 bottom-7 w-full md:w-[94%] rounded-md group-hover:bottom-10 transition-all duration-500">
          <Link className="w-fit" href={"#"}>
            <h2 className="font-semibold  w-fit text-2xl ">{name}</h2>
          </Link>
          <div>
            {withoutDiscont > 0 ? (
              <div className="flex gap-2">
                <p className="line-through">${withoutDiscont}.00</p>
                <p className="font-bold">${price}.00</p>
              </div>
            ) : (
              <div>
                <p>${price}.00</p>
              </div>
            )}
          </div>
          <div className=" hidden group-hover:flex items-center gap-2">
            <h2 className="font-bold uppercase cursor-pointer">add to cart</h2>
            <FaLongArrowAltRight className="cursor-pointer" size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
