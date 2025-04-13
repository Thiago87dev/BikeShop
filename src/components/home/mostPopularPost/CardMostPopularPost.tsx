import { CardPostProp } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardMostPopularPost = ({
  img,
  title,
  secondaryCategory,
  id,
}: CardPostProp) => {
  return (
    <div className="bg-white shadow-lg flex flex-col">
      <div>
        <Link href={`/blog/post/${id}`}>
          <Image alt="imagem" src={img} width={590} height={395} />
        </Link>
      </div>
      <div className="flex flex-col gap-2 px-7 pt-7 pb-5 flex-grow">
        <h3 className="text-red-600 font-bold">{secondaryCategory}</h3>
        <Link href={`/blog/post/${id}`}>
          <h2 className="font-bold text-xl line-clamp-2 h-20 hover:text-red-600">{title}</h2>
        </Link>
      </div>
    </div>
  );
};

export default CardMostPopularPost;
