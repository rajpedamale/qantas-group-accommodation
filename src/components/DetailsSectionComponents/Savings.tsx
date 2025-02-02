import React from "react";
import { Hotel } from "@/types/hotel";

type SavingsProps = { savings: Hotel["offer"]["savings"] };
export function Savings({ savings }: SavingsProps) {
  return (
    <>
      {savings && (
        <div className="flex text-pink-600 ">Save ${savings.amount}~</div>
      )}
    </>
  );
}
