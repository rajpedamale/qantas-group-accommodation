import React from "react";

interface RatingBarProps {
  rating: number; // Rating from 0 to 5 (can be decimal)
  variant?: "star" | "circle";
}

// This component has potential to be refactored.
// Likely a candidate for Design System
export function RatingBar({ rating, variant = "star" }: RatingBarProps) {
  const fullStars = Math.floor(rating); // Number of completely filled stars
  const partialFill = rating - fullStars; // Fractional part for partial fill
  const svgPaths = {
    star: "M8 1l2.12 5.84H16l-4.6 3.38L13.08 15 8 11.73 2.92 15l1.68-4.78L0 6.84h5.88z",
    circle: "M8 0a6 6 0 1 1 0 12A6 6 0 0 1 8 0z",
  };

  return (
    <div className="flex gap-0.25">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="relative w-4 h-4">
          {/* Background Gray Star */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="absolute w-4 h-4 fill-gray-200"
            role="img"
            aria-label={`${variant} rating empty`}
          >
            <path d={svgPaths[variant]} />
          </svg>

          {/* Foreground Yellow Star (Clipped) */}
          <div
            className="absolute top-0 left-0 h-full"
            style={{
              width:
                index < fullStars
                  ? "100%"
                  : index === fullStars
                    ? `${partialFill * 100}%`
                    : "0%",
              overflow: "hidden",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-4 h-4 fill-yellow-200"
              role="img"
              aria-label={`${variant} rating filled`}
            >
              <path d={svgPaths[variant]} />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
