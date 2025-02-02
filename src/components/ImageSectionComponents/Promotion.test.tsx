import "@testing-library/jest-dom";
import { prettyDOM, render, screen } from "@testing-library/react";
import { Promotion } from "./Promotion";
import { mockHotels } from "@/utils/mockData";

const mockPromotion = mockHotels[0].offer.promotion;
describe("Promotion Component", () => {
  it("renders the promotion title when provided", () => {
    render(<Promotion promotion={mockPromotion} />);

    expect(screen.getByText(mockPromotion.title)).toBeInTheDocument();
  });

  it("does not render anything when promotion is undefined", () => {
    const { container } = render(<Promotion promotion={undefined} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("applies correct styling", () => {
    render(<Promotion promotion={mockPromotion} />);

    const promoElement = screen.getByText(mockPromotion.title);

    expect(promoElement).toHaveClass(
      "absolute top-4 left-[0.4px] bg-white text-pink-600 text-xs px-2 py-1",
    );
  });
});
