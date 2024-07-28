import React from "react";
import { LiaAngleRightSolid } from "react-icons/lia";

const LargeCard = (props) => {
  return (
    <div className="md:flex md:flex-start justify-between items-center bg-white px-5 py-4 whitespace-nowrap">
      <h2 className="flex items-center gap-2 font-medium">
        {props.featured && (
          <span className="uppercase font-bold text-base">
            {props.featured}
          </span>
        )}
        {props.CiStopwatch && (
          <props.CiStopwatch className="text-[#E24142] text-2xl" />
        )}
        {props.hotDeals && (
          <span className="text-[#E24142]">{props.hotDeals}</span>
        )}{" "}
        {props.getPrices && props.getPrices}
      </h2>
      {props.hurryUp && (
        <p className="font-normal">
          {props.hurryUp} <span> {props.date}</span>
        </p>
      )}
      {props.btnText && (
        <div>
          <button className="flex justify-between items-center gap-1 capitalize text-sm font-normal text-[#79819c]">
            {props.btnText}
            <LiaAngleRightSolid />
          </button>
        </div>
      )}
    </div>
  );
};

export default LargeCard;
