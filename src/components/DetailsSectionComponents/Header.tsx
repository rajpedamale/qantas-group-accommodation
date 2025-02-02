import React from "react";
import { Rating } from "@/components/DetailsSectionComponents/Rating";
import { Hotel } from "@/types/hotel";
import { Title } from "@/components/DetailsSectionComponents/Title";

type HeaderProps = { title: string; rating: Hotel["property"]["rating"] };

export function Header({ title, rating }: HeaderProps) {
  return (
    <div className="flex items-center gap-2 pt-2 border-t">
      <Title title={title} />
      <Rating rating={rating}></Rating>
    </div>
  );
}
