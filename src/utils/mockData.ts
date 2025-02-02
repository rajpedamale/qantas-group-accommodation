import { Hotel } from "@/types/hotel";

export const mockHotels: Hotel[] = [
  {
    id: "cxd650nuyo",
    property: {
      propertyId: "P107801",
      title: "Courtyard by Marriott Sydney-North Ryde",
      address: ["7-11 Talavera Rd", "North Ryde"],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
        caption: "Image of Courtyard by Marriott Sydney-North Ryde",
        imageType: "PRIMARY",
      },
      rating: {
        ratingValue: 4.5,
        ratingType: "self",
      },
    },
    offer: {
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER",
      },
      name: "Deluxe Balcony Room",
      displayPrice: {
        amount: 329.0,
        currency: "AUD",
      },
      savings: {
        amount: 30.0,
        currency: "AUD",
      },
      cancellationOption: {
        cancellationType: "NOT_REFUNDABLE",
      },
    },
  },
  {
    id: "mesq6mggyn",
    property: {
      propertyId: "P107802",
      title: "Primus Hotel Sydney",
      address: ["339 Pitt St", "Sydney"],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
        caption: "Image of Primus Hotel Sydney",
        imageType: "PRIMARY",
      },
      rating: {
        ratingValue: 5,
        ratingType: "self",
      },
    },
    offer: {
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER",
      },
      name: "Deluxe King",
      displayPrice: {
        amount: 375.0,
        currency: "AUD",
      },
      savings: {
        amount: 28.0,
        currency: "AUD",
      },
      cancellationOption: {
        cancellationType: "FREE_CANCELLATION",
      },
    },
  },
];
