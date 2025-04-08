import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { PostProp } from "@/types";
import Image from "next/image";

const ContentPost = () => {
  const [post, setPost] = useState<PostProp | null>(null);
  const id = useSelector((state: RootState) => state.IdNumber);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/blogPosts.json");
        const data: PostProp[] = await response.json();
        const foundPost = data.find((post) => post.id === id.numberId);
        if (foundPost) {
          setPost(foundPost);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);
  if (!post) {
    return (
      <div className="w-full text-center py-8">Nenhum post encontrado</div>
    );
  }
  return (
    <div className="flex flex-col gap-5 w-full items-center lg:items-stretch bg-white p-4 sm:p-8">
      <h2 className="text-red-600 font-bold ">{post.secondaryCategory}</h2>
      <h1 className="text-[40px] font-bold leading-none text-center lg:text-left">{post.title}</h1>
      <div className="flex gap-2 items-center text-sm">
        <p>By {post.author}</p>
        <div className="w-1 h-1 bg-black rounded-full"></div>
        <p>{post.publishedAt}</p>
      </div>
      {post.img && (
        <Image alt="blog content" src={post?.img} width={1200} height={1200} />
      )}
    </div>
  );
};

export default ContentPost;
