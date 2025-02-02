import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ImageSection } from "./ImageSection";
import { Hotel } from "@/types/hotel";
import { mockHotels } from "@/utils/mockData";

const mockProperty: Hotel["property"] = mockHotels[0].property;
const mockSrc =
  mockProperty.previewImage.url + "&id=" + mockProperty.propertyId;
const mockName = mockProperty.title;

describe("ImageSection", () => {
  it("renders the image with correct src and alt attributes", () => {
    render(<ImageSection property={mockProperty} />);

    const image = screen.getByRole("img", { name: mockName });

    expect(image).toHaveAttribute("src", mockSrc);
    expect(image).toHaveAttribute("alt", mockName);
  });

  it("applies the correct styling", () => {
    render(<ImageSection property={mockProperty} />);

    const image = screen.getByRole("img", { name: mockName });

    expect(image).toHaveClass("w-[145px] h-[125px] object-contain");
  });
});
