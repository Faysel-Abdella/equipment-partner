import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const GatherEquipment = () => {
  const router = useRouter();
  return (
    <div className="relative mt-[50px]">
      {/* Text Container */}
      <button
        className="space-y-[4px] w-full bg-custom-gradient rounded-[12px] relative py-[20px] pl-[20px] text-start"
        onClick={() => {
          router.push("/ordering/register-order");
        }}
      >
        <p className="text-[20px] text-white font-PretendardBold">
          장비 모집하기
        </p>
        <p className="text-[16px] text-white font-pretendardRegular">
          필요하신 장비를 모집해 보세요
        </p>
      </button>

      {/* Image */}
      <div className="absolute top-[36px] right-[14px] -translate-y-1/2">
        <Image
          src={`/assets/images/equipment.svg`}
          alt="equipment"
          width={106}
          height={112}
        />
      </div>
    </div>
  );
};

export default GatherEquipment;
