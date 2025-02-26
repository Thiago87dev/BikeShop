import Image from "next/image";

const FloatingBox = () => {
  return (
    <div className="bg-white max-w-[580px] shadow-xl">
      <div className="flex flex-col gap-8 pt-14 pb-16 px-10">
        <h2 className="font-bold text-xl">
          Auctor Elit Sed Vulputate Mi. Accumsan Sit Amet Nulla Facilisi Morbi
          Tempus Iaculis Urna.
        </h2>
        <p className="italic text-xl">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
          tincidunt arcu non sodales neque sodales.”
        </p>
        <div className="flex gap-5">
          <Image
            alt="person photo"
            src={"/img/whatTheySay/photo.jpeg"}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <h3 className="text-red-600 font-bold text-xl">Mary Boyles</h3>
            <p>Chicago, IL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingBox;
