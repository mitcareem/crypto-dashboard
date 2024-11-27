import React from "react";
import { ArrowUp, ArrowDown, Info } from "lucide-react";
import { Button } from "./ui/button";

interface CoinDetailsProps {
  coinDetails: {
    name: string;
    symbol: string;
    image: {
      large: string;
    };
    market_cap_rank: number | null;
    market_data: {
      current_price: {
        usd: number;
      };
      price_change_percentage_24h_in_currency: {
        usd: number;
      } | null;
      market_cap: {
        usd: number;
      };
      total_volume: {
        usd: number;
      };
      circulating_supply: number;
      total_supply: number | null;
      max_supply: number | null;
    };
  };
}

const CoinDetails: React.FC<CoinDetailsProps> = ({ coinDetails }) => {
  return (
    <div className="flex flex-col col-span-4 gap-[1rem] shadow-sm py-[2rem]">
      <div className="flex flex-row gap-[1rem] items-center">
        <img
          src={coinDetails?.image.large}
          alt={coinDetails?.name}
          className="h-[3rem] w-[3rem]"
        />
        <div className="font-size-large font-bold">{coinDetails?.name}</div>
        <div className="font-size-regular uppercase text-font-color">
          {coinDetails?.symbol}
        </div>
        <div className="font-size-regular bg-primary text-primary-foreground rounded-regular px-[0.4rem]">
          {coinDetails?.market_cap_rank !== null
            ? `#${coinDetails?.market_cap_rank}`
            : "# --"}
        </div>

        <div
          className={`font-size-regular px-2 py-1 rounded flex items-center gap-1 ${
            (coinDetails?.market_data.price_change_percentage_24h_in_currency
              ?.usd ?? 0) > 0
              ? "text-success"
              : "text-warning"
          }`}
        >
          {(coinDetails?.market_data.price_change_percentage_24h_in_currency
            ?.usd ?? 0) > 0 ? (
            <ArrowUp size={18} />
          ) : (
            <ArrowDown size={18} />
          )}
          {coinDetails?.market_data.price_change_percentage_24h_in_currency
            ?.usd !== undefined
            ? `${coinDetails.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                2
              )}%`
            : "--"}
        </div>
      </div>

      <div className="flex flex-row justify-between pr-[1rem] text-[3rem] font-bold items-center">
        {coinDetails?.market_data.current_price.usd !== undefined
          ? `$${coinDetails?.market_data.current_price.usd}`
          : "$ --"}
        <Button variant={"primary"} className="font-size-regular font-normal">
          buy / sell
        </Button>
      </div>

      <div className="flex flex-col py-[1rem]">
        {[
          {
            label: "Market Cap",
            value: coinDetails?.market_data.market_cap.usd,
          },
          {
            label: "24 Hour Trading Vol",
            value: coinDetails?.market_data.total_volume.usd,
          },
          {
            label: "Circulating Supply",
            value: coinDetails?.market_data.circulating_supply,
          },
          {
            label: "Total Supply",
            value: coinDetails?.market_data.total_supply,
          },
          {
            label: "Max Supply",
            value: coinDetails?.market_data.max_supply,
          },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="border-b border-border pr-[1rem] py-[2rem] flex flex-row justify-between items-center font-size-regular"
          >
            <div className="text-font-color font-semibold flex flex-row gap-[1rem] items-center">
              {label}
              <Info size={16} />
            </div>
            <div>
              {typeof value === "number"
                ? `${
                    label.includes("Supply") ? "" : "$"
                  }${value.toLocaleString()}`
                : "N/A"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinDetails;
