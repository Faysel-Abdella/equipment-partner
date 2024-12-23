'use client';
import CustomModalContent from '@/components/modals/CustomModal';
import CustomModal from './Modal';
type InvalidBusinessModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
export default function InvalidBusinessModal({
  isOpen,
  setIsOpen,
}: InvalidBusinessModalProps) {
 
  const handlePrimaryButton = () => {
    setIsOpen(false);
  };

  return (
    <CustomModal
      isOpen={isOpen}
      content={
        <CustomModalContent
          mainContent={
            <div className='flex flex-col items-center'>
              <h2 className='text-grey-font font-PretendardBold'>
                유효하지 않은 사업자입니다
              </h2>
            </div>
          }
          primaryButtonText='확인'
          primaryButtonColor='main-color'
          primaryButtonOnClick={handlePrimaryButton}
        />
      }
    />
  );
}
