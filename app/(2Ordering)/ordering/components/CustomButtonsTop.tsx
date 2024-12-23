import React from "react";

type ButtonData = {
  title: string;
  isActive: boolean;
  onClick: () => void;
};
const CustomButtonsTop = ({ title, isActive, onClick }: ButtonData) => {
  return (
    <button
      onClick={onClick}
      className={`px-[14px] py-[10px] rounded-[100px] ${
        isActive
          ? "bg-grey-font text-white"
          : "border-grey-border border-1 text-grey-font-light leading-[18px]"
      } `}
    >
      <p className="text-[13px] font-pretendardRegular">{title}</p>
    </button>
  );
};

export default CustomButtonsTop;
