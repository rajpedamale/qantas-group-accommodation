import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SearchSummary } from "./SearchSummary";
import { mockHotels } from "@/utils/mockData";

describe("SearchSummary Component", () => {
  it("renders the correct number of hotels", () => {
    render(<SearchSummary hotels={mockHotels} />);

    expect(screen.getByRole("heading")).toHaveTextContent("2 hotels in Sydney");
  });

  it("renders 'No hotels available' when no hotels are provided", () => {
    render(<SearchSummary hotels={[]} />);

    expect(screen.getByRole("heading")).toHaveTextContent(
      "No hotels available.",
    );
  });
});
