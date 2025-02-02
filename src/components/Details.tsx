import React from "react";
import { Hotel } from "@/types/hotel";

type DetailsProps = {
  property: Hotel["property"];
  offer: Hotel["offer"];
};

export function Details({ property, offer }: DetailsProps) {
  return (
    <div>
      <h3 className="text-lg max-w-72 truncate overflow-hidden whitespace-nowrap">
        {property.title}
      </h3>
      <p className="text-xs text-gray-400">{property.address.join(", ")}</p>
      <div className="text-xs text-pink-600 underline pt-4">{offer.name}</div>
      <div className="text-xs text-lime-600">
        {offer.cancellationOption.cancellationType === "FREE_CANCELLATION"
          ? "Free cancellation"
          : ""}
      </div>
    </div>
  );
}
