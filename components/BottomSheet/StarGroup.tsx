import React from "react";
import { StarIcon } from '../icons';

interface StarGroupProps {
  activeStars: number; // Number of active (filled) stars
  totalStars?: number; // Total number of stars (default is 5)
  size?: number; // Size of the star icon
  activeColor?: string; // Color for active stars
  inactiveColor?: string; // Color for inactive stars
}

const StarGroup: React.FC<StarGroupProps> = ({
  activeStars,
  totalStars = 5,
  activeColor = "#F39C12",
  inactiveColor = "#E0E0E0",
}) => {
  

  return (
    <div className="flex ">
      {Array.from({ length: totalStars }, (_, i) => (
        <StarIcon key={i} fillColor={i < activeStars ? activeColor : inactiveColor} />
      ))}
    </div>
  );
};

export default StarGroup;