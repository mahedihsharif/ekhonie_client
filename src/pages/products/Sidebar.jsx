import React from "react";
import Category from "./Category";
import Prices from "./Prices";
import Tags from "./Tags";

const Sidebar = ({ onFilterChange }) => {
  return (
    <div className="w-1/4 p-4 my-5 bg-white">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <Category onFilterChange={onFilterChange} />
      <Prices onFilterChange={onFilterChange} />
      <Tags onFilterChange={onFilterChange} />
    </div>
  );
};

export default Sidebar;
