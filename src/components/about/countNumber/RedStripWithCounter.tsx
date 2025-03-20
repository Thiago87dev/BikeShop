import ConterNumber from "./ConterNumber";

const RedStripWithCounter = () => {
  return (
    <div className="relative flex justify-center bg-[url('/img/about/julian-hochgesang-n6OdmJdBzp0-unsplash.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-red-700 opacity-90"></div>
      <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch w-full max-w-[1240px] px-4 text-white py-8 sm:py-0">
        <div className="flex flex-col sm:flex-row">
          <div className="py-4 sm:py-16">
            <div className="flex flex-col items-center gap-0 sm:gap-3 text-center sm:border-r border-white py-1.5 px-16">
              <h2 className="text-[42px] sm:text-6xl lg:text-[42px] font-bold italic">
                {<ConterNumber to={15329} />}
              </h2>
              <p className="text-lg">Happy Costumers</p>
            </div>
          </div>
          <div className="py-4 sm:py-16">
            <div className="flex flex-col items-center  gap-0 sm:gap-3 text-center lg:border-r border-white py-1.5 px-16">
              <h2 className="text-[42px] sm:text-6xl lg:text-[42px] font-bold italic">
                <ConterNumber to={1250} />
              </h2>
              <p className="text-lg">Available Items</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="py-4 sm:py-16">
            <div className="flex flex-col items-center gap-0 sm:gap-3 text-center  sm:border-r border-white py-1.5 px-16">
              <h2 className="text-[42px] sm:text-6xl lg:text-[42px] font-bold italic">
                <ConterNumber to={4680} />+
              </h2>
              <p className="text-lg">Bikes Sold</p>
            </div>
          </div>
          <div className="py-4 sm:py-16">
            <div className="flex flex-col  gap-0 sm:gap-3 text-center py-1.5 px-16">
              <h2 className="text-[42px] sm:text-6xl lg:text-[42px] font-bold italic">
                <ConterNumber to={684} />+
              </h2>
              <p className="text-lg">Coffee Cups</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedStripWithCounter;
