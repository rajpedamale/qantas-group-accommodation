import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RatingBar } from "./RatingBar";

describe("RatingBar Component", () => {
  it("renders the correct number of full and partially filled stars", () => {
    const { container } = render(<RatingBar rating={3.5} variant="star" />);

    const filledStars = container.querySelectorAll(
      "div:not([style*='width: 0%']) > svg[aria-label*='filled']",
    );

    expect(filledStars).toHaveLength(4); // 3 full stars + 1 partially filled star
  });

  it("renders circles instead of stars when variant is 'circle'", () => {
    const { container } = render(<RatingBar rating={4} variant="circle" />);

    const filledCircles = container.querySelectorAll(
      "div:not([style*='width: 0%']) > svg[aria-label*='filled']",
    );

    expect(filledCircles).toHaveLength(4); // 4 fully filled circles
  });

  it("renders five empty stars when rating is 0", () => {
    const { container } = render(<RatingBar rating={0} variant="star" />);

    const filledStars = container.querySelectorAll(
      "div:not([style*='width: 0%']) > svg[aria-label*='filled']",
    );

    const emptyStars = screen
      .getAllByRole("img", { hidden: true })
      .filter((star) => star.getAttribute("class")?.includes("fill-gray-200"));

    expect(filledStars).toHaveLength(0); // No stars should be filled
    expect(emptyStars).toHaveLength(5); // All stars should be empty
  });
});
