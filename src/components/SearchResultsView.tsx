import { Hotel } from "@/types/hotel";
import React from "react";

interface SearchResultsProps {
  hotels: Hotel[];
}

export const SearchResultsView: React.FC<SearchResultsProps> = ({ hotels }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        {hotels.length > 0 ? (
          <h2 role="heading" className="text-sm font-bold">
            {hotels.length}
            <span className="italic font-thin"> hotels in </span>Sydney
          </h2>
        ) : (
          <h2 role="heading" className="text-sm font-bold">
            No hotels available.
          </h2>
        )}
      </div>
      <div className="grid grid-cols-1 gap-1 pb-1 border-b-[1px]">
        {hotels.length > 0
          ? hotels.map((hotel) => (
              <div key={hotel.id}>{hotel.property.title}</div>
            ))
          : null}
      </div>
    </>
  );
};
