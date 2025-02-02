import React from "react";
import { Hotel } from "@/types/hotel";

type ExtrasProps = Hotel["offer"]["cancellationOption"];

export function Extras({ cancellationType }: ExtrasProps) {
  return (
    <div className="text-xs text-lime-600">
      {cancellationType === "FREE_CANCELLATION" ? "Free cancellation" : ""}
    </div>
  );
}
