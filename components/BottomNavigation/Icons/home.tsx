import React from "react";

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  fillColor: string;
}

export const HomeIcon: React.FC<IconProps> = ({
  className,
  style,
  fillColor,
}) => {
  return (
    <svg
      className={className}
      style={style}
      width="20"
      height="22"
      viewBox="0 0 20 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <path
        d="M0 22V7.33333L9.77778 0L19.5556 7.33333V22H12.2222V13.4444H7.33333V22H0Z"
        fill={fillColor}
      />
    </svg>
  );
};
