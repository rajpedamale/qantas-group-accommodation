import React from "react";
import { Hotel } from "@/types/hotel";

type ImageSectionProps = {
  property: Hotel["property"];
};

export function ImageSection({ property }: ImageSectionProps) {
  // Looks like the browser cache was interfering. All images were shown the same.
  // I noticed the url for image is supposed to be random.
  // Adding the extra URL Param, just to avoid the browser cache reuse
  const imageUrl = property.previewImage.url + "&id=" + property.propertyId;
  return (
    <img
      src={imageUrl}
      alt={property.title}
      className={`w-[145px] h-[125px] object-contain }`}
    />
  );
}
