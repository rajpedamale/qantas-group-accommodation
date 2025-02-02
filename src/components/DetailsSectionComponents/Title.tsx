import React from "react";

export function Title(props: { title: string }) {
  return (
    <h3 className="text-lg max-w-72 truncate overflow-hidden whitespace-nowrap">
      {props.title}
    </h3>
  );
}
