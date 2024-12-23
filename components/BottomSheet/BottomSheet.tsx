import React, { useRef, useEffect, useState } from "react";
import { CloseIcon } from "../icons";

interface BottomSheetProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children: React.ReactNode;
  topNav?: string;
  topPadding?: string;
  horizontalPadding?: string;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  setIsOpen,
  children,
  topNav,
  topPadding = "py-[30px]",
  horizontalPadding = "px-[16px]",
}) => {
  const bottomSheetRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [translateY, setTranslateY] = useState(100); // Initially hidden

  // Handle drag start
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStartY(e.clientY);
  };

  // Handle drag movement
  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      const delta = e.clientY - startY;
      setTranslateY(Math.max(0, delta)); // Prevent upward drag
    }
  };

  // Handle drag end
  const handleMouseUp = () => {
    if (dragging) {
      setDragging(false);
      if (translateY > 100) {
        // Close sheet if dragged down sufficiently
        setIsOpen(false);
      } else {
        // Snap back to position
        setTranslateY(0);
      }
    }
  };

  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, handleMouseMove, handleMouseUp]);

  // Animate the sheet in when opened
  useEffect(() => {
    if (isOpen) {
      setTranslateY(0); // Slide up
    } else {
      setTranslateY(100); // Slide down
    }
  }, [isOpen]);

  // Close BottomSheet when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        bottomSheetRef.current &&
        !bottomSheetRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen && translateY === 100) {
    return null; // Fully hidden
  }

  return (
    <>
      {/* Bottom Sheet */}
      <div className="max-h-screen absolute inset-x-0 bottom-0 z-50 transition-colors-opacity bg-grey-modal-bg">
        <div className="relative h-screen w-full max-h-screen overflow-hidden scrollbar-hide">
          <div
            ref={bottomSheetRef}
            className={`absolute bottom-0 bg-white w-full rounded-t-[12px] overflow-hidden max-h-[93vh] ${horizontalPadding} scrollbar-hide ${topPadding}`}
            onMouseDown={handleMouseDown}
            style={{
              transform: `translateY(${translateY}%)`,
              transition: dragging ? "none" : "transform 0.3s ease-in-out",
            }}
          >
            {/* Header with Close Button */}
            {topNav && (
              <div className="w-full mx-auto h-[64px] flex justify-center items-center !mt-[-30px] pb-5 pt-5 border-b border-grey-border">
                <div className="relative h-[34px] px-[16px] w-full flex items-end">
                  {/* Middle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 text-center font-PretendardBold text-[16px] text-grey-font">
                    {topNav}
                  </div>

                  {/* Trailing */}
                  <button
                    className="flex-1 flex justify-end items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <CloseIcon fillColor="" />
                  </button>
                </div>
              </div>
            )}

            {/* Content */}
            <div className="w-full max-h-[93vh] overflow-scroll scrollbar-hide">
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="absolute inset-0 bg-grey-modal-bg bg-opacity-100 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default BottomSheet;
