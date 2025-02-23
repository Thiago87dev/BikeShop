import Image from "next/image";
import { PiBoundingBoxBold } from "react-icons/pi";
import { FaRuler } from "react-icons/fa";
import { FaWeightHanging } from "react-icons/fa6";
import { AiOutlinePercentage } from "react-icons/ai";

const BestOffer = () => {
  return (
    <div className=" flex justify-center">
      <div className="flex  justify-between w-full max-w-[1160px] my-20">
        <div className="flex">
          <div>
            <div className="mb-8">
              <Image
                alt="handlebar"
                src={"/img/bestOffer/guidao.jpg"}
                width={280}
                height={280}
              />
            </div>
            <div className="flex items-center pl-10 ml-10 text-3xl font-bold bg-red-500 text-white w-[280px] h-[160px]">
              Save $500 on the Orbea Rise M-Ltd Bike!
            </div>
          </div>
          <div>
            <Image
              alt="man in a bike"
              src={"/img/bestOffer/pexels-cottonbro-600x900.jpg"}
              width={280}
              height={280}
            />
          </div>
        </div>
        <div className=" w-1/3 mr-20">
          <h3 className="text-red-500 font-bold text-xl">best offer</h3>
          <h3 className="text-4xl font-bold capitalize my-8">
            Ride more for less with Polygon bikes
          </h3>
          <p className="mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <div className="flex gap-10 justify-between h-[140px]">
            <div className="flex flex-col justify-between w-full">
              <div className="flex items-center gap-4">
                <div className="bg-red-500 flex items-center justify-center p-2 text-white">
                  <PiBoundingBoxBold size={25} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-xl italic">205mm</h3>
                  <p>Fork Travel</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-red-500 flex items-center justify-center p-2 text-white">
                  <FaWeightHanging size={25} strokeWidth={20} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-xl italic">12.40 KG</h3>
                  <p>Weight</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full">
              <div className="flex items-center gap-4">
                <div className="bg-red-500 flex items-center justify-center p-2 text-white">
                  <AiOutlinePercentage size={25} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-xl italic">Carbon (CF)</h3>
                  <p>Material</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-red-500 flex items-center justify-center p-2 text-white">
                  <FaRuler size={25} strokeWidth={20} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-xl italic">59.1-69</h3>
                  <p>Rider Height</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestOffer;
