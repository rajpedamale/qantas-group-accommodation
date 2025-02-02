import React, { useState } from "react";
import Image from "next/image";
import clsx from "classnames";

type ImageComponentProps = { src: string; alt: string };

// I saw the image was loading too slowly on the page.
// Hence, the placeholder image.
// This has the advantage of caching, and re-renders are fast

export function ImageComponent({ src, alt }: ImageComponentProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative w-[145px] h-[125px] flex justify-center items-center">
      {/* Placeholder Image */}
      {!imageLoaded && (
        <Image
          src="/placeholder.png"
          alt="Loading..."
          width={145}
          height={125}
          className="absolute inset-0 object-contain"
        />
      )}
      {/* Actual Hotel Image */}
      <Image
        src={src}
        alt={alt}
        width={145}
        height={125}
        className={clsx("object-contain transition-opacity duration-300", {
          "opacity-100": imageLoaded,
          "opacity-0": !imageLoaded,
        })}
        onLoad={() => setImageLoaded(true)}
        onError={() => console.error("Failed to load image:", src)}
        priority
      />
    </div>
  );
}
