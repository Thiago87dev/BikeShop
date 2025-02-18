import Image from "next/image";
import FloatingImage from "./FloatingImage";

const HeroPart2 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-20">
      <div className="flex  w-full max-w-[1160px]">
        <div className="flex flex-col w-1/2 pr-14 mt-24">
          <div className="relative">
            <div className="lg:absolute lg:-top-[308px] lg:-left-[8px] lg:right-96">
              <FloatingImage />
            </div>
            <p className="text-red-500 font-bold text-lg mb-1">Most Popular</p>
          </div>
          <h2 className=" font-bold text-4xl mb-10 w-[80%]">
            Want To Take Cycling To The Next Level?
          </h2>
          <p className="mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex gap-20 mb-10">
            <div className="flex flex-col gap-4">
              <p>Fork Travel</p>
              <h3 className="font-bold text-xl italic">205 MM</h3>
            </div>
            <div className="flex flex-col gap-4">
              <p>Material</p>
              <h3 className="font-bold text-xl italic">Carbon</h3>
            </div>
            <div className="flex flex-col gap-4">
              <p>Weight</p>
              <h3 className="font-bold text-xl italic">12.6 KG</h3>
            </div>
          </div>
          <button className="bg-red-500 text-white font-semibold uppercase w-max px-8 py-5 hover:bg-red-700 transition-colors duration-200">
            Show More
          </button>
        </div>
        <div className="w-1/2">
          <div className="relative mt-40">
            <Image
              alt="men riding bicycles"
              src={"/img/bikes3.jpg"}
              width={600}
              height={600}
              className="w-[540px]"
            />
            <div className="flex flex-col items-center justify-center gap-5 absolute p-10 -top-40 -right-0 w-[360px] h-[200px] bg-red-600">
              <h2 className="text-white text-3xl font-bold">
                The most popular bikes of the season!
              </h2>
              <button className="uppercase text-white font-bold border-dotted border-white border-2 py-4 px-8">
                shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPart2;
