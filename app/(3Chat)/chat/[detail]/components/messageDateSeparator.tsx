import React from "react";

interface MessageSeparatorProps {
  timestamp: string;
}

export default function MessageSeparator({ timestamp }: MessageSeparatorProps) {
  return (
    <div className="w-full h-[18px] gap-x-[10px] flex items-center my-[10px] px-[12px]">
      <div className="h-[1px] bg-grey-border flex-grow" />
      <span className="text-grey-font-light font-pretendardRegular text-[13px]">{timestamp}</span>
      <div className="h-[1px] bg-grey-border flex-grow" />
    </div>
  );
}
