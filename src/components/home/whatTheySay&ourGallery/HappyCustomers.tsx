import FloatingBox from "./FloatingBox";

const HappyCustomers = () => {
  return (
    <div className="bg-[#efefef]">
      <div className="relative w-full max-w-[1160px] mx-auto px-4 py-16">
        <div className="flex gap-12">
          <div className="flex flex-col gap-5 border-r-[1px] pr-12 border-red-500 border-solid">
            <h4 className="font-bold italic text-4xl text-red-500">153,280</h4>
            <p>Happy Customers</p>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="font-bold italic text-4xl text-red-500">1,250+</h4>
            <p>Available Items</p>
          </div>
        </div>
        <div className="absolute -top-52 right-0 ">
          <FloatingBox />
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
