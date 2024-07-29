import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import UsaFlag from "/assets/united-states.png";

const TopBarBottom = () => {
  return (
    <div className="hidden lg:block whitespace-nowrap">
      <div className="flex justify-between items-center gap-10 px-5 2xl:px-60 border-b-[1px] py-3">
        <div>
          <p>You are a student and students get 20% discount.</p>
        </div>
        <div className="flex justify-between items-center gap-5">
          <div className="flex justify-between items-center gap-1">
            <img src={UsaFlag} alt="flag-usa" className="w-[1.15rem]" />
            <span>English</span>
            <MdOutlineKeyboardArrowDown />
          </div>
          <div>
            <span className="flex justify-between items-center gap-1">
              United States(USD $) <MdOutlineKeyboardArrowDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarBottom;
