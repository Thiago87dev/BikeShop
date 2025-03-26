import { FaRegMap } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
const IfYouNeed = () => {
  return (
    <div className="flex justify-center bg-[#fbfbfb] md:py-20">
      <div className="flex flex-col gap-10 w-full max-w-[1240px] sm:px-4">
        <div className="relative bg-[url('/img/contact/coen-van-de-broek-OFyh9TpMyM8-unsplash.jpg')] bg-center bg-cover text-white">
        <div className="absolute inset-0 bg-[#ae0808] opacity-90"></div>
          <div className="relative flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0 sm:p-24 py-16 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left font-bold lg:w-[60%] capitalize">If you need more information please <span className="whitespace-nowrap">contact us</span></h2>
            <button className="bg-red-600 text-white font-semibold uppercase block px-8 py-5 hover:bg-red-700 transition-colors duration-200 ">
              get in touch
            </button>
          </div>
        </div>
        <div className="bg-white flex flex-col lg:flex-row gap-10 lg:gap-0 sm:px-20 py-10 justify-between px-4">
          <div className="flex items-center gap-4">
            <div className="text-white bg-red-600 p-3"><MdOutlineMail size={30} /></div>
            <div>
              <h3 className="font-bold text-2xl">Email us</h3>
              <p className="text-lg">example@bike-shop</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white bg-red-600 p-3"><FaRegMap size={30} /></div>
            <div>
              <h3 className="font-bold text-2xl">Address</h3>
              <p className="text-lg">Manhattan Beach, CA</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white bg-red-600 p-3"><IoCallOutline size={30} /></div>
            <div>
              <h3 className="font-bold text-2xl">Call Us</h3>
              <p className="text-lg">+1 (323)-456-91-23</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IfYouNeed;
