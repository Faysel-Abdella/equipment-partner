"use client";
import DisplaySpace from "@/components/DisplaySpace";
import RejectionModal from "@/components/modals/RejectionModal";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
export default function ApprovalRejection() {
  const [isRejectionModalVisible, setRejectionModalVisible] = useState(true);
  const router = useRouter();
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full overflow-y-scroll scrollbar-hide relative">
          <div className="overflow-y-auto scrollbar-hide relative max-h-screen"></div>
          <RejectionModal
            isOpen={isRejectionModalVisible}
            setIsOpen={setRejectionModalVisible}
            handleClick={() => {
              router.push("/joinTheMembership/welcome");
            }}
          />
        </div>
      }
    />
  );
}
