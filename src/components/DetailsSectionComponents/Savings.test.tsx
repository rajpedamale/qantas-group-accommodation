import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Savings } from "./Savings";
import { mockHotels } from "@/utils/mockData";

const mockSavings = mockHotels[0].offer.savings;

describe("Savings Component", () => {
  it("renders the savings amount correctly when provided", () => {
    render(<Savings savings={mockSavings} />);

    expect(
      screen.getByText(`Save $${mockSavings!.amount}~`),
    ).toBeInTheDocument();
  });

  it("renders nothing when savings is null or undefined", () => {
    render(<Savings savings={undefined} />);

    expect(screen.queryByText(/Save \$/)).not.toBeInTheDocument();
  });

  it("applies the correct styling", () => {
    render(<Savings savings={mockSavings} />);

    expect(screen.getByText(`Save $${mockSavings!.amount}~`)).toHaveClass(
      "flex text-pink-600",
    );
  });
});
