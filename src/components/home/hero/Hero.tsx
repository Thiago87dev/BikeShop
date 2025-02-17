import HeroPart1 from "./HeroPart1";
import HeroPart2 from "./HeroPart2";
import FloatingImage from "./FloatingImage";
export default function Home() {
  return (
    <div className="relative">
      <HeroPart1 />
      <div className="hidden md:flex">
        <HeroPart2 /> {/* Componente flutuante no meio */}
      </div>
      <FloatingImage />
    </div>
  );
}