import React, { useState } from "react";

const ImageScroller = ({
  imageSrc,
  imageAlt,
}: {
  imageSrc?: string;
  imageAlt?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className={`w-full h-auto ${isHovered ? "image-scroll" : ""}`}
      />
    </div>
  );
};

export default ImageScroller;
