import CardTestimonial from "./CardTestimonial";

const Testimonials = () => {
  const clientsList = [
    {
      img: "/img/about/testimonials/brooke-cagle-NoRsyXmHGpI-unsplash-100x100-1.jpeg",
      name: "Mary Boyles",
      city: "Syracuse, NY",
    },
    {
      img: "/img/about/testimonials/timothy-barlin-jOKB3tlCbjc-unsplash-100x100-1.jpeg",
      name: "Jimmy Chance",
      city: "Chicago, IL",
    },
    {
      img: "/img/about/testimonials/irene-strong-v2aKnjMbP_k-unsplash-100x100-1.jpeg",
      name: "Edward Smith",
      city: "San Francisco, CA",
    },
  ];

  return (
    <div className="flex justify-center bg-[#f7f7f7] py-20">
      <div className="flex flex-col items-center w-full max-w-[1240px] px-4 ">
        <div className="flex flex-col items-center gap-3 w-full sm:w-4/5 md:w-[500px] px-4 lg:px-0 pb-10">
          <h3 className="text-red-500 font-bold text-xl uppercase">
            Testimonials
          </h3>
          <h2 className="font-bold text-[28px] sm:text-4xl text-center pb-5">
            Customers Love Us
          </h2>
          <p className="text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 py-10">
          {clientsList.map((item, index) => (
            <div
              className={`${
                item.name === "Jimmy Chance" ? "border-y lg:border-x lg:border-y-0 border-red-600" : ""
              }`}
              key={index}
            >
              <CardTestimonial
                city={item.city}
                img={item.img}
                name={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
