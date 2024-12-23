"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

const WorkReportCarousel = () => {
  const workReports = [
    { id: 1, imageSrc: "/assets/images/cino3.svg", alt: "item" },
    { id: 2, imageSrc: "/assets/images/equip2.png", alt: "item" },
    { id: 3, imageSrc: "/assets/images/owned1.png", alt: "item" },
    { id: 4, imageSrc: "/assets/images/owned2.png", alt: "item" },
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
      {workReports.map((report) => (
        <div key={report.id} className="space-y-[10px]">
          <div className="">
            <Image
              src={report.imageSrc}
              height={100}
              width={100}
              alt={report.alt}
              className="min-w-[100px] min-h-[100px] rounded-xl object-cover"
              draggable={false} // Prevents default drag behavior
              onDragStart={(e) => e.preventDefault()} // Explicitly prevents image selection on drag
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkReportCarousel;
