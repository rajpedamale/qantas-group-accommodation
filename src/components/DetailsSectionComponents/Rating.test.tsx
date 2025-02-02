import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Rating } from "./Rating";
import { mockHotels } from "@/utils/mockData";

jest.mock("@/components/Utils/RatingBar", () => ({
  RatingBar: ({ rating, variant }: { rating: number; variant: string }) => (
    <div data-testid="mock-rating-bar">{`Rating: ${rating}, Variant: ${variant}`}</div>
  ),
}));

const mockSelfRating = mockHotels[0].property.rating;
const mockStarRating = mockHotels[1].property.rating;

describe("Rating Component", () => {
  it("renders `RatingBar` with star variant when ratingType is 'star'", () => {
    render(<Rating rating={mockStarRating} />);

    expect(screen.getByTestId("mock-rating-bar")).toHaveTextContent(
      "Rating: 5, Variant: star",
    );
  });

  it("renders `RatingBar` with circle variant when ratingType is 'self'", () => {
    render(<Rating rating={mockSelfRating} />);

    expect(screen.getByTestId("mock-rating-bar")).toHaveTextContent(
      "Rating: 4.5, Variant: circle",
    );
  });
});
