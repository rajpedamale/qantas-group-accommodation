import { cache, Suspense } from "react";
import { Hotel } from "@/types/hotel";
import { SearchResultsView } from "@/components/SearchResultsView";

const fetchHotels = cache(async (): Promise<Hotel[]> => {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.results;
});

export default async function Home() {
  const hotels = await fetchHotels();
  return (
    <>
      <Suspense
        fallback={
          <p className="text-center text-gray-500">Loading hotels...</p>
        }
      >
        <SearchResultsView hotels={hotels} />
      </Suspense>
    </>
  );
}
