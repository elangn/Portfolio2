import React, { useState } from "react";
import Logo from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github2.png";
import Ig from "../assets/ig.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="  flex justify-between items-center h-[60px]  px-6 lg:px-4 bg-slate-950  text-gray-300 fixed w-full">
      <div>
        <a href="#">
          {" "}
          <img src={Logo} alt="Logo" className="w-[30px] md:w-[40px]" />
        </a>
      </div>

      {/* menu */}

      <ul className="hidden md:flex ">
        <li className="mx-3 hover:text-orange-500 transition duration-300">
          <a href="#"> Home</a>
        </li>
        <li className="mx-3 hover:text-orange-500 transition duration-300">
          <a href="#about"> About</a>
        </li>
        <li className="mx-3 hover:text-orange-500 transition duration-300">
          <a href="#skill"> Skills</a>
        </li>
        <li className="mx-3 hover:text-orange-500 transition duration-300">
          <a href="#portfolio"> Work</a>
        </li>
      </ul>

      {/* hamberger */}

      <div className="md:hidden z-10" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>

      {/* mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-[40px] right-[20px]  w-[250px] py-10 px-10  bg-slate-950"
        }
      >
        <li
          className="mx-2 mb-4 hover:text-orange-500 transition duration-300"
          onClick={handleClick}
        >
          <a href="#"> Home</a>
        </li>
        <li
          className="mx-2 mb-4 hover:text-orange-500 transition duration-300"
          onClick={handleClick}
        >
          <a href="#about"> About</a>
        </li>
        <li
          className="mx-2 mb-4 hover:text-orange-500 transition duration-300"
          onClick={handleClick}
        >
          <a href="#skill"> Skills</a>
        </li>
        <li
          className="mx-2 mb-4 hover:text-orange-500 transition duration-300"
          onClick={handleClick}
        >
          <a href="#portfolio"> Work</a>
        </li>
      </ul>

      {/* sosmed */}
      <div className="hidden md:flex fixed top-[40%] left-0 font-semibold  ">
        <ul>
          <li className="flex w-[160px]  justify-between items-center flex   ml-[-120px] hover:ml-0  duration-300 bg-blue-600 p-2">
            <a
              href="https://www.linkedin.com/in/elangmj/"
              target="_blank"
              className="flex justify-between  items-center w-full"
            >
              Linkedin
              <img src={Linkedin} alt="" className="w-[30px]   h-[30px] " />
            </a>
          </li>
          <li className="flex w-[160px] justify-between items-center ml-[-120px] hover:ml-0  duration-300 p-2 text-black bg-slate-600">
            <a
              href="https://github.com/elangn"
              target="_blank"
              className="flex w-full justify-between"
            >
              {" "}
              Github <img src={Github} alt="" className="w-[30px]   h-[30px]" />
            </a>
          </li>
          <li className="flex w-[160px] justify-between items-center ml-[-120px] hover:ml-0  duration-300 p-2 bg-orange-900">
            <a
              href="https://www.instagram.com/elangnn/"
              target="_blank"
              className="flex w-full justify-between"
            >
              {" "}
              Instagram <img src={Ig} alt="" className="w-[30px]   h-[30px]" />
            </a>
          </li>

          <li className="flex w-[160px] justify-between items-center ml-[-120px] hover:ml-0  duration-300 p-2 bg-slate-900">
            <a
              href="CV Elang ATS.pdf"
              download="CV.pdf"
              className="flex w-full justify-between"
            >
              {" "}
              Resume{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
