import Image from "next/image";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

interface FoundersCardProps {
  img: string
  name: string
  role: string
}

const FoundersCard = ({img, name, role}:FoundersCardProps) => {
  return (
    <div className="bg-white p-[30px] shadow-md">
      <div>
        <div>
          <Image
            alt="founder"
            src={img}
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 pt-8">
          <div className=" text-center sm:text-left">
            <h2 className="font-bold text-xl">{name}</h2>
            <p className="text-lg">{role}</p>
          </div>
          <div className="flex gap-5 lg:gap-3 text-red-500 items-center">
            <FaFacebookSquare className="cursor-pointer active:scale-90" title="Facebook"  size={20}/>
            <FaSquareXTwitter className="cursor-pointer active:scale-90" title="Twitter" size={20}/>
            <FaYoutube className="cursor-pointer active:scale-90" title="Youtube" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersCard;
