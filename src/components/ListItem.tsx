import { Hotel } from "@/types/hotel";
import React from "react";
import { DetailSection } from "@/components/DetailsSectionComponents/DetailSection";
import { ImageSection } from "@/components/ImageSectionComponents/ImageSection";

export function ListItem({ hotel }: { hotel: Hotel }) {
  return (
    <div className="flex bg-white overflow-hidden">
      <ImageSection
        property={hotel.property}
        promotion={hotel.offer.promotion}
      />
      <DetailSection property={hotel.property} offer={hotel.offer} />
    </div>
  );
}
