import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Offer } from "./Offer";
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

const mockOffer: Hotel["offer"] = mockHotels[0].offer;

describe("Offer Component", () => {
  it("renders mocked Details and PriceSection components", () => {
    render(<Offer offer={mockOffer} />);

    expect(screen.getByTestId("mock-details")).toBeInTheDocument();
    expect(screen.getByTestId("mock-price-section")).toBeInTheDocument();
  });

  it("does not render actual Details or PriceSection content", () => {
    render(<Offer offer={mockOffer} />);

    expect(screen.queryByText(mockOffer.name)).not.toBeInTheDocument();
    expect(
      screen.queryByText(`$ ${mockOffer.displayPrice.amount}`),
    ).not.toBeInTheDocument();
  });
});
