import { useEffect, useState } from "react";
import { PostProp } from "@/types";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

const PreviousNextPost = () => {
  const [previousPost, setPreviousPost] = useState<PostProp | null>(null);
  const [nextPost, setNextPost] = useState<PostProp | null>(null);
  const id = useSelector((state: RootState) => state.IdNumber);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/blogPosts.json");
        const data: PostProp[] = await response.json();
        const foundPreviousPost = data.find(
          (item) => item.id === id.numberId + 1
        );
        if (foundPreviousPost) {
          setPreviousPost(foundPreviousPost);
        } else {
          setPreviousPost(null);
        }
        const foundNextPost = data.find((item) => item.id === id.numberId - 1);
        if (foundNextPost) {
          setNextPost(foundNextPost);
        } else {
          setNextPost(null);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id, nextPost, previousPost]);
  return (
    <div className="flex justify-between mt-10">
      <div className="flex flex-col gap-3 cursor-pointer hover:text-red-600">
        {previousPost ? (
          <Link href={`/blog/post/${id.numberId + 1}`}>
            <div className="flex items-center gap-2 font-bold text-lg">
              <HiOutlineArrowNarrowLeft className="mt-1" />
              <p>Previous</p>
            </div>
          </Link>
        ) : (
          <p></p>
        )}
        <Link href={`/blog/post/${id.numberId + 1}`}>
          <div className="text-lg pr-2">{previousPost?.title}</div>
        </Link>
      </div>
      <div className="w-px bg-gray-300"></div>
      <div className="flex flex-col gap-3 cursor-pointer hover:text-red-600">
        {nextPost ? (
          <Link href={`/blog/post/${id.numberId - 1}`}>
            <div className="flex justify-end items-center gap-2 font-bold text-lg">
              <p>Next</p>
              <HiOutlineArrowNarrowRight className="mt-1" />
            </div>
          </Link>
        ) : (
          <p></p>
        )}
        <Link href={`/blog/post/${id.numberId - 1}`}>
          <div className="text-lg text-right pl-2">{nextPost?.title}</div>
        </Link>
      </div>
    </div>
  );
};

export default PreviousNextPost;
