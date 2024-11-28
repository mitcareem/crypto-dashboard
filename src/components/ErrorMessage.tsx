import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { RefreshCw } from "lucide-react";

const ErrorMessage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-[1rem] items-center justify-center h-screen bg-background">
      <p className="font-size-large font-semibold text-warning animate-pulse">
        {"Some error occurred :)"}
      </p>
      <Button
        onClick={() => navigate("/")}
        className="flex flex-row gap-[1rem]"
      >
        refresh <RefreshCw size={14} />
      </Button>
    </div>
  );
};

export default ErrorMessage;
