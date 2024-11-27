import React from "react";

const ErrorMessage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <p className="font-size-large font-semibold text-warning animate-pulse">
       {"Some error occurred :)"}
      </p>
    </div>
  );
};

export default ErrorMessage;
