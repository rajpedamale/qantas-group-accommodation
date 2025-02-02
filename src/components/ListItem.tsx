import { Hotel } from "@/types/hotel";
import React from "react";
import { DetailSection } from "@/components/DetailSection";
import { ImageSection } from "@/components/ImageSection";

export function ListItem({ hotel }: { hotel: Hotel }) {
  return (
    <div className="flex bg-white overflow-hidden">
      <ImageSection property={hotel.property} />
      <DetailSection property={hotel.property} offer={hotel.offer} />
    </div>
  );
}
