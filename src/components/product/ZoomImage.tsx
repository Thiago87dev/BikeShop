import Image from "next/image";
import { useState } from "react";

interface ZoomImageProps {
  image: string;
}

const ZoomImage = ({ image }: ZoomImageProps) => {
  const [position, setPosition] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x: `${x}%`, y: `${y}%` });
  };
  return (
    <div
      className="w-[565.4px] h-[376.9px] overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      <Image
        alt="bicicleta"
        src={image}
        width={1000}
        height={1000}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[2.5]"
        style={{ transformOrigin: `${position.x} ${position.y}` }}
      />
    </div>
  );
};

export default ZoomImage;
