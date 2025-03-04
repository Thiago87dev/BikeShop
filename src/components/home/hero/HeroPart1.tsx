import Image from "next/image";
import BikeName from "./BikeName";
import Link from "next/link";

const HeroPart1 = () => {
  const bikeNames = [
    "Series 4 6061 Aluminum",
    "Shimano XT/SLX drivetrain",
    "Tubeless-ready rims and tires",
    "TranzX Dropper Post",
    "Marin Speed Concept",
    "Shimano SLX, 10-51T",
  ];
  return (
    <div className="relative w-full h-full lg:h-[calc(100vh-72px)] bg-[url('/img/hero/bike.jpg')] bg-cover bg-left flex items-center justify-center">
      <div className="flex w-full max-w-[1160px]">
        <div className="hidden lg:block w-1/2 h-screen px- py-20">
          <Image
            alt="new offer"
            src={"/img/hero/offer.png"}
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col items-center justify-center text-white w-full lg:w-1/2 px-5 py-5 sm:py-20 lg:px-0 lg:py-0">
          <div className="flex flex-col items-center justify-center lg:justify-start lg:items-stretch">
            <p className="text-red-500 font-bold text-xl">Mountain Bike</p>
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-[80px] leading-none mb-12 text-center lg:text-left">
              Bike With Unbelievable Dynamics
            </h1>
            <div className="flex flex-col sm:flex-row sm:gap-10 text-lg">
              <ul>
                {bikeNames.slice(0, 3).map((item, index) => (
                  <li key={index} className="my-4">
                    <BikeName name={item} />
                  </li>
                ))}
              </ul>
              <ul>
                {bikeNames.slice(3).map((item, index) => (
                  <li key={index} className="my-4">
                    <BikeName name={item} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-14 mt-8">
              <p className="text-3xl font-bold">$1,920</p>
              <Link href={'/shop'}>
              <button className="bg-red-600 py-4 px-9 font-semibold hover:bg-red-700 transition-colors duration-200 uppercase">
                Shop now
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPart1;
