import Image from "next/image";
import React from "react";
import NavRecords from "./NavRecords";

const Records = () => {
  return (
    <div className="flex justify-center py-24  lg:h-[700px] bg-[#f7f7f7]">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-20 lg:gap-4 w-full max-w-[1240px] px-4">
        <div>
          <div className="md:relative flex flex-col">
            <div className="flex flex-col md:flex-row gap-10">
              <div>
                <Image
                  alt="homem na bicicleta"
                  src={"/img/bestOffer/pexels-cottonbro-600x900.jpg"}
                  width={600}
                  height={600}
                  className="w-full h-auto lg:max-w-[194px]  lg:max-h-[264px] md:max-w-[268px] md:max-h-[357px]"
                />
              </div>
              <div className="md:hidden  md:absolute lg:-bottom-10 md:bottom-0 md:left-20 flex items-center justify-center w-full md:w-[279px] bg-red-600 text-white text-2xl font-bold p-10">
              <h2 className="">
                Check Out What’s Going On In The Store!
              </h2>
            </div>
              <div className="z-10">
                <Image
                  alt="bicicleta"
                  src={
                    "/img/about/daniel-stuben-fXveY7mdcEA-unsplash-683x1024.jpg"
                  }
                  width={600}
                  height={600}
                  className="w-full h-auto lg:max-w-[300px] lg:h-auto md:max-w-[420px] md:max-h-[630px]"
                />
              </div>
            </div>
            <div className="hidden md:flex  md:absolute lg:-bottom-10 md:bottom-0 md:left-10 lg:-left-12  items-center justify-center w-full md:w-[279px] bg-red-600 text-white text-2xl font-bold p-10">
              <h2 className="">
                Check Out What’s Going On In The Store!
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full">
            <NavRecords/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
