import { Suspense } from "react";
import { SearchResultsView } from "@/components/SearchResultsView";
import { fetchHotels } from "@/utils/api";

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
