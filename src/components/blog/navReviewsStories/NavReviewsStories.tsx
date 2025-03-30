"use client";
import { useState } from "react";
import ReviewsStories from "./ReviewsStories";

const NavReviewsStories = () => {
  const [activeNavItem, setActiveNavItem] = useState("Reviews");
  return (
    <div className="w-full lg:max-w-[400px]">
      <ul className="flex gap-2 font-bold text-xl">
        <li
        onClick={() => setActiveNavItem('Reviews')}
          className={`px-4 py-3  cursor-pointer ${
            activeNavItem === "Reviews" ? "bg-white" : "hover:bg-white"
          }`}
        >
          Reviews
        </li>
        <li
        onClick={() => setActiveNavItem('Stories')}
          className={`px-4 py-3  cursor-pointer ${
            activeNavItem !== "Reviews" ? "bg-white" : "hover:bg-white"
          }`}
        >
          Stories
        </li>
      </ul>
      <div>
        <ReviewsStories revOrStor={activeNavItem}/>
      </div>
    </div>
  );
};

export default NavReviewsStories;
