"use client";
import { Hotel } from "@/types/hotel";
import React, { useState } from "react";
import { ListItem } from "@/components/ListItem";
import { SearchResultsHeader } from "@/components/SearchResultsHeader";

interface SearchResultsProps {
  hotels: Hotel[];
}

export const SearchResultsView: React.FC<SearchResultsProps> = ({ hotels }) => {
  const [sortOption, setSortOption] = useState<"low-high" | "high-low">(
    "low-high",
  );

  // Sort hotels dynamically based on user selection
  const sortedHotels = [...hotels].sort((a, b) =>
    sortOption === "low-high"
      ? a.offer.displayPrice.amount - b.offer.displayPrice.amount
      : b.offer.displayPrice.amount - a.offer.displayPrice.amount,
  );

  return (
    <>
      <SearchResultsHeader
        hotels={sortedHotels}
        value={sortOption}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setSortOption(e.target.value as "low-high" | "high-low");
        }}
      />

      <div className="grid grid-cols-1 gap-1">
        {sortedHotels.length > 0
          ? sortedHotels.map((hotel) => (
              <ListItem key={hotel.id} hotel={hotel} />
            ))
          : null}
      </div>
    </>
  );
};
