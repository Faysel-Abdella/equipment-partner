"use client";
import DisplaySpace from "@/components/DisplaySpace";
import PendingModal from "@/components/modals/PendingModal";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
export default function AwaitingApproval() {
  const [isPendingModalVisible, setPendingModalVisible] = useState(true);
  const router = useRouter();
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full overflow-y-scroll scrollbar-hide relative">
          <div className="overflow-y-auto scrollbar-hide relative max-h-screen"></div>
          <PendingModal
            isOpen={isPendingModalVisible}
            setIsOpen={setPendingModalVisible}
            handleClick={() => {
              router.push("/joinTheMembership/welcome");
            }}
          />
        </div>
      }
    />
  );
}
