"use client";
import { PostProp } from "@/types";
import { useEffect, useState } from "react";
import CardPost from "./CardPost";

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
      <div className="flex gap-14 w-full max-w-[1240px] px-4 py-20">
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
          <div>
            <div>form</div>
            <div>reviews e stories</div>
            <div>img bike</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBlog;
