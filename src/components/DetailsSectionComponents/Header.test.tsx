import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header Component", () => {
  it("renders the title correctly", () => {
    const title = "Sample Header Title";
    render(<Header title={title} />);

    const headingElement = screen.getByText(title);
    expect(headingElement).toBeInTheDocument();
  });

  it("applies correct CSS classes", () => {
    const title = "Sample Title for CSS Test";
    render(<Header title={title} />);

    const headingElement = screen.getByText(title);

    expect(headingElement).toHaveClass("text-lg");
    expect(headingElement).toHaveClass("max-w-72");
    expect(headingElement).toHaveClass("truncate");
    expect(headingElement).toHaveClass("overflow-hidden");
    expect(headingElement).toHaveClass("whitespace-nowrap");
  });

  it("handles long titles gracefully (truncates when necessary)", () => {
    const longTitle = "This is a very long title that should not fully display";
    render(<Header title={longTitle} />);

    const headingElement = screen.getByText(longTitle);

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass("truncate");
  });
});
