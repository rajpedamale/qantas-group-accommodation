import React from "react";

export function Header({ title }: { title: string }) {
  return (
    <h3 className="text-lg max-w-72 truncate overflow-hidden whitespace-nowrap">
      {title}
    </h3>
  );
}
