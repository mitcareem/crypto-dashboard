import React, { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="flex flex-col tablet:flex-row justify-between gap-[1rem] shadow-[0_5px_20px_-15px_rgba(0,0,0,0.3)] py-[1rem] px-[2rem]">
      {children}
    </div>
  );
};

export default Header;
