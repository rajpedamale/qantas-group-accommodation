import { cache } from "react";
import { Hotel } from "@/types/hotel";

export const fetchHotels = cache(async (): Promise<Hotel[]> => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL as string, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch hotels");
  }
  const data = await res.json();
  return data.results;
});
