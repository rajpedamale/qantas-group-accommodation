import React from "react";
import { render, screen } from "@testing-library/react";
import { Details } from "./Details"; // Adjust the path as needed
import "@testing-library/jest-dom";
import { Hotel } from "@/types/hotel";
import { mockHotels } from "@/utils/mockData";

jest.mock("@/components/DetailsSectionComponents/OfferName", () => ({
  OfferName: ({ name }: { name: string }) => (
    <div data-testid="mock-offer-name">{name}</div>
  ),
}));

jest.mock("@/components/DetailsSectionComponents/Extras", () => ({
  Extras: ({ cancellationType }: { cancellationType: string }) => (
    <div data-testid="mock-extras">
      {cancellationType === "FREE_CANCELLATION" ? "Free cancellation" : ""}
    </div>
  ),
}));

const mockOffer: Hotel["offer"] = mockHotels[1].offer;

describe("Details Component", () => {
  const mockOfferNoCancellation: Hotel["offer"] = {
    ...mockOffer,
    cancellationOption: { cancellationType: "NOT_REFUNDABLE" },
  };

  it("renders the mocked OfferName component with the correct offer name", () => {
    render(<Details offer={mockOffer} />);

    expect(screen.getByTestId("mock-offer-name")).toHaveTextContent(
      mockOffer.name,
    );
  });

  it("renders 'Free cancellation' when applicable in the mocked Extras component", () => {
    render(<Details offer={mockOffer} />);

    expect(screen.getByTestId("mock-extras")).toHaveTextContent(
      "Free cancellation",
    );
  });

  it("renders nothing when cancellation is not free in the mocked Extras component", () => {
    render(<Details offer={mockOfferNoCancellation} />);

    expect(screen.getByTestId("mock-extras")).not.toHaveTextContent(
      "Non-refundable",
    );
  });
});
