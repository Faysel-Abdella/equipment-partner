import React from "react";
import { RadioIcon } from "../icons";

interface RadioTrailingProps {
  data: { title: string | React.ReactNode }[]; // Accepting the data as props
  selected: number;
  onClick: (index: number) => void;
  isBottomBorder?: boolean;
}

export default function RadioTrailing({
  data,
  selected,
  onClick,
  isBottomBorder = true,
}: RadioTrailingProps) {
  return (
    <div className="flex w-full flex-col ">
      {data.map((item, index) => (
        <button
          key={index}
          className={`flex items-center justify-between !h-[62px] !min-h-[62px] ${
            isBottomBorder
              ? "border-b-[1px] border-grey-border"
              : index == data.length - 1
              ? ""
              : "border-b-[1px] border-grey-border"
          } `}
          onClick={() => {
            onClick(index);
          }}
        >
          <span className="text-grey-font">{item.title}</span>
          {selected == index ? (
            <RadioIcon fillColor="#255df9" />
          ) : (
            <div className="border-grey-border border-[1px] rounded-full !w-[22px] !h-[22px]"></div>
          )}
        </button>
      ))}
    </div>
  );
}
