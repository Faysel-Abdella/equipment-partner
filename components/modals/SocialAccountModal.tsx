'use client';
import React, { useState } from 'react';
import CustomModal from './Modal';
import CustomModalContent from '@/components/modals/CustomModal';
import { BlackAppleIcon, GreenNIcon, YelloMessageIcon } from '../icons';
import { RingCheckBox } from '../CheckBox/RingCheckBox';

// Main Component
interface SocialAccountModalProps {
  isOpen: boolean,
  onConfirm: (account: string) => void;
}

export default function SocialAccountModal({isOpen, onConfirm }: SocialAccountModalProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (account: string) => {
    setSelected(account);
  };

  const handlePrimaryButton = () => {
    if (selected) {
      onConfirm(selected);
    }
  };
  
  return (
    <CustomModal
      isOpen={isOpen}
      content={
        <CustomModalContent
          mainContent={
            <div className="flex flex-col items-center">
              {/* Title */}
              <h2 className="text-center text-[16px] font-PretendardBold text-grey-font mb-[20px]  leading-relaxed">
                소셜 계정 연동이 필요해요 <br /> 연동할 계정을 선택해주세요
              </h2>

              {/* Social Icons with RingCheckBox */}
              <div className="flex justify-center gap-[20px] p-[4px]">
                <RingCheckBox
                  name="kakao"
                  icon={<YelloMessageIcon/>}
                  backgroundColor="bg-yellow-300"
                  isSelected={selected === 'kakao'}
                  onClick={() => handleSelect('kakao')}
                />
                <RingCheckBox
                  name="naver"
                  icon={<GreenNIcon/>}
                  backgroundColor="bg-green-500"
                  isSelected={selected === 'naver'}
                  onClick={() => handleSelect('naver')}
                />
                <RingCheckBox
                  name="apple"
                  icon={<BlackAppleIcon/>}
                  backgroundColor="bg-black "
                  isSelected={selected === 'apple'}
                  onClick={() => handleSelect('apple')}
                />
              </div>
            </div>
          }
          primaryButtonText="확인"
          primaryButtonColor={selected ? "main-color" : "grey-disabled"}
          primaryButtonOnClick={handlePrimaryButton}
          // secondaryButtonText="닫기"
          // secondaryButtonColor="grey-light"
          // secondaryButtonOnClick={handleSecondaryButton}
        />
      }
    />
  );
}

