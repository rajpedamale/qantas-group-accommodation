import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ListItem } from "./ListItem";
import { mockHotels } from "@/utils/mockData";

jest.mock("@/components/ImageSection", () => ({
  ImageSection: () => (
    <div data-testid="mock-image-section">Mocked ImageSection</div>
  ),
}));

jest.mock("@/components/DetailSection", () => ({
  DetailSection: () => (
    <div data-testid="mock-detail-section">Mocked DetailSection</div>
  ),
}));

describe("ListItem", () => {
  const mockHotel = mockHotels[0];
  const title = mockHotel.property.title;

  it("renders the mocked ImageSection and DetailSection components", () => {
    render(<ListItem hotel={mockHotel} />);

    expect(screen.getByTestId("mock-image-section")).toBeInTheDocument();
    expect(screen.getByTestId("mock-detail-section")).toBeInTheDocument();
  });

  it("does not render actual ImageSection or DetailSection content", () => {
    render(<ListItem hotel={mockHotel} />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.queryByText(title)).not.toBeInTheDocument();
  });
});
