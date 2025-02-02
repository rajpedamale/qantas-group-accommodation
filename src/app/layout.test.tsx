import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { LayoutForBody } from "./layout";

describe("Layout", () => {
  it("renders the layout with header, main content, and footer", () => {
    render(
      <LayoutForBody>
        <p>Test Content</p>
      </LayoutForBody>,
    );

    expect(screen.getByAltText("Qantas Logo")).toBeInTheDocument();

    expect(screen.getByText("Test Content")).toBeInTheDocument();

    expect(
      screen.getByText(/Qantas Group. All rights reserved/i),
    ).toBeInTheDocument();
  });
});
