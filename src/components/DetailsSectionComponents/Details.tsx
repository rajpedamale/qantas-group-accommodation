import React from "react";
import { Hotel } from "@/types/hotel";
import { Extras } from "@/components/DetailsSectionComponents/Extras";
import { OfferName } from "@/components/DetailsSectionComponents/OfferName";

type DetailsProps = {
  offer: Hotel["offer"];
};

export function Details({ offer }: DetailsProps) {
  return (
    <div className="flex flex-col justify-between h-[82px]">
      <OfferName name={offer.name} />
      <Extras cancellationType={offer.cancellationOption.cancellationType} />
    </div>
  );
}
