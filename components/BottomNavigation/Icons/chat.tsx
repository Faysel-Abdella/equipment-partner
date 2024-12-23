import React from "react";

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  fillColor: string;
}

export const ChatIcon: React.FC<IconProps> = ({
  className,
  style,
  fillColor,
}) => {
  return (
    <svg
      className={className}
      style={style}
      width="26"
      height="21"
      viewBox="0 0 26 21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.36364 10.6364C1.06364 10.6364 0 9.57273 0 8.27273V2.36364C0 1.06364 1.06364 0 2.36364 0H11.8182C13.1182 0 14.1818 1.06364 14.1818 2.36364V8.27273C14.1818 9.57273 13.1182 10.6364 11.8182 10.6364H9.45455V14.1818L5.90909 10.6364H2.36364ZM23.6364 17.7273C24.9364 17.7273 26 16.6636 26 15.3636V9.45455C26 8.15455 24.9364 7.09091 23.6364 7.09091H16.5455V8.27273C16.5455 10.8727 14.4182 13 11.8182 13V15.3636C11.8182 16.6636 12.8818 17.7273 14.1818 17.7273H16.5455V21.2727L20.0909 17.7273H23.6364Z"
        fill={fillColor}
      />
    </svg>
  );
};
