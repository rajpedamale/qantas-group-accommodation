import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchResultsHeader } from "./SearchResultsHeader";
import { Hotel } from "@/types/hotel";
import { mockHotels } from "@/utils/mockData";

jest.mock("@/components/SortCTA", () => ({
  SortCTA: ({
    value,
    onChange,
  }: {
    value: string;
    onChange: (_e: React.ChangeEvent<HTMLSelectElement>) => void;
  }) => (
    <select data-testid="mock-sort-cta" value={value} onChange={onChange}>
      <option value="low-high">Price low-high</option>
      <option value="high-low">Price high-low</option>
    </select>
  ),
}));

jest.mock("@/components/SearchSummary", () => ({
  SearchSummary: ({ hotels }: { hotels: Hotel[] }) => (
    <div data-testid="mock-search-summary">
      {hotels.length} hotels in Sydney
    </div>
  ),
}));

describe("SearchResultsHeader Component", () => {
  const mockOnChange = jest.fn();

  it("renders the SearchSummary and SortCTA components", () => {
    render(
      <SearchResultsHeader
        hotels={mockHotels}
        value="low-high"
        onChange={mockOnChange}
      />,
    );

    expect(screen.getByTestId("mock-search-summary")).toHaveTextContent(
      "2 hotels in Sydney",
    );
    expect(screen.getByTestId("mock-sort-cta")).toHaveValue("low-high");
  });

  it("calls onChange when sorting option is changed", () => {
    render(
      <SearchResultsHeader
        hotels={mockHotels}
        value="low-high"
        onChange={mockOnChange}
      />,
    );

    fireEvent.change(screen.getByTestId("mock-sort-cta"), {
      target: { value: "high-low" },
    });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
