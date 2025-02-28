import Image from "next/image";

const FloatingImage = () => {
  return (
    <div className=" h-[250px] sm:w-max w-fit overflow-hidden flex items-center justify-center">
      <Image
        alt="bicicleta amarela"
        src={"/img/hero/yellowBike.jpg"}
        width={600}
        height={600}
        className="w-[450px]"
      />
    </div>
  );
};

export default FloatingImage;
