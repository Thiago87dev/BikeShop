import FoundersCard from "./FoundersCard";

const OurTeam = () => {
  const ourTeam = [
    {
      id: 1,
      name: "James Sauer",
      role: "Founder",
      img: "/img/about/ourTeam/jose-pablo-dominguez-u-44O2dpwVU-unsplash.jpg",
    },
    {
      id: 3,
      name: "James Holtzman",
      role: "Sales Director",
      img: "/img/about/ourTeam/dmitriy-frantsev-pI5pWMIkASs-unsplash.jpg",
    },
    {
      id: 2,
      name: "Patricia Griffin",
      role: "Product Developer",
      img: "/img/about/ourTeam/keriliwi-2GPP1a1SMl4-unsplash.jpg",
    },
  ];
  return (
    <div className="flex justify-center bg-[#f7f7f7] pt-20 pb-28">
      <div className="flex flex-col items-center w-full max-w-[1240px] px-4 ">
        <div className="flex flex-col items-center gap-3 w-full sm:w-4/5 md:w-[400px] px-4 lg:px-0 pb-10">
          <h3 className="text-red-500 font-bold text-xl uppercase">Our Team</h3>
          <h2 className="font-bold text-3xl sm:text-4xl text-center pb-5">
            Meet The Founders
          </h2>
          <p className="text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          {ourTeam.map((item) => (
            <div  key={item.id}>
              <FoundersCard img={item.img} name={item.name} role={item.role} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
