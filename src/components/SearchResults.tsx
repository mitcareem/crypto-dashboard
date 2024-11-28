import React from "react";

interface CoinSearchData {
  id: string;
  symbol: string;
  name: string;
  large: string;
  market_cap_rank: number;
}

interface SearchResultsProps {
  searchResults: { coins: CoinSearchData[] } | undefined;
  handleCoinClick: (id: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  searchResults,
  handleCoinClick,
}) => {
  if (!searchResults || !searchResults.coins) {
    return null;
  }

  return (
    <>
      {searchResults.coins.length > 0 && (
        <div className="flex flex-col gap-[2rem] w-full bg-hover absolute shadow-lg p-[2rem] rounded-regular z-[999] top-[5rem]">
          {searchResults.coins.map((coin, index) => (
            <div
              onClick={() => handleCoinClick(coin.id)}
              className="cursor-pointer"
              key={coin.id}
            >
              <div className="flex flex-row items-center gap-[2.5rem] font-size-regular">
                <div className="w-[1.5rem]">{index + 1}.</div>
                <img
                  src={coin.large}
                  alt={coin.name}
                  className="rounded-full h-[2rem] w-[2rem] tablet:h-[3rem] tablet:w-[3rem]"
                />
                <div>{coin.name}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchResults;
