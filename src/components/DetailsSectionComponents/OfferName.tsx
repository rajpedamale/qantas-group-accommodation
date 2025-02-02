import React from "react";

export function OfferName({ name }: { name: string }) {
  return <div className="text-xs text-pink-600 underline pt-4">{name}</div>;
}
