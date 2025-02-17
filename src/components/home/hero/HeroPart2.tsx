import FloatingImage from "./FloatingImage";

const HeroPart2 = () => {
  return (
    <div className="relative w-full h-screen bg-green-500 flex flex-col items-center justify-center">
      <div className="md:hidden">
        <FloatingImage />
      </div>
      <h1 className="text-white text-3xl">Segundo Componente</h1>
    </div>
  );
};

export default HeroPart2;
