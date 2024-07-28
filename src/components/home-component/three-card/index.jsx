import React from "react";

const ThreeCard = () => {
  return (
    <div className="md:flex justify-center items-center bg-[#F1F5F6] gap-2 px-5 2xl:px-60 py-5">
      <div className="bg-threeCardImg1 bg-cover bg-center bg-no-repeat object-cover w-full pb-8 cursor-pointer hover:scale-105 hover:shadow-md transition-all ease-in-out">
        <div className="px-16 mt-5">
          <h1 className="font-semibold text-[24px] text-white leading-10 pt-5">
            Gamepad <br /> <span className="text-[#FFE62D]">Save 20% </span>
            Product
          </h1>

          <p className="text-white font-medium text-base pt-2">
            Free Shipping 20km Radius
          </p>
        </div>
      </div>
      <div className="bg-threeCardImg2 bg-cover bg-center bg-no-repeat object-cover w-full pb-8 cursor-pointer hover:scale-105 hover:shadow-md transition-all ease-in-out">
        <div className="px-16 mt-5">
          <h1 className="font-semibold text-[24px] text-white leading-10 pt-5">
            Camera Quality
            <br /> <span className="text-[#FFE62D]">2k Ultra</span>
          </h1>

          <p className="text-white font-medium text-base pt-2">
            Save 20% on Today's!
          </p>
        </div>
      </div>
      <div className="bg-threeCardImg3 bg-cover bg-center bg-no-repeat object-cover w-full pb-8 cursor-pointer hover:scale-105 hover:shadow-md transition-all ease-in-out">
        <div className="px-16 mt-5">
          <h1 className="font-semibold text-[24px] text-white leading-10 pt-5">
            Save 20% <br /> <span className="text-[#FFE62D]">Tablet Pro </span>
            2024
          </h1>

          <p className="text-white font-medium text-base pt-2">
            Top Quality Products
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeCard;
