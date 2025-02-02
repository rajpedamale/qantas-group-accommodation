import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Amount } from "./Amount";

const testAmount = 250;

describe("Amount Component", () => {
  it("renders the amount correctly", () => {
    render(<Amount amount={testAmount} />);

    expect(screen.getByText("$")).toBeInTheDocument();
    expect(screen.getByText(testAmount.toString())).toBeInTheDocument();
  });

  it("applies the correct styling", () => {
    render(<Amount amount={testAmount} />);

    const dollarSign = screen.getByText("$");
    const amountText = screen.getByText(testAmount.toString());

    expect(dollarSign).toHaveClass("font-sans mt-1 text-xs");

    expect(amountText).toHaveClass("font-[verdana] text-gray-600 text-2xl");
  });
});
