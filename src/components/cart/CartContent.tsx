import Link from "next/link";

const CartContent = () => {
  return (
    <div className="flex justify-center bg-[#f7f7f7]">
      <div className="w-full max-w-[1240px] h-full min-h-[250px] bg-white shadow-md my-20 p-6">
        <div className="flex flex-col gap-8 items-center justify-center w-full h-[250px] pt-16">
          <h1 className="font-bold text-4xl text-gray-600 text-center">
            Your cart is currently empty.
          </h1>
          <Link href={"/shop"}>
            <button className="bg-red-700 py-4 px-9 font-semibold text-white hover:bg-red-800 transition-colors duration-200 uppercase">
              return to shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
