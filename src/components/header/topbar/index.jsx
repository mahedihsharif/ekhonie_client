import React from "react";
import Marquee from "react-fast-marquee";
import { MdOutlineElectricBolt } from "react-icons/md";
import { TopBarData } from "./../../../data";

const TopBar = () => {
  return (
    <div className="w-full bg-[#2B38D1] py-4 whitespace-nowrap">
      <Marquee pauseOnHover={true} speed={120}>
        <div className="flex items-center justify-center gap-5">
          {TopBarData &&
            TopBarData.map((data, index) => (
              <li
                key={index}
                className="flex items-center justify-center gap-2 text-white list-none text-[14px] font-normal leading-6  "
              >
                <MdOutlineElectricBolt /> <span>{data}</span>
              </li>
            ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TopBar;
