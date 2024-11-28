import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useSWR, { Fetcher, mutate } from "swr";
import Loader from "@/components/Loader";
import ErrorMessage from "@/components/ErrorMessage";
import LineChart from "@/components/LineChart";
import CoinDetails from "@/components/CoinDetails";
import { Button } from "@/components/ui/button";
import TimeframeSelect from "@/components/TimeframeSelect";
import Footer from "@/components/Footer";
// icons
import { MoveLeft, RefreshCw } from "lucide-react";

interface CoinDetails {
  id: string;
  symbol: string;
  name: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  market_cap_rank: number;
  market_data: {
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
    price_change_percentage_24h_in_currency: { usd: number } | null;
    circulating_supply: number;
    total_supply: number | null;
    max_supply: number | null;
  };
}

interface CoinMarketChart {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

const apiKey = import.meta.env.VITE_API_KEY;

const fetchCoinDetails: Fetcher<CoinDetails, string> = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": apiKey,
    },
  });

  if (!res.ok) {
    throw new Error("Error fetching coin details");
  }

  return res.json();
};

const fetchCoinMarketChart: Fetcher<CoinMarketChart, string> = async (
  url: string
) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": apiKey,
    },
  });

  if (!res.ok) {
    throw new Error("Error fetching market chart data");
  }

  return res.json();
};

const Coin: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState<number>(1); // Default timeframe: 1 day

  const detailsUrl = `https://api.coingecko.com/api/v3/coins/${id}`;
  const marketChartUrl = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${timeframe}`;

  const {
    data: coinDetails,
    error: detailsError,
    isLoading: detailsLoading,
  } = useSWR<CoinDetails>(detailsUrl, fetchCoinDetails, {
    revalidateOnFocus: false,
  });

  const {
    data: marketChart,
    error: chartError,
    isLoading: chartLoading,
  } = useSWR<CoinMarketChart>(marketChartUrl, fetchCoinMarketChart, {
    revalidateOnFocus: false,
  });

  if (detailsLoading || chartLoading) {
    return <Loader />;
  }

  if (detailsError || chartError) {
    return <ErrorMessage />;
  }

  const handleTimeframeChange = (value: string) => {
    setTimeframe(parseInt(value));
  };

  // console.log(coinDetails);
  // console.log(marketChart);

  const handleRefresh = () => {
    mutate(detailsUrl);
    mutate(marketChartUrl);
  };

  return (
    <div className="flex flex-col gap-[2rem] bg-background text-foreground px-[1.5rem] tablet:px-[3rem] py-[3rem]">
      <Button
        className="w-[max-content] flex items-center gap-x-2 font-size-regular"
        onClick={() => navigate("/")}
      >
        <MoveLeft size={16} />
        back
      </Button>

      <div className="flex border-t border-primary flex-col pt-[1rem] laptop:grid laptop:grid-cols-12">
        {/* coin details */}
        {coinDetails && <CoinDetails coinDetails={coinDetails} />}
        {/* chart */}
        <div className="laptop:pl-[1rem] col-span-8 py-[2rem]">
          <div className="flex flex-row items-center justify-between font-size-regular">
            <TimeframeSelect
              timeframe={timeframe}
              onTimeframeChange={handleTimeframeChange}
            />
            <Button
              onClick={handleRefresh}
              className="flex flex-row gap-[1rem]"
            >
              refresh <RefreshCw size={14} />
            </Button>
          </div>
          {marketChart && <LineChart data={marketChart} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Coin;
