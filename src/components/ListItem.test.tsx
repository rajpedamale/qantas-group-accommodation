import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ListItem } from "./ListItem";
import { mockHotels } from "@/utils/mockData";

const mockHotel = mockHotels[0];
const title = mockHotel.property.title;
const imgSrc = `${mockHotel.property.previewImage.url}&id=${mockHotel.id}`;

describe("ListItem", () => {
  it("renders the hotel title", () => {
    render(<ListItem hotel={mockHotel} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("renders the correct image with cache-busting URL", () => {
    render(<ListItem hotel={mockHotel} />);

    const image = screen.getByRole("img", { name: title });

    expect(image).toHaveAttribute("src", imgSrc);
    expect(image).toHaveAttribute("alt", title);
  });

  it("applies text truncation styles", () => {
    render(<ListItem hotel={mockHotel} />);

    const hotelTitle = screen.getByText(title);

    expect(hotelTitle).toHaveClass(
      "max-w-72 truncate overflow-hidden whitespace-nowrap",
    );
  });
});
