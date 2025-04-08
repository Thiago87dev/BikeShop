'use client'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { PostProp } from "@/types";
import { useEffect, useState } from "react";
import CardPost from "./CardPost";

const FetchingPosts = () => {
    const categorySelected = useSelector((state: RootState) => state.Category);

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
    <div>
          <div>
            <div className="flex flex-col gap-10">
              {categorySelected.selectedCategory !== "all"
                ? postData
                    .filter(
                      (item) =>
                        item.secondaryCategory ===
                        categorySelected.selectedCategory
                    )
                    .map((item) => (
                      <div key={item.id}>
                        <CardPost
                          img={item.img}
                          secondaryCategory={item.secondaryCategory}
                          title={item.title}
                          id={item.id}
                        />
                      </div>
                    ))
                : postData.map((item) => (
                    <div key={item.id}>
                      <CardPost
                        img={item.img}
                        secondaryCategory={item.secondaryCategory}
                        title={item.title}
                        id={item.id}
                      />
                    </div>
                  ))}
            </div>
          </div>
        </div>
  )
}

export default FetchingPosts