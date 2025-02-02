import React from "react";
import { Hotel } from "@/types/hotel";
import { Header } from "@/components/DetailsSectionComponents/Header";
import { Address } from "@/components/DetailsSectionComponents/Address";
import { Offer } from "@/components/DetailsSectionComponents/Offer";

type DetailSectionPropsType = {
  property: Hotel["property"];
  offer: Hotel["offer"];
};

export function DetailSection({ property, offer }: DetailSectionPropsType) {
  return (
    <div className="px-4 w-full h-36 md:h-28">
      <Header title={property.title} />
      <Address addressLines={property.address} />
      <Offer
        offer={offer}
        displayPrice={offer.displayPrice}
        savings={offer.savings}
      />
    </div>
  );
}
