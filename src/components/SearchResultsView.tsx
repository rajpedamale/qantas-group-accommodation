import { Hotel } from "@/types/hotel";

export function SearchResultsView(props: { hotels: Hotel[] }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 role="heading" className="text-sm font-bold">
        {props.hotels.length}
        <span className="italic font-thin"> hotels in </span>Sydney
      </h2>
    </div>
  );
}
