import { NotifyIcon } from "@/components/icons";
import React from "react";

interface MessageNotificationProps {
  title: string;
  subtitle?: string;
}

export default function MessageNotification({
  title,
  subtitle,
}: MessageNotificationProps) {
  return (
    <div className="mx-[12px] gap-x-[18px] px-[16px] py-[8px] flex items-center !h-[52px] max-h-[52px] bg-main-light-color bg-opacity-10 rounded-[4px] mt-[10px]">
      <NotifyIcon fillColor="#429FFF" />
      <div className="flex flex-col gap-y-[px] font-pretendardRegular text-[13px] text-main-light-color">
        <span>{title}</span>
        {subtitle && <span>{subtitle}</span>}
      </div>
    </div>
  );
}
