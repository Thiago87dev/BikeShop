import { useEffect, useState } from "react";
import CardReviewsStories from "./CardReviewsStories";
import { PostProp } from "@/types";

const ReviewsStories = ({ revOrStor }: { revOrStor: string }) => {
  const [dataPost, setDataPost] = useState<PostProp[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/blogPosts.json");
      const data = await response.json();
      setDataPost(data);
    };
    fetchData();
  }, []);
  return (
    <div className="bg-white w-full lg:max-w-[400px]">
      <div>
        {dataPost
          .filter((item) => item.mainCategory === revOrStor)
          .slice(0, 5)
          .map((item) => (
            <div key={item.id}>
              <CardReviewsStories img={item.img} title={item.title} id={item.id} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReviewsStories;
