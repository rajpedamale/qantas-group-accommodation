import { Hotel } from "@/types/hotel";
import React from "react";
import { DetailSection } from "@/components/DetailSection";

export function ListItem({ hotel }: { hotel: Hotel }) {
  // Looks like the browser cache was interfering. All images were shown the same.
  // I noticed the url for image is supposed to be random.
  // Adding the extra URL Param, just to avoid the browser cache reuse
  const imageUrl = hotel.property.previewImage.url + "&id=" + hotel.id;
  return (
    <div className="flex bg-white overflow-hidden">
      <img
        src={imageUrl}
        alt={hotel.property.title}
        className={`w-[145px] h-[125px] object-contain }`}
      />
      <DetailSection property={hotel.property} offer={hotel.offer} />
    </div>
  );
}
