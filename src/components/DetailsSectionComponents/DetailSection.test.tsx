import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { DetailSection } from "./DetailSection";
import { Hotel } from "@/types/hotel";
import { mockHotels } from "@/utils/mockData";

jest.mock("@/components/DetailsSectionComponents/Details", () => ({
  Details: () => <div data-testid="mock-details">Mocked Details</div>,
}));

jest.mock("@/components/DetailsSectionComponents/PriceSection", () => ({
  PriceSection: () => (
    <div data-testid="mock-price-section">Mocked Price Section</div>
  ),
}));

const mockProperty: Hotel["property"] = mockHotels[0].property;

const mockOffer: Hotel["offer"] = mockHotels[0].offer;

describe("DetailSection", () => {
  it("renders Details and PriceSection components", () => {
    render(<DetailSection property={mockProperty} offer={mockOffer} />);

    expect(screen.getByTestId("mock-details")).toBeInTheDocument();
    expect(screen.getByTestId("mock-price-section")).toBeInTheDocument();
  });
});
