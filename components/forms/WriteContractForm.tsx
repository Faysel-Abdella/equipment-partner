import React from "react";
import { CustomButton } from "../button/Button";
import DatePicker from "../datePicker/DatePicker";
import CustomSelect from "../Select/Select";
import Input from "../input/Input";
import CustomTextArea from "../input/TextArea";
import { useRouter } from "next/navigation";
interface WriteContractFormProps {
  onClick1: () => void;
}

export const WriteContractForm: React.FC<WriteContractFormProps> = ({
  onClick1,
}) => {
  const router = useRouter();
  return (
    <div className="w-full h-full pt-5">
      <div className="px-4">
        <Input type={""} placeholder={"작업명"} label={"작업명"} />
      </div>
      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          작업 위치
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <div className="flex gap-x-[10px] items-center">
            <div className="w-full !h-[42px]">
              <Input type={""} placeholder={"주소 입력"} disabled={true} />
            </div>{" "}
            <CustomButton
              label={"검색"}
              backgroundColor={"bg-[#e9eefe]"}
              textStyle={"font-PretendardBold text-[13px] text-main-color"}
              width="!w-[73px]"
              height="!h-[42px]"
            />
          </div>
          <Input type={""} placeholder={"상세 주소 입력"} />
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          장비
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <CustomButton
            label={"장비 선택"}
            backgroundColor={"bg-[#e9eefe]"}
            textStyle={"font-PretendardBold text-[13px] text-main-color"}
            width="!w-[73px]"
            height="!h-[42px]"
            onPress={onClick1}
          />
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className="px-4">
        <DatePicker type={""} placeholder={"시작일"} label={"시작일"} />
        <div className="flex w-full pt-[10px] gap-x-[10px]">
          <CustomSelect
            items={[
              { key: "작업 기간", label: "작업 기간" },
              { key: "작업 기간", label: "작업 기간" },
              { key: "작업 기간", label: "작업 기간" },
            ]}
            placeholder="작업 기간"
            width="w-full"
          />
          <CustomSelect
            items={[
              { key: "단위 선택", label: "단위 선택" },
              { key: "단위 선택", label: "단위 선택" },
              { key: "단위 선택", label: "단위 선택" },
            ]}
            placeholder="단위 선택"
            width="w-full"
          />
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          희망비용
        </label>
        <div className="flex flex-col gap-y-[20px]">
          <div className="flex flex-col w-full gap-y-[10px]">
            <div className="flex w-full gap-x-[8px] items-center">
              <Input type={""} placeholder={""} value={"60"} width="flex-grow" />
              <span className="!w-[46px] font-pretendardRegular text-grey-font text-[13px]">
              만원 / 일
              </span>
            </div>
            <div className="flex gap-x-1">
              <span className="font-pretendardRegular text-grey-font-light text-[13px]">
                총 금액 :
              </span>
              <span className="font-pretendardRegular text-grey-font text-[13px]">
                120 만원
              </span>
            </div>
          </div>

          {/* <div className="flex items-center gap-x-2 !w-[132px] !max-w-[132px]">
            <CustomCheck
              width="!w-[18px]"
              height="!h-[18px]"
              onChange={() => {}}
              backgroundColor={""}
              label={""}
            />
            <span className="font-pretendardRegular text-[16px] text-grey-font">
              렌탈 (장비)
            </span>
          </div> */}
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className="px-4">
        <CustomTextArea
          placeholder={"어태치 사용비용, 운송료 등 추가사항을  입력해 주세요"}
          label="추가사항"
        />
      </div>

      <div className="flex gap-x-[10px] px-4 pt-[40px]">
        <CustomButton
          label={"임시저장"}
          backgroundColor={"bg-white border-[1px] border-main-color"}
          textStyle={"text-main-color text-[16px] font-PretendardBold"}
          height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
        />
        <CustomButton
          label={"저장 후 다음"}
          backgroundColor={"bg-main-color"}
          textStyle={"text-white text-[16px] font-PretendardBold"}
          height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
          onPress={() => {
            router.push("/chat/john/confirm-contract");
          }}
        />
      </div>
    </div>
  );
};
