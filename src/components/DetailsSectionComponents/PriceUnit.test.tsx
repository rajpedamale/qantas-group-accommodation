import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PriceUnit } from "./PriceUnit";

describe("PriceUnit Component", () => {
  it("renders the price unit text", () => {
    render(<PriceUnit />);

    expect(screen.getByText("1 night total (AUD)")).toBeInTheDocument();
  });

  it("applies the correct styling", () => {
    render(<PriceUnit />);

    const priceUnitElement = screen.getByText("1 night total (AUD)");

    expect(priceUnitElement).toHaveClass("text-[0.5rem]");
  });
});
