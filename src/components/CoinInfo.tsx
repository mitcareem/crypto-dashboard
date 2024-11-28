import React from "react";
import { Button } from "./ui/button";
import { ArrowUp, ArrowDown, Star } from "lucide-react";

interface CoinInfoProps {
  id: string;
  serialNumber: number;
  name: string;
  symbol: string;
  handleCoinClick: (id: string) => void;
  image: string;
  price: number;
  price24hChangePercent: number;
  market_cap: number;
}

const CoinInfo: React.FC<CoinInfoProps> = ({
  id,
  serialNumber,
  name,
  symbol,
  handleCoinClick,
  image,
  price,
  price24hChangePercent,
  market_cap,
}) => {
  const isPositive: boolean = price24hChangePercent >= 0;

  return (
    <div className="grid grid-cols-12 items-center capitalize font-size-regular border-b hover:bg-hover border-border px-[0.5rem] tablet:px-[1rem] py-[2rem] z-40">
      {/* S. No, */}
      <div className="hidden tablet:flex relative col-span-1 justify-center items-center gap-[1rem]">
        <Star
          size={16}
          className="cursor-pointer hidden laptop:block absolute left-[0rem]"
        />
        <div>{serialNumber}</div>
      </div>
      {/* Name, Image, Symbol */}
      <div className="col-span-3 w-full flex flex-row items-center justify-between group-[1rem]:">
        <div
          onClick={() => handleCoinClick(id)}
          className="cursor-pointer flex flex-row items-center pr-[1rem] gap-[1rem]"
        >
          <img
            src={image}
            alt="logo"
            className="h-[2rem] w-[2rem] tablet:h-[3rem] tablet:w-[3rem]"
          />
          <div className="hidden laptop:block">{name}</div>
          <div className="uppercase text-font-color">{symbol}</div>
        </div>
        <Button
          onClick={() => handleCoinClick(id)}
          variant={"primary"}
          className="cursor-pointer hidden tablet:flex"
        >
          buy
        </Button>
      </div>
      {/* Price */}
      <div className="hidden tablet:flex col-span-2 justify-end">
        {price !== null ? `$${price}` : "-"}
      </div>
      {/*24h*/}
      <div
        className={`col-span-4 tablet:col-span-2 flex items-center justify-end ${
          isPositive ? "text-success" : "text-warning"
        }`}
      >
        <div className="flex flex-row items-center">
          {price24hChangePercent !== null ? (
            <>
              {isPositive ? (
                <ArrowUp size={18} className="mr-1" />
              ) : (
                <ArrowDown size={18} className="mr-1" />
              )}
              {price24hChangePercent.toFixed(2)}%
            </>
          ) : (
            "-"
          )}
        </div>
      </div>
      {/* Market Cap */}
      <div className="col-span-5 tablet:col-span-4 whitespace-nowrap flex justify-end">
        {market_cap !== null ? `$${market_cap.toLocaleString()}` : "-"}
      </div>
    </div>
  );
};

export default CoinInfo;
