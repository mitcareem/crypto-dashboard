import React from "react";
import BrandLogo from "./BrandLogo";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-primary flex flex-row justify-center items-center py-[10rem]">
      <BrandLogo />
    </footer>
  );
};

export default Footer;
