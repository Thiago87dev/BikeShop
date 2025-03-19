import ConterNumber from "./ConterNumber";

const RedStripWithCounter = () => {
  return (
    <div className="relative flex justify-center bg-[url('/img/about/julian-hochgesang-n6OdmJdBzp0-unsplash.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-red-700 opacity-90"></div>
      <div className="relative flex w-full max-w-[1240px] px-4 text-white">
        <div className="flex">
          <div className="py-16">
            <div className="flex flex-col items-center gap-3   border-r border-white py-1.5 px-16">
              <h2 className="text-5xl font-bold italic">
                {<ConterNumber to={15329} />}
              </h2>
              <p className="text-lg">Happy Costumers</p>
            </div>
          </div>
          <div className="  py-16 ">
            <div className="flex flex-col items-center gap-3  border-r border-white py-1.5 px-16">
              <h2 className="text-5xl font-bold italic">
                <ConterNumber to={1250} />
              </h2>
              <p className="text-lg">Available Items</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className=" py-16 ">
            <div className="flex flex-col items-center gap-3 border-r border-white py-1.5 px-16">
              <h2 className="text-5xl font-bold italic">
                <ConterNumber to={4680} />+
              </h2>
              <p className="text-lg">Bikes Sold</p>
            </div>
          </div>
          <div className=" py-16 ">
            <div className="flex flex-col  gap-3 py-1.5 px-16">
              <h2 className="text-5xl font-bold italic">
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
