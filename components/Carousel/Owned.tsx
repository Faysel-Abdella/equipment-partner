"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

const OwnedCarousel = () => {
  const ownedItems = [
    {
      id: 1,
      imageSrc: "/assets/images/owned1.png",
      title: "굴착기 03W",
    },
    {
      id: 2,
      imageSrc: "/assets/images/owned2.png",
      title: "굴착기 06LC",
    },
    {
      id: 3,
      imageSrc: "/assets/images/cino3.svg",
      title: "크레인 05X",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!isDragging || !container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = x - startX; // Distance dragged
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={scrollContainerRef}
      className="flex gap-[10px] overflow-x-auto scrollbar-hide relative"
      style={{
        cursor: isDragging ? "grabbing" : "grab", // Change cursor while dragging
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave} // Stop dragging when leaving the container
    >
      {ownedItems.map((item) => (
        <div key={item.id} className="space-y-[10px]">
          <div className="">
            <Image
              src={item.imageSrc}
              alt={item.title}
              height={170}
              width={170}
              className="min-w-[150px] min-h-[150px] rounded-[12px] object-cover"
              draggable={false} // Prevents default drag behavior
              onDragStart={(e) => e.preventDefault()} // Explicitly prevents image selection on drag
            />
          </div>
          <p className="flex justify-center text-[13px] font-PretendardBold text-grey-font">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OwnedCarousel;
