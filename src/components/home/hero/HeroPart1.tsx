import Image from "next/image";
import BikeName from "./BikeName";

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
    <div className="relative w-full h-[calc(100vh-72px)] bg-[url('/img/bike.jpg')] bg-cover bg-left flex items-center justify-center">
      <div className="flex w-full max-w-[1160px]">
        <div className=" w-1/2 h-screen px- py-20">
          <Image
            alt="new offer"
            src={"/img/offer.png"}
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col items-center justify-center text-white w-1/2 ">
          <div>
            <p className="text-red-500 font-bold text-lg">Mountain Bike</p>
            <h1 className="font-bold text-[80px] leading-none mb-12">Bike With Unbelievable Dynamics</h1>
            <div className="flex gap-10">
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
            <div className="flex items-center gap-14 mt-8">
              <p className="text-3xl font-bold">$1,920</p>
              <button className="bg-red-600 py-4 px-9 font-semibold hover:bg-red-700 transition-colors duration-200">Shop now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPart1;
