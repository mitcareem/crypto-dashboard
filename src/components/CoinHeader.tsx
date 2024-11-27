import React from "react";

const CoinHeader: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 bg-background">
      <div className="grid grid-cols-12 capitalize font-size-small font-bold border-t border-b border-border px-[1rem] py-[2rem]">
        <div className="hidden tablet:flex col-span-1 justify-center item">
          #
        </div>
        <div className="col-span-3 item">coin</div>
        <div className="hidden tablet:flex col-span-2 justify-end item">
          price
        </div>
        <div className="col-span-4 tablet:col-span-2 flex justify-end item">
          24h
        </div>
        <div className="col-span-5 tablet:col-span-4 whitespace-nowrap flex justify-end item">
          market cap
        </div>
      </div>
    </div>
  );
};

export default CoinHeader;
