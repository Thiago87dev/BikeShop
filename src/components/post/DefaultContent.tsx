import Image from "next/image";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const DefaultContent = () => {
  return (
    <div className="flex flex-col gap-5 w-full items-center lg:items-stretch bg-white p-4 sm:p-8 text-lg">
      <p className="first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
        Arcu non odio euismod lacinia. Sit amet cursus sit amet dictum sit. Nunc
        pulvinar sapien et ligula ullamcorper. Pellentesque diam volutpat
        commodo sed egestas. Tellus elementum sagittis vitae et leo duis ut diam
        quam. Eleifend donec pretium vulputate sapien nec sagittis aliquam
        malesuada bibendum. At risus viverra adipiscing at in tellus. Duis at
        tellus at urna condimentum mattis pellentesque.
      </p>

      <p>
        Aliquam purus sit amet luctus venenatis lectus. Rhoncus dolor purus non
        enim praesent elementum facilisis leo. Tellus integer feugiat
        scelerisque varius morbi. Augue mauris augue neque gravida in fermentum
        et sollicitudin ac.
      </p>
      <h2 className="font-bold text-[40px] leading-normal capitalize">
        Scelerisque eu ultrices vitae auctor eu lectus.
      </h2>
      <p>
        Arcu odio ut sem nulla pharetra diam sit. Sit amet nisl suscipit
        adipiscing bibendum est ultricies. Habitasse platea dictumst vestibulum
        rhoncus est pellentesque elit. Ornare aenean euismod elementum nisi quis
        eleifend quam adipiscing.
      </p>
      <Image
        alt="men in bike"
        src={"/img/hero/bikes3.jpg"}
        width={1200}
        height={1200}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center ">
          <IoMdCheckmarkCircleOutline className="mt-1" />
          <Link className="text-red-600 underline font-bold" href={"#"}>
            Cycling Sunglasses Worn at Tour de France
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <IoMdCheckmarkCircleOutline className="mt-1" />
          <Link className="text-red-600 underline font-bold" href={"#"}>
            Wheelsets Ridden at the Tour de France
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <IoMdCheckmarkCircleOutline className="mt-1" />
          <Link className="text-red-600 underline font-bold" href={"#"}>
            Bike Tires Ridden at the Tour de France
          </Link>
        </div>
      </div>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="flex justify-between">
        <Image
          alt="men in bike"
          src={"/img/saleUpTo/josh-nuttall.jpg"}
          width={380}
          height={380}
        />
        <Image
          alt="men in bike"
          src={"/img/blog/pexels-cottonbro-5465057-768x512.jpg"}
          width={380}
          height={380}
        />
      </div>
      <h2 className="font-bold text-[40px] leading-normal capitalize">
        Eget est lorem ipsum amet consectetur adipiscing.
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="flex flex-col gap-3 border-l-4 border-black pl-4">
        <p className="italic">
          Viverra aliquet eget sit amet. At ultrices mi tempus imperdiet nulla.
          Arcu dui vivamus arcu felis bibendum ut. Arcu cursus euismod quis
          viverra nibh. Cursus vitae congue mauris rhoncus. Faucibus ornare
          suspendisse sed nisi lacus sed viverra.
        </p>
        <p className="text-sm text-red-600 font-bold">John Doe</p>
      </div>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga.
      </p>
    </div>
  );
};

export default DefaultContent;
