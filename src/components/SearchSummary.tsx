import { Hotel } from "@/types/hotel";
import React from "react";

export function SearchSummary(props: { hotels: Hotel[] }) {
  return (
    <h2 role="heading" className="text-sm font-bold">
      {props.hotels.length > 0 ? (
        <>
          {props.hotels.length}
          <span className="italic font-thin"> hotels in </span>Sydney
        </>
      ) : (
        <>No hotels available.</>
      )}
    </h2>
  );
}
