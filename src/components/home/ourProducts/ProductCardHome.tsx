import Image from "next/image";
import { ProductCardHomeProps } from "@/types";
import Link from "next/link";

const ProductCardHome = ({
  img300x300,
  name,
  price,
  withoutDiscont,
}: ProductCardHomeProps) => {
  return (
    <div className=" w-[264px] h-[360px] bg-white">
      <div className="relative">
        {img300x300 && (
          <Link href={"#"}>
            <Image
              alt="bicicleta"
              src={img300x300}
              width={288}
              height={300}
              className="w-[264px]"
            />
          </Link>
        )}
        {withoutDiscont > 0 && (
          <div className="absolute top-1 right-1 bg-white uppercase py-1 px-3 font-semibold rounded-[4px] border-[1px] border-solid border-black">
            sale
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 py-4 h-[92px]">
        <div className="flex justify-center">
          <Link href={"#"}>
            <h1 className="font-bold text-xl hover:text-red-600">{name}</h1>
          </Link>
        </div>
        <div className="flex justify-center">
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
      </div>
    </div>
  );
};

export default ProductCardHome;
