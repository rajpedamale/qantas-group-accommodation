"use client";
import { Hotel } from "@/types/hotel";
import React, { useMemo, useState } from "react";
import { ListItem } from "@/components/ListItem";
import { SearchResultsHeader } from "@/components/SearchResultsHeader";

interface SearchResultsProps {
  hotels: Hotel[];
}

type SortOptions = "low-high" | "high-low";

export const SearchResultsView: React.FC<SearchResultsProps> = ({ hotels }) => {
  const [sortOption, setSortOption] = useState<SortOptions>("low-high");

  const sortHotels = (hotels: Hotel[], sortOption: SortOptions) => {
    return [...hotels].sort((a, b) =>
      sortOption === "low-high"
        ? a.offer.displayPrice.amount - b.offer.displayPrice.amount
        : b.offer.displayPrice.amount - a.offer.displayPrice.amount,
    );
  };

  const sortedHotels = useMemo(
    () => sortHotels(hotels, sortOption),
    [hotels, sortOption],
  );

  return (
    <>
      <SearchResultsHeader
        hotels={sortedHotels}
        value={sortOption}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setSortOption(e.target.value as SortOptions);
        }}
      />

      <div className="grid grid-cols-1 gap-1 pb-1 border-b-[1px]">
        {sortedHotels.length > 0
          ? sortedHotels.map((hotel) => (
              <ListItem key={hotel.id} hotel={hotel} />
            ))
          : null}
      </div>
    </>
  );
};
