import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

interface SnackProps {
  message: string;
  bottomMargin?: string;
  type?: "message";
  duration?: number;
}

const SnackBar: React.FC<SnackProps> = ({
  message,
  type = "message",
  duration = 300000,
  bottomMargin="bottom-[40px]"
}) => {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-hide
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), duration);
    return () => clearTimeout(timer); // Cleanup timer
  }, [duration]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIsVisible(false),
    onSwipedRight: () => setIsVisible(false),
    // preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  if (!isVisible) return null;

  const backgroundColor = {
    message: "bg-[#404251]",
  }[type];

  return (
    <div
      {...swipeHandlers}
      className={`absolute ${bottomMargin} left-1/2 transform -translate-x-1/2 z-50 w-full !h-[42px] 
        text-white transition-opacity duration-300 flex items-center ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div
        className={`mx-4 px-[12px] w-full flex items-center !h-[42px] rounded-[4px] ${backgroundColor} text-[13px] font-pretendardRegular`}
      >
        {message}
      </div>
    </div>
  );
};

export default SnackBar;
