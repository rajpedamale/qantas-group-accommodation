import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PriceSection } from "./PriceSection";
import { Hotel } from "@/types/hotel";
import { mockHotels } from "@/utils/mockData";

jest.mock("@/components/DetailsSectionComponents/PriceUnit", () => ({
  PriceUnit: () => <div data-testid="mock-price-unit">Mocked PriceUnit</div>,
}));

jest.mock("@/components/DetailsSectionComponents/Amount", () => ({
  Amount: ({ amount }: { amount: number }) => (
    <div data-testid="mock-amount">${amount}</div>
  ),
}));

jest.mock("@/components/DetailsSectionComponents/Savings", () => ({
  Savings: ({ savings }: { savings?: Hotel["offer"]["savings"] }) => (
    <div data-testid="mock-savings">
      {savings ? `Save $${savings.amount}~` : ""}
    </div>
  ),
}));

const { displayPrice, savings } = mockHotels[0].offer;

describe("PriceSection Component", () => {
  it("renders the mocked PriceUnit, Amount, and Savings components", () => {
    render(<PriceSection displayPrice={displayPrice} savings={savings} />);

    expect(screen.getByTestId("mock-price-unit")).toBeInTheDocument();
    expect(screen.getByTestId("mock-amount")).toHaveTextContent(
      `${displayPrice.amount}`,
    );
    expect(screen.getByTestId("mock-savings")).toHaveTextContent(
      `Save $${savings?.amount}~`,
    );
  });

  it("renders Savings correctly when no savings are provided", () => {
    render(<PriceSection displayPrice={displayPrice} />);

    expect(screen.getByTestId("mock-savings")).toBeEmptyDOMElement();
  });
});
