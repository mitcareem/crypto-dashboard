import React from "react";
import { LoaderCircle } from "lucide-react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[50rem] bg-background">
      <LoaderCircle className="animate-spin text-primary" size={40} />
    </div>
  );
};

export default Loader;
