import React from "react";
import FooterBottom from "./footer-bottom";
import FooterTop from "./footer-top";

const Footer = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <FooterTop />
      <FooterBottom />
    </div>
  );
};

export default Footer;
