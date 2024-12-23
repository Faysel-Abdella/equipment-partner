import React, { useState, useEffect } from "react";
import Input from "../input/Input";
import CustomTextArea from "../input/TextArea";

interface OneToOneInquiryFormProps {
  isFormFilled: boolean;
  setFormFilled: (filled: boolean) => void;
}

interface FormValues {
  title: string;
  content: string;
  email: string;
}

export default function OneToOneInquiryForm({
  setFormFilled,
}: OneToOneInquiryFormProps) {
  const [formValues, setFormValues] = useState<FormValues>({
    title: "",
    content: "",
    email: "",
  });

  const handleChange = (field: keyof FormValues, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    const allFieldsFilled = Object.values(formValues).every(
      (value) => value.trim() !== ""
    );
    setFormFilled(allFieldsFilled);
  }, [formValues, setFormFilled]);

  return (
    <div className="w-full h-full pt-5 flex flex-col gap-y-[20px]">
      <div className="flex flex-col gap-y-[8px] px-4">
        <label className="text-grey-font text-[16px] font-PretendardBold">
          제목<span className="text-purple-color">*</span>
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <Input
            type="text"
            placeholder="홍길동"
            value={formValues.title}
            onValueChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("title", e.target.value)
            }
          />
        </div>
      </div>

      {/* Content Field */}
      <div className="flex flex-col gap-y-[8px] px-4">
        <label className="text-grey-font text-[16px] font-PretendardBold">
          문의 내용<span className="text-purple-color">*</span>
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <CustomTextArea
            placeholder="내용 입력"
            height="!h-[165px]"
            value={formValues.content}
            onChange={(e) => handleChange("content", e.target.value)}
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-y-[8px] px-4">
        <label className="text-grey-font text-[16px] font-PretendardBold">
          이메일 주소<span className="text-purple-color">*</span>
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <Input
            type=""
            placeholder="이메일 주소 입력"
            value={formValues.email}
            onValueChange={(e) => {
              setFormValues({ ...formValues, email: e.target.value });
              console.log(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
