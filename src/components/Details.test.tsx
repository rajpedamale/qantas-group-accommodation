import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Details } from "./Details";
import { Hotel } from "@/types/hotel";
import { mockHotels } from "@/utils/mockData";

const mockHotel = mockHotels[0];
const mockProperty: Hotel["property"] = mockHotel.property;
const mockPropertyName = mockProperty.title;
const mockPropertyAddress = mockProperty.address.join(", ");
const mockOfferWithoutFreeCancellation = mockHotel.offer;

const mockOfferWithFreeCancellation: Hotel["offer"] = mockHotels[1].offer;

describe("Details", () => {
  it("renders hotel title and address correctly", () => {
    render(
      <Details property={mockProperty} offer={mockOfferWithFreeCancellation} />,
    );

    expect(screen.getByText(mockPropertyName)).toBeInTheDocument();

    expect(screen.getByText(mockPropertyAddress)).toBeInTheDocument();
  });

  it("renders offer name correctly", () => {
    render(
      <Details property={mockProperty} offer={mockOfferWithFreeCancellation} />,
    );

    expect(
      screen.getByText(mockOfferWithFreeCancellation.name),
    ).toBeInTheDocument();
  });

  it('displays "Free cancellation" when applicable', () => {
    render(
      <Details property={mockProperty} offer={mockOfferWithFreeCancellation} />,
    );

    expect(screen.getByText("Free cancellation")).toBeInTheDocument();
  });

  it('does not display "Free cancellation" when not applicable', () => {
    render(
      <Details
        property={mockProperty}
        offer={mockOfferWithoutFreeCancellation}
      />,
    );

    expect(screen.queryByText("Free cancellation")).not.toBeInTheDocument();
  });
});
