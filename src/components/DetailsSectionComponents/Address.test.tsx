import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Address } from "./Address";

describe("Address Component", () => {
  const mockAddress = ["123 Main St", "Sydney", "Australia"];

  it("renders the address correctly", () => {
    render(<Address addressLines={mockAddress} />);

    expect(
      screen.getByText("123 Main St, Sydney, Australia"),
    ).toBeInTheDocument();
  });

  it("applies the correct styling", () => {
    render(<Address addressLines={mockAddress} />);

    const addressElement = screen.getByText("123 Main St, Sydney, Australia");

    expect(addressElement).toHaveClass("text-xs text-gray-400");
  });
});
