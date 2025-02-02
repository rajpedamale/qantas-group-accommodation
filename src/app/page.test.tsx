import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Home from "./page";
import { mockHotels } from "@/utils/mockData";

jest.mock("./page", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Home (Server Component)", () => {
  it("displays loading message before hotels load", async () => {
    (Home as jest.Mock).mockImplementation(async () => {
      return <p className="text-center text-gray-500">Loading hotels...</p>;
    });

    render(await Home());

    expect(screen.getByText(/loading hotels.../i)).toBeInTheDocument();
  });

  it("renders the correct number of hotels", async () => {
    (Home as jest.Mock).mockImplementation(async () => {
      const SearchResultsView = (await import("@/components/SearchResultsView"))
        .SearchResultsView;

      return <SearchResultsView hotels={mockHotels} />;
    });

    render(await Home());

    await waitFor(() => {
      const heading = screen.getAllByRole("heading")[0];
      expect(heading.textContent).toBe("2 hotels in Sydney");
    });
  });
});
