import React from "react";
import Navbar from "./navbar";
import TopBar from "./topbar";
import TopBarBottom from "./topbar-bottom";
import TopBarSearch from "./topbar-search";

const Header = () => {
  return (
    <div>
      <TopBar />
      <TopBarBottom />
      <TopBarSearch />
      <Navbar />
    </div>
  );
};

export default Header;
