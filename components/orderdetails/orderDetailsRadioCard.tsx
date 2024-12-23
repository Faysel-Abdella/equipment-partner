import { RadioCheck } from "../icons";
import { CustomButton } from "../button/Button";

interface RadioCardProps {
  title: string;
  buttontext: string;
  description?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

export function OrderDetailRadioCard({
  title,
  description,
  selected,
  onClick,
  buttontext,
}: RadioCardProps) {
  return (
    <div
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      className={` flex flex-col items-center gap-y-[20px] w-full p-[16px] rounded-[12px] border cursor-pointer transition-colors ${
        selected ? "border-main-color " : "border-grey-border"
      }`}
    >
      <div className="flex items-start gap-x-[10px] w-full  ">
        <div className="flex-shrink-0 items-center">
          {selected ? (
            <RadioCheck
              className="w-5 h-5 "
              fillColor={"text-main-light-color"}
            />
          ) : (
            <div className="w-5 h-5 rounded-full border-2 border-grey-border" />
          )}
        </div>
        <div className="flex flex-col gap-3 items-center  w-full">
          <div className="space-y-1 w-full">
            <h3 className=" text-grey-font font-PretendardBold text-[16px] mb-2">
              {title}
            </h3>
            {description && (
              <div className="text-sm text-grey-font-light w-full">
                {description}
              </div>
            )}
          </div>
        </div>
      </div>

      <CustomButton
        backgroundColor="bg-grey-light"
        label={buttontext}
        textStyle=" text-main-color text-[16px] font-PretendardBold"
        height={"!max-h-[46px] !h-[46px] !min-h-[46px]"}
        onPress={() => {
          // setShowModal(true);
        }}
      />
    </div>
  );
}
