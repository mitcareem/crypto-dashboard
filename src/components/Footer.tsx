import React from "react";
import BrandLogo from "./BrandLogo";

const Footer: React.FC = () => {
  return (
    <div className="border-t border-primary flex flex-row justify-center items-center py-[10rem]">
      <BrandLogo />
    </div>
  );
};

export default Footer;
