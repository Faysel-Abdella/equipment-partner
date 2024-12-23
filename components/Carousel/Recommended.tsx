"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RecommendedCarousel = () => {
  const recommendedItems = [
    {
      id: 1,
      imageSrc: "/assets/images/cino3.svg",
      title: "작업명 텍스트 영역 ",
      cost: "60만원",
      workDate: "2024.11.01 | 3일간",
    },
    {
      id: 2,
      imageSrc: "/assets/images/cino2.svg",
      title: "작업명 텍스트 영역 ",
      cost: "60만원",
      workDate: "2024.11.01 | 3일간",
    },
    {
      id: 3,
      imageSrc: "/assets/images/equip33.png",
      title: "작업명 텍스트 영역 ",
      cost: "60만원",
      workDate: "2024.11.01 | 3일간",
    },
  ];

  const router = useRouter();
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
      className={`flex whitespace-nowrap overflow-x-auto scrollbar-hide !gap-x-[10px] relative`}
      style={{
        cursor: isDragging ? "grabbing" : "grab", // Change cursor while dragging
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave} // Stop dragging when leaving the container
    >
      {recommendedItems.map((item, index) => (
        <button
          key={item.id}
          className={`max-w-[162px] w-[162px] flex flex-col gap-y-[10px] ${
            index === recommendedItems?.length - 1 ? "mr-4" : ""
          }`}
          onClick={() => {
            router.push(`/home/item-detail`);
          }}
        >
          <div className="">
            <Image
              height={104}
              width={162}
              src={item.imageSrc}
              alt={item.title}
              className="max-w-[162px] max-h-[104px] rounded-[12px]"
              draggable={false} // Prevents default drag behavior
              onDragStart={(e) => e.preventDefault()} // Explicitly prevents image selection on drag
            />
          </div>
          <div className="flex flex-col gap-y-1 w-full">
            <p className="text-grey-font text-[16px] font-PretendardBold text-start">
              {item.title}
            </p>
            <div className="flex gap-x-4 w-full">
              <div className="text-grey-font-light flex text-[13px] font-pretendardRegular !min-w-[45px]">
                희망비용
              </div>

              <p className=" text-grey-font text-[13px] font-pretendardRegular">
                {item.cost}
              </p>
            </div>
            <div className="flex gap-x-4 w-full ">
              <div className=" text-grey-font-light text-[13px] font-pretendardRegular !min-w-[45px] !w-[45px]">
                작업일
              </div>
              <p className=" text-grey-font text-[12px] font-pretendardRegular">
                {item.workDate}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default RecommendedCarousel;
