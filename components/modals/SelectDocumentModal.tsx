"use client";
import React, { useState } from "react";
import CustomModalContent from "@/components/modals/CustomModal";
import CustomModal from "./Modal";
import { CustomCheck } from "../CheckBox/CustomCheckbox";
import { useRouter } from "next/navigation";
import { CustomButton } from "../button/Button";

// Type for terms data
interface Term {
  id: string;
  label: string;
  selected?: boolean;
}

// Example terms data
const termsData2: Term[] = [
  { id: "term1", label: "사업자등록증", selected: true },
  { id: "term2", label: "통장사본" },
  { id: "term3", label: "서류1" },
  { id: "term4", label: "서류2" },
  { id: "term5", label: "서류3" },
  // { id: "term6", label: "모든 정보가 정확합니다." },
];
type SelectDocumentModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function SelectDocumentModal({
  isOpen,
  setIsOpen,
}: SelectDocumentModalProps) {
  // Type for checkbox state
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(
    termsData2.reduce((acc, term) => ({ ...acc, [term.id]: false }), {})
  );

  // Checkbox handler
  const handleCheckboxChange = (id: string, checked: boolean) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const router = useRouter();
  const handlePrimaryButton = () => {
    // console.log('Review deleted');
    setIsOpen(false);
    router.push("/chat/example3");
  };

  const handleSecondaryButton = () => {
    // console.log('Delete canceled');
    setIsOpen(false);
  };
  const allChecked = Object.values(checkedItems).some((isChecked) => isChecked);

  return (
    <CustomModal
      isOpen={isOpen}
      content={
        <CustomModalContent
          mainContent={
            <div className="flex flex-col items-center h-full gap-y-5 px-5 xs:px-0 !w-full">
              <h2 className="text-grey-font font-PretendardBold">서류 발송</h2>

              <div className="flex flex-col  h-full w-full gap-y-5">
                {termsData2.map((term) => (
                  <button
                    className={`border !max-h-[54px]  gap-x-[10px] px-[16px] py-5 flex items-center rounded-lg ${
                      checkedItems[term.id] && "border-main-color"
                    }`}
                    key={term.id}
                    onClick={() => {
                      handleCheckboxChange(term.id, !checkedItems[term.id]);
                    }}
                  >
                    <CustomCheck
                      label={""}
                      isSelected={checkedItems[term.id]}
                      onChange={(checked: boolean) =>
                        handleCheckboxChange(term.id, checked)
                      }
                      backgroundColor={""}
                      width="!w-[18px]"
                      height="!h-[18px]"
                    />
                    <span className="font-pretendardRegular text-[16px] text-grey-font">
                      {term.label}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex gap-[10px] w-full">
                <div className="w-full">
                  <CustomButton
                    backgroundColor="bg-white border-1 border-main-color"
                    label="닫기"
                    textStyle=" text-main-color font-PretendardBold"
                    height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
                    onPress={handleSecondaryButton}
                  />
                </div>
                <div className="w-full">
                  <CustomButton
                    backgroundColor={allChecked ? "bg-main-color" : "bg-grey-disabled"}
                    label="선택 발송"
                    textStyle=" text-white font-PretendardBold"
                    height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
                    onPress={handlePrimaryButton}
                  />
                </div>
              </div>
            </div>
          }
          primaryButtonText="선택 발송"
          primaryButtonColor={allChecked ? "main-color" : "grey-disabled"}
          primaryButtonOnClick={handlePrimaryButton}
          secondaryButtonText="닫기"
          secondaryButtonColor="grey-light"
          secondaryButtonOnClick={handleSecondaryButton}
          hasButton={false}
        />
      }
    />
  );
}
