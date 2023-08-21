import React from "react";

const Footer = () => {
  return (
    <div class="py-4 bg-slate-950 text-white text-center">
      <div className="container">
        <div className="md:flex flex-wrap justify-around items-center text-slate-500">
          {/* <div className="mb-2 md:mb-0">
            <h2 className="text-xl text-orange-600 font-bold">My Portfolio</h2>
          </div> */}
          <div className="text-slate-500  mb-2 md:mb-0 text-xs">
            <span className="text-orange-500"> MyPortfolio </span> &copy; by
            Elang Maulana J
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
