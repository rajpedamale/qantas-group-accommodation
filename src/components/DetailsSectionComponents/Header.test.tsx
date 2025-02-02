import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { Hotel } from "@/types/hotel";
import { mockHotels } from "@/utils/mockData";

jest.mock("@/components/DetailsSectionComponents/Title", () => ({
  Title: ({ title }: { title: string }) => (
    <div data-testid="mock-title">{title}</div>
  ),
}));

jest.mock("@/components/DetailsSectionComponents/Rating", () => ({
  Rating: ({ rating }: { rating: Hotel["property"]["rating"] }) => (
    <div data-testid="mock-rating">{`Rating: ${rating.ratingValue} (${rating.ratingType})`}</div>
  ),
}));

const mockTitle = "Sample Hotel Name";
const mockRating = mockHotels[0].property.rating;
describe("Header Component", () => {
  it("renders mocked Title and Rating components", () => {
    render(<Header title={mockTitle} rating={mockRating} />);

    expect(screen.getByTestId("mock-title")).toHaveTextContent(mockTitle);
    expect(screen.getByTestId("mock-rating")).toHaveTextContent(
      "Rating: 4.5 (self)",
    );
  });
});
