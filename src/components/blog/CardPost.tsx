import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface CardPostProps {
  secondaryCategory: string;
  title: string;
  img: string;
}

const CardPost = ({ secondaryCategory, title, img }: CardPostProps) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-white ">
        <Link href={"#"}>
          <div className="w-full h-[400px] md:w-[282px] md:h-[282px] overflow-hidden relative cursor-pointer">
            <Image className="object-cover" alt="post blog" src={img} layout="fill" />
          </div>
        </Link>
        <div className="px-6 py-5 w-full max-w-[552px]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Link href={"#"} className="w-fit">
                <h3 className="text-red-500 font-bold">{secondaryCategory}</h3>
              </Link>
              <Link href={"#"} className="w-fit">
                <h2 className="font-bold text-2xl">{title}</h2>
              </Link>
            </div>
            <p className="text-lg">
              Arcu non odio euismod lacinia. Sit amet cursus sit amet dictum
              sit. Nunc pulvinar sapien…
            </p>
            <div>
              <Link className="flex gap-2 items-center w-fit" href={"#"}>
                <p className="uppercase font-bold">Read more</p>
                <div>
                  <HiOutlineArrowNarrowRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPost;
