import React from "react";

export function Address({ addressLines }: { addressLines: string[] }) {
  return <p className="text-xs text-gray-400">{addressLines.join(", ")}</p>;
}
