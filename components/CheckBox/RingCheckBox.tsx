import { CircleCheckIcon } from "../icons";

interface SocialButtonProps {
  icon: React.ReactNode;
  backgroundColor: string;
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

export function RingCheckBox({ icon, backgroundColor, isSelected, onClick }: SocialButtonProps) {
  return (
    <div className="relative" onClick={onClick}>
      {/* Button with background */}
      <div
        className={` rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 ${backgroundColor}`}
      >
        {icon}
      </div>

      {/* Ring and Checkmark */}
      {isSelected && (
        <>
          {/* Blue ring around the button */}
          <div className="absolute inset-0 border-[4px] border-main-color rounded-full" />
          {/* Checkmark icon in the top-right corner */}
          <div className="absolute -top-1 -right-1 bg-main-color rounded-full ">
            <CircleCheckIcon className=" text-white" />
          </div>
        </>
      )}
    </div>
  );
}