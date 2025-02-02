import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { OfferName } from "./OfferName";

describe("OfferName Component", () => {
  const mockOfferName = "Deluxe King Room";

  it("renders the offer name correctly", () => {
    render(<OfferName name={mockOfferName} />);

    expect(screen.getByText(mockOfferName)).toBeInTheDocument();
  });

  it("applies the correct styling", () => {
    render(<OfferName name={mockOfferName} />);

    const offerNameElement = screen.getByText(mockOfferName);

    expect(offerNameElement).toHaveClass(
      "text-xs text-pink-600 underline pt-4",
    );
  });
});
