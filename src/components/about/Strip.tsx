const Strip = () => {
  return (
    <div className="relative bg-[url('/img/about/tony-pham-K2xGNNcQn_w-unsplash.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative flex flex-col items-center text-white py-20">
        <h2 className="text-red-600 font-bold text-xl uppercase">
          Our History
        </h2>
        <h1 className="text-center text-5xl font-bold w-full sm:w-[360px] px-4 sm:px-0 pt-5 pb-8">
          About Us
        </h1>
        <p className="w-full sm:w-[440px] px-4 sm:px-0 text-center text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar.
        </p>
      </div>
    </div>
  );
};

export default Strip;
