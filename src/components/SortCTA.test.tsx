import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { SortCTA } from "./SortCTA";

describe("SortCTA Component", () => {
  const mockOnChange = jest.fn();

  it("renders SortCTA with correct default value", () => {
    render(<SortCTA value="low-high" onChange={mockOnChange} />);

    expect(screen.getByText("Sort by")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveValue("low-high");
  });

  it("calls onChange when a new option is selected", () => {
    render(<SortCTA value="low-high" onChange={mockOnChange} />);

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "high-low" },
    });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("renders both sorting options", () => {
    render(<SortCTA value="low-high" onChange={mockOnChange} />);

    expect(
      screen.getByRole("option", { name: "Price low-high" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Price high-low" }),
    ).toBeInTheDocument();
  });
});
