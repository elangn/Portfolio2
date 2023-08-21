import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/js.png";
import ReactLogo from "../assets/react.png";
import Tailwind from "../assets/tail.png";
import Bs from "../assets/bootstrap.png";
import Sass from "../assets/sass.png";
import Gh from "../assets/github2.png";

const Skills = () => {
  return (
    <div className="mt-16 mb-32" id="skill">
      <div className="container">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-6">
            <h4 className="text-slate-200 font-bold text-lg">Skills</h4>
            <h2 className="text-orange-600 text-2xl font-bold mb-20">
              Skills and Proficiency
            </h2>
          </div>
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 justify-center items-center mx-auto text-white text-xs sm:text-base">
            <div className="max-w-[70px] px-4 mx-4 my-4 flex items-center">
              <img src={Html} alt />
              <p className="ml-2">HTML</p>
            </div>
            <div className="max-w-[70px] px-4 mx-4 my-4 flex items-center">
              <img src={Css} alt />
              <p className="ml-2">CSS</p>
            </div>
            <div className="max-w-[70px] px-4 mx-4 my-4 flex items-center">
              <img src={Js} alt />
              <p className="ml-2">JavaScript</p>
            </div>
            <div className="max-w-[70px] px-4 mx-4 my-4 flex items-center">
              <img src={ReactLogo} alt />
              <p className="ml-2">ReactJs</p>
            </div>
            <div className="max-w-[70px] px-4 mx-4 my-4 flex flex items-center">
              <img src={Tailwind} alt />
              <p className="ml-2">Tailwind</p>
            </div>
            <div className="max-w-[70px] px-4 mx-4 my-4 flex items-center">
              <img src={Bs} alt />
              <p className="ml-2">Bootstrap</p>
            </div>
            <div className="max-w-[70px] px-4 mx-4 my-4 flex items-center">
              <img src={Sass} alt />
              <p className="ml-2">Sass</p>
            </div>
            <div className="max-w-[70px] px-4 mx-4 my-4 flex flex items-center">
              <img src={Gh} alt />
              <p className="ml-2">Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
