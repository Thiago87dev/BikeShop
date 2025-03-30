import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface CardReviewsStoriesProps {
  img: string;
  title: string;
}

const CardReviewsStories = ({ img, title }: CardReviewsStoriesProps) => {
  return (
    <div className="p-8">
      <div className="flex flex-col gap-4 lg:items-center w-full lg:max-w-[340px]">
        <div className="lg:max-w-[340px]">
          <Image className="w-full h-auto" alt="capa post categoria" src={img} width={1200} height={1200} />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl ">{title}</h2>
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
  );
};

export default CardReviewsStories;
