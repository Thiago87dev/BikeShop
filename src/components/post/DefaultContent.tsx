import Image from "next/image";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Carousel from "./Carousel";
import { TbTriangleInvertedFilled } from "react-icons/tb";

const DefaultContent = () => {
  return (
    <div className="flex flex-col gap-5 w-full bg-white p-4 sm:p-8 text-lg">
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
      <h2 className="font-bold text-3xl md:text-[40px] leading-normal capitalize">
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
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <Image
            alt="men in bike"
            src={"/img/saleUpTo/josh-nuttall.jpg"}
            width={380}
            height={380}
            className="w-full md:w-[600px] lg:w-[380px]"
          />
        </div>
        <div>
          <Image
            alt="men in bike"
            src={"/img/blog/pexels-cottonbro-5465057-768x512.jpg"}
            width={380}
            height={380}
            className="w-full md:w-[600px] lg:w-[380px]"
          />
        </div>
      </div>
      <h2 className="font-bold text-3xl md:text-[40px] leading-normal capitalize">
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
      <div>
        <Carousel />
      </div>
      <h2 className="font-bold text-3xl md:text-[38px] leading-normal capitalize">
        Donec ultrices tincidunt arcu non sodales.
      </h2>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus.
      </p>
      <div className="flex flex-col md:flex-row md:gap-12 ">
        <div className="flex flex-col">
          <p className="py-4">
            <span className="font-bold">1.</span> Bibendum est ultricies integer
            quis. Risus quis varius quam quisque id diam vel. Lorem mollis
            aliquam ut porttitor leo a diam sollicitudin.
          </p>
          <p className="py-4">
            <span className="font-bold ">2.</span> Faucibus scelerisque eleifend
            donec pretium vulputate sapien nec. Aliquet bibendum enim facilisis
            gravida neque convallis. In hendrerit gravida rutrum.
          </p>
        </div>
        <div className="flex flex-col ">
          <p className="py-4">
            <span className="font-bold">3.</span> Mi eget mauris pharetra et
            ultrices neque ornare aenean euismod. Habitasse platea dictumst
            quisque sagittis purus sit amet volutpat.
          </p>
          <p className="py-4">
            <span className="font-bold">4.</span> Vulputate sapien nec sagittis
            aliquam malesuada bibendum arcu. Dolor morbi non arcu risus quis
            varius quam quisque id. Mattis rhoncus urna neque viverra justo nec.
          </p>
        </div>
      </div>
      <div>
        <Image
          alt="men in bike"
          src={"/img/blog/murillo-de-paula-o2FCfhNSjPo-unsplash-1024x683.jpg"}
          width={1200}
          height={1200}
        />
      </div>
      <p>
        Viverra nibh cras pulvinar mattis nunc sed blandit. Aliquet eget sit
        amet tellus cras adipiscing enim. Rutrum quisque non tellus orci ac
        auctor augue mauris. Maecenas volutpat blandit aliquam etiam erat velit.
        Quisque non tellus orci ac auctor augue mauris augue neque. Augue lacus
        viverra vitae congue eu consequat ac felis. Sit amet risus nullam eget
        felis eget nunc lobortis.
      </p>
      <div className="flex flex-col gap-10 bg-[#f7f7f7] p-10 pt-20 relative mt-20 ">
        <div className="absolute flex justify-center items-center -top-5 left-1/2 -translate-x-1/2 w-[70px] h-[70px] bg-red-600 rounded-full">
          <svg
            className="w-8 h-8 text-white"
            viewBox="0 0 8 8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 0l-3 3v3h3v-6zm5 0l-3 3v3h3v-6z"
              transform="translate(0 1)"
            />
          </svg>
        </div>
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center capitalize px-2 sm:px-8">
          Lectus proin nibh nisl condimentum id venenatis a condimentum?
        </h2>
        <p className="text-center">
          Neque laoreet suspendisse interdum consectetur libero id faucibus.
          Massa sed elementum tempus egestas sed sed risus pretium. In nulla
          posuere sollicitudin aliquam ultrices sagittis orci. Aliquam
          vestibulum morbi blandit cursus risus. Scelerisque eu ultrices vitae
          auctor eu augue ut lectus.
        </p>
        <div className="absolute text-[#f7edf1] -bottom-5 left-1/2 -translate-x-1/2">
          <TbTriangleInvertedFilled size={25} />
        </div>
      </div>
      <div className="flex flex-col items-center pl-20 mt-2">
        <div>
          <h3 className="text-base font-bold">Donald Dyer</h3>
          <p className="text-base">Professional Cyclist</p>
        </div>
      </div>
      <p className="mt-10">
        Viverra nibh cras pulvinar mattis nunc sed blandit. Aliquet eget sit
        amet tellus cras adipiscing enim. Rutrum quisque non tellus orci ac
        auctor augue mauris. Maecenas volutpat blandit Viverra orci sagittis eu
        volutpat odio facilisis mauris sit. Facilisi cras fermentum odio eu
        feugiat pretium. Aliquam purus sit amet luctus. Euismod quis viverra
        nibh cras. Sed faucibus turpis in eu mi bibendum. Turpis tincidunt id
        aliquet risus feugiat in ante.
      </p>
      <div className="flex flex-col md:flex-row gap-10 mt-10">
        <div>
          <Image
            alt="men in bike"
            src={"/img/bestOffer/pexels-cottonbro-600x900.jpg"}
            width={960}
            height={960}
          />
        </div>
        <div className="flex flex-col gap-10 justify-between">
          <p>
            Volutpat maecenas volutpat blandit aliquam etiam. Arcu odio ut sem
            nulla pharetra diam sit. Sit amet nisl suscipit adipiscing bibendum
            est ultricies.
          </p>
          <p>
            Ornare aenean euismod elementum nisi quis eleifend quam adipiscing.
            Morbi leo urna molestie at. Tempus urna et pharetra pharetra massa
            massa ultricies mi. Massa sed elementum tempus egestas sed sed risus
          </p>
          <p>
            Tellus integer feugiat scelerisque varius morbi. Augue mauris augue
            neque gravida in fermentum et sollicitudin ac. Diam ut venenatis
            tellus in metus vulputate eu scelerisque felis. Commodo sed egestas
            egestas fringilla phasellus faucibus.
          </p>
        </div>
      </div>
      <p className="mt-8">
        Congue eu consequat ac felis donec et. Turpis tincidunt id aliquet risus
        feugiat in ante metus dictum. Leo vel orci porta non pulvinar neque.
        Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus
        scelerisque. Vitae tortor condimentum lacinia quis vel eros. Ac orci
        phasellus egestas tellus rutrum tellus pellentesque. Id neque aliquam
        vestibulum morbi. Hac habitasse platea dictumst quisque sagittis purus
        sit amet.
      </p>
    </div>
  );
};
export default DefaultContent;
