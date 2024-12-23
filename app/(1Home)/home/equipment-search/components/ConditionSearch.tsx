import { CustomButton } from "@/components/button/Button";
import RequestSearchCheckBox from "@/components/CheckBox/RequestSearchCheckBox";
import Chip from "@/components/chip/CustomChip";
import { ChevronRight, CloseIcon } from "@/components/icons";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SelectedData } from "../page";

interface ConditionSearchProps {
  handleAddRegion1Click: () => void;
  handleAddRegion2Click: () => void;
  selectedData: SelectedData[];
  selectedData2: SelectedData[];
  setSelectedData: Dispatch<SetStateAction<SelectedData[]>>;
  setSelectedData2: Dispatch<SetStateAction<SelectedData[]>>;
}

export default function ConditionSearch({
  handleAddRegion1Click,
  handleAddRegion2Click,
  selectedData,
  selectedData2,
  setSelectedData,
  setSelectedData2,
}: ConditionSearchProps) {
  const [checkboxes, setCheckboxes] = useState([
    { id: "1", label: "임대 (장비+기사)", checked: true },
    { id: "2", label: "스페어 (기사)", checked: true },
    { id: "3", label: "렌탈(장비)", checked: false },
  ]);

  const handleCheckedChange = (id: string) => {
    setCheckboxes((prev) =>
      prev.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked } // Toggle the checked state
          : checkbox
      )
    );
  };
  const handleClose = (id: string) => {
    const updatedData = selectedData.filter((item) => item.id != id);
    setSelectedData(updatedData);
  };
  const handleClose2 = (id: string) => {
    const updatedData = selectedData2.filter((item) => item.id != id);
    setSelectedData2(updatedData);
  };
  const [isFromComplete, setIsFormComplete] = useState(false);
  useEffect(() => {
    const isAnyChecked = checkboxes.some((checkbox) => checkbox.checked);
    setIsFormComplete(isAnyChecked);
  }, [checkboxes]);

  const router = useRouter();
  return (
    <>
      <div className=" flex flex-col  bg-white font-pretendardRegular">
        {/* Region Search */}
        <div className="pb-[20px] border-b border-grey-border">
          <h3 className="font-PretendardBold text-grey-font text-[14px] pb-[10px]">
            지역 검색
          </h3>
          <div
            className={`flex flex-wrap gap-[10px] text-[13px] ${
              selectedData?.length > 0 && "mb-[10px]"
            }`}
          >
            {selectedData.map((item) => (
              <Chip
                key={item.id}
                className="bg-grey-light rounded-full  p-[8px] flex items-center justify-center "
                iconPosition="trailing"
                icon={
                  <CloseIcon
                    className="!w-[16px] !h-[16px] cursor-pointer"
                    fillColor="#ABAFB7"
                    onClick={() => handleClose(item.id)}
                  />
                }
                content={
                  <div className="flex items-center whitespace-nowrap pr-[6px]">
                    <span className="text-grey-font">{item.location}</span>
                    <ChevronRight
                      strokeColor="#404251 "
                      fillColor="#f2f3f5 "
                      className="!w-[10px] !h-[10px]"
                    />
                    <span className="text-grey-font">{item.detail}</span>
                  </div>
                }
              />
            ))}
          </div>
          <div className="">
            <CustomButton
              label="지역 선택"
              backgroundColor="bg-[#E9EEFE]"
              textStyle="text-white w-fit text-[13px] text-main-color font-PretendardBold"
              onPress={handleAddRegion1Click}
              height="!h-[42px]"
              width="!w-[75px] !max-w-[75px]"
            />
          </div>
        </div>

        {/* Equipment Search */}
        <div className="py-[20px] border-b border-grey-border">
          <h3 className="font-PretendardBold text-grey-font text-[14px] pb-[10px] ">
            장비 검색
          </h3>
          <div
            className={`flex flex-wrap gap-[10px] text-[13px] ${
              selectedData2?.length > 0 ? "mb-[10px]" : ""
            }`}
          >
            {selectedData2.map((item) => (
              <Chip
                key={item.id}
                content={
                  <div className="flex items-center whitespace-nowrap pr-[6px]">
                    <span className="text-grey-font">{item.location}</span>
                    <ChevronRight
                      strokeColor="#404251 "
                      fillColor="#f2f3f5 "
                      className="!w-[10px] !h-[10px]"
                    />
                    <span className="text-grey-font">{item.detail}</span>
                  </div>
                }
                iconPosition="trailing"
                icon={
                  <CloseIcon
                    className="!w-[16px] !h-[16px] cursor-pointer"
                    fillColor="#ABAFB7"
                    onClick={() => handleClose2(item.id)}
                  />
                }
                className="bg-grey-light text-gray-700 rounded-full px-3 py-2"
              />
            ))}
          </div>
          <div className="">
            <CustomButton
              label="장비 선택"
              backgroundColor="bg-[#E9EEFE]"
              textStyle="text-white w-fit text-[13px] text-main-color font-PretendardBold"
              height="!h-[42px]"
              width="!w-[75px] !max-w-[75px]"
              onPress={handleAddRegion2Click}
            />
          </div>
        </div>

        {/* Request Search */}
        <div className="pt-[20px]">
          <h3 className="font-PretendardBold text-grey-font text-[14px] pb-[16px]">
            요청 검색
          </h3>
          <div className="flex flex-col gap-[16px] text-[16px]">
            {checkboxes.map(({ id, label, checked }) => (
              <RequestSearchCheckBox
                key={id}
                id={id}
                label={label}
                checked={checked}
                onCheckedChange={() => handleCheckedChange(id)}
              />
            ))}
          </div>
        </div>
      </div>
      {/* // Submit Button */}
      <div className=" pb-10 mt-5">
        <CustomButton
          label="적용하기"
          backgroundColor="bg-main-color"
          textStyle="text-white  text-[16px] font-PretendardBold"
          height="!h-[54px] !min-h-[54px]"
          disabled={!isFromComplete}
          onPress={() => {
            router.push("/home/equipment-search/search-result/test");
          }}
        />
      </div>
    </>
  );
}
