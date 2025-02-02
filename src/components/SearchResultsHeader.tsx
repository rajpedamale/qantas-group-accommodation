import { Hotel } from "@/types/hotel";
import React from "react";
import { SortCTA } from "@/components/SortCTA";
import { SearchSummary } from "@/components/SearchSummary";

type SearchResultsHeaderProps = {
  hotels: Hotel[];
  value: "low-high" | "high-low";
  onChange: (_e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function SearchResultsHeader({
  hotels,
  value,
  onChange,
}: SearchResultsHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <SearchSummary hotels={hotels} />
      <SortCTA value={value} onChange={onChange} />
    </div>
  );
}
