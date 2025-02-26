import HappyCustomers from "./HappyCustomers";

const WhatTheySay = () => {
  return (
    <div>
      <div className="relative flex flex-col bg-[url('/img/whatTheySay/bg-image-blue-bike.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#a90a0a] opacity-90"></div>
        <div className="relative w-full max-w-[1160px] mx-auto px-4">
          <div className="w-[638px]">
            <h3 className="uppercase text-white font-bold text-xl mt-16 mb-8">
              what they say about us
            </h3>
            <h2 className="text-white font-bold text-5xl mb-12">
              Check Out What’s Going On In The Store. Hurry Up!
            </h2>
            <p className="text-white w-[69%] mb-8">
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
    </div>
  );
};

export default WhatTheySay;
