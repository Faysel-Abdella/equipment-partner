"use client";
import DisplaySpace from "@/components/DisplaySpace";
import SocialAccountModal from "@/components/modals/SocialAccountModal";
import React, { useState } from "react";
export default function SocailAccount() {
  const [isPendingModalVisible] = useState(true);
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full overflow-y-scroll scrollbar-hide relative">
          <div className="overflow-y-auto scrollbar-hide relative max-h-screen"></div>
          <SocialAccountModal
            isOpen={isPendingModalVisible}
            onConfirm={() => {}}
          />
        </div>
      }
    />
  );
}
