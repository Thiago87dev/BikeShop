import { CardProductsHorizontalProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const CardProductsHorizontal = ({
  img300x300,
  name,
  price,
  withoutDiscont,
  brief,
  id,
}: CardProductsHorizontalProps) => {
  return (
    <div className="flex items-center pb-6 md:pb-0 gap-8">
      <div className="relative">
        <Link href={`/shop/product/${id}`}>
          <Image alt="bicicleta" src={img300x300} width={414} height={414} />
        </Link>
        {withoutDiscont > 0 && (
          <div className="absolute top-1 right-1 bg-red-600 text-white uppercase py-1 px-3 font-semibold rounded-[4px]">
            sale!
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <Link className="w-fit" href={`/shop/product/${id}`}>
          <h2 className="font-semibold text-2xl">{name}</h2>
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
        <p>{brief}</p>
        <div className="flex items-center gap-2">
          <h2 className="font-bold uppercase cursor-pointer">add to cart</h2>
          <FaLongArrowAltRight className="cursor-pointer" size={22} />
        </div>
      </div>
    </div>
  );
};

export default CardProductsHorizontal;
