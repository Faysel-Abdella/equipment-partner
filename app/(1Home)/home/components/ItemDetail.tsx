"use client";
import React from "react";
import Image from "next/image";

const ItemDetail = () => {
  return (
    <div className="w-full relative scrollbar-hide">
      <div className="h-full ">
        {/* Image */}
        <Image
          src="/assets/images/detailImg.png"
          alt="Bulldozer"
          width={390}
          height={292.5}
          className="w-full object-cover"
        />

        <div className="space-y-[20px] mt-[20px]">
          <div className="px-[16px] space-y-[10px]">
            <p className="w-358px h-34px text-[20px] xs:text-[24px] font-PretendardBold text-grey-font">
              사업자명 또는 개인 이름
            </p>
            <div className="flex items-center w-[101px] !h-[16px] gap-x-[2px] text-[10px] ">
              <div className="flex ">
                {[...Array(5)].map((_, index) => (
                  <Image
                    key={index}
                    src="/assets/icons/star-filled.svg"
                    alt="star-filled"
                    width={16}
                    height={16}
                  />
                ))}
              </div>
              <p className="text-[10px] font-pretendardRegular text-grey-font-light leading-[16px]">
                (23)
              </p>
            </div>
            <div className=" space-y-[4px] text-[13px] text-grey-font-light font-pretendardRegular">
              <div className="flex gap-[4px]">
                <Image
                  src="/assets/icons/ic1.svg"
                  alt="icon"
                  width={15}
                  height={15}
                />
                <p> 일 60만원</p>
                <Image
                  src="/assets/icons/dot.svg"
                  alt="icon"
                  width={4}
                  height={18}
                />
                <p>월 1,200만원</p>
              </div>
              <div className="flex gap-[4px] ">
                <Image
                  src="/assets/icons/location.svg"
                  alt="location icon"
                  width={15}
                  height={15}
                />
                <p> 경기 수원시 </p>
                <Image
                  src="/assets/icons/dot.svg"
                  alt="icon"
                  width={4}
                  height={18}
                />
                <p>경기 부천시</p>
                <Image
                  src="/assets/icons/dot.svg"
                  alt="icon"
                  width={4}
                  height={18}
                />
                <p>경기 용인시</p>
              </div>
              <div className="flex gap-[4px] ">
                <Image
                  src="/assets/icons/setting.svg"
                  alt="setting icon"
                  width={15}
                  height={15}
                />
                <p> 임대 (장비+기사) </p>
                <Image
                  src="/assets/icons/dot.svg"
                  alt="icon"
                  width={4}
                  height={18}
                />
                <p>스페어 (기사)</p>
                <Image
                  src="/assets/icons/dot.svg"
                  alt="icon"
                  width={4}
                  height={18}
                />
                <p>렌탈(장비)</p>
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-grey-light"></div>

          <div className="space-y-[10px] px-[16px] text-[13px] ">
            <p className="text-[16px] font-PretendardBold text-grey-font">
              보유 장비
            </p>
            <div className="flex  flex-wrap w-[358px] gap-[10px] text-grey-font-light">
              <p className="py-[6px] px-[10px]  border-grey-border border-1 rounded-[4px]">
                굴착기 03W
              </p>
              <p className="py-[6px] px-[10px]  border-grey-border border-1 rounded-[4px]">
                굴착기 06LC
              </p>
              <p className="py-[6px] px-[10px]  border-grey-border border-1 rounded-[4px]">
                지게차 2톤
              </p>
              <p className="py-[6px] px-[10px]  border-grey-border border-1 rounded-[4px]">
                크레인 25톤
              </p>
              <p className="py-[6px] px-[10px]  border-grey-border border-1 rounded-[4px]">
                스키드로더
              </p>
            </div>
          </div>
          <div className="h-[1px] bg-grey-light"></div>
          <div className=" space-y-[10px] px-[16px] text-[13px] ">
            <p className="text-[16px] text-grey-font font-PretendardBold">
              소속 기사
            </p>
            <div className="flex gap-[10px] items-center text-grey-font-light">
              <div className="px-[10px] py-[6px] text-center border-grey-border border-1 rounded-[4px]">
                <p>김** 기사님</p>
                <p>15년차</p>
              </div>
              <div className="px-[10px] py-[6px] text-center border-grey-border border-1 rounded-[4px]">
                <p>이** 기사님</p>
                <p>13년차</p>
              </div>
              <div className="px-[10px] py-[6px] text-center border-grey-border border-1 rounded-[4px]">
                <p>박** 기사님</p>
                <p>10년차</p>
              </div>
            </div>
          </div>
          <div className="h-[5px] bg-grey-light"></div>
        </div>
      </div>
      {/* <Reviews /> */}
    </div>
  );
};

export default ItemDetail;
