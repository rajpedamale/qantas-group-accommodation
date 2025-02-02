import React from "react";
import { Hotel } from "@/types/hotel";
import { Extras } from "@/components/DetailsSectionComponents/Extras";
import { Header } from "@/components/DetailsSectionComponents/Header";
import { Address } from "@/components/DetailsSectionComponents/Address";
import { OfferName } from "@/components/DetailsSectionComponents/OfferName";

type DetailsProps = {
  property: Hotel["property"];
  offer: Hotel["offer"];
};

export function Details({ property, offer }: DetailsProps) {
  return (
    <div>
      <Header title={property.title} />
      <Address addressLines={property.address} />
      <OfferName name={offer.name} />
      <Extras cancellationOption={offer.cancellationOption} />
    </div>
  );
}
