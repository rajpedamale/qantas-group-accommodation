import { Hotel } from "@/types/hotel";
import React from "react";

type PromotionProps = {
  promotion?: Hotel["offer"]["promotion"];
};

export function Promotion({ promotion }: PromotionProps) {
  return (
    <>
      {promotion?.title && (
        <div className="absolute top-4 left-[0.4px] bg-white text-pink-600 text-xs px-2 py-1 ">
          {promotion.title}
        </div>
      )}
    </>
  );
}
