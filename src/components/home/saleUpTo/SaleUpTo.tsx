import Image from "next/image";
import BikeName from "../hero/BikeName";
import Timer from "./Timer";

const SaleUpTo = () => {
  const bikeNames = [
    "Series 4 6061 Aluminum",
    "Shimano XT/SLX drivetrain",
    "Tubeless-ready rims and tires",
  ];
  return (
    <div className="relative flex justify-center bg-[url('/img/saleUpTo/josh-nuttall.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-90"></div>
      <div className="relative flex flex-col lg:flex-row items-center gap-20 text-white text-lg w-full max-w-[1160px] px-4 my-20">
        <div className="relative w-full lg:w-[60%]">
          <div className="w-full lg:max-w-[660px] sm:h-[500px] overflow-hidden flex items-center justify-center">
            <Image
              alt="bike"
              src={"/img/products/product-1.jpg"}
              width={600}
              height={600}
              className=" w-[660px] sm:w-full lg:w-[660px] sm:h-[500px] lg:scale-105 sm:object-cover"
            />
          </div>
          <Image
            alt="30% off"
            src={"/img/saleUpTo/30off-150x150.png"}
            width={120}
            height={120}
            className="absolute w-16 sm:w-[120px] top-0 left-0"
          />
          <div className="absolute w-[85vw] sm:w-[90vw] lg:w-[580px] -bottom-20 sm:-bottom-32 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <Timer />
          </div>
        </div>
        <div className="w-full lg:w-[40%] pt-0 sm:pt-6 lg:pt-0">
          <div className="flex flex-col items-center lg:items-stretch gap-5">
            <h3 className="text-red-500 font-bold text-xl">SALE UP TO 30%</h3>
            <h2 className="font-bold text-4xl text-center lg:text-left">Deal Of The Week</h2>
            <p className="px-4 sm:px-10 lg:px-0 text-center lg:text-left">
              Velit sed ullamcorper morbi tincidunt ornare massa eget. Senectus
              et netus et malesuada fames ac turpis egestas. Cras tincidunt
              lobortis feugiat vivamus at augue eget arcu.
            </p>
            <ul>
              {bikeNames.map((item, index) => (
                <li key={index} className="my-2">
                  <BikeName name={item} />
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <h2 className="italic font-bold text-3xl">$1,290</h2>
              <button className="bg-red-600 py-4 px-9 font-semibold hover:bg-red-700 transition-colors duration-200 uppercase">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleUpTo;
