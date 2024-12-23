import React, { ReactNode } from "react";

interface CustomModalContentProps {
  mainContent: ReactNode;
  primaryButtonText: string;
  primaryButtonColor: string;
  primaryButtonOnClick: () => void;
  primaryDisabled?: boolean;
  secondaryButtonText?: string;
  secondaryButtonColor?: string;
  secondaryButtonOnClick?: () => void;
  secondaryDisabled?: boolean;
  hasButton?: boolean;
}

const CustomModalContent: React.FC<CustomModalContentProps> = ({
  mainContent,
  primaryButtonText,
  primaryButtonColor,
  primaryButtonOnClick,
  primaryDisabled = false,
  secondaryButtonText,
  secondaryButtonColor,
  secondaryButtonOnClick,
  secondaryDisabled = false,
  hasButton = true,
}) => {
  const getButtonClasses = (color: string, isHalfWidth: boolean) => {
    const textColor =
      color === "grey-light" ? "text-grey-font-light" : "text-white";
    const widthClass = isHalfWidth ? "!min-w-[50%]" : "!min-w-full";
    const bgColor = color ? `bg-${color}` : "";
    const borderColor = color ? `border-${color}` : "";

    return `${bgColor} ${borderColor} ${widthClass} !h-[54px] text-[16px] ${textColor}`;
  };

  return (
    <>
      {/* Main Content Section */}
      <div className="pt-[36px] pb-[36px] w-full flex justify-center items-center bg-white">
        <div className="!max-w-[278px] xs:!max-w-[350px] !min-w-[278px]">
          {mainContent}
        </div>
      </div>

      {/* Buttons Section */}
      {hasButton && (
        <div className="m-0 translate-z-0 bottom-0 box-border p-0 font-pretendardRegular ">
          {!secondaryButtonText ? (
            // Single Button
            <div
              className={`!min-w-full !h-[54px] m-0 border-none p-0 box-border translate-z-0`}
            >
              <button
                className={getButtonClasses(primaryButtonColor, false)}
                onClick={primaryButtonOnClick}
                disabled={primaryDisabled}
              >
                {primaryButtonText}
              </button>
            </div>
          ) : (
            // Two Buttons
            <div className="sticky border-none m-0 translate-z-0 bottom-0 box-border p-0 !min-w-full !h-[54px] bg-black flex">
              <button
                className={getButtonClasses(
                  secondaryButtonColor || "grey-light",
                  true
                )}
                onClick={secondaryButtonOnClick}
                disabled={secondaryDisabled}
              >
                {secondaryButtonText}
              </button>
              <button
                className={getButtonClasses(primaryButtonColor, true)}
                onClick={primaryButtonOnClick}
                disabled={primaryDisabled}
              >
                {primaryButtonText}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CustomModalContent;
