"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { useDisclosure } from "@nextui-org/react";
import DisplaySpace from "@/components/DisplaySpace";
import PermissionRequestModal from "@/components/modals/PermissionRequestModal";

export default function HomeBar() {
  const [showSplash, setShowSplash] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { onOpen } = useDisclosure(); // Use the hook here to get onOpen

  useEffect(() => {
    // Set the splash screen to disappear after 3 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
      setShowModal(true);
      onOpen(); // Trigger the modal after splash
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onOpen]);

  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full scrollbar-hide relative">

          {/* Splash Screen */}
          {showSplash && (
            <div className="bg-main-color w-full mx-auto h-full">
              <div className=" flex justify-center h-full">
                <Image
                  src={logo.src}
                  height={56}
                  width={221}
                  alt="Mascot"
                  className="object-contain"
                />
              </div>
            </div>
          )}

          {
            <PermissionRequestModal
              isOpen={showModal}
              setIsOpen={setShowModal}
            />
          }
        </div>
      }
    />
  );
}
