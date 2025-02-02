import { Details } from "@/components/DetailsSectionComponents/Details";
import { PriceSection } from "@/components/DetailsSectionComponents/PriceSection";
import React from "react";
import { Hotel } from "@/types/hotel";

type OfferProps = { offer: Hotel["offer"] };

export function Offer({ offer }: OfferProps) {
  return (
    <div className="flex justify-between items-stretch">
      <Details offer={offer} />
      <PriceSection displayPrice={offer.displayPrice} savings={offer.savings} />
    </div>
  );
}
