import React from "react";

export function SortCTA(props: {
  value: "low-high" | "high-low";
  onChange: (_e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="flex items-center flex-wrap gap-1">
      <div>Sort by</div>
      <select
        className="border border-gray-300 rounded text-xs px-2"
        value={props.value}
        onChange={props.onChange}
      >
        <option value="low-high">Price low-high</option>
        <option value="high-low">Price high-low</option>
      </select>
    </div>
  );
}
