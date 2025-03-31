"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { setBlogCategory } from "@/redux/blogCategorySelected/slice";

const StripBlog = () => {
  const dispatch = useDispatch();
  const categorySelected = useSelector((state: RootState) => state.Category);
  return (
    <div>
      <div className="bg-[#3c3638]">
        <div className="flex flex-col items-center justify-center gap-4 h-[200px] text-white">
          {categorySelected.selectedCategory !== "all" ? (
            <h1 className="text-[50px] font-bold">
              {categorySelected.selectedCategory}
            </h1>
          ) : (
            <h1 className="text-[50px] font-bold">Blog</h1>
          )}

          {categorySelected.selectedCategory !== "all" ? (
            <p>
              <Link href={"/"}>
                <span className="underline">Home</span>
              </Link>{" "}
              /{" "}
              <Link href={"/blog"}>
                <span
                  onClick={() => dispatch(setBlogCategory("all"))}
                  className="underline"
                >
                  Blog
                </span>
              </Link>{" "}
              / {categorySelected.selectedCategory}
            </p>
          ) : (
            <p>
              <Link href={"/"}>
                <span className="underline">Home</span>
              </Link>{" "}
              / Blog
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StripBlog;
