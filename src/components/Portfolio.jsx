import React from "react";
import Alberta from "../assets/alberta.png";
import WatchWatch from "../assets/watchwatch.png";
import Eltech from "../assets/El-tech.png";

const Portfolio = () => {
  return (
    <div id="portfolio" className="pt-24 pb-24">
      <div className="container">
        <div className="w-full mb-20">
          <div className="w-1/2 text-center mx-auto">
            <h4 className="text-slate-200 font-bold text-lg">Portfolio</h4>
            <h2 className="font-bold text-2xl mb-4 text-orange-600 ">
              New Projects
            </h2>
          </div>
        </div>

        {/* card */}
        <div className="w-2/3  flex flex-wrap  lg:w-10/12 mx-auto">
          {/* card 1 */}

          <div className="mb-10 sm:w-1/2 lg:w-1/3 px-4  ">
            <div className="rounded-t-lg overflow-hidden mb-4  bg-red-100 hover:bg-slate-500">
              <img src={Alberta} alt />
            </div>

            <a
              href="https://alberta-id.netlify.app "
              target="_blank"
              className="font-bold text-xl mb-2 block hover:text-orange-600 transition duration-300 text-slate-300"
            >
              Alberta.id
            </a>
            <p className="text-slate-400 mb-2  text-sm">
              Alberta have 2 account roles , user and admin. user account can
              manage their own profile and view content. admin accounts can edit
              profile, change roles of othera ccounts, and manage content such
              as adding, deleting, and editing To view the content in this
              website, you are not required to log in first. Build with ReactJs
            </p>

            <div className="flex w-full mt-5">
              <a
                href="https://alberta-id.netlify.app/"
                className="px-2  bg-green-500 rounded-sm text-xs py-1 flex items-center font-semibold mr-4"
                target="_blank"
              >
                <span className="mr-1"> View</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/elangn/Alberta.id.git"
                className="px-2  bg-yellow-500 rounded-sm text-xs  py-1 flex items-center font-semibold"
                target="_blank"
              >
                <span className="mr-1"> Code</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* card 2 */}
          <div className="mb-10 sm:w-1/2 lg:w-1/3 px-4">
            <div className="rounded-t-lg overflow-hidden mb-4">
              <img src={WatchWatch} alt />
            </div>
            <a
              href="https://watch-watch.netlify.app/"
              target="_blank"
              className="font-bold text-xl mb-2 block hover:text-orange-600 transition duration-300 text-slate-300"
            >
              WatchWatch
            </a>
            <p className="text-slate-400 mb-2  text-sm">
              WatchWatch is a Movie website, Using an API fromthemoviedb. Login
              with account TMDB , To view the content in thiswebsite, you are
              not required to log in first. Build with ReactJs
            </p>

            <div className="flex w-full mt-5">
              <a
                href="https://watch-watch.netlify.app/"
                className="px-2  bg-green-500 rounded-sm text-xs py-1 flex items-center font-semibold mr-4"
                target="_blank"
              >
                <span className="mr-1"> View</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/elangn/WatchWatch.git"
                className="px-2  bg-yellow-500 rounded-sm text-xs  py-1 flex items-center font-semibold"
                target="_blank"
              >
                <span className="mr-1"> Code</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* card 3 */}
          <div className="mb-10 sm:w-1/2 lg:w-1/3 px-4">
            <div className="rounded-t-lg overflow-hidden mb-4">
              <img src={Eltech} alt />
            </div>
            <a
              href="https://elangn.github.io/EL-Tech/"
              target="_blank"
              className="font-bold text-xl mb-2 block hover:text-orange-600 transition duration-300 text-slate-300"
            >
              EL-Tech
            </a>
            <p className="text-slate-400 mb-2 text-sm">
              Landing Page Build with HTML and CSS
            </p>

            <div className="flex w-full  mt-5">
              <a
                href="https://elangn.github.io/EL-Tech/"
                className="px-2  bg-green-500 rounded-sm text-xs py-1 flex items-center font-semibold mr-4"
                target="_blank"
              >
                <span className="mr-1"> View</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/elangn/EL-Tech.git"
                className="px-2  bg-yellow-500 rounded-sm text-xs  py-1 flex items-center font-semibold"
                target="_blank"
              >
                <span className="mr-1"> Code</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
