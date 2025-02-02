import React from "react";
import { Hotel } from "@/types/hotel";
import { ImageComponent } from "@/components/ImageSectionComponents/ImageComponent";

type ImageSectionProps = {
  property: Hotel["property"];
};

export function ImageSection({ property }: ImageSectionProps) {
  // Looks like the browser cache was interfering. All images were shown the same.
  // I noticed the url for image is supposed to be random.
  // Adding the extra URL Param, just to avoid the browser cache reuse
  const imageUrl = property.previewImage.url + "&id=" + property.propertyId;
  return (
    <div className="bg-white relative justify-center pt-2  hidden md:block">
      <ImageComponent src={imageUrl} alt={property.title} />
    </div>
  );
}
