import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Title } from "./Title";

describe("Title Component", () => {
  const mockTitle = "Sample Hotel Name";

  it("renders the title correctly", () => {
    render(<Title title={mockTitle} />);

    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });

  it("applies the correct styling", () => {
    render(<Title title={mockTitle} />);

    const titleElement = screen.getByText(mockTitle);

    expect(titleElement).toHaveClass(
      "text-lg max-w-72 truncate overflow-hidden whitespace-nowrap",
    );
  });
});
