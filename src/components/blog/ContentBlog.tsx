"use client";

import DefaultContent from "../post/DefaultContent";
import SubscribeForm from "./SubscribeForm";
import NavReviewsStories from "./navReviewsStories/NavReviewsStories";
import Image from "next/image";

interface ContentBlogProps {
  Component: React.FC
  post?: boolean
}

const ContentBlog = ({ Component, post=false }: ContentBlogProps) => {
  return (
    <div className="flex justify-center bg-[#f7f7f7]">
      <div className="flex flex-col lg:flex-row gap-14 w-full max-w-[1240px] px-4 py-20 justify-between">
        <div className="lg:w-[80%]">
          <Component />
          {post && (
            <DefaultContent/>
          )}
        </div>
        <div>
          <div className="flex flex-col gap-5 w-full lg:max-w-[300px]">
            <div>
              <SubscribeForm />
            </div>
            <div>
              <NavReviewsStories />
            </div>
            <div>
              <Image
                alt="niner air 2 bike"
                src={"/img/blog/banner-3.png"}
                width={374}
                height={374}
                className="lg:w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBlog;
