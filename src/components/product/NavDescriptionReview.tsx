import { useState } from "react";
import Description from "./Description";

interface NavDescriptionReviewProp {
    id: string;
  }

const NavDescriptionReview = ({id}:NavDescriptionReviewProp) => {
  const [descriptionSelected, setDescriptionSelected] = useState(true);

  return (
    <div className="flex flex-col items-center bg-[#f7f7f7]">
      <nav className="bg-white w-full max-w-[1240px] px-4">
        <ul className="relative flex mt-20 mb-10 border-b border-solid border-gray-400">
          <li
            onClick={() => setDescriptionSelected(true)}
            className={`absolute font-bold bottom-[-1px] px-3 py-2 mx-2 border-t border-l border-r border-b border-solid border-gray-400 rounded-sm cursor-pointer ${
              descriptionSelected ? "border-b-white" : ""
            }`}
          >
            Description
          </li>
          <li
            onClick={() => setDescriptionSelected(false)}
            className={`absolute font-bold bottom-[-1px] px-3 py-2 mx-[132px] border-t border-l border-r border-b border-solid border-gray-400 rounded-sm cursor-pointer ${
              descriptionSelected ? "" : "border-b-white"
            }`}
          >
            Reviews (0)
          </li>
        </ul>
      </nav>
      <div className="bg-white w-full max-w-[1240px] ">
        {descriptionSelected ?( <Description id={id}/>):(<h1></h1>)}
       
      </div>
    </div>
  );
};

export default NavDescriptionReview;
