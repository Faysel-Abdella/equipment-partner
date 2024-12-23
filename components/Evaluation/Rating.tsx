"use client";
import React, { useState } from "react";

type RatingProps = {
  initialRating?: number; // Optional initial rating
};
const StarIcon = ({ color }: { color: string }) => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.6005 17.0671L7.71166 18.6458L7.5188 18.685C7.22685 18.7625 6.9607 18.9161 6.74752 19.1302C6.53435 19.3442 6.3818 19.6109 6.30543 19.9032C6.22907 20.1954 6.23165 20.5027 6.31289 20.7936C6.39413 21.0846 6.55112 21.3487 6.76785 21.5591L14.6563 29.2376L12.7959 40.0838L12.7738 40.2715C12.7559 40.5735 12.8186 40.8748 12.9554 41.1445C13.0923 41.4143 13.2984 41.6428 13.5526 41.8067C13.8068 41.9707 14.1 42.0641 14.4022 42.0774C14.7044 42.0907 15.0047 42.0235 15.2724 41.8827L25.0109 36.7625L34.7272 41.8827L34.8979 41.9612C35.1796 42.0721 35.4857 42.1062 35.7849 42.0597C36.0841 42.0133 36.3656 41.8882 36.6005 41.6971C36.8353 41.506 37.0151 41.2559 37.1214 40.9724C37.2277 40.6889 37.2567 40.3822 37.2053 40.0838L35.3433 29.2376L43.2351 21.5574L43.3683 21.4124C43.5584 21.1782 43.6831 20.8977 43.7296 20.5996C43.7761 20.3015 43.7428 19.9964 43.633 19.7154C43.5232 19.4344 43.3408 19.1876 43.1045 19C42.8683 18.8124 42.5865 18.6907 42.2879 18.6475L31.3991 17.0671L26.5316 7.20229C26.3907 6.91648 26.1727 6.6758 25.9021 6.5075C25.6315 6.3392 25.3193 6.25 25.0006 6.25C24.682 6.25 24.3697 6.3392 24.0992 6.5075C23.8286 6.6758 23.6106 6.91648 23.4697 7.20229L18.6005 17.0671Z"
      fill={color}
    />
  </svg>
);

const Rating: React.FC<RatingProps> = ({ initialRating = 0 }) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hover, setHover] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setRating(index); // Update the current rating
  };

  return (
    <div className="flex gap-[5px] justify-center">
      {[1, 2, 3, 4, 5].map((star, index) => {
        const starIndex = index + 1;

        return (
          <div
            key={index}
            className="cursor-pointer transition-all duration-300"
            onClick={() => handleClick(starIndex)}
            onMouseEnter={() => setHover(starIndex)}
            onMouseLeave={() => setHover(null)}
          >
            <StarIcon
              color={starIndex <= (hover ?? rating) ? "#FFA500" : "#D3D3D3"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
