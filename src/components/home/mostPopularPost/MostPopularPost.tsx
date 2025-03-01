"use client";
import { PostProp } from "@/types";
import { useEffect, useState } from "react";
import CardMostPopularPost from "./CardMostPopularPost";

const MostPopularPost = () => {
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
    <div className="flex justify-center bg-[#f7f7f7] ">
      <div className="flex flex-col items-center w-full px-4">
        <div className="flex flex-col justify-center gap-5 w-[460px] pt-20 pb-14">
          <h3 className="text-red-500 font-bold text-xl text-center">Latest News</h3>
          <h2 className="font-bold text-4xl text-center ">Most Popular Post</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 w-full pb-10">
          {postData
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 3)
            .map((item) => (
              <div className=" max-w-[590px]" key={item.id}>
                <CardMostPopularPost
                  img={item.img}
                  secondaryCategory={item.secondaryCategory}
                  title={item.title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopularPost;
