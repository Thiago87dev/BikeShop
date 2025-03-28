import Link from "next/link";

const StripBlog = () => {
  return (
    <div>
      <div className="bg-[#3c3638]">
        <div className="flex flex-col items-center justify-center gap-4 h-[200px] text-white">
          <h1 className="text-[50px] font-bold">Blog</h1>
          <p>
            <Link href={"/"}>
              <span className="underline">Home</span>
            </Link>{" "}
            / Blog
          </p>
        </div>
      </div>
    </div>
  );
};

export default StripBlog;
