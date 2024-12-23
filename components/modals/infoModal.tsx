'use client';
import React, { useState } from 'react';
import CustomModalContent from '@/components/modals/CustomModal';
import CustomModal from './Modal';

export default function InfoModal() {
  const [isModalOpen, setModalOpen] = useState(true);

  const handlePrimaryButtonClick = () => {
    console.log('Primary button clicked!');
  };
  
  const handleSecondaryButtonClick = () => {
    console.log('Secondary button clicked!');
    setModalOpen(false)
  };

  return (
    <CustomModal
      isOpen={isModalOpen}
      content={
        <CustomModalContent
          mainContent={
            <div className='text-center text-gray-800'>
              <h3 className='font-PretendardBold text-lg mb-2'>회원 탈퇴</h3>
              <p>
                <span className='text-red-500'>계정 정보는 복구가 불가</span>
                하며 7일 이후 재가입이 가능합니다.
              </p>
              <p className='mt-2'>
                작성한 리뷰는 삭제되지 않습니다. 다시 한 번 확인해주세요.
              </p>
            </div>
          }
          primaryButtonText='탈퇴하기'
          primaryButtonColor='main-color'
          primaryButtonOnClick={handlePrimaryButtonClick}
          secondaryButtonText='취소'
          secondaryButtonColor='grey-light'
          secondaryButtonOnClick={handleSecondaryButtonClick}
        />
      }
    />
  );
}
