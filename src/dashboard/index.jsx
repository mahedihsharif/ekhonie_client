import React from "react";
import { allNav } from "./navigation/allNav";

const Dashboard = () => {
  return (
    <div className="px-5 2xl:px-60 bg-[#F1F5F6] py-5 md:py-16">
      <ul>
        {allNav.map((nav) => (
          <li key={nav.id} className="mt-5">
            {nav.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
