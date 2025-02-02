import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchResultsView } from "./SearchResultsView";
import { mockHotels } from "@/utils/mockData";

jest.mock("next/image", () => (props: any) => {
  return <img {...props} />;
});

// No mocking in this test.
// The mocks turned out to be as big as the original implementation

const hotelTitlesAsc = [
  mockHotels[0].property.title,
  mockHotels[1].property.title,
];
const hotelTitlesDesc = [...hotelTitlesAsc].reverse();
describe("SearchResultsView Component", () => {
  it("renders the SearchResultsView with correct number of hotels", () => {
    render(<SearchResultsView hotels={mockHotels} />);

    expect(screen.getByText("Sort by")).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(2);
    expect(screen.getByText(hotelTitlesAsc[0])).toBeInTheDocument();
    expect(screen.getByText(hotelTitlesAsc[1])).toBeInTheDocument();
  });

  it("sorts hotels in ascending order when 'low-high' is selected", () => {
    const { container } = render(<SearchResultsView hotels={mockHotels} />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "low-high" } });

    const hotelTitlesAfter = Array.from(container.querySelectorAll("h3")).map(
      (h3) => h3.textContent?.trim(),
    );

    expect(hotelTitlesAfter).toEqual(hotelTitlesAsc); // Sorted by price ascending
  });

  it("sorts hotels in descending order when 'high-low' is selected", () => {
    const { container } = render(<SearchResultsView hotels={mockHotels} />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "high-low" } });

    const hotelTitlesAfter = Array.from(container.querySelectorAll("h3")).map(
      (h3) => h3.textContent?.trim(),
    );

    expect(hotelTitlesAfter).toEqual(hotelTitlesDesc); // Sorted by price descending
  });
});
