import Image from "next/image";
import Link from "next/link";

const TopBrands = () => {
  return (
    <div className="relative flex justify-center bg-[url('/img/about/topBrands/josh-nuttall-pIwu5XNvXp1k-unsplash.jpg')] bg-center bg-cover">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative flex flex-col lg:flex-row justify-between items-center text-white w-full max-w-[1240px] px-4 py-20">
        <div className="flex flex-col items-center lg:items-stretch gap-10 lg:w-[40%] pr-5 ">
          <h3 className="text-red-500 font-bold text-xl uppercase">
            Top Brands
          </h3>
          <h2 className="font-bold text-4xl w-full sm:w-[370px] lg:w-full text-center lg:text-left">
            Want To Take Cycling To The Next Level?
          </h2>
          <p className="text-lg text-center lg:text-left">
            Semper feugiat nibh sed pulvinar proin gravida. Non quam lacus
            suspendisse faucibus interdum.{" "}
            <span className="text-red-600 font-bold underline">
              Tellus molestie nunc non blandit
            </span>
            massa enim nec. Leo duis ut diam quam nulla porttitor. Viverra
            maecenas accumsan lacus vel facilisis volutpat est velit.
          </p>
          <Link className="w-fit h-5" href={"/shop"}>
            <button className="bg-red-600 text-white font-semibold uppercase w-max px-8 mb-16 py-5 hover:bg-red-700 transition-colors duration-200 ">
              Show More
            </button>
          </Link>
        </div>
        <div className="flex flex-col gap-20 lg:w-[50%] mt-20">
          <p className="text-lg text-center lg:text-left">
            Semper feugiat nibh sed pulvinar proin gravida. Non quam lacus
            suspendisse faucibus interdum. Tellus blandit massa enim nec. Leo
            duis ut diam quam nulla porttitor.{" "}
            <span className="text-red-600 font-bold underline">
              Viverra maecenas accumsan lacus
            </span>
            Viverra maecenas accumsan lacus vel facilisis volutpat est velit.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-16 md:gap-0  px-10 lg:px-0">
            <div className="flex flex-col sm:flex-row md:flex-col gap-20 justify-between md:justify-start sm:w-[420px] md:w-full items-center sm:items-stretch">
              <div>
                <Image
                  alt="logomarca"
                  src={"/img/about/topBrands/logoipsum-logo-10.webp"}
                  width={163}
                  height={50}
                />
              </div>
              <div>
                <Image
                  alt="logomarca"
                  src={"/img/about/topBrands/logoipsum-logo-50.webp"}
                  width={153}
                  height={40}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-20 justify-between items-center md:justify-start sm:w-[420px] md:w-full">
              <div>
                <Image
                  alt="logomarca"
                  src={"/img/about/topBrands/logoipsum-logo-11.webp"}
                  width={119}
                  height={30}
                />
              </div>
              <div>
                <Image
                  alt="logomarca"
                  src={"/img/about/topBrands/logoipsum-logo-18.webp"}
                  width={147}
                  height={70}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-20 justify-between items-center sm:items-end md:justify-start sm:w-[420px] md:w-full">
              <div className="sm:w-32">
                <Image
                  alt="logomarca"
                  src={"/img/about/topBrands/logoipsum-logo-38.png"}
                  width={78}
                  height={35}
                />
              </div>
              <div>
                <Image
                  alt="logomarca"
                  src={"/img/about/topBrands/logoipsum-logo-312.webp"}
                  width={150}
                  height={60}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
