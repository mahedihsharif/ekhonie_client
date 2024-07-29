import React from "react";

const Banner = () => {
  return (
    <div className="lg:flex justify-between px-5 2xl:px-60 gap-3 mt-6 h-full">
      <div className="relative bg-bannerLeft bg-cover bg-center bg-no-repeat object-cover w-full lg:w-[70%]">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative md:ml-32 ml-5 md:mt-12 mt-5 py-18">
          <p className="text-[#FFE62D] uppercase font-bold text-[12px] pt-3 md:pt-8">
            Top Trending
          </p>
          <h1 className="font-semibold lg:text-[40px] text-[24px] text-white leading-[45px] md:mt-5 mt-2">
            Trending <br /> <span className="text-[#FFE62D]">Your</span> New
            Style
          </h1>

          <p className="text-white font-medium text-base md:mt-5 mt-2">
            Limited Time: Online Only!
          </p>
          <button className="text-[12px] uppercase font-semibold bg-white px-10 rounded-[10rem] py-4 hover:bg-blue-700 hover:text-white transition-all 5s ease-linear my-4 md:mt-8">
            Shop Now
          </button>
        </div>
      </div>

      <div className="lg:flex lg:flex-col md:flex gap-3 w-full lg:w-[30%] md:max-lg:mt-5">
        <div className="relative bg-bannerRight1 bg-cover bg-center bg-no-repeat object-cover w-full pb-8">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="md:px-16 px-5 mt-5">
            <h1 className="font-semibold text-[24px] text-white leading-10 pt-5">
              Top Offer <br /> <span className="text-[#FFE62D]">IPad Pro</span>
              128GB
            </h1>

            <p className="text-white font-medium text-base pt-2">
              Limited Time: Online Only!
            </p>
          </div>
        </div>
        <div className="relative bg-bannerRight2 bg-cover bg-center bg-no-repeat object-cover w-full pb-8">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="md:px-16 px-5 mt-5 ">
            <h1 className="font-semibold text-[24px] text-white leading-10 pt-2">
              Gamepad <br />{" "}
              <span className="text-[#FFE62D]">Sport Edition</span> 2022
            </h1>

            <p className="text-white font-medium text-base pt-2">
              Best Choice of the Year
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
