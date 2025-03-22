import Image from "next/image";

interface CardTestimonialProps {
  img: string;
  name: string;
  city: string;
}

const CardTestimonial = ({ img, name, city }: CardTestimonialProps) => {
  return (
    <div className="bg-white">
      <div className="flex flex-col gap-10  px-8 py-16">
        <h2 className="font-bold text-xl">
          Auctor Elit Sed Vulputate Mi. Accumsan Sit Amet Nulla Facilisi Morbi
          Tempus Iaculis Urna.
        </h2>
        <p className="italic text-lg font-semibold">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
          tincidunt arcu non sodales neque sodales.”
        </p>
        <div className="flex gap-5">
          <div>
            <Image
              alt="client photo"
              src={img}
              width={55}
              height={55}
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="text-red-600 font-bold text-xl">{name}</h3>
            <p className="text-lg">{city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonial;
