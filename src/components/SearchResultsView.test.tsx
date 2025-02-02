import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SearchResultsView } from "./SearchResultsView";
import { mockHotels } from "@/utils/mockData";

describe("SearchResultsView", () => {
  it("renders the correct number of hotels", () => {
    render(<SearchResultsView hotels={mockHotels} />);

    const heading = screen.getByRole("heading");
    expect(heading.textContent).toBe("2 hotels in Sydney");
  });

  it('renders "0 hotels" if no hotels are available', () => {
    render(<SearchResultsView hotels={[]} />);

    const heading = screen.getByRole("heading");
    expect(heading.textContent).toBe("0 hotels in Sydney");
  });
});
