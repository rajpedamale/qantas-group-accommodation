import React from "react";

// Ideally, this would be in a design system library
export function Amount({ amount }: { amount: number }) {
  return (
    <div className="mt-1 flex font-thin gap-1">
      <div className="font-sans mt-1 text-xs">$</div>
      <div className="font-[verdana] text-gray-600 text-2xl">{amount}</div>
    </div>
  );
}
