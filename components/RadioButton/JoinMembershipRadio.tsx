import React from "react";
import { RadioCheck } from "../icons";
import { IconProps } from "../icons";

interface JoinMembershipRadioProps {
  icon: React.FC<IconProps>  | React.ReactNode;
  title: string | React.ReactNode;
  description?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

export function JoinMembershipRadio({
  icon: Icon,
  title,
  description,
  selected,
  onClick,
}: JoinMembershipRadioProps) {
  return (
    <div
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      className={`flex items-center gap-5 p-5 rounded-[8px] border cursor-pointer transition-colors ${
        selected ? "border-main-color " : "border-grey-border"
      }`}
    >
      <div className="flex-shrink-0 mt-1 items-center">
        {selected ? (
          <RadioCheck
            className="w-5 h-5 "
            fillColor={"text-main-light-color"}
          />
        ) : (
          <div className="w-5 h-5 rounded-full border-2 border-grey-border" />
        )}
      </div>
      <div className="flex gap-3 items-center justify-between w-full">
        <div className="flex flex-col gap-y-2">
          <h3 className="font-medium text-[16px] text-grey-font font-PretendardBold">
            {title}
          </h3>
          {description && (
            <div className="text-[13px] text-grey-font-light font-pretendardRegular">
              {description}
            </div>
          )}
        </div>
        <div className="w-[60px] h-[60px] px-[20px] bg-grey-light rounded-full flex items-center justify-center">
          {React.isValidElement(Icon) ? (
            Icon
          ) : (
            Icon &&
            typeof Icon === "function" && (
              <Icon className="!w-[60px] !h-[60px] text-grey-font-light" />
            )
          )}
        </div>
      </div>
    </div>
  );
}
