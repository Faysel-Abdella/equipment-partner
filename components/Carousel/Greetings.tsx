"use client";

import { useEffect, useRef, useState } from "react";

const GreetingCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const itemWidth = 340; // Width of each item
    const gap = 10; // Gap between items
    const totalItemWidth = itemWidth + gap; // Total width of an item including gap
    const containerWidth = container.offsetWidth; // Width of the container

    // Center the second item on initial render
    const secondItemCenter =
      totalItemWidth + totalItemWidth / 2 - containerWidth / 2;

    container.scrollLeft = secondItemCenter;

    // Handle infinite scrolling
    const handleScroll = () => {
      const scrollWidth = container.scrollWidth; // Total scrollable width
      const maxScrollLeft = scrollWidth - containerWidth; // Maximum scroll position

      if (container.scrollLeft <= 0) {
        container.scrollLeft = maxScrollLeft - totalItemWidth * 4; // Adjust for duplication
      } else if (container.scrollLeft >= maxScrollLeft) {
        container.scrollLeft = totalItemWidth * 4; // Adjust for duplication
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      className="flex overflow-x-auto relative scrollbar-hide"
      style={{
        scrollSnapType: "x mandatory",
        position: "relative",
        cursor: isDragging ? "grabbing" : "grab", // Change cursor on drag
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave} // Stop dragging when leaving the container
    >
      {/* Duplicate content for infinite scrolling */}
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex">
          <div className="m-1 !w-[340px] min-h-[154px] bg-[#ffe8e8] rounded-xl"></div>
          <div className="m-1 !w-[340px] min-h-[154px] bg-[#ffe8e8] rounded-xl"></div>
          <div className="m-1 !w-[340px] min-h-[154px] bg-[#ffe8e8] rounded-xl"></div>
          <div className="m-1 !w-[340px] min-h-[154px] bg-[#ffe8e8] rounded-xl"></div>
        </div>
      ))}
    </div>
  );
};

export default GreetingCarousel;
