import "@testing-library/jest-dom";

// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
  }),
}));

// Mock Next.js Image component (without using React)
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  }) => {
    return {
      type: "img",
      props,
    };
  },
}));
