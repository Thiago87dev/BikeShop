import Image from "next/image";
import { ProductCardProps } from "@/types";
import Link from "next/link";

const ProductCard = ({
  img300x300,
  name,
  price,
  withoutDiscont,
}: ProductCardProps) => {
  return (
    <div className=" w-[264px] h-[360px] bg-white">
      <div>
        {img300x300 && (
          <Link href={"#"}>
            <Image
              alt="img teste"
              src={img300x300}
              width={288}
              height={300}
              className="w-[264px]"
            />
          </Link>
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

export default ProductCard;
