import React from "react";

const NoReport = () => {
  return (
    <div className="px-[16px]">
      <p className="text-[16px] font-PretendardBold text-grey-font">
        작업일보 (작업확인서)
      </p>
      <div className="h-[54px] py-5 flex items-center justify-center gap-[10px] text-grey-font-light text-[13px] font-pretendardRegular">
        <p>작업일보 내역이 없습니다</p>
      </div>
    </div>
  );
};

export default NoReport;
