import React from "react";
import { useNavigate } from "react-router-dom";

const BrandLogo: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <section onClick={handleClick} className="flex flex-row items-center gap-[1rem] cursor-pointer">
      <div className="h-[4rem] w-[4rem] rounded-full bg-primary"></div>
      <div className="font-size-large text-primary font-bold tracking-[0.1ch]">Crypto</div>
    </section>
  );
};

export default BrandLogo;
