"use client";
import { PostProp } from "@/types";
import { useEffect, useState } from "react";
import CardPost from "./CardPost";
import SubscribeForm from "./SubscribeForm";
import NavReviewsStories from "./navReviewsStories/NavReviewsStories";
import Image from "next/image";

const ContentBlog = () => {
  const [postData, setPostData] = useState<PostProp[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/blogPosts.json");
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center bg-[#f7f7f7]">
      <div className="flex flex-col lg:flex-row gap-14 w-full max-w-[1240px] px-4 py-20 justify-between">
        <div>
          <div>
            <div className="flex flex-col gap-10">
              {postData.map((item) => (
                <div key={item.id}>
                  <CardPost
                    img={item.img}
                    secondaryCategory={item.secondaryCategory}
                    title={item.title}
                  />
                </div>
              ))}
            </div>
          </div>
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
