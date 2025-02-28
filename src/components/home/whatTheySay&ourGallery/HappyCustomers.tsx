import FloatingBox from "./FloatingBox";

const HappyCustomers = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="relative w-full max-w-[1160px] mx-auto px-4 py-6 sm:py-16">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 lg:gap-12">
          <div className="flex flex-col items-center lg:items-stretch gap-5 w-full sm:w-1/2 lg:w-auto  lg:pr-12 sm:border-r-[1px] border-red-500 border-solid">
            <h4 className="font-bold italic text-3xl sm:text-4xl text-red-500">153,280</h4>
            <p className="border-b-[1px] sm:border-b-0 border-red-500 border-solid pb-6">Happy Customers</p>
          </div>
          <div className="flex flex-col items-center lg:items-stretch gap-5 w-full sm:w-1/2 lg:w-auto">
            <h4 className="font-bold italic text-3xl sm:text-4xl text-red-500">1,250+</h4>
            <p>Available Items</p>
          </div>
        </div>
        <div className="hidden max-w-[580px] lg:flex absolute -top-52 right-0 ">
          <FloatingBox />
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
