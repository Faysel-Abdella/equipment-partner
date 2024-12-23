import { ReviewType } from "../../types/reviewTypes";
import Image from "next/image";
import React from "react";

const MyReview: React.FC<ReviewType> = ({
  content,
  date,
  images,
  rating,
  recommendation,
}) => {
  return (
    <div className="space-y-[10px] px-[16px] py-[20px] ">
      <div className="flex justify-between items-center text-[13px]">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Image
              key={i}
              src={
                i < rating
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
          {date}
        </p>
      </div>
      <p className="text-[13px] text-grey-font font-pretendardRegular">
        {content}
      </p>
      {images.length > 0 && (
        <div className="flex overflow-x-auto scrollbar-hide space-x-2">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`image-${index}`}
              width={100}
              height={100}
              className="rounded-[12px]"
            />
          ))}
        </div>
      )}
      <p className="inline-block text-[13px] text-grey-font-light font-pretendardRegular">
        추천 {recommendation}
      </p>
    </div>
  );
};

export default MyReview;
