import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router";
import {
  FaCross,
  FaSearch,
  FaBars,
  FaTimes,
  FaCaretDown,
  FaCaretUp,
} from "react-icons/fa";
import BtnStyle1 from "../BtnStyle1";
import BtnStyle2 from "../BtnStyle2";

interface NavProps{
  closeOnScroll: any, 
  destination: String
}

const NavBar = ({closeOnScroll, destination}: NavProps) => {
  const [isCatOpen, isCatClosed] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      closeOnScroll = "hidden";
    };
  }, []);

  const point = scrolled
    ? "backdrop-blur-xs bg-[rgba(247,245,243,0.82)] text-beta lg:px-10 py-4 ease-in-out transition-all duration-500 fixed w-full flex items-center justify-between z-5000"
    : "backdrop-blur-2xs bg-[rgba(0,0,0,0)] lg:px-10 py-2 ease-in-out transition-all duration-500 fixed w-full flex items-center text-gray-300 justify-between z-5000";

  return (
    <div className={point}>
      <div className="flex w-full px-2 lg:px-0 justify-between items-center">
        {/* ***************LOGO******************* */}
        <div className="flex items-center lg:px-5 px-1 justify-between text-2xl">
          <span className="lg:px-6 py-3 border-r-3 border-beta  ">
            <Link to="/" />
            <h1 className="text-lg lg:text-3xl  flex mr-5 w-fit">
              {""}
              <Link to="/"><h1 className="text-beta">
                Paintly</h1></Link>
            </h1>
          </span>
        </div>
        {/* ************NAVLIST**************** */}
        <ul className="hidden text-beta lg:flex justify-between w-[60%] gap-4 text-xl items-center">
          <li>
            {/* ***************CATEGORY******************* */}
            <div className="relative hidden lg:flex lg:px-5 gap-5 items-center">
              <FaCaretDown
                color="gray"
                onClick={() => {
                  isCatClosed(!isCatOpen);
                }}
                className={isCatOpen ? "hidden" : "block"}
              />
              <FaTimes
                onClick={() => {
                  isCatClosed(!isCatOpen);
                }}
                className={`${isCatOpen ? "block" : "hidden"}`}
              />
              <h1 className="text-xl">Category</h1>
              <ul
                className={`${
                  isCatOpen
                    ? "flex flex-col absolute top-10 bg-delta lg:px-8 py-4 border border-gray-400 gap-2"
                    : "hidden "
                }`}
              >
                <li>Meoeoww</li>
                <li>Meoeoww</li>
                <li>Meoeoww</li>
                <li>Meoeoww</li>
              </ul>
            </div>
          </li>
          <li>Contact</li>
          <li>Shop</li>
          <li>About us</li>

          <li className="">
            <div className="flex gap-5 w-fit">
                <BtnStyle1 Btn1text={"Donate"} destination={""} />
              

              <Link to="/pages/Today">
              <BtnStyle2
                Btn2text={"Today's Devotional"}
                destination={"/Today.jsx"}
                />
                </Link>
            </div>
          </li>
        </ul>
        <div className="relative block lg:hidden">
          <FaBars
            color="gray"
            onClick={() => {
              isCatClosed(!isCatOpen);
            }}
            className={isCatOpen ? "hidden" : "block"}
          />
          <FaTimes
            onClick={() => {
              isCatClosed(!isCatOpen);
            }}
            className={isCatOpen ? "block" : "hidden"}
          />
          <ul
            className={`
              ${
                isCatOpen
                  ? `flex flex-col ${window.addEventListener(
                      "scroll",
                      closeOnScroll
                    )} absolute right-10 lg:right-50 bg-[#f7f5f34b] backdrop-blur-3xl p-8 gap-10 text-xl  text-gray-800 items-center`
                  : "hidden"
              } `}
          >
            <li className="border-b-2 w-full border-orange-200">Category</li>
            <li className="border-b-2 w-full border-orange-200">Contact</li>
            <li className="border-b-2 w-full border-orange-200">About us</li>
            <Link to="/pages/Today">
              <BtnStyle2
                Btn2text={"Today's Devotional"}
                destination={"/Today.jsx"}
                />
                </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

// ASSIGNMENT
// Build a car rental service using tailwind
