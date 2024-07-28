import React from "react";

import { FooterTopData } from "../../../../data";

const FooterTop = () => {
  return (
    <div className="py-16">
      <div className="md:flex justify-between items-center px-5 2xl:px-60">
        {FooterTopData.map((data) => {
          const { id, title, desc, icon: Icon } = data;
          return (
            <div
              className="flex flex-col items-center justify-center cursor-pointer mt-5 md:mt-0"
              key={id}
            >
              <Icon className="text-[#2b38d1] mb-3 text-[26px]" />
              <h2 className="text-[#212529] font-bold uppercase text-[12px]">
                {title}
              </h2>
              <p className="text-[#515d66] text-[13px] font-normal">{desc}</p>
            </div>
          );
        })}
      </div>
      <div className="border-b-[1px] w-full 2xl:w-[75%] m-auto mt-4"></div>
    </div>
  );
};

export default FooterTop;
