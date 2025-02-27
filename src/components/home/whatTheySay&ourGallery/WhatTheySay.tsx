import FloatingBox from "./FloatingBox";
import HappyCustomers from "./HappyCustomers";

const WhatTheySay = () => {
  return (
    <div className="mt-40 sm:mt-0">
      <div className="relative flex flex-col bg-[url('/img/whatTheySay/bg-image-blue-bike.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#a90a0a] opacity-90"></div>
        <div className="relative flex flex-col items-center lg:items-stretch text-center lg:text-left w-full max-w-[1160px] mx-auto px-4">
          <div className="lg:w-[638px]">
            <h3 className="uppercase text-white font-bold text-xl mt-16 mb-8">
              what they say about us
            </h3>
            <h2 className="text-white font-bold text-4xl md:text-5xl md:w-[700px] lg:w-full mx-auto mb-12">
              Check Out What’s Going On In The Store. Hurry Up!
            </h2>
            <p className="text-white mx-4 sm:mx-10 lg:mx-0 lg:w-[69%] mb-8">
              Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Sed
              vulputate mi sit amet mauris. Egestas dui id ornare arcu odio.
              Eget est lorem ipsum dolor sit amet consectetur adipiscing.
            </p>
            <button className="relative bg-red-500 text-white font-semibold uppercase w-max px-8 mb-16 py-5 hover:bg-red-700 transition-colors duration-200">
              all reviews
            </button>
          </div>
        </div>
      </div>
      <div>
        <HappyCustomers />
      </div>
      <div className="flex lg:hidden px-4 bg-[#efefef]">
        <FloatingBox/>
      </div>
    </div>
  );
};

export default WhatTheySay;
