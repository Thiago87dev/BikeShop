import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { setBlogCategory } from "@/redux/blogCategorySelected/slice";

interface CardPostProps {
  secondaryCategory: string;
  title: string;
  img: string;
}

const CardPost = ({ secondaryCategory, title, img }: CardPostProps) => {
  const dispatch = useDispatch();

  const handleCategoryClick = (category: string) => {
    dispatch(setBlogCategory(category));
    window.scrollTo(0,0)
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-white ">
        <Link href={"#"}>
          <div className="w-full h-[400px] md:w-[282px] md:h-[282px] overflow-hidden relative cursor-pointer">
            <Image
              className="object-cover"
              alt="post blog"
              src={img}
              layout="fill"
            />
          </div>
        </Link>
        <div className="px-6 py-5 w-full max-w-[552px]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h3
                onClick={() => handleCategoryClick(secondaryCategory)}
                className="text-red-500 font-bold cursor-pointer w-fit"
              >
                {secondaryCategory}
              </h3>
              <Link href={"#"} className="w-fit">
                <h2 className="font-bold text-2xl hover:text-red-600">
                  {title}
                </h2>
              </Link>
            </div>
            <p className="text-lg">
              Arcu non odio euismod lacinia. Sit amet cursus sit amet dictum
              sit. Nunc pulvinar sapien…
            </p>
            <div className="hover:text-red-600">
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
