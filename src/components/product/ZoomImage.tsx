import Image from "next/image";
import { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { BsZoomIn } from "react-icons/bs";
import { RxEnterFullScreen } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { BsZoomOut } from "react-icons/bs";
interface ZoomImageProps {
  image: string;
}

const ZoomImage = ({ image }: ZoomImageProps) => {
  const [position, setPosition] = useState({ x: "50%", y: "50%" });
  const [disableZoom, setDisableZoom] = useState(false);
  const [imgPopUp, setImgPopUp] = useState(false);
  const [imgZoom, setImgZoom] = useState(false);

  const fullScreenRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disableZoom) return;

    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x: `${x}%`, y: `${y}%` });
  };

  const handleToggleImgPopUp = () => {
    setImgPopUp(!imgPopUp);
    setImgZoom(false);
  };

  const handleToggleImgZoom = () => {
    setImgZoom(!imgZoom);
  };

  const handleToggleFullScreen = () => {
    if (!document.fullscreenElement) {
      fullScreenRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div>
      <div
        className="max-w-[565.4px] max-h-[376.9px] overflow-hidden group"
        onMouseMove={handleMouseMove}
      >
        <div className="relative w-fit">
          <Image
            alt="bicicleta"
            src={image}
            width={1000}
            height={1000}
            className={`w-full h-full object-cover transition-transform duration-300 ${
              disableZoom ? "" : "group-hover:scale-[2.5]"
            } `}
            style={{
              transformOrigin: `${position.x} ${position.y}`,
            }}
          />
          <div
            onMouseEnter={() => setDisableZoom(true)}
            onMouseLeave={() => setDisableZoom(false)}
            onClick={handleToggleImgPopUp}
            className=" absolute top-2 right-2 bg-white p-[10px] rounded-full cursor-pointer z-10"
          >
            <FaSearch size={20} />
          </div>
        </div>
      </div>
      {imgPopUp && (
        <div
          ref={fullScreenRef}
          className="fixed inset-0 flex flex-col bg-black  z-40 text-white"
        >
          <div className="flex justify-end  px-4 bg-black bg-opacity-50">
            <div className="flex items-center gap-5 lg:w-[10%] md:w-[20%] py-4">
              <div
                onClick={handleToggleImgZoom}
                className="cursor-pointer sm:w-6 sm:h-6 w-10 h-10"
              >
                {imgZoom ? (
                  <BsZoomOut className="w-full h-full" />
                ) : (
                  <BsZoomIn className="w-full h-full" />
                )}
              </div>
              <div
                onClick={handleToggleFullScreen}
                className="cursor-pointer sm:w-8 sm:h-8 w-14 h-14"
              >
                <RxEnterFullScreen className="w-full h-full" />
              </div>
              <div
                onClick={handleToggleImgPopUp}
                className="text-2xl cursor-pointer sm:w-8 sm:h-8 w-14 h-14"
              >
                <IoMdClose className="w-full h-full" />
              </div>
            </div>
          </div>
          <div className="flex overflow-auto justify-center items-center  h-full -z-10">
            <div>
              <Image
                className={`${
                  imgZoom
                    ? "h-full w-[1400px] scale-125 "
                    : "h-[90vh] w-[1260px] object-contain"
                }  `}
                alt="bicicleta"
                src={image}
                width={1400}
                height={933}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ZoomImage;
