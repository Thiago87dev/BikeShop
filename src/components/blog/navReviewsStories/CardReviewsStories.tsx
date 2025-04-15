import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface CardReviewsStoriesProps {
  img: string;
  title: string;
  id: number;
}

const CardReviewsStories = ({ img, title, id }: CardReviewsStoriesProps) => {
  return (
    <div className="p-8">
      <div className="flex flex-col gap-4 lg:items-center w-full lg:max-w-[340px]">
        <Link
          href={`/blog/post/${id}`}
        >
          <div className="lg:max-w-[340px]">
            <Image
              className="w-full h-auto"
              alt="capa post categoria"
              src={img}
              width={1200}
              height={1200}
            />
          </div>
        </Link>
        <div className="flex flex-col gap-5">
          <Link href={`/blog/post/${id}`}>
          <h2 className="font-bold text-xl hover:text-red-600">{title}</h2>
          </Link>
          <div>
            <Link
              className="flex gap-2 items-center w-fit hover:text-red-600"
              href={`/blog/post/${id}`}
            >
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
