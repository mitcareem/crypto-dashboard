import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Searchbar from "@/components/Searchbar";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/mode-toggle";
import CoinHeader from "@/components/CoinHeader";
import CoinInfo from "@/components/CoinInfo";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import ErrorMessage from "@/components/ErrorMessage";
import BrandLogo from "@/components/BrandLogo";

// icons
import { Search, X, CircleArrowUp } from "lucide-react";

// swr
import useSWR, { Fetcher } from "swr";



interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  high_24h: number;
  low_24h: number;
  price_change_percentage_24h: number;
}

interface GlobalData {
  data: {
    active_cryptocurrencies: number;
  };
}

const apiKey = import.meta.env.VITE_API_KEY;


const fetchCoinData: Fetcher<CoinData[], string> = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": apiKey,
    },
  });

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  return res.json();
};

const fetchGlobalData: Fetcher<GlobalData, string> = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": apiKey,
    },
  });

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  return res.json();
};

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPage = 100;
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${currentPage}`;

  const { data, error } = useSWR<CoinData[]>(url, fetchCoinData, { revalidateOnFocus: false });
  // console.log("data: ", data);

  // Fetch total number of items (to calculate max pages)
  const totalUrl = "https://api.coingecko.com/api/v3/global";
  const { data: globalData } = useSWR<GlobalData>(totalUrl, fetchGlobalData, { revalidateOnFocus: false });

  const totalCoins = globalData?.data?.active_cryptocurrencies || 0;
  const maxPages = Math.ceil(totalCoins / perPage);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();

  const handleCoinClick = (id: string) => {
    navigate(`/coins/${id}`);
  };

  const handlePageChange = (direction: "next" | "prev") => {
    if (direction === "next" && currentPage < maxPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (error) return <ErrorMessage />;
  if (!data) return <Loader />;

  return (
    <div className="flex flex-col gap-[2rem]">
      <Header>
        <div className="w-full flex flex-row justify-between items-center">
          <BrandLogo />
          <div className="tablet:hidden">
            <ModeToggle />
          </div>
        </div>

        <div className="hidden tablet:flex flex-row gap-[1rem] items-center">
          <Searchbar>
            <Search className="text-font-color font-size-small h-[2rem] w-[2rem]" />
            <Input />
            <X className="text-font-color cursor-pointer h-[1.6rem] w-[1.6rem]" />
          </Searchbar>
          <ModeToggle />
        </div>

        <div className="w-full tablet:hidden">
          <Searchbar>
            <Search className=" h-[1.6rem] w-[1.6rem]" />
            <Input />
            <X className="cursor-pointer h-[1.6rem] w-[1.6rem]" />
          </Searchbar>
        </div>
      </Header>

      <div className="flex flex-col gap-[2rem] px-[1rem]">
        <span className="flex flex-row justify-center tablet:block font-size-large font-bold">
          Cryptocurrency Prices by Market Cap
        </span>
        <main>
          <CoinHeader />
          {data?.map((coin, index) => {
            const serialNumber = (currentPage - 1) * perPage + index + 1;
            return (
              <CoinInfo
                key={coin.id}
                id={coin.id}
                handleCoinClick={handleCoinClick}
                serialNumber={serialNumber}
                name={coin.name}
                symbol={coin.symbol}
                image={coin.image}
                price={coin.current_price}
                market_cap={coin.market_cap}
                price24hChangePercent={coin.price_change_percentage_24h}
              />
            );
          })}
        </main>
      </div>
      <Pagination>
        <PaginationContent className="font-size-small">
          {/* Previous Button */}
          <PaginationItem>
            <PaginationPrevious
              className={
                currentPage === 1 ? "opacity-50 pointer-events-none" : ""
              }
              onClick={() => handlePageChange("prev")}
            />
          </PaginationItem>

          {/* First Page Button */}
          {currentPage > 2 && (
            <>
              <PaginationItem>
                <PaginationLink onClick={() => setCurrentPage(1)}>
                  1
                </PaginationLink>
              </PaginationItem>
              {currentPage > 3 && <PaginationEllipsis />}
            </>
          )}

          {/* Current Page */}
          <PaginationItem>
            <PaginationLink isActive>{currentPage}</PaginationLink>
          </PaginationItem>

          {/* Last Page Button */}
          {currentPage < maxPages - 1 && (
            <>
              {currentPage < maxPages - 2 && <PaginationEllipsis />}
              <PaginationItem>
                <PaginationLink onClick={() => setCurrentPage(maxPages)}>
                  {maxPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}

          {/* Next Button */}
          <PaginationItem>
            <PaginationNext
              className={
                currentPage === maxPages ? "opacity-50 pointer-events-none" : ""
              }
              onClick={() => handlePageChange("next")}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <Footer />
      <CircleArrowUp
        onClick={handleScrollToTop}
        size={30}
        className="fixed text-primary bottom-[2rem] right-[2rem] cursor-pointer"
      />
    </div>
  );
};

export default Home;
