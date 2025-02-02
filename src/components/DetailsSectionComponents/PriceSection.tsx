import React from "react";
import { Hotel } from "@/types/hotel";
import { PriceUnit } from "@/components/DetailsSectionComponents/PriceUnit";
import { Amount } from "@/components/DetailsSectionComponents/Amount";
import { Savings } from "@/components/DetailsSectionComponents/Savings";

interface PriceSectionProps {
  displayPrice: Hotel["offer"]["displayPrice"];
  savings?: Hotel["offer"]["savings"];
}

export function PriceSection({ displayPrice, savings }: PriceSectionProps) {
  return (
    <div className="flex flex-col items-end">
      <PriceUnit />
      <Amount amount={displayPrice.amount} />
      <Savings savings={savings} />
    </div>
  );
}
