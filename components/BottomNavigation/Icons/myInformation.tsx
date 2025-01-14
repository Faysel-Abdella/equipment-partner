import React from "react";

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  fillColor: string;
}

export const MyInformationIcon: React.FC<IconProps> = ({
  className,
  style,
  fillColor,
}) => {
  return (
    <svg
      className={className}
      style={style}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 11C14.0387 11 16.5 8.53875 16.5 5.5C16.5 2.46125 14.0387 0 11 0C7.96125 0 5.5 2.46125 5.5 5.5C5.5 8.53875 7.96125 11 11 11ZM11 13.75C7.32875 13.75 0 15.5925 0 19.25V20.625C0 21.3813 0.61875 22 1.375 22H20.625C21.3813 22 22 21.3813 22 20.625V19.25C22 15.5925 14.6713 13.75 11 13.75Z"
        fill={fillColor}
      />
    </svg>
  );
};
