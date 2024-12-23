import { ReactNode } from "react";

interface CustomModalProps {
  isOpen: boolean;
  content: ReactNode;
  onClose?: () => void;
}

export default function CustomModal({ isOpen, content }: CustomModalProps) {
  if (isOpen !== true) {
    return null;
  }

  return (
    // <div className="w-full relative !z-50 !h-screen">
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-grey-modal-bg h-screen w-full px-[20px]">
        <div className="bg-white !rounded-[12px] overflow-hidden shadow-none w-full max-w-[350px]">
          {content}
        </div>
      </div>
    // </div>
  );
}
