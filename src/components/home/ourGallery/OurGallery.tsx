import Image from "next/image";
import React from "react";

const OurGallery = () => {
  const images = [
    {
      path: "/img/ourGallery/daniel-600x400.jpg",
      alt: "bicicleta e tenis rosa",
    },
    {
      path: "/img/ourGallery/keagan-600x400.jpg",
      alt: "manabra de bicicleta",
    },
    {
      path: "/img/ourGallery/keagan2-600x400.jpg",
      alt: "manabra de bicicleta",
    },
    {
      path: "/img/ourGallery/pexels-600x400.jpg",
      alt: "corrida de bicicleta",
    },
    {
      path: "/img/ourGallery/pexels2-600x400.jpg",
      alt: "corrida de bicicleta",
    },
    {
      path: "/img/ourGallery/santiago-600x400.jpg",
      alt: "trilha de bicicleta",
    },
  ];
  return (
    <div className="bg-[#f7f7f7] flex justify-center ">
      <div className="flex flex-col gap-14 items-center w-full max-w-[1160px] my-20">
        <div className="flex flex-col items-center gap-7 w-full sm:w-4/5 md:w-[400px] px-4 lg:px-0">
          <h3 className="text-red-500 font-bold text-xl">Our Gallery</h3>
          <h2 className="font-bold text-3xl sm:text-4xl text-center">
            Our Bikes Feature An Ergonomic Design
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 px-4 lg:px-0">
          {images.map((item, index) => (
            <Image
              key={index}
              alt={item.alt}
              src={item.path}
              width={600}
              height={600}
              className="w-[700px] md:w-[370px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
