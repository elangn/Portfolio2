import React from "react";
import Dp from "../assets/dp.png";

const Home = () => {
  return (
    <div className="  z-10">
      <div className="container">
        <div className="pt-32 md:pt-64 pb-32 md:flex ">
          {" "}
          {/* isi */}
          <div className="mb-10  w-full md:w-2/3 mb-24 ">
            <p className="w-2/3 text-orange-500 font-bold"> Hi, my name is</p>
            <h1 className=" text-3xl lg:text-5xl font-bold text-slate-300 mb-2">
              {" "}
              Elang Maulana J
            </h1>
            <h2 className="text-2xl font-bold text-slate-500 mb-4">
              {" "}
              I'm a FrontEnd Developer
            </h2>
            <p className="text-slate-400 max-w-[700px] mb-10">
              I'm a fontend web developer specializing in frontend web dev to
              design User Interface and build responsive web application.
            </p>

            <a
              href="#portfolio"
              className="text-white w-[150px] px-3 py-1 border-2 flex justify-center items-center hover:bg-orange-600 transition duration-300 group"
            >
              {" "}
              <span className="mr-2"> View Work</span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 group-hover:rotate-90 transition duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </a>

            {/* <button className="text-white px-3 py-1 border-2 flex justify-center items-center hover:bg-orange-600 transition duration-300 group ">
              {" "}
              <span className="mr-2"> View Work</span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 group-hover:rotate-90 transition duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button> */}
          </div>
          <div className="  w-full md:w-1/3 flex items-center justify-center">
            <img
              src={Dp}
              alt=""
              className=" w-[200px] h-[200px] xl:w-[300px] xl:h-[300px]  rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
