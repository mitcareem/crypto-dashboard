import React, { ReactNode } from "react";

interface SearchbarProps {
  children: ReactNode;
}

const Searchbar: React.FC<SearchbarProps> = ({ children }) => {
  return (
    <div className="border border-primary flex flex-row items-center rounded-regular py-[0.5rem] px-[1rem] w-full tablet:w-[30rem]">
      {children}
    </div>
  );
};

export default Searchbar;
 