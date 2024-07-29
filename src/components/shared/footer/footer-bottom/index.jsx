import React from "react";
import { FooterBottomData } from "../../../../data";

const FooterBottom = () => {
  return (
    <div className="pb-16">
      <div className="md:flex justify-between items-center md:gap-0 px-5 2xl:px-60">
        {FooterBottomData.map((data) => {
          const { id, title, desc, call, address } = data;
          return (
            <div key={id} className="md:w-30 mt-5 md:mt-0">
              <h2 className="text-[#212529] text-sm uppercase font-bold max-md:text-center">
                {title}
              </h2>
              <p className="w-full md:w-96 text-[#515d66] font-medium text-sm leading-8 max-md:text-center">
                {desc}
              </p>
              {call && (
                <h1 className="text-[#2b38d1] font-medium text-3xl leading-9 pb-5 max-md:text-center">
                  {call}
                </h1>
              )}
              {address && (
                <p className="text-[#515d66] text-sm font-medium max-md:text-center">
                  {address}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <div className="join md:flex justify-center md:justify-end px-5 2xl:px-48 mt-4 md:mt-0 w-full">
        <input
          className="input input-bordered join-item"
          placeholder="Your email address"
        />
        <button className="btn join-item rounded-r-full bg-[#2b38d1] text-white uppercase hover:bg-[#515d66] tracking-wide transition-all duration-75">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default FooterBottom;
