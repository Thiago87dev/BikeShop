"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Modal = () => {
  const listModal = [
    {
      id: 1,
      title: "What Shipping Methods are Available?",
      text: "Lorem ipsum dolor sit amet. Non impedit officia aut quasi vitae et autem neque et sapiente consequatur in totam incidunt et enim enim eos quia provident! Sit itaque ipsam et sint dolore 33 obcaecati.",
    },
    {
      id: 2,
      title: "How about the return policy?",
      text: "Qui dolor accusamus At consequatur rerum est quia assumenda eos Quis necessitatibus qui tenetur magnam. Aut modi tempore ut voluptatem accusantium et voluptatibus optio et enim esse aut dolores nobis et odio voluptate.",
    },
    {
      id: 3,
      title: "Does free shipping include returns as well?",
      text: "Qui possimus molestiae ut alias earum ab dolores quasi a officia voluptatem qui amet voluptatem. Ut omnis natus et necessitatibus dolorum qui maxime voluptatum id corporis sapiente id nesciunt necessitatibus et fugiat quisquam ut suscipit voluptatem.",
    },
    {
      id: 4,
      title: "How to purchase a gift card?",
      text: "Est enim maxime hic natus fugiat et earum repudiandae aut laudantium quia ut dolores dolore vel rerum autem. Qui magni deleniti ut molestiae soluta et commodi neque ut praesentium veniam rem natus neque et laboriosam dolorum nam assumenda rerum.",
    },
    {
      id: 5,
      title: "what’s the coupon code policy?",
      text: "Aut vero voluptatem aut libero porro aut iure rerum est galisum laboriosam sed doloremque dolorem ut consectetur mollitia. Id doloremque odio et fuga consequatur aut tempore aspernatur aut alias dolorem et optio fuga.",
    },
  ];

  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id:number) => {
    setActiveId((prevId) => (prevId === id ? null : id))
  }

  return (
    <div className={`transition-all duration-300 ease-in-out ${activeId ?"min-h-[580px]":"min-h-0"}`}>
      {listModal.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center gap-1 select-none"
        >
          <div
            onClick={() => handleToggle(item.id)}
            className={`flex items-center gap-4 bg-white p-6 cursor-pointer ${
                activeId === item.id ? "shadow-lg" : ""
            } hover:shadow-none`}
          >
            {activeId === item.id ? (
              <IoIosArrowUp size={25} />
            ) : (
              <IoIosArrowDown size={25} />
            )}

            <h2 className="font-bold text-lg">{item.title}</h2>
          </div>

          <AnimatePresence>
            {activeId === item.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                 <p className="p-6 text-lg">{item.text}</p>
              </motion.div>
            )}
          </AnimatePresence>
           
          
        </div>
      ))}
    </div>
  );
};

export default Modal;
