import React from "react";
import { Hotel } from "@/types/hotel";
import { PriceSection } from "@/components/PriceSection";
import { Details } from "@/components/Details";

type DetailSectionPropsType = {
  property: Hotel["property"];
  offer: Hotel["offer"];
};

export function DetailSection({ property, offer }: DetailSectionPropsType) {
  return (
    <div className="flex justify-between items-stretch">
      <Details property={property} offer={offer} />
      <PriceSection displayPrice={offer.displayPrice} savings={offer.savings} />
    </div>
  );
}
