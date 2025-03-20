import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurMission = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1240px] px-4 pb-20">
        <div className="flex flex-col gap-5 pt-20 pb-16">
          <h2 className="text-red-600 font-bold text-xl text-center lg:text-left uppercase ">
            Our Mission
          </h2>
          <h3 className="text-3xl lg:text-4xl text-center lg:text-left font-bold lg:w-1/2 pb-5">
            Our Mission Is To Make Technology Accessible To Everyone.
          </h3>
          <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-center md:items-stretch text-lg text-center md:text-left">
            <p className=" md:w-[48%] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span className="text-red-600 font-bold underline">
                <Link href={"#"}>Ultrices tincidunt arcu non sodales</Link>
              </span>
              neque sodales ut etiam. Leo urna molestie at elementum eu.
              Hendrerit dolor magna eget est lorem ipsum.
            </p>
            <p className="md:w-1/2">
              Non blandit massa enim necdui. pellentesque sit amet porttitor
              eget dolor. Mi ipsum faucibus vitae aliquet. Pretium vulputate
              sapien nec sagittis aliquam. Elementum eu facilisis sed odio morbi
              quis.{" "}
              <span className="text-red-600 font-bold underline">
                {" "}
                <Link href={"#"}>Pellentesque id nibh tortor</Link>
              </span>{" "}
              id aliquet lectus proin nibh nisl.
            </p>
          </div>
        </div>
        <div className="flex justify-center overflow-hidden max-h-[700px] w-full ">
          <Image
            alt="bike"
            src={"/img/about/santiago-pazos-bordon-Jj9dycup6HM-unsplash.jpg"}
            width={1200}
            height={1200}
            className="w-full h-auto max-w-[1200px] scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
