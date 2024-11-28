import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[50rem] bg-background">
      <p className="font-size-large font-semibold text-primary animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
