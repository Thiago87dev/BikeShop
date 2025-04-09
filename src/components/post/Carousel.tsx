"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const imgs = [
  "/img/blog/carousel/munbaik-cycling-clothing-iZJrOqEaPNI-unsplash-600x400.jpg",
  "/img/hero/yellowBike.jpg",
  "/img/blog/carousel/pexels-jean-van-der-meulen-1549306-600x400.jpg",
];

const Carousel = () => {
  const [leftImg, setLeftImg] = useState(0);
  const [centralImg, setCentralImg] = useState(1);
  const [rightImg, setRightImg] = useState(2);

  const handlePrev = () => {
    setLeftImg((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
    setCentralImg((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
    setRightImg((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLeftImg((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
    setCentralImg((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
    setRightImg((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="flex flex-col gap-3 select-none">
      <div className="flex gap-2 relative group">
        <div
          onClick={handlePrev}
          className="absolute px-2 py-4 top-1/2 -translate-y-1/2 left-0 bg-black opacity-45 text-white cursor-pointer rounded-sm hover:opacity-100 transition-all duration-300 "
        >
          <FaChevronLeft />
        </div>
        <div
          onClick={handleNext}
          className="absolute px-2 py-4 top-1/2 -translate-y-1/2 right-0 bg-black opacity-45 text-white cursor-pointer rounded-sm hover:opacity-100 transition-all duration-300 "
        >
          <FaChevronRight />
        </div>
        <div className="w-[80px] sm:w-[200px] h-auto overflow-hidden">
          <Image
            alt="bike"
            src={imgs[leftImg]}
            width={600}
            height={600}
            className="object-cover w-full h-full"
            style={{ objectPosition: "right" }}
          />
        </div>
        <div>
          <Image alt="bike" className="min-w-[200px] min-h-[320px] object-cover" src={imgs[centralImg]} width={600} height={600} />
        </div>
        <div className="w-[80px] sm:w-[200px] h-auto overflow-hidden">
          <Image
            alt="bike"
            src={imgs[rightImg]}
            width={600}
            height={600}
            className="object-cover w-full h-full"
            style={{ objectPosition: "left" }}
          />
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <div
          onClick={() => {
            setLeftImg(2);
            setCentralImg(0);
            setRightImg(1);
          }}
          className={`w-2.5 h-2.5 bg-black rounded-full ${
            centralImg === 0 ? "opacity-100" : "opacity-50"
          } cursor-pointer`}
        ></div>
        <div
          onClick={() => {
            setLeftImg(0);
            setCentralImg(1);
            setRightImg(2);
          }}
          className={`w-2.5 h-2.5 bg-black rounded-full cursor-pointer ${
            centralImg === 1 ? "opacity-100" : "opacity-50"
          }`}
        ></div>
        <div
          onClick={() => {
            setLeftImg(1);
            setCentralImg(2);
            setRightImg(0);
          }}
          className={`w-2.5 h-2.5 bg-black rounded-full cursor-pointer ${
            centralImg === 2 ? "opacity-100" : "opacity-50"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Carousel;
