import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Details } from "./Details";
import { Hotel } from "@/types/hotel";
import { mockHotels } from "@/utils/mockData";

jest.mock("@/components/DetailsSectionComponents/Header", () => ({
  Header: ({ title }: { title: string }) => (
    <div data-testid="mock-header">{title}</div>
  ),
}));

jest.mock("@/components/DetailsSectionComponents/Address", () => ({
  Address: ({ addressLines }: { addressLines: string[] }) => (
    <div data-testid="mock-address">{addressLines.join(", ")}</div>
  ),
}));

jest.mock("@/components/DetailsSectionComponents/OfferName", () => ({
  OfferName: ({ name }: { name: string }) => (
    <div data-testid="mock-offer-name">{name}</div>
  ),
}));

jest.mock("@/components/DetailsSectionComponents/Extras", () => ({
  Extras: ({
    cancellationOption,
  }: {
    cancellationOption: Hotel["offer"]["cancellationOption"];
  }) => (
    <div data-testid="mock-extras">
      {cancellationOption.cancellationType === "FREE_CANCELLATION"
        ? "Free cancellation"
        : ""}
    </div>
  ),
}));

describe("Details", () => {
  const mockHotel = mockHotels[0];
  const mockProperty: Hotel["property"] = mockHotel.property;
  const mockPropertyName = mockProperty.title;
  const mockPropertyAddress = mockProperty.address.join(", ");
  const mockOfferWithoutFreeCancellation = mockHotel.offer;

  const mockOfferWithFreeCancellation: Hotel["offer"] = mockHotels[1].offer;

  it("renders mocked Header and Address components", () => {
    render(
      <Details property={mockProperty} offer={mockOfferWithFreeCancellation} />,
    );

    expect(screen.getByTestId("mock-header")).toHaveTextContent(
      mockPropertyName,
    );
    expect(screen.getByTestId("mock-address")).toHaveTextContent(
      mockPropertyAddress,
    );
  });

  it("renders mocked OfferName component correctly", () => {
    render(
      <Details property={mockProperty} offer={mockOfferWithFreeCancellation} />,
    );

    expect(screen.getByTestId("mock-offer-name")).toHaveTextContent(
      mockOfferWithFreeCancellation.name,
    );
  });

  it('displays "Free cancellation" when applicable via mocked Extras component', () => {
    render(
      <Details property={mockProperty} offer={mockOfferWithFreeCancellation} />,
    );

    expect(screen.getByTestId("mock-extras")).toHaveTextContent(
      "Free cancellation",
    );
  });

  it('does not display "Free cancellation" when not applicable via mocked Extras component', () => {
    render(
      <Details
        property={mockProperty}
        offer={mockOfferWithoutFreeCancellation}
      />,
    );

    expect(screen.getByTestId("mock-extras")).not.toHaveTextContent(
      "Free cancellation",
    );
  });
});
