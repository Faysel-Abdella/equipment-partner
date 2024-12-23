import React from "react";

const OrderForm = () => {
  return (
    <div className="text-[13px] font-pretendardRegular text-grey-font-light space-y-[8px]">
      <div className="flex items-center gap-[8px]">
        <p className="text-[16px] font-PretendardBold text-grey-font">
          굴착기 미니 017
        </p>
        <p className="text-[13px] font-pretendardRegular text-grey-font-light">
          브레이크, 크리샤
        </p>
      </div>
      <p>2024-12-01 (오후 반일)</p>
      <p>60만원</p>
      <p>임대 (장비+기사)</p>
    </div>
  );
};

export default OrderForm;
