import { FaBoxOpen } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { FiRefreshCcw } from "react-icons/fi";

const RedStrip = () => {
  return (
    <div className="relative flex justify-center bg-[url('/img/blog/julian-hochgesang-n6OdmJdBzp0-unsplash7.jpg')] bg-center bg-cover">
      <div className="absolute inset-0 bg-[#a90a0a] opacity-90"></div>
      <div className="relative flex flex-col items-center gap-12 lg:gap-0 lg:items-stretch lg:flex-row justify-between w-full max-w-[1160px] text-white py-16 px-4">
        <div>
          <div className="flex items-center gap-5">
            <div>
              <div className="bg-red-600 flex items-center justify-center p-3 hover:bg-red-700 transition-colors duration-300">
                <IoIosSpeedometer size={25} />
              </div>
            </div>
            <h2 className="text-2xl font-bold">Free Test Drive</h2>
          </div>
          <div className="lg:w-[300px] pl-[68px]">
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-5">
            <div>
              <div className="bg-red-600 flex items-center justify-center p-3 hover:bg-red-700 transition-colors duration-300">
                <FaBoxOpen size={25} />
              </div>
            </div>
            <h2 className="text-2xl font-bold">Free Shipping</h2>
          </div>
          <div className="lg:w-[300px] pl-[68px]">
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-5">
            <div>
              <div className="bg-red-600 flex items-center justify-center p-3 hover:bg-red-700 transition-colors duration-300">
                <FiRefreshCcw size={25} />
              </div>
            </div>
            <h2 className="text-2xl font-bold">Free Returns</h2>
          </div>
          <div className="lg:w-[300px] pl-[68px]">
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedStrip;
