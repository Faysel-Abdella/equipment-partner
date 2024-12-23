import React from "react";
import CustomTab from "../Tabs/Tab";
import { CustomButton } from "../button/Button";
import { NextIcon } from "../icons";
import DatePicker from "../datePicker/DatePicker";
import CustomSelect from "../Select/Select";
import Input from "../input/Input";
import { FormCheck } from "../CheckBox/form-checkbox";
import CameraInput from "../cameraInput/CameraInput";
import CustomTextArea from "../input/TextArea";
import { useRouter } from "next/navigation";

type RegisterOrderFormProps = {
  onClick1: () => void;
  onClick2: () => void;
  onClick3: () => void;
  onClick4: () => void;
  onClick5: () => void;
  onTabChange?: () => void;
};
type RegisterOrderForm1Props = {
  onClick1: () => void;
  onClick2: () => void;
  onClick3: () => void;
  onClick4: () => void;
};

type RegisterOrderForm2Props = {
  onClick4: () => void;
  onClick5: () => void;
};

type RegisterOrderForm3Props = {
  onClick4: () => void;
};

export const RegisterOrderForm: React.FC<RegisterOrderFormProps> = ({
  onClick1,
  onClick2,
  onClick3,
  onClick4,
  onClick5,
  onTabChange,
}) => {
  const items = [
    {
      title: "굴착기",
      content: (
        <Form1
          onClick1={onClick1}
          onClick2={onClick2}
          onClick3={onClick3}
          onClick4={onClick4}
        />
      ),
    },
    {
      title: "지게차",
      content: <Form2 onClick5={onClick5} onClick4={onClick4} />,
    },
    { title: "크레인", content: <div></div> },
    { title: "덤프", content: <Form3 onClick4={onClick4} /> },
    { title: "로더・불도저", content: <div></div> },
  ];
  return (
    <div className="w-full h-full ">
      <CustomTab
        items={items}
        borderColor="border-grey-font border-x-1"
        compactTab={true}
        onTabChange={onTabChange}
        selectedBorderColor={"border-t-[1px] border-grey-border"}
      />
    </div>
  );
};

const Form1: React.FC<RegisterOrderForm1Props> = ({
  onClick1,
  onClick2,
  onClick3,
  onClick4,
}) => {
  const router = useRouter();
  return (
    <div className="w-full h-full pt-5">
      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          장비
        </label>
        <div className="flex gap-x-2 !w-[147px] items-center">
          <span className="font-pretendardRegular text-[16px] text-grey-font">
            굴착기
          </span>
          <NextIcon fillColor="#404251" className="!w-[14px] !h-[14px]" />
          <div className="w-[75px] h-[42px]">
            <CustomButton
              label={"장비 선택"}
              backgroundColor={"bg-main-color bg-opacity-10"}
              textStyle={"font-PretendardBold text-[13px] text-main-color"}
              height="!h-[42px] !min-h-[42px]"
              onPress={onClick1}
              borderRadius="!rounded-[6px]"
              />
          </div>
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className="px-4">
        <DatePicker
          type={""}
          placeholder={"시작일"}
          label={"작업일"}
          height="!h-[44px]"
        />
        <div className="flex w-full pt-[10px] gap-x-[10px] !h-[44px] !max-h-[44px] ">
          <CustomSelect
            items={[
              { key: "작업 기간", label: "작업 기간" },
              { key: "작업 기간", label: "작업 기간" },
              { key: "작업 기간", label: "작업 기간" },
            ]}
            placeholder="작업 기간"
            width="w-full"
            height="!h-[44px]"
          />

          <CustomSelect
            items={[{ key: "단위 선택", label: "단위 선택" }]}
            placeholder="단위 선택"
            width="w-full"
            height="!h-[44px]"
            onPresstoNavigate={onClick2}
          />
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          작업 위치
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <div className="flex gap-x-[10px] items-center">
            <CustomSelect
              items={[
                { key: "광역시도", label: "광역시도" },
                { key: "광역시도", label: "광역시도" },
                { key: "광역시도", label: "광역시도" },
              ]}
              placeholder="광역시도"
              width="w-full"
              height="!h-[44px]"
              onPresstoNavigate={onClick3}
            />
            <CustomSelect
              items={[
                { key: "시군구", label: "시군구" },
                { key: "시군구", label: "시군구" },
                { key: "시군구", label: "시군구" },
              ]}
              placeholder="시군구"
              width="w-full"
              height="!h-[44px]"
            />
            <CustomSelect
              items={[
                { key: "읍면동", label: "읍면동" },
                { key: "읍면동", label: "읍면동" },
                { key: "읍면동", label: "읍면동" },
              ]}
              placeholder="읍면동"
              height="!h-[44px]"
              width="w-full"
            />
          </div>
          <Input type={""} placeholder={"상세 주소 입력"} height=" !h-[42px]" />
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          구분
        </label>
        <div className="flex flex-col gap-y-[20px]">
          <div className="flex items-center gap-x-2 !w-[135px] !max-w-[135px]">
            <FormCheck
              width="!w-[18px]"
              height="!h-[18px]"
              onChange={() => {}}
              backgroundColor={""}
              label={""}
            />
            <span className="font-pretendardRegular text-[16px] text-grey-font leading-[22px]">
              임대 (장비+기사)
            </span>
          </div>

          <div className="flex items-center gap-x-2 !w-[135px] !max-w-[135px]">
            <FormCheck
              width="!w-[18px]"
              height="!h-[18px]"
              onChange={() => {}}
              backgroundColor={""}
              label={""}
            />
            <span className="font-pretendardRegular text-[16px] text-grey-font">
              스페어 (기사)
            </span>
          </div>

          <div className="flex items-center gap-x-2 !w-[135px] !max-w-[135px]">
            <FormCheck
              width="!w-[18px]"
              height="!h-[18px]"
              onChange={() => {}}
              backgroundColor={""}
              label={""}
            />
            <span className="font-pretendardRegular text-[16px] text-grey-font">
              렌탈 (장비)
            </span>
          </div>
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
              <Input
                type={""}
                placeholder={""}
                value={"60"}
                width="w-full"
                height=" !h-[42px]"
              />

              <div className="!w-[46px] !min-w-[46px] flex justify-center items-center font-pretendardRegular text-grey-font text-[13px] !leading-[18px]">
                <p>만원 / 일</p>{" "}
              </div>
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

          <div className="flex items-center gap-x-2 !w-[135px] !max-w-[135px]">
            <FormCheck
              width="!w-[18px]"
              height="!h-[18px]"
              onChange={() => {}}
              backgroundColor={""}
              label={""}
            />
            <span className="font-pretendardRegular text-[13px] text-grey-font">
              제안 받기
            </span>
          </div>
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className="px-4">
        <CustomSelect
          items={[
            { key: "선택", label: "선택" },
            { key: "선택", label: "선택" },
            { key: "기타", label: "기타" },
          ]}
          placeholder="선택"
          width="w-full"
          label="결제 일정"
          height="!h-[44px]"
        />
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          현장사진 (선택)
        </label>
        <div className="flex flex-col gap-y-[20px]">
          <CameraInput />
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className="px-4">
        <CustomTextArea
          placeholder={
            "필요장비대수, 작업내용, 장비진입로 확보여부, 기사 숙식제공 여부 (월대) 등 구체적인 요청사항 및 현장조건에 대하여 자세하게 적어주시면 상호 정확한 견적 및 소통에 도움이 됩니다.  "
          }
          label="우대사항 및 요청사항 (선택)"
        />
      </div>

      <div className="flex gap-x-[10px] px-4 pt-[40px] !h-[54px] mb-10">
        <CustomButton
          label={"닫기"}
          backgroundColor={"bg-white border-[1px] border-main-color"}
          textStyle={"text-main-color text-[16px] font-PretendardBold"}
          height="!h-[54px] !min-h-[54px]"
          onPress={() => {
            router.back();
          }}
        />
        <CustomButton
          label={"등록"}
          backgroundColor={"bg-main-color"}
          textStyle={"text-white text-[16px] font-PretendardBold"}
          height="!h-[54px] !min-h-[54px]"
          onPress={onClick4}
        />
      </div>
      <div className="!h-10"></div>
    </div>
  );
};

const Form2: React.FC<RegisterOrderForm2Props> = ({ onClick5, onClick4 }) => {
  const router = useRouter();
  return (
    <div className="w-full h-full pt-5">
      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          장비
        </label>
        <div className="flex gap-x-2 !w-[147px] items-center">
          <span className="font-pretendardRegular text-[16px] text-grey-font">
            지게차
          </span>
          <NextIcon fillColor="#404251" className="!w-[14px] !h-[14px]" />
          <div className="w-[75px] h-[42px]">
            <CustomButton
              label={"장비 선택"}
              backgroundColor={"bg-main-color bg-opacity-10"}
              textStyle={"font-PretendardBold text-[13px] text-main-color"}
              height="!h-[42px] !min-h-[42px]"
              borderRadius="!rounded-[6px]"
              />
          </div>
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className="px-4">
        <DatePicker
          type={""}
          placeholder={"시작일"}
          label={"작업일"}
          height="!h-[44px]"
        />
        <div className="flex w-full pt-[10px] gap-x-[10px]">
          <CustomSelect
            items={[
              { key: "작업 기간", label: "작업 기간" },
              { key: "작업 기간", label: "작업 기간" },
              { key: "작업 기간", label: "작업 기간" },
            ]}
            placeholder="작업 기간"
            width="w-full"
            height="!h-[44px]"
          />

          <CustomSelect
            items={[
              { key: "단위 선택", label: "단위 선택" },
              { key: "단위 선택", label: "단위 선택" },
              { key: "단위 선택", label: "단위 선택" },
            ]}
            placeholder="단위 선택"
            width="w-full"
            height="!h-[44px]"
            onPresstoNavigate={onClick5}
          />
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          작업 위치
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <div className="flex gap-x-[10px] items-center">
            <CustomSelect
              items={[
                { key: "광역시도", label: "광역시도" },
                { key: "광역시도", label: "광역시도" },
                { key: "광역시도", label: "광역시도" },
              ]}
              placeholder="광역시도"
              width="w-full"
              height="!h-[44px]"
            />
            <CustomSelect
              items={[
                { key: "시군구", label: "시군구" },
                { key: "시군구", label: "시군구" },
                { key: "시군구", label: "시군구" },
              ]}
              placeholder="시군구"
              width="w-full"
              height="!h-[44px]"
            />
            <CustomSelect
              items={[
                { key: "읍면동", label: "읍면동" },
                { key: "읍면동", label: "읍면동" },
                { key: "읍면동", label: "읍면동" },
              ]}
              placeholder="읍면동"
              width="w-full"
              height="!h-[44px]"
            />
          </div>
          <Input type={""} placeholder={"상세 주소 입력"} />
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          구분
        </label>
        <div className="flex flex-col gap-y-[20px]">
          <div className="flex items-center gap-x-2 !w-[135px] !max-w-[135px]">
            <FormCheck
              width="!w-[18px]"
              height="!h-[18px]"
              onChange={() => {}}
              backgroundColor={""}
              label={""}
            />
            <span className="font-pretendardRegular text-[16px] text-grey-font leading-[22px]">
              임대 (장비+기사)
            </span>
          </div>

          <div className="flex items-center gap-x-2 !w-[135px] !max-w-[135px]">
            <FormCheck
              width="!w-[18px]"
              height="!h-[18px]"
              onChange={() => {}}
              backgroundColor={""}
              label={""}
            />
            <span className="font-pretendardRegular text-[16px] text-grey-font">
              스페어 (기사)
            </span>
          </div>

          <div className="flex items-center gap-x-2 !w-[135px] !max-w-[135px]">
            <FormCheck
              width="!w-[18px]"
              height="!h-[18px]"
              onChange={() => {}}
              backgroundColor={""}
              label={""}
            />
            <span className="font-pretendardRegular text-[16px] text-grey-font">
              렌탈 (장비)
            </span>
          </div>
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
              <Input type={""} placeholder={""} value={"60"} width="!w-full" />

              <div className="!w-[46px] !min-w-[46px] flex justify-center items-center font-pretendardRegular text-grey-font text-[13px] !leading-[18px]">
                <p>만원 / 일</p>{" "}
              </div>
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

          <div className="flex items-center gap-x-2 !w-[135px] !max-w-[135px]">
            <FormCheck
              width="!w-[18px]"
              height="!h-[18px]"
              onChange={() => {}}
              backgroundColor={""}
              label={""}
            />
            <span className="font-pretendardRegular text-[13px] text-grey-font">
              제안 받기
            </span>
          </div>
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className="px-4">
        <CustomSelect
          items={[
            { key: "선택", label: "선택" },
            { key: "선택", label: "선택" },
            { key: "기타", label: "기타" },
          ]}
          placeholder="선택"
          width="w-full"
          label="결제 일정"
          height="!h-[44px]"
        />
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          현장사진 (선택)
        </label>
        <div className="flex flex-col gap-y-[20px]">
          <CameraInput />
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className="px-4">
        <CustomTextArea
          placeholder={
            "필요장비대수, 작업내용, 장비진입로 확보여부, 기사 숙식제공 여부 (월대) 등 구체적인 요청사항 및 현장조건에 대하여 자세하게 적어주시면 상호 정확한 견적 및 소통에 도움이 됩니다. "
          }
          label="우대사항 및 요청사항 (선택)"
        />
      </div>

      <div className="flex gap-x-[10px] px-4 pt-[40px] !h-[106px] !mb-10">
        <CustomButton
          label={"닫기"}
          backgroundColor={"bg-white border-[1px] border-main-color"}
          textStyle={"text-main-color text-[16px] font-PretendardBold"}
          height="!h-[54px] !min-h-[54px]"
          onPress={() => {
            router.back();
          }}
        />
        <CustomButton
          label={"등록"}
          backgroundColor={"bg-main-color"}
          textStyle={"text-white text-[16px] font-PretendardBold"}
          height="!h-[54px] !min-h-[54px]"
          onPress={onClick4}
        />
      </div>
    </div>
  );
};

const Form3: React.FC<RegisterOrderForm3Props> = ({ onClick4 }) => {
  const router = useRouter();
  return (
    <div className="w-full h-full pt-5">
      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          장비
        </label>
        <div className="flex gap-x-2 !w-[147px] items-center">
          <span className="font-pretendardRegular text-[16px] text-grey-font">
            덤프
          </span>
          <NextIcon fillColor="#404251" className="!w-[14px] !h-[14px]" />
          <div className="w-[75px] h-[42px]">
            <CustomButton
              label={"장비 선택"}
              backgroundColor={"bg-main-color bg-opacity-10"}
              textStyle={"font-PretendardBold text-[13px] text-main-color"}
              height="!h-[42px] !min-h-[42px]"
              borderRadius="!rounded-[6px]"
            />
          </div>
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className="px-4">
        <DatePicker
          type={""}
          placeholder={"시작일"}
          label={"작업일"}
          height="!h-[44px]"
        />
        <div className="flex w-full pt-[10px] gap-x-[10px]">
          <CustomSelect
            items={[
              { key: "작업 기간", label: "작업 기간" },
              { key: "작업 기간", label: "작업 기간" },
              { key: "작업 기간", label: "작업 기간" },
            ]}
            placeholder="작업 기간"
            width="w-full"
            height="!h-[44px]"
          />
          <CustomSelect
            items={[
              { key: "단위 선택", label: "단위 선택" },
              { key: "단위 선택", label: "단위 선택" },
              { key: "단위 선택", label: "단위 선택" },
            ]}
            placeholder="단위 선택"
            width="w-full"
            height="!h-[44px]"
          />
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          상차지
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <div className="flex gap-x-[10px] items-center">
            <CustomSelect
              items={[
                { key: "광역시도", label: "광역시도" },
                { key: "광역시도", label: "광역시도" },
                { key: "광역시도", label: "광역시도" },
              ]}
              placeholder="광역시도"
              height="!h-[44px]"
              width="w-full"
            />
            <CustomSelect
              items={[
                { key: "시군구", label: "시군구" },
                { key: "시군구", label: "시군구" },
                { key: "시군구", label: "시군구" },
              ]}
              placeholder="시군구"
              height="!h-[44px]"
              width="w-full"
            />
            <CustomSelect
              items={[
                { key: "읍면동", label: "읍면동" },
                { key: "읍면동", label: "읍면동" },
                { key: "읍면동", label: "읍면동" },
              ]}
              placeholder="읍면동"
              height="!h-[44px]"
              width="w-full"
            />
          </div>
          <Input type={""} placeholder={"상세 주소 입력"} />
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          상차지
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <div className="flex gap-x-[10px] items-center">
            <CustomSelect
              items={[
                { key: "광역시도", label: "광역시도" },
                { key: "광역시도", label: "광역시도" },
                { key: "광역시도", label: "광역시도" },
              ]}
              placeholder="광역시도"
              height="!h-[44px]"
              width="w-full"
            />
            <CustomSelect
              items={[
                { key: "시군구", label: "시군구" },
                { key: "시군구", label: "시군구" },
                { key: "시군구", label: "시군구" },
              ]}
              placeholder="시군구"
              height="!h-[44px]"
              width="w-full"
            />
            <CustomSelect
              items={[
                { key: "읍면동", label: "읍면동" },
                { key: "읍면동", label: "읍면동" },
                { key: "읍면동", label: "읍면동" },
              ]}
              placeholder="읍면동"
              height="!h-[44px]"
              width="w-full"
            />
          </div>
          <Input type={""} placeholder={"상세 주소 입력"} />
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          희망 운반 횟수 (몇 탕)
        </label>
        <div className="flex gap-x-[10px] items-center">
          <span className="font-pretendardRegular text-grey-font text-[13px]">
            하루
          </span>
          <Input
            type={""}
            placeholder={""}
            width="!w-[60px]"
            height=" !h-[42px]"
          />
          <span className="font-pretendardRegular text-grey-font text-[13px]">
            회 운반
          </span>
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className="px-4">
        <CustomTextArea
          placeholder={"운반물의 종류와 수분 포함 여부 등을 적어주세요 "}
          label="운반물 종류"
        />
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          희망비용
        </label>
        <div className="flex flex-col gap-y-[20px]">
          <div className="flex flex-col w-full gap-y-[10px]">
            <div className="flex w-full gap-x-[8px] items-center">
              <Input
                type={""}
                placeholder={""}
                value={"60"}
                width="!w-full"
                height=" !h-[42px]"
              />

              <div className="!w-[46px] !min-w-[46px] flex justify-center items-center font-pretendardRegular text-grey-font text-[13px] !leading-[18px]">
                <p>만원 / 일</p>{" "}
              </div>
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

          <div className="flex items-center gap-x-2 !w-[133px] !max-w-[133px]">
            <FormCheck
              width="!w-[18px]"
              height="!h-[18px]"
              onChange={() => {}}
              backgroundColor={""}
              label={""}
            />
            <span className="font-pretendardRegular text-[13px] text-grey-font">
              렌탈 (장비)
            </span>
          </div>
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className="px-4">
        <CustomSelect
          items={[
            { key: "선택", label: "선택" },
            { key: "선택", label: "선택" },
            { key: "기타", label: "기타" },
          ]}
          placeholder="선택"
          width="w-full"
          label="결제 일정"
          height="!h-[44px]"
        />
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          현장사진 (선택)
        </label>
        <div className="flex flex-col gap-y-[20px]">
          <CameraInput />
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className="px-4">
        <CustomTextArea
          placeholder={
            "필요장비대수, 작업내용, 장비진입로 확보여부, 기사 숙식제공 여부 (월대) 등 구체적인 요청사항 및 현장조건에 대하여 자세하게 적어주시면 상호 정확한 견적 및 소통에 도움이 됩니다. "
          }
          label="우대사항 및 요청사항 (선택)"
        />
      </div>

      <div className="flex gap-x-[10px] px-4 pt-[40px] !h-[106px] !mb-10">
        <CustomButton
          label={"닫기"}
          backgroundColor={"bg-white border-[1px] border-main-color"}
          textStyle={"text-main-color text-[16px] font-PretendardBold"}
          height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
          onPress={() => {
            router.back();
          }}
        />
        <CustomButton
          label={"등록"}
          backgroundColor={"bg-main-color"}
          textStyle={"text-white text-[16px] font-PretendardBold"}
          height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
          onPress={onClick4}
        />
      </div>
    </div>
  );
};
