import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ImageSection } from "./ImageSection";
import { Hotel } from "@/types/hotel";
import { mockHotels } from "@/utils/mockData";

jest.mock("next/image", () => (props: any) => {
  return <img {...props} />;
});

const mockProperty: Hotel["property"] = mockHotels[0].property;
const mockSrc = `${mockProperty.previewImage.url}&id=${mockProperty.propertyId}`;

describe("ImageSection", () => {
  it("renders the image with correct src and alt attributes", () => {
    render(<ImageSection property={mockProperty} />);

    const image = screen.getByRole("img", { name: mockProperty.title });

    expect(image).toHaveAttribute("src", mockSrc);
    expect(image).toHaveAttribute("alt", mockProperty.title);
  });

  it("applies correct styling", () => {
    render(<ImageSection property={mockProperty} />);

    const image = screen.getByRole("img", { name: mockProperty.title });

    expect(image).toHaveClass("object-contain");
  });
});
