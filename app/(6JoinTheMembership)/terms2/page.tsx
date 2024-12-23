"use client";

import { useState } from "react";
import CustomCheckbox from "@/components/CheckBox/custom-checkbox";
import { BackIcon, SmallBuilding } from "@/components/icons";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import DisplaySpace from "@/components/DisplaySpace";
import { CustomButton } from "@/components/button/Button";
import { useRouter } from "next/navigation";

// Define the type for a term item
interface Term {
  id: string;
  label: string;
  checked: boolean;
}

// Define the data
const termsData: Term[] = [
  { id: "terms1", label: "(필수) 만 15세 이상입니다.", checked: false },
  { id: "terms2", label: "(필수) 서비스 이용약관 동의", checked: false },
  { id: "terms3", label: "(필수) 개인정보 수집 및 이용 동의", checked: false },
];

const termsData2: Term[] = [
  { id: "terms4", label: "(선택) 위치정보 이용약관", checked: false },
  {
    id: "terms5",
    label: "(선택) 개인정보 수집 및 이용동의 마케팅",
    checked: false,
  },
  {
    id: "terms6",
    label: "(선택) 광고성 정보 이메일/SMS 수신 동의",
    checked: false,
  },
];

export default function EnterpriseTermsPage() {
  // Initialize checked items
  const initializeCheckedItems = (data: Term[]) =>
    data.reduce((acc, term) => {
      acc[term.id] = term.checked;
      return acc;
    }, {} as Record<string, boolean>);

  const [checkedItems, setCheckedItems] = useState(() => ({
    ...initializeCheckedItems(termsData),
    ...initializeCheckedItems(termsData2),
  }));

  // Check if all checkbox is selected
  const allChecked = Object.values(checkedItems).every(Boolean); // Check if all terms are checked

  // Handle individual checkbox change
  const handleCheckboxChange = (id: string, checked: boolean) => {
    setCheckedItems((prev) => ({ ...prev, [id]: checked }));
  };

  // Handle "select all" checkbox
  const handleAllCheck = (checked: boolean) => {
    const newCheckedItems = Object.keys(checkedItems).reduce((acc, key) => {
      acc[key] = checked;
      return acc;
    }, {} as Record<string, boolean>);
    setCheckedItems(newCheckedItems);
  };

  const router = useRouter();
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full overflow-y-scroll scrollbar-hide relative">
          <TopNavigationBar
            leading={
              <button
                className=""
                onClick={() => {
                  router.back();
                }}
              >
                <BackIcon
                  className="min-w-[10px] min-h-[12px]"
                  fillColor="#80808e"
                />
              </button>
            }
            middle={
              <h3 className="w-full text-[16px] text-grey-font font-PretendardBold flex items-center justify-center">
                회원가입
              </h3>
            }
            bottomBorder="border-b-[1px] border-grey-border"
          />
          <div className="pt-[78px] h-full relative overflow-y-scroll overflow-x-hidden scrollbar-hide z-40">
            <main className="w-full">
              <div className="py-5 px-4">
                <div className="flex items-center gap-1 px-3 py-2 my-2 bg-[#429FFF26] rounded-[2px] w-fit tracking-tighter">
                  <SmallBuilding className="w-2 h-2 text-gray-600" />

                  <h2 className="text-sm font-medium text-main-light-color">
                    필수사항
                  </h2>
                </div>
                <h3 className="font-semibold text-[#404251]">
                  이용약관에 동의해 주세요.
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  선택 항목에 동의하지 않으셔도
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  회원가입 및 일반적인 서비스는 이용 가능합니다.
                </p>
              </div>

              <div className="bg-white px-4 ">
                {/* Select All Checkbox */}
                <div className="border-b-2 py-5 border-grey-border">
                  <CustomCheckbox
                    id="all"
                    label="전체 동의하기"
                    checked={Object.values(checkedItems).every(Boolean)}
                    onCheckedChange={handleAllCheck}
                    size="18"
                  />
                </div>

                {/* Individual Terms */}
                <div className="flex flex-col pt-5 pb-5 gap-4 border-b-2 border-grey-border">
                  {termsData.map((term) => (
                    <CustomCheckbox
                      key={term.id}
                      id={term.id}
                      label={term.label}
                      checked={checkedItems[term.id]}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(term.id, checked)
                      }
                      next={true}
                      size="18"
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-4 pt-5">
                  {termsData2.map((term) => (
                    <CustomCheckbox
                      key={term.id}
                      id={term.id}
                      label={term.label}
                      checked={checkedItems[term.id]}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(term.id, checked)
                      }
                      next={true}
                      size="18"
                    />
                  ))}
                </div>
              </div>
            </main>
            <div className="!h-[106px]"></div>
          </div>
          <div className="bg-white w-full px-4 absolute bottom-0 !z-50 pb-[40px]">
            <CustomButton
              label={"다음"}
              backgroundColor={
                allChecked ? "bg-main-color" : "bg-grey-disabled"
              }
              textStyle={"text-white font-PretendardBold text-[16px]"}
              height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
              onPress={() => {
                router.push("/join-membership");
              }}
              disabled={!allChecked}
            />
          </div>
        </div>
      }
    />
  );
}
