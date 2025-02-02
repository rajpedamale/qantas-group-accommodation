import { fetchHotels } from "./api";
import { mockHotels } from "@/utils/mockData";

global.fetch = jest.fn();

describe("fetchHotels", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("fetches and returns hotels successfully", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: mockHotels }),
    });

    const hotels = await fetchHotels();

    expect(hotels).toEqual(mockHotels);
    expect(fetch).toHaveBeenCalledWith(process.env.NEXT_PUBLIC_API_URL, {
      cache: "no-store",
    });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("throws an error when the API response is not OK", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({}),
    });

    await expect(fetchHotels()).rejects.toThrow("Failed to fetch hotels");
  });

  it("throws an error when fetch fails (network error)", async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error("Network Error"));

    await expect(fetchHotels()).rejects.toThrow("Network Error");
  });
});
