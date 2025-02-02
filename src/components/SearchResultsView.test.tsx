import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SearchResultsView } from "./SearchResultsView";
import { mockHotels } from "@/utils/mockData";

jest.mock("@/components/ListItem", () => ({
  ListItem: () => <div data-testid="mock-list-item">Mocked ListItem</div>,
}));

describe("SearchResultsView", () => {
  it("renders the correct number of hotels", () => {
    render(<SearchResultsView hotels={mockHotels} />);

    const heading = screen.getByRole("heading");
    expect(heading.textContent).toBe("2 hotels in Sydney");
  });

  it('renders "No hotels available" when no hotels exist', () => {
    render(<SearchResultsView hotels={[]} />);

    const heading = screen.getByRole("heading");
    expect(heading.textContent).toBe("No hotels available.");
  });
});
