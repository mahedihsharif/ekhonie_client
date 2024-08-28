import React from "react";
import Footer from "../components/shared/footer";
import Header from "./../components/header/index";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
