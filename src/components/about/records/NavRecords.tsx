"use client";
import { useEffect, useState, useRef } from "react";
import Texts from "./Texts";

const NavRecords = () => {
  const [activeNavItem, setActiveNavItem] = useState("2014");
  const [activeNavItemBefore, setActiveNavItemBefore] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const textsContainerRef = useRef<{ [key: string]: HTMLLIElement | null }>(
    {}
  );

  const navItems = ["2014", "2018", "2020", "2022"];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMobile && activeNavItem === "0")
      setActiveNavItem(activeNavItemBefore);
  }, [isMobile, activeNavItem, activeNavItemBefore]);

  const handleNavItemClick = (item: string) => {
    if (isMobile) {
      if (item === activeNavItem) {
        setActiveNavItem("0");
        setActiveNavItemBefore(item);
      } else {
        setActiveNavItem(item);

        setTimeout(() => {
          textsContainerRef.current[item]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    } else {
      setActiveNavItem(item);
    }
  };

  return (
    <div className="w-[95vw] sm:w-full ">
      <nav className="max-w-[624px] sm:border-b-4 sm:border-b-red-600 ">
        <ul className="flex flex-col sm:flex-row gap-2">
          {navItems.map((item, index) => (
            <div key={index}>
              <li
                ref={(el) => {
                  textsContainerRef.current[item] = el;
                }}
                className={`font-bold text-xl p-3 hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer ${
                  activeNavItem === item
                    ? "bg-red-600 text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => handleNavItemClick(item)}
              >
                {item}
              </li>
              <div
                className={`sm:hidden bg-white max-w-[624px] p-8 ${
                  activeNavItem === item ? "block" : "hidden"
                }`}
              >
                <Texts year={activeNavItem} />
              </div>
            </div>
          ))}
        </ul>
      </nav>
      <div className="hidden sm:block bg-white max-w-[624px] p-8">
        <Texts year={activeNavItem} />
      </div>
    </div>
  );
};

export default NavRecords;
