import React from "react";

const RequestTaxInvoice = () => {
  return (
    <div className="text-[12px] xs:text-[13px] font-pretendardRegular space-y-[4px]">
      <div className="flex items-center gap-[20px]">
        <p className="text-grey-font-light w-[60px]">발행요청일</p>
        <p className="text-grey-font">2024.12.01</p>
      </div>
      <div className="flex items-center gap-[20px]">
        <p className="text-grey-font-light w-[60px]">공급가액</p>
        <p className="text-grey-font">600,000원</p>
      </div>
      <div className="flex items-center gap-[20px]">
        <p className="text-grey-font-light w-[60px]">세액</p>
        <p className="text-grey-font">60,00원</p>
      </div>
      <div className="flex items-center gap-[20px]">
        <p className="text-grey-font-light w-[60px]">합계</p>
        <p className="text-grey-font"> 660,000원</p>
      </div>
      <div className="flex items-center gap-[20px]">
        <p className="text-grey-font-light w-[60px]">이메일</p>
        <p className="text-grey-font">abc123@aaa.com</p>
      </div>
    </div>
  );
};

export default RequestTaxInvoice;
