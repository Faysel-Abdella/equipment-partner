"use client";

import { ReviewItemProps } from "@/types/reviewTypes";
import Image from "next/image";
import React, { useState, useRef } from "react";

const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => {
  const [recommendCount, setRecommendCount] = useState<number>(review.recommendation);
  const [isActive, setIsActive] = useState<boolean>(review.isLiked);

  // Drag-to-scroll logic
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleRecommendation = () => {
    setIsActive(!isActive);
    setRecommendCount((prevCount) =>
      isActive ? prevCount - 1 : prevCount + 1
    );
  };

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
    <div className="space-y-[10px] py-[20px]">
      <p className="text-[18px] text-grey-font font-PretendardBold">
        {review.reviewer}
      </p>
      <div className="flex justify-between items-center text-[13px]">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Image
              key={i}
              src={
                i < review.rating
                  ? "/assets/icons/star-filled.svg"
                  : "/assets/icons/star-outline.svg"
              }
              alt="star"
              width={18}
              height={18}
            />
          ))}
        </div>
        <p className="text-grey-font-light font-pretendardRegular text-[13px]">
          {review.date}
        </p>
      </div>
      <p className="text-[13px] text-grey-font font-pretendardRegular">
        {review.content}
      </p>

      {/* Draggable Image Section */}
      {review.images.length > 0 && (
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-2"
          style={{
            cursor: isDragging ? "grabbing" : "grab", // Change cursor when dragging
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
        >
          {review.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`review-image-${index}`}
              width={100}
              height={100}
              className="rounded-[12px] object-cover"
              draggable={false} // Prevent default image drag
              onDragStart={(e) => e.preventDefault()} // Explicitly prevent image drag
            />
          ))}
        </div>
      )}

      <button
        onClick={handleRecommendation}
        className={`border-1 rounded-full py-[10px] px-[14px] text-[13px] font-pretendardRegular  ${
          isActive ? "bg-grey-font text-white" : "border-grey-border text-grey-font"
        }`}
      >
        추천 {recommendCount}
      </button>
    </div>
  );
};

export default ReviewItem;
