import Image from "next/image";

const FloatingImage = () => {
  return (
    <div className="bg-white shadow-lg w-max h-[230px] overflow-hidden flex items-center justify-center">
      <Image
        alt="bicicleta amarela"
        src={"/img/yellowBike.jpg"}
        width={400}
        height={400}
      />
    </div>
  );
};

export default FloatingImage;
