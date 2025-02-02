import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Extras } from "./Extras";

describe("Extras Component", () => {
  it('renders "Free cancellation" when applicable', () => {
    render(<Extras cancellationType="FREE_CANCELLATION" />);

    expect(screen.getByText("Free cancellation")).toBeInTheDocument();
  });

  it("renders nothing when cancellation is not free", () => {
    render(<Extras cancellationType="NOT_REFUNDABLE" />);

    expect(screen.queryByText("Free cancellation")).not.toBeInTheDocument();
  });

  it("applies the correct styling", () => {
    render(<Extras cancellationType="FREE_CANCELLATION" />);

    const extrasElement = screen.getByText("Free cancellation");

    expect(extrasElement).toHaveClass("text-xs text-lime-600");
  });
});
