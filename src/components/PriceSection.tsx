import React from "react";
import { Hotel } from "@/types/hotel";

interface PriceSectionProps {
  displayPrice: Hotel["offer"]["displayPrice"];
  savings?: Hotel["offer"]["savings"];
}

export function PriceSection({ displayPrice, savings }: PriceSectionProps) {
  return (
    <div>
      <div className="text-[0.5rem]">1 night total (AUD)</div>
      <div className="font-[verdana] text-gray-600 text-2xl">
        $ {displayPrice.amount}
      </div>
      {savings && (
        <div className="flex text-pink-600 ">Save ${savings?.amount}~</div>
      )}
    </div>
  );
}
