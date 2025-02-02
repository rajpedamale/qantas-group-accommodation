import { Hotel } from "@/types/hotel";
import { RatingBar } from "@/components/Utils/RatingBar";
import React from "react";

type RatingProps = { rating: Hotel["property"]["rating"] };

export function Rating({ rating }: RatingProps) {
  return (
    <div className="mb-1">
      {rating.ratingType === "self" ? (
        <RatingBar rating={rating.ratingValue} variant="circle" />
      ) : (
        <RatingBar rating={rating.ratingValue} variant="star" />
      )}
    </div>
  );
}
