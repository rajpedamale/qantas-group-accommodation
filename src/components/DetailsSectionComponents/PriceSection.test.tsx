import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PriceSection } from "./PriceSection";
import { Hotel } from "@/types/hotel";

describe("PriceSection", () => {
  const mockDisplayPrice: Hotel["offer"]["displayPrice"] = {
    amount: 250,
    currency: "AUD",
  };

  const mockSavings: Hotel["offer"]["savings"] = {
    amount: 50,
    currency: "AUD",
  };

  it("renders the correct total price", () => {
    render(<PriceSection displayPrice={mockDisplayPrice} />);

    expect(screen.getByText("1 night total (AUD)")).toBeInTheDocument();
    expect(screen.getByText("$ 250")).toBeInTheDocument();
  });

  it("renders the savings section when savings are provided", () => {
    render(
      <PriceSection displayPrice={mockDisplayPrice} savings={mockSavings} />,
    );

    expect(screen.getByText("Save $50~")).toBeInTheDocument();
  });

  it("does not render the savings section when no savings are provided", () => {
    render(<PriceSection displayPrice={mockDisplayPrice} />);

    expect(screen.queryByText(/Save \$/)).not.toBeInTheDocument();
  });
});
