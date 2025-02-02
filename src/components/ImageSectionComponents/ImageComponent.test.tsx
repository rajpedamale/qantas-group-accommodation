import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { ImageComponent } from "./ImageComponent";

jest.mock("next/image", () => (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { priority, ...rest } = props;
  return <img {...rest} />;
});

const mockSrc = "https://unsplash.it/145/125/?random&id=P107803";
const mockAlt = "Hotel Image";

describe("ImageComponent", () => {
  it("renders the placeholder image initially", () => {
    render(<ImageComponent src={mockSrc} alt={mockAlt} />);

    expect(screen.getByAltText("Loading...")).toBeInTheDocument();
  });

  it("renders the actual image after loading", () => {
    render(<ImageComponent src={mockSrc} alt={mockAlt} />);

    const actualImage = screen.getByAltText(mockAlt);

    fireEvent.load(actualImage); // Simulate image load event

    expect(actualImage).toBeInTheDocument();
  });

  it("handles image load state correctly", () => {
    render(<ImageComponent src={mockSrc} alt={mockAlt} />);

    const actualImage = screen.getByAltText(mockAlt);

    fireEvent.load(actualImage);

    expect(actualImage).toHaveClass("opacity-100");
  });

  it("logs an error when the image fails to load", () => {
    const consoleErrorMock = jest.spyOn(console, "error").mockImplementation();

    render(<ImageComponent src={mockSrc} alt={mockAlt} />);

    const actualImage = screen.getByAltText(mockAlt);

    fireEvent.error(actualImage);

    expect(consoleErrorMock).toHaveBeenCalledWith(
      "Failed to load image:",
      mockSrc,
    );

    consoleErrorMock.mockRestore();
  });
});
