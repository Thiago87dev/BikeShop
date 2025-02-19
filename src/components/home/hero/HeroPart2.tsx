import Image from "next/image";
import FloatingImage from "./FloatingImage";

const HeroPart2 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch w-full max-w-[1160px]">
        <div className="flex items-center lg:items-stretch flex-col w-1/2 lg:pr-14 lg:mt-24">
          <div className="flex flex-col items-center lg:items-stretch relative">
            <div className="lg:absolute lg:-top-[308px] lg:-left-[8px] lg:right-96 w-[318px] sm:w-[450px]">
              <FloatingImage />
            </div>
            <p className="text-red-500 font-bold text-lg lg:mb-1 lg:my-0 my-10">
              Most Popular
            </p>
          </div>
          <h2 className=" font-bold text-4xl mb-10 w-[180%] lg:w-[80%] text-center lg:text-left">
            Want To Take Cycling To The Next Level?
          </h2>
          <p className="mb-10 w-screen lg:w-full text-center lg:text-left px-5 sm:px-28 lg:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch lg:gap-20 mb-16 lg:mb-10 w-screen lg:w-full justify-around lg:justify-start gap-8">
            <div className="flex flex-col gap-2 sm:gap-4 text-center">
              <p>Fork Travel</p>
              <h3 className="font-bold text-2xl sm:text-xl italic">205 MM</h3>
            </div>
            <div className="flex flex-col gap-2 sm:gap-4 text-center">
              <p>Material</p>
              <h3 className="font-bold text-2xl sm:text-xl italic">Carbon</h3>
            </div>
            <div className="flex flex-col gap-2 sm:gap-4 text-center">
              <p>Weight</p>
              <h3 className="font-bold text-2xl sm:text-xl italic">12.6 KG</h3>
            </div>
          </div>
          <button className="bg-red-500 text-white font-semibold uppercase w-max px-8 mb-16 py-5 hover:bg-red-700 transition-colors duration-200">
            Show More
          </button>
        </div>
        <div className="flex flex-col items-center lg:items-stretch w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-stretch lg:relative lg:mt-40 px-4 lg:px-0">
            <div className="lg:absolute p-4 lg:p-10 lg:-top-40 lg:-right-0 flex flex-col items-center justify-center gap-5  lg:w-[360px] h-[200px] bg-red-500 text-center lg:text-left mb-16 lg:mb-0">
              <h2 className="text-white text-3xl font-bold">
                The most popular bikes of the season!
              </h2>
              <button className="uppercase text-white font-bold border-dotted border-white border-2 py-4 px-8">
                shop now
              </button>
            </div>
            <div>
              <Image
                alt="men riding bicycles"
                src={"/img/bikes3.jpg"}
                width={600}
                height={600}
                className="w-[800px] lg:w-[540px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPart2;
